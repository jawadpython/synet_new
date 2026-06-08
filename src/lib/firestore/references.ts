import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import type { CounterType } from "./types";

const PREFIX: Record<CounterType, string> = {
  registration: "INS",
  serviceRequest: "DEV",
  lead: "LED",
  company: "ENT",
};

function initShards(): Record<string, number> {
  const shards: Record<string, number> = {};
  for (let i = 0; i < 10; i++) shards[`shard${i}`] = 0;
  return shards;
}

export async function nextReference(type: CounterType): Promise<string> {
  const db = getAdminFirestore();
  const year = new Date().getFullYear();
  const counterId = `${year}_${type}`;
  const counterRef = db.collection("counters").doc(counterId);
  const prefix = PREFIX[type];

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(counterRef);
    const shards = snap.exists
      ? { ...initShards(), ...(snap.data()?.shards as Record<string, number>) }
      : initShards();

    const shardKey = `shard${Math.floor(Math.random() * 10)}`;
    shards[shardKey] = (shards[shardKey] ?? 0) + 1;

    const total = Object.values(shards).reduce((sum, n) => sum + n, 0);
    const reference = `${prefix}-${year}-${String(total).padStart(4, "0")}`;

    tx.set(
      counterRef,
      { shards, lastReference: reference, updatedAt: FieldValue.serverTimestamp() },
      { merge: true },
    );

    return reference;
  });
}
