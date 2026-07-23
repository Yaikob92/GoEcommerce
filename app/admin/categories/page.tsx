"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiGet, apiDelete } from "@/lib/api";
import DataTable, { Column } from "@/components/common/DataTable";
import Pagination from "@/components/common/Pagination";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import Breadcrumb from "@/components/common/Breadcrumb";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { useToast } from "@/components/common/Toast";

interface Category {
  id: string;
  name: string;
  description: string;
  products_count: number;
  created_at: string;
}

interface CategoryListResponse {
  categories: Category[];
  total_count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export default function AdminCategoriesPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
  const [deleting, setDeleting] = useState(false);
  const limit = 10;

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (search) params.set("search", search);

      const res = await apiGet<CategoryListResponse>(`/api/v1/admin/categories?${params}`);
      if (res.success && res.data) {
        setCategories(res.data.categories || []);
        setTotalPages(res.data.total_pages || 1);
        setTotalCount(res.data.total_count || 0);
      } else {
        setCategories([]);
      }
    } catch {
      setError("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      setDeleting(true);
      const res = await apiDelete(`/api/v1/admin/categories/${deleteTarget.id}`);
      if (res.success) {
        showToast("Category deleted successfully", "success");
        setDeleteTarget(null);
        fetchCategories();
      } else {
        showToast(res.message || "Failed to delete category", "error");
      }
    } catch {
      showToast("Failed to delete category", "error");
    } finally {
      setDeleting(false);
    }
  };

  const columns: Column<Category>[] = [
    { key: "name", label: "Name", render: (item) => <span style={{ fontWeight: 500 }}>{item.name}</span> },
    { key: "description", label: "Description", render: (item) => <span style={{ color: "#64748b", fontSize: 13 }}>{item.description || "-"}</span> },
    { key: "products_count", label: "Products Count", render: (item) => <span>{item.products_count ?? 0}</span> },
    { key: "created_at", label: "Created", render: (item) => <span style={{ fontSize: 13, color: "#64748b" }}>{new Date(item.created_at).toLocaleDateString()}</span> },
    {
      key: "actions",
      label: "Actions",
      className: "text-end",
      render: (item) => (
        <div className="d-flex gap-1 justify-content-end">
          <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }} onClick={(e) => { e.stopPropagation(); router.push(`/admin/categories/${item.id}`); }} title="Edit">
            <i className="bi bi-pencil" />
          </button>
          <button className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }} onClick={(e) => { e.stopPropagation(); setDeleteTarget(item); }} title="Delete">
            <i className="bi bi-trash" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: "Categories", href: "/admin/categories" }]} />

      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 style={{ fontWeight: 600, margin: 0 }}>Categories</h5>
        <Link href="/admin/categories/new" className="btn btn-primary" style={{ borderRadius: 8, fontSize: 14 }}>
          <i className="bi bi-plus-lg me-2" />Add Category
        </Link>
      </div>

      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search categories..."
      />

      {error && !loading ? (
        <ErrorState message={error} onRetry={fetchCategories} />
      ) : categories.length === 0 && !loading ? (
        <EmptyState
          icon="bi-tags"
          title="No categories found"
          description="Get started by adding your first category."
          actionLabel="Add Category"
          actionHref="/admin/categories/new"
        />
      ) : (
        <>
          <div className="admin-card">
            <DataTable
              columns={columns}
              data={categories}
              loading={loading}
              keyExtractor={(item) => item.id}
              emptyMessage="No categories found"
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

      <ConfirmDialog
        show={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Category"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        loading={deleting}
      />
    </div>
  );
}
