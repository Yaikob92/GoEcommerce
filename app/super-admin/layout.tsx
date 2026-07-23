"use client";

import "@/app/admin.css";
import SuperAdminRoute from "@/components/SuperAdminRoute";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SuperAdminRoute>
      <div className="admin-layout">
        <AdminSidebar />
        <div className="admin-main">
          <AdminHeader />
          <div className="admin-content">{children}</div>
        </div>
      </div>
    </SuperAdminRoute>
  );
}
