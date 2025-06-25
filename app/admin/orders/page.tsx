"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiGet } from "@/lib/api";
import DataTable, { Column } from "@/components/common/DataTable";
import Pagination from "@/components/common/Pagination";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import { getStatusBadge } from "@/components/common/Badge";
import Breadcrumb from "@/components/common/Breadcrumb";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";

interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  items_count: number;
  total: number;
  payment_status: string;
  status: string;
  created_at: string;
}

interface OrderListResponse {
  orders: Order[];
  total_count: number;
  page: number;
  limit: number;
  total_pages: number;
}

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const limit = 10;

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (search) params.set("search", search);
      if (statusFilter) params.set("status", statusFilter);

      const res = await apiGet<OrderListResponse>(`/api/v1/admin/orders?${params}`);
      if (res.success && res.data) {
        setOrders(res.data.orders || []);
        setTotalPages(res.data.total_pages || 1);
        setTotalCount(res.data.total_count || 0);
      } else {
        setOrders([]);
      }
    } catch {
      setError("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

  const columns: Column<Order>[] = [
    { key: "order_number", label: "Order ID", render: (item) => <span style={{ fontWeight: 500 }}>#{item.order_number}</span> },
    { key: "customer_name", label: "Customer" },
    { key: "items_count", label: "Items", render: (item) => <span>{item.items_count ?? 0} items</span> },
    { key: "total", label: "Total", render: (item) => <span style={{ fontWeight: 600 }}>ETB ${item.total?.toLocaleString()}</span> },
    { key: "payment_status", label: "Payment", render: (item) => getStatusBadge(item.payment_status) },
    { key: "status", label: "Status", render: (item) => getStatusBadge(item.status) },
    { key: "created_at", label: "Date", render: (item) => <span style={{ fontSize: 13, color: "#64748b" }}>{new Date(item.created_at).toLocaleDateString()}</span> },
    {
      key: "actions",
      label: "Actions",
      className: "text-end",
      render: (item) => (
        <button
          className="btn btn-sm btn-outline-primary"
          style={{ borderRadius: 6 }}
          onClick={(e) => { e.stopPropagation(); router.push(`/admin/orders/${item.id}`); }}
          title="View"
        >
          <i className="bi bi-eye" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: "Orders", href: "/admin/orders" }]} />

      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 style={{ fontWeight: 600, margin: 0 }}>Orders</h5>
      </div>

      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search orders..."
        filters={[
          {
            key: "status",
            label: "All Status",
            value: statusFilter,
            options: STATUS_OPTIONS,
            onChange: setStatusFilter,
          },
        ]}
      />

      {error && !loading ? (
        <ErrorState message={error} onRetry={fetchOrders} />
      ) : orders.length === 0 && !loading ? (
        <EmptyState
          icon="bi-cart-check"
          title="No orders found"
          description="Orders will appear here once customers start purchasing."
        />
      ) : (
        <>
          <div className="admin-card">
            <DataTable
              columns={columns}
              data={orders}
              loading={loading}
              keyExtractor={(item) => item.id}
              emptyMessage="No orders found"
              onRowClick={(item) => router.push(`/admin/orders/${item.id}`)}
            />
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={totalCount}
            limit={limit}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
