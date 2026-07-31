import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";
import { getLeadDetail, updateLeadRecord } from "@/lib/admin/lead-repository";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Props) {
  try {
    await verifyAdminRequest(request);
    const { id } = await params;
    const item = await getLeadDetail("registrations", id);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}

export async function PATCH(request: Request, { params }: Props) {
  try {
    const user = await verifyAdminRequest(request);
    const { id } = await params;
    const body = await request.json();
    const item = await updateLeadRecord("registrations", id, body, user);
    return Response.json({ item });
  } catch (error) {
    return adminJsonError(error);
  }
}
