"use client";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { isPublicFirebaseConfigured } from "@/lib/firebase/config";
import { fetchAdminMe } from "@/lib/admin/api-client";
import type { AdminUser } from "@/lib/admin/types";

type AdminAuthContextValue = {
  firebaseUser: User | null;
  adminUser: AdminUser | null;
  loading: boolean;
  profileLoading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshProfile: (forceToken?: boolean) => Promise<boolean>;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const configured = isPublicFirebaseConfigured();
  const [loading, setLoading] = useState(configured);
  const [profileLoading, setProfileLoading] = useState(false);

  const refreshProfile = useCallback(async (forceToken = false): Promise<boolean> => {
    const user = getFirebaseAuth().currentUser;
    if (!user) {
      setAdminUser(null);
      return false;
    }

    setProfileLoading(true);
    try {
      const { user: profile } = await fetchAdminMe(forceToken);
      setAdminUser(profile);
      return true;
    } catch {
      setAdminUser(null);
      return false;
    } finally {
      setProfileLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!configured) return;

    const auth = getFirebaseAuth();
    const unsub = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        await refreshProfile(true);
      } else {
        setAdminUser(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [configured, refreshProfile]);

  const signIn = useCallback(async (email: string, password: string): Promise<boolean> => {
    const auth = getFirebaseAuth();
    await signInWithEmailAndPassword(auth, email.trim(), password);
    return refreshProfile(true);
  }, [refreshProfile]);

  const logout = useCallback(async () => {
    await signOut(getFirebaseAuth());
    setAdminUser(null);
  }, []);

  const value = useMemo(
    () => ({
      firebaseUser,
      adminUser,
      loading,
      profileLoading,
      configured,
      signIn,
      logout,
      refreshProfile,
    }),
    [firebaseUser, adminUser, loading, profileLoading, configured, signIn, logout, refreshProfile],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
