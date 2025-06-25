"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/api";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import ErrorState from "@/components/common/ErrorState";
import Breadcrumb from "@/components/common/Breadcrumb";
import { getStatusBadge } from "@/components/common/Badge";

interface DashboardStats {
  total_products: number;
  total_categories: number;
  total_orders: number;
  pending_orders: number;
  completed_orders: number;
  total_revenue: number;
  total_customers: number;
  low_stock_products: number;
}

interface RecentOrder {
  id: string;
  order_number: string;
  customer_name: string;
  total: number;
  status: string;
  created_at: string;
}

interface RecentProduct {
  id: string;
  name: string;
  image_url: string;
  stock: number;
  price: number;
  status: string;
}

const STAT_CARDS = [
  { key: "total_products", label: "Total Products", icon: "bi-box-seam", color: "#059669", href: "/admin/products" },
  { key: "total_categories", label: "Categories", icon: "bi-tags", color: "#d97706", href: "/admin/categories" },
  { key: "total_orders", label: "Total Orders", icon: "bi-cart-check", color: "#2563eb", href: "/admin/orders" },
  { key: "pending_orders", label: "Pending Orders", icon: "bi-clock-history", color: "#ea580c", href: "/admin/orders?status=pending" },
  { key: "completed_orders", label: "Completed Orders", icon: "bi-check-circle", color: "#16a34a", href: "/admin/orders?status=delivered" },
  { key: "total_revenue", label: "Revenue", icon: "bi-currency-dollar", color: "#7c3aed", href: "/admin/orders" },
  { key: "total_customers", label: "Customers", icon: "bi-people", color: "#2563eb", href: "/admin/customers" },
  { key: "low_stock_products", label: "Low Stock", icon: "bi-exclamation-triangle", color: "#dc2626", href: "/admin/products?status=low_stock" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
  const [recentProducts, setRecentProducts] = useState<RecentProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const [statsRes, ordersRes, productsRes] = await Promise.allSettled([
        apiGet<DashboardStats>("/api/v1/admin/dashboard"),
        apiGet<{ orders: RecentOrder[] }>("/api/v1/admin/orders?limit=5&sort=-created_at"),
        apiGet<{ products: RecentProduct[] }>("/api/v1/admin/products?limit=5&sort=-created_at"),
      ]);

      if (statsRes.status === "fulfilled" && statsRes.value.success && statsRes.value.data) {
        setStats(statsRes.value.data);
      }
      if (ordersRes.status === "fulfilled" && ordersRes.value.success && ordersRes.value.data) {
        setRecentOrders(ordersRes.value.data.orders || []);
      }
      if (productsRes.status === "fulfilled" && productsRes.value.success && productsRes.value.data) {
        setRecentProducts(productsRes.value.data.products || []);
      }
    } catch {
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Dashboard" }]} />
        <SkeletonLoader type="stats" />
        <div className="row g-3 mt-3">
          <div className="col-lg-7">
            <SkeletonLoader type="table" rows={5} columns={5} />
          </div>
          <div className="col-lg-5">
            <SkeletonLoader type="table" rows={5} columns={4} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Dashboard" }]} />
        <ErrorState message={error} onRetry={fetchDashboard} />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb items={[{ label: "Dashboard" }]} />

      <div className="row g-3 mb-4">
        {STAT_CARDS.map((card) => {
          const value = stats ? (stats as unknown as Record<string, number>)[card.key] ?? 0 : 0;
          return (
            <div key={card.key} className="col-sm-6 col-lg-3">
              <Link href={card.href} style={{ textDecoration: "none" }}>
                <div className="stat-card">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `${card.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bi ${card.icon}`} style={{ fontSize: 22, color: card.color }} />
                  </div>
                  <div>
                    <div className="stat-value">
                      {card.key === "total_revenue"
                        ? `$${value.toLocaleString()}`
                        : value.toLocaleString()}
                    </div>
                    <div className="stat-label">{card.label}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="row g-3">
        <div className="col-lg-7">
          <div className="admin-card">
            <div className="admin-card-header d-flex align-items-center justify-content-between">
              <h5>Recent Orders</h5>
              <Link href="/admin/orders" style={{ fontSize: 13, color: "#8c0d4f", textDecoration: "none" }}>
                View All <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
            {recentOrders.length === 0 ? (
              <div className="text-center py-4" style={{ color: "#94a3b8", fontSize: 14 }}>
                No recent orders
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td style={{ fontWeight: 500 }}>#{order.order_number}</td>
                        <td>{order.customer_name}</td>
                        <td style={{ fontWeight: 600 }}>ETB ${order.total?.toLocaleString()}</td>
                        <td>{getStatusBadge(order.status)}</td>
                        <td style={{ color: "#64748b", fontSize: 13 }}>
                          {new Date(order.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="admin-card">
            <div className="admin-card-header d-flex align-items-center justify-content-between">
              <h5>Recent Products</h5>
              <Link href="/admin/products" style={{ fontSize: 13, color: "#8c0d4f", textDecoration: "none" }}>
                View All <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
            {recentProducts.length === 0 ? (
              <div className="text-center py-4" style={{ color: "#94a3b8", fontSize: 14 }}>
                No recent products
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 8,
                                background: "#f1f5f9",
                                overflow: "hidden",
                                flexShrink: 0,
                              }}
                            >
                              {product.image_url ? (
                                <img
                                  src={product.image_url}
                                  alt={product.name}
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#94a3b8",
                                    fontSize: 14,
                                  }}
                                >
                                  <i className="bi bi-image" />
                                </div>
                              )}
                            </div>
                            <span style={{ fontWeight: 500, fontSize: 14 }}>{product.name}</span>
                          </div>
                        </td>
                        <td>{product.stock}</td>
                        <td style={{ fontWeight: 500 }}>ETB ${product.price?.toLocaleString()}</td>
                        <td>{getStatusBadge(product.stock === 0 ? "out_of_stock" : product.stock <= 5 ? "low_stock" : "in_stock")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
