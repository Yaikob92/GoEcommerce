"use client";

import "@/app/admin.css";
import { useState } from "react";
import AdminRoute from "@/components/admin/AdminRoute";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import { ToastProvider } from "@/components/common/Toast";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminRoute>
      <ToastProvider>
        <div className="admin-layout">
          <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="admin-main">
            <AdminHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="admin-content">{children}</div>
          </div>
        </div>
      </ToastProvider>
    </AdminRoute>
  );
}
