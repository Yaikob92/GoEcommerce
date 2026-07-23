"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

interface NavSubItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  icon: string;
  label: string;
  children?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/admin/dashboard", icon: "bi-speedometer2", label: "Dashboard" },
  {
    href: "/admin/products",
    icon: "bi-box-seam",
    label: "Products",
    children: [
      { href: "/admin/products", label: "All Products" },
      { href: "/admin/products/new", label: "Add Product" },
    ],
  },
  {
    href: "/admin/categories",
    icon: "bi-tags",
    label: "Categories",
    children: [
      { href: "/admin/categories", label: "All Categories" },
      { href: "/admin/categories/new", label: "Add Category" },
    ],
  },
  { href: "/admin/orders", icon: "bi-cart-check", label: "Orders" },
  { href: "/admin/customers", icon: "bi-people", label: "Customers" },
  { href: "/admin/profile", icon: "bi-person-gear", label: "Profile" },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const isActive = (href: string) =>
    href === "/admin/dashboard"
      ? pathname === href
      : pathname.startsWith(href);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {isOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={onClose}
          style={{
            display: "none",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      <aside
        className={`admin-sidebar ${isOpen ? "show" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: 260,
          zIndex: 1000,
          background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          transition: "transform 0.3s",
        }}
      >
        <div
          className="sidebar-header"
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/admin/dashboard" className="sidebar-brand" style={{ textDecoration: "none" }}>
            <i className="bi bi-shop" style={{ fontSize: 24, color: "#8c0d4f" }} />
            <span>Admin Panel</span>
          </Link>
          <button
            className="btn-close btn-close-white d-lg-none"
            onClick={onClose}
            aria-label="Close sidebar"
          />
        </div>

        <nav className="sidebar-nav" style={{ flex: 1, padding: "12px 0" }}>
          <ul className="nav flex-column">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isActive(item.href);
              const expanded = expandedItems[item.label] ?? active;

              return (
                <li className="nav-item" key={item.href}>
                  {hasChildren ? (
                    <>
                      <button
                        className={`nav-link w-100 ${active ? "active" : ""}`}
                        onClick={() => toggleExpand(item.label)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "12px 20px",
                          color: active ? "#fff" : "rgba(255,255,255,0.65)",
                          background: active ? "rgba(140,13,79,0.2)" : "transparent",
                          border: "none",
                          borderLeftWidth: 3,
                          borderLeftStyle: "solid",
                          borderLeftColor: active ? "#8c0d4f" : "transparent",
                          textDecoration: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.2s",
                        }}
                      >
                        <i className={`bi ${item.icon}`} style={{ fontSize: 18, width: 20, textAlign: "center" }} />
                        <span style={{ flex: 1 }}>{item.label}</span>
                        <i
                          className={`bi bi-chevron-${expanded ? "down" : "right"}`}
                          style={{ fontSize: 12, transition: "transform 0.2s" }}
                        />
                      </button>
                      {expanded && (
                        <ul className="nav flex-column" style={{ paddingLeft: 48 }}>
                          {item.children!.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  style={{
                                    display: "block",
                                    padding: "8px 16px",
                                    color: childActive ? "#fff" : "rgba(255,255,255,0.5)",
                                    background: childActive ? "rgba(140,13,79,0.15)" : "transparent",
                                    textDecoration: "none",
                                    fontSize: 13,
                                    fontWeight: 500,
                                    borderRadius: 6,
                                    margin: "2px 8px",
                                    transition: "all 0.2s",
                                  }}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-link ${active ? "active" : ""}`}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 20px",
                        color: active ? "#fff" : "rgba(255,255,255,0.65)",
                        background: active ? "rgba(140,13,79,0.2)" : "transparent",
                        borderLeft: `3px solid ${active ? "#8c0d4f" : "transparent"}`,
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: 500,
                        transition: "all 0.2s",
                      }}
                    >
                      <i className={`bi ${item.icon}`} style={{ fontSize: 18, width: 20, textAlign: "center" }} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="sidebar-footer"
          style={{
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="sidebar-user" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div className="user-avatar">
              {user?.first_name?.charAt(0) || "A"}
            </div>
            <div>
              <div className="user-name">
                {user?.first_name} {user?.last_name}
              </div>
              <div className="user-role">Admin</div>
            </div>
          </div>
          <button className="sidebar-logout" onClick={() => logout()}>
            <i className="bi bi-box-arrow-right" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
