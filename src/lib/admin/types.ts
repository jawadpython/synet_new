export type AdminRole = "super_admin" | "admin" | "trainer";

export type AdminUser = {
  uid: string;
  email: string;
  name: string;
  role: AdminRole;
  active: boolean;
  locale?: string;
  divisions?: string[];
};

export type AdminStats = {
  registrationsNew: number;
  quotesNew: number;
  messagesNew: number;
  leadsNew: number;
};

export type AdminListItem = {
  id: string;
  reference: string;
  status: string;
  createdAt: string;
  [key: string]: string | number | boolean | null | undefined;
};
