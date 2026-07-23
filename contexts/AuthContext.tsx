"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { apiGet, apiPost } from "@/lib/api";

const AUTH_ROUTES = ["/login", "/register", "/verify-email", "/forgot-password", "/reset-password"];

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  is_verified: boolean;
  phone: string;
  company_name: string;
  address: string;
  profile_picture_url: string;
  preferred_language: string;
  timezone: string;
  email_notifications: boolean;
  sms_notifications: boolean;
  marketing_emails: boolean;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => Promise<{ message: string }>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.includes(pathname);

  const fetchUser = useCallback(async () => {
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
      const res = await fetch(`${API_BASE}/api/auth/me`, { credentials: "include" });
      if (!res.ok) {
        setUser(null);
        return;
      }
      const json = await res.json();
      if (json.success && json.data?.user) {
        setUser(json.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (isAuthPage) {
      setAuthChecked(true);
      return;
    }
    let active = true;
    (async () => {
      await fetchUser();
      if (active) setAuthChecked(true);
    })();
    return () => {
      active = false;
    };
  }, [fetchUser, isAuthPage]);

  const login = async (email: string, password: string) => {
    const res = await apiPost("/api/auth/login", { email, password });
    if (res.success) {
      const meRes = await apiGet<{ user: User }>("/api/auth/me");
      if (meRes.success && meRes.data?.user) {
        setUser(meRes.data.user);
        return meRes.data.user;
      }
    }
    throw { message: res.message || "Login failed.", error: res.error };
  };

  const register = async (data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => {
    const res = await apiPost("/api/auth/register", data);
    return { message: res.message || "Registration successful" };
  };

  const logout = async () => {
    try {
      await apiPost("/api/auth/logout");
    } finally {
      setUser(null);
    }
  };

  const refreshUser = async () => {
    await fetchUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: !authChecked,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
