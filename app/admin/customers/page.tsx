"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { apiGet } from "@/lib/api";
import DataTable, { Column } from "@/components/common/DataTable";
import Pagination from "@/components/common/Pagination";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import Breadcrumb from "@/components/common/Breadcrumb";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";

interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  orders_count: number;
  total_spent: number;
  created_at: string;
}

interface CustomerListResponse {
  customers: Customer[];
  total_count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export default function AdminCustomersPage() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const limit = 10;

  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (search) params.set("search", search);

      const res = await apiGet<CustomerListResponse>(`/api/v1/admin/customers?${params}`);
      if (res.success && res.data) {
        setCustomers(res.data.customers || []);
        setTotalPages(res.data.total_pages || 1);
        setTotalCount(res.data.total_count || 0);
      } else {
        setCustomers([]);
      }
    } catch {
      setError("Failed to load customers.");
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const columns: Column<Customer>[] = [
    {
      key: "name",
      label: "Name",
      render: (item) => (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              flexShrink: 0,
            }}
          >
            {item.first_name?.charAt(0) || "C"}
          </div>
          <span style={{ fontWeight: 500 }}>{item.first_name} {item.last_name}</span>
        </div>
      ),
    },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone", render: (item) => <span>{item.phone || "-"}</span> },
    { key: "orders_count", label: "Orders", render: (item) => <span>{item.orders_count ?? 0}</span> },
    { key: "total_spent", label: "Total Spent", render: (item) => <span style={{ fontWeight: 600 }}>ETB ${item.total_spent?.toLocaleString()}</span> },
    { key: "created_at", label: "Joined", render: (item) => <span style={{ fontSize: 13, color: "#64748b" }}>{new Date(item.created_at).toLocaleDateString()}</span> },
    {
      key: "actions",
      label: "Actions",
      className: "text-end",
      render: (item) => (
        <button
          className="btn btn-sm btn-outline-primary"
          style={{ borderRadius: 6 }}
          onClick={(e) => { e.stopPropagation(); router.push(`/admin/customers/${item.id}`); }}
          title="View Profile"
        >
          <i className="bi bi-eye" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: "Customers", href: "/admin/customers" }]} />

      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 style={{ fontWeight: 600, margin: 0 }}>Customers</h5>
      </div>

      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search customers..."
      />

      {error && !loading ? (
        <ErrorState message={error} onRetry={fetchCustomers} />
      ) : customers.length === 0 && !loading ? (
        <EmptyState
          icon="bi-people"
          title="No customers found"
          description="Customer data will appear here once users register."
        />
      ) : (
        <>
          <div className="admin-card">
            <DataTable
              columns={columns}
              data={customers}
              loading={loading}
              keyExtractor={(item) => item.id}
              emptyMessage="No customers found"
              onRowClick={(item) => router.push(`/admin/customers/${item.id}`)}
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
