import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canViewMessages } from "@/lib/admin/permissions";
import { getLeadDetail, updateLeadRecord } from "@/lib/admin/lead-repository";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewMessages(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const { id } = await params;
    const item = await getLeadDetail("leads", id);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function PATCH(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewMessages(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const { id } = await params;
    const body = await request.json();
    const item = await updateLeadRecord("leads", id, body, user);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}
