"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { apiGet, apiPatch } from "@/lib/api";
import Breadcrumb from "@/components/common/Breadcrumb";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import ErrorState from "@/components/common/ErrorState";
import Badge, { getStatusBadge } from "@/components/common/Badge";
import { useToast } from "@/components/common/Toast";

interface OrderDetails {
  id: string;
  order_number: string;
  status: string;
  payment_status: string;
  created_at: string;
  updated_at: string;
  customer: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  };
  billing_address: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  };
  items: {
    id: string;
    product_name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  subtotal: number;
  tax: number;
  shipping_cost: number;
  total: number;
  notes: string;
  timeline: {
    status: string;
    note: string;
    created_at: string;
  }[];
}

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export default function AdminOrderDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const orderId = params.id as string;
  const { showToast } = useToast();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const res = await apiGet<OrderDetails>(`/api/v1/admin/orders/${orderId}`);
      if (res.success && res.data) {
        setOrder(res.data);
      } else {
        setError("Order not found.");
      }
    } catch {
      setError("Failed to load order details.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    if (!order) return;
    try {
      setUpdating(true);
      const res = await apiPatch(`/api/v1/admin/orders/${orderId}/status`, { status: newStatus });
      if (res.success) {
        showToast("Order status updated", "success");
        fetchOrder();
      } else {
        showToast(res.message || "Failed to update status", "error");
      }
    } catch {
      showToast("Failed to update status", "error");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Orders", href: "/admin/orders" }, { label: "Details" }]} />
        <SkeletonLoader type="form" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Orders", href: "/admin/orders" }, { label: "Details" }]} />
        <ErrorState message={error || "Order not found"} onRetry={fetchOrder} />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Orders", href: "/admin/orders" },
          { label: `#${order.order_number}` },
        ]}
      />

      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
        <div>
          <h5 style={{ fontWeight: 600, margin: 0 }}>Order #{order.order_number}</h5>
          <span style={{ fontSize: 13, color: "#64748b" }}>
            Placed on {new Date(order.created_at).toLocaleDateString()}
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          {getStatusBadge(order.status)}
          <select
            className="form-select form-select-sm"
            style={{ width: "auto", borderRadius: 8, fontSize: 13 }}
            value={order.status}
            onChange={(e) => handleStatusUpdate(e.target.value)}
            disabled={updating}
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="admin-card mb-3">
            <div className="admin-card-header">
              <h5>Order Items</h5>
            </div>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items?.map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: 500 }}>{item.product_name}</td>
                      <td>ETB ${item.price?.toLocaleString()}</td>
                      <td>{item.quantity}</td>
                      <td className="text-end" style={{ fontWeight: 600 }}>ETB ${item.total?.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {order.timeline && order.timeline.length > 0 && (
            <div className="admin-card mb-3">
              <div className="admin-card-header">
                <h5>Timeline</h5>
              </div>
              <div className="admin-card-body">
                {order.timeline.map((event, index) => (
                  <div key={index} className="d-flex gap-3 mb-3">
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#8c0d4f",
                        marginTop: 5,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14 }}>
                        {getStatusBadge(event.status)}
                      </div>
                      {event.note && (
                        <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
                          {event.note}
                        </div>
                      )}
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                        {new Date(event.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {order.notes && (
            <div className="admin-card">
              <div className="admin-card-header">
                <h5>Order Notes</h5>
              </div>
              <div className="admin-card-body">
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>{order.notes}</p>
              </div>
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <div className="admin-card mb-3">
            <div className="admin-card-header">
              <h5>Customer</h5>
            </div>
            <div className="admin-card-body">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#8c0d4f",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                  }}
                >
                  {order.customer?.first_name?.charAt(0) || "C"}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {order.customer?.first_name} {order.customer?.last_name}
                  </div>
                  <div style={{ fontSize: 13, color: "#64748b" }}>{order.customer?.email}</div>
                </div>
              </div>
              {order.customer?.phone && (
                <div style={{ fontSize: 13, color: "#64748b" }}>
                  <i className="bi bi-telephone me-2" />{order.customer.phone}
                </div>
              )}
            </div>
          </div>

          <div className="admin-card mb-3">
            <div className="admin-card-header">
              <h5>Shipping Address</h5>
            </div>
            <div className="admin-card-body" style={{ fontSize: 14, lineHeight: 1.6 }}>
              {order.shipping_address ? (
                <>
                  <div>{order.shipping_address.street}</div>
                  <div>{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zip_code}</div>
                  <div>{order.shipping_address.country}</div>
                </>
              ) : (
                <span style={{ color: "#94a3b8" }}>No shipping address</span>
              )}
            </div>
          </div>

          <div className="admin-card mb-3">
            <div className="admin-card-header">
              <h5>Billing Address</h5>
            </div>
            <div className="admin-card-body" style={{ fontSize: 14, lineHeight: 1.6 }}>
              {order.billing_address ? (
                <>
                  <div>{order.billing_address.street}</div>
                  <div>{order.billing_address.city}, {order.billing_address.state} {order.billing_address.zip_code}</div>
                  <div>{order.billing_address.country}</div>
                </>
              ) : (
                <span style={{ color: "#94a3b8" }}>No billing address</span>
              )}
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h5>Summary</h5>
            </div>
            <div className="admin-card-body">
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: 14 }}>
                <span style={{ color: "#64748b" }}>Subtotal</span>
                <span>ETB ${order.subtotal?.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: 14 }}>
                <span style={{ color: "#64748b" }}>Tax</span>
                <span>ETB ${order.tax?.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3" style={{ fontSize: 14 }}>
                <span style={{ color: "#64748b" }}>Shipping</span>
                <span>ETB ${order.shipping_cost?.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between pt-2" style={{ borderTop: "1px solid #e9ecef", fontWeight: 700, fontSize: 16 }}>
                <span>Grand Total</span>
                <span style={{ color: "#8c0d4f" }}>ETB ${order.total?.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
