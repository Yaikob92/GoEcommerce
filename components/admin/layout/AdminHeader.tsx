"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const PAGE_TITLES: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/products": "All Products",
  "/admin/products/new": "Add Product",
  "/admin/categories": "All Categories",
  "/admin/categories/new": "Add Category",
  "/admin/orders": "Orders",
  "/admin/customers": "Customers",
  "/admin/profile": "Profile",
};

interface AdminHeaderProps {
  onMenuToggle: () => void;
}

export default function AdminHeader({ onMenuToggle }: AdminHeaderProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  let title = "Admin";
  if (pathname.includes("/products/new")) {
    title = "Add Product";
  } else if (pathname.match(/\/admin\/products\/[^/]+$/)) {
    title = "Edit Product";
  } else if (pathname.includes("/categories/new")) {
    title = "Add Category";
  } else if (pathname.match(/\/admin\/categories\/[^/]+$/)) {
    title = "Edit Category";
  } else if (pathname.match(/\/admin\/orders\/[^/]+$/)) {
    title = "Order Details";
  } else if (pathname.match(/\/admin\/customers\/[^/]+$/)) {
    title = "Customer Profile";
  } else {
    title = PAGE_TITLES[pathname] || "Admin";
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      style={{
        background: "#fff",
        padding: "14px 28px",
        borderBottom: "1px solid #e9ecef",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button
          className="btn d-lg-none"
          onClick={onMenuToggle}
          style={{ padding: "6px 10px", fontSize: 20 }}
        >
          <i className="bi bi-list" />
        </button>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
          {title}
        </h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div ref={notifRef} style={{ position: "relative" }}>
          <button
            className="btn"
            onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false); }}
            style={{
              position: "relative",
              padding: "6px 10px",
              fontSize: 18,
              color: "#64748b",
              borderRadius: 8,
            }}
          >
            <i className="bi bi-bell" />
            <span
              style={{
                position: "absolute",
                top: 4,
                right: 4,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#dc2626",
              }}
            />
          </button>
          {notificationsOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: 8,
                width: 320,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                border: "1px solid #e9ecef",
                zIndex: 200,
              }}
            >
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #e9ecef", fontWeight: 600, fontSize: 14 }}>
                Notifications
              </div>
              <div style={{ padding: "24px 16px", textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
                No new notifications
              </div>
            </div>
          )}
        </div>

        <div ref={profileRef} style={{ position: "relative" }}>
          <button
            className="btn d-flex align-items-center gap-2"
            onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }}
            style={{ padding: "4px 8px", borderRadius: 8 }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "#8c0d4f",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              {user?.first_name?.charAt(0) || "A"}
            </div>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#1e293b" }} className="d-none d-md-inline">
              {user?.first_name}
            </span>
            <i className="bi bi-chevron-down d-none d-md-inline" style={{ fontSize: 12, color: "#94a3b8" }} />
          </button>
          {profileOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: 8,
                width: 200,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                border: "1px solid #e9ecef",
                zIndex: 200,
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1e293b" }}>
                  {user?.first_name} {user?.last_name}
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>{user?.email}</div>
              </div>
              <div style={{ padding: "4px" }}>
                <Link
                  href="/admin/profile"
                  onClick={() => setProfileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    fontSize: 14,
                    color: "#475569",
                    textDecoration: "none",
                    borderRadius: 6,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <i className="bi bi-person" style={{ fontSize: 15 }} />
                  Profile
                </Link>
                <button
                  onClick={() => { logout(); setProfileOpen(false); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    fontSize: 14,
                    color: "#dc2626",
                    background: "none",
                    border: "none",
                    width: "100%",
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <i className="bi bi-box-arrow-right" style={{ fontSize: 15 }} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
