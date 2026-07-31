import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { canViewQuotes } from "@/lib/admin/permissions";
import { getLeadDetail, updateLeadRecord } from "@/lib/admin/lead-repository";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewQuotes(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const { id } = await params;
    const item = await getLeadDetail("serviceRequests", id);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function PATCH(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    if (!canViewQuotes(user.role)) {
      return Response.json({ error: "Accès refusé" }, { status: 403 });
    }
    const { id } = await params;
    const body = await request.json();
    const item = await updateLeadRecord("serviceRequests", id, body, user);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}
