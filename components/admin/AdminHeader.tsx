"use client";

import { usePathname } from "next/navigation";

const PAGE_TITLES: Record<string, string> = {
  "/super-admin/dashboard": "Dashboard",
  "/super-admin/admins": "Admin Management",
  "/super-admin/admins/new": "Create Admin",
};

export default function AdminHeader() {
  const pathname = usePathname();

  let title = "Super Admin";
  if (pathname.includes("/admins/new")) {
    title = "Create Admin";
  } else if (pathname.match(/\/super-admin\/admins\/[^/]+$/)) {
    title = "Edit Admin";
  } else {
    title = PAGE_TITLES[pathname] || "Super Admin";
  }

  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
}
