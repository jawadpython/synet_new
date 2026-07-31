import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { serializeTimestamp } from "./firestore-helpers";
import type { AdminUser } from "./types";

const LEAD_STATUSES = [
  "new", "in_review", "contacted", "qualified", "enrolled", "converted", "won", "lost", "spam", "archived",
] as const;

export async function updateLeadRecord(
  collection: "registrations" | "serviceRequests" | "leads",
  id: string,
  patch: { status?: string; note?: string },
  actor: AdminUser,
) {
  const db = getAdminFirestore();
  const ref = db.collection(collection).doc(id);
  const snap = await ref.get();
  if (!snap.exists) throw new Error("Not found");

  const now = FieldValue.serverTimestamp();
  const updates: Record<string, unknown> = { updatedAt: now };

  if (patch.status && LEAD_STATUSES.includes(patch.status as (typeof LEAD_STATUSES)[number])) {
    updates.status = patch.status;
    await ref.collection("activity").add({
      action: "status_change",
      actorId: actor.uid,
      actorName: actor.name,
      before: { status: snap.data()?.status },
      after: { status: patch.status },
      createdAt: now,
    });
  }

  if (patch.note?.trim()) {
    await ref.collection("notes").add({
      body: patch.note.trim(),
      authorId: actor.uid,
      authorName: actor.name,
      createdAt: now,
    });
  }

  if (patch.status) {
    await ref.update(updates);
  } else if (patch.note?.trim()) {
    await ref.update({ updatedAt: now });
  }

  const updated = await ref.get();
  return { id, ...updated.data(), createdAt: serializeTimestamp(updated.data()?.createdAt) };
}

export async function getLeadDetail(
  collection: "registrations" | "serviceRequests" | "leads",
  id: string,
) {
  const db = getAdminFirestore();
  const ref = db.collection(collection).doc(id);
  const snap = await ref.get();
  if (!snap.exists) throw new Error("Not found");

  const [notesSnap, activitySnap] = await Promise.all([
    ref.collection("notes").orderBy("createdAt", "desc").limit(20).get(),
    ref.collection("activity").orderBy("createdAt", "desc").limit(20).get(),
  ]);

  const data = snap.data() ?? {};
  return {
    id,
    ...data,
    createdAt: serializeTimestamp(data.createdAt),
    updatedAt: serializeTimestamp(data.updatedAt),
    notes: notesSnap.docs.map((doc) => {
      const note = doc.data();
      return {
        id: doc.id,
        body: String(note.body ?? ""),
        authorName: String(note.authorName ?? ""),
        createdAt: serializeTimestamp(note.createdAt),
      };
    }),
    activity: activitySnap.docs.map((doc) => {
      const entry = doc.data();
      return {
        id: doc.id,
        action: String(entry.action ?? ""),
        actorName: String(entry.actorName ?? ""),
        before: entry.before ?? null,
        after: entry.after ?? null,
        createdAt: serializeTimestamp(entry.createdAt),
      };
    }),
  };
}
