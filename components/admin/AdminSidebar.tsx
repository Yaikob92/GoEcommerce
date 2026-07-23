"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const NAV_ITEMS = [
  { href: "/super-admin/dashboard", icon: "bi-speedometer2", label: "Dashboard" },
  { href: "/super-admin/admins", icon: "bi-people", label: "Admin Management" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <Link href="/super-admin/dashboard" className="sidebar-brand">
          <i className="bi bi-shield-lock"></i>
          <span>Super Admin</span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {NAV_ITEMS.map((item) => (
            <li className="nav-item" key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href || (item.href !== "/super-admin/dashboard" && pathname.startsWith(item.href)) ? "active" : ""}`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">
            {user?.first_name?.charAt(0) || "S"}
          </div>
          <div className="user-info">
            <div className="user-name">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="user-role">Super Admin</div>
          </div>
        </div>
        <button
          className="sidebar-logout"
          onClick={() => {
            logout();
          }}
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
