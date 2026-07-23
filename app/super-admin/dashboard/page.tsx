"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface DashboardStats {
  total_users: number;
  total_admins: number;
  total_products: number;
  total_categories: number;
  total_orders: number;
  pending_orders: number;
  completed_orders: number;
  total_revenue: number;
  low_stock_products: number;
  recent_users: AdminSummary[];
  recent_admins: AdminSummary[];
}

interface AdminSummary {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

const STAT_CARDS = [
  { key: "total_users", label: "Total Users", icon: "bi-people", color: "#4f46e5" },
  { key: "total_admins", label: "Total Admins", icon: "bi-shield-check", color: "#8c0d4f" },
  { key: "total_products", label: "Total Products", icon: "bi-box-seam", color: "#059669" },
  { key: "total_categories", label: "Categories", icon: "bi-tags", color: "#d97706" },
  { key: "total_orders", label: "Total Orders", icon: "bi-cart-check", color: "#2563eb" },
  { key: "pending_orders", label: "Pending Orders", icon: "bi-clock-history", color: "#ea580c" },
  { key: "completed_orders", label: "Completed Orders", icon: "bi-check-circle", color: "#16a34a" },
  { key: "low_stock_products", label: "Low Stock", icon: "bi-exclamation-triangle", color: "#dc2626" },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await apiGet<DashboardStats>("/api/v1/super-admin/dashboard");
      if (res.success && res.data) {
        setStats(res.data);
      }
    } catch {
      setError("Failed to load dashboard statistics.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 400 }}>
        <div className="spinner-border" style={{ color: "var(--accent-color)" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="row g-3 mb-4">
        {STAT_CARDS.map((card) => (
          <div className="col-sm-6 col-xl-3" key={card.key}>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: card.color + "15", color: card.color }}>
                <i className={`bi ${card.icon}`}></i>
              </div>
              <div className="stat-info">
                <div className="stat-value">
                  {card.key === "total_revenue"
                    ? `$${(stats?.[card.key as keyof DashboardStats] as number || 0).toLocaleString()}`
                    : (stats?.[card.key as keyof DashboardStats] as number || 0).toLocaleString()}
                </div>
                <div className="stat-label">{card.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="admin-card">
            <div className="admin-card-header">
              <h5><i className="bi bi-people me-2"></i>Recent Users</h5>
            </div>
            <div className="admin-card-body">
              {stats?.recent_users && stats.recent_users.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recent_users.map((u) => (
                        <tr key={u.id}>
                          <td>{u.first_name} {u.last_name}</td>
                          <td className="text-muted">{u.email}</td>
                          <td className="text-muted">
                            {new Date(u.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center text-muted py-4">No users yet.</div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="admin-card">
            <div className="admin-card-header">
              <h5><i className="bi bi-shield-check me-2"></i>Recent Admins</h5>
            </div>
            <div className="admin-card-body">
              {stats?.recent_admins && stats.recent_admins.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recent_admins.map((a) => (
                        <tr key={a.id}>
                          <td>{a.first_name} {a.last_name}</td>
                          <td className="text-muted">{a.email}</td>
                          <td>
                            <span className={`badge ${a.is_active ? "bg-success" : "bg-secondary"}`}>
                              {a.is_active ? "Active" : "Inactive"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center text-muted py-4">No admins yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
