import { verifyAdminRequest, adminJsonError } from "@/lib/admin/server-auth";

export async function GET(request: Request) {
  try {
    const user = await verifyAdminRequest(request);
    return Response.json({ user });
  } catch (error) {
    return adminJsonError(error);
  }
}
