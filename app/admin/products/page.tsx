"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiGet, apiDelete } from "@/lib/api";
import DataTable, { Column } from "@/components/common/DataTable";
import Pagination from "@/components/common/Pagination";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import { getStatusBadge } from "@/components/common/Badge";
import Breadcrumb from "@/components/common/Breadcrumb";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import { useToast } from "@/components/common/Toast";

interface Product {
  id: string;
  name: string;
  image_url: string;
  category_name: string;
  price: number;
  stock: number;
  status: string;
  created_at: string;
}

interface ProductListResponse {
  products: Product[];
  total_count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export default function AdminProductsPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sort, setSort] = useState("-created_at");
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [deleting, setDeleting] = useState(false);
  const limit = 10;

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        sort,
      });
      if (search) params.set("search", search);
      if (categoryFilter) params.set("category", categoryFilter);
      if (statusFilter) params.set("status", statusFilter);

      const res = await apiGet<ProductListResponse>(`/api/v1/admin/products?${params}`);
      if (res.success && res.data) {
        setProducts(res.data.products || []);
        setTotalPages(res.data.total_pages || 1);
        setTotalCount(res.data.total_count || 0);
      } else {
        setProducts([]);
      }
    } catch {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, [page, search, categoryFilter, statusFilter, sort]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, statusFilter, sort]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      setDeleting(true);
      const res = await apiDelete(`/api/v1/admin/products/${deleteTarget.id}`);
      if (res.success) {
        showToast("Product deleted successfully", "success");
        setDeleteTarget(null);
        fetchProducts();
      } else {
        showToast(res.message || "Failed to delete product", "error");
      }
    } catch {
      showToast("Failed to delete product", "error");
    } finally {
      setDeleting(false);
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return "out_of_stock";
    if (stock <= 5) return "low_stock";
    return "in_stock";
  };

  const columns: Column<Product>[] = [
    {
      key: "image",
      label: "Image",
      render: (item) => (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "#f1f5f9",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {item.image_url ? (
            <img src={item.image_url} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>
              <i className="bi bi-image" />
            </div>
          )}
        </div>
      ),
    },
    { key: "name", label: "Name", render: (item) => <span style={{ fontWeight: 500 }}>{item.name}</span> },
    { key: "category_name", label: "Category", render: (item) => item.category_name || "-" },
    { key: "price", label: "Price", render: (item) => <span style={{ fontWeight: 600 }}>${item.price?.toLocaleString()}</span> },
    { key: "stock", label: "Stock", render: (item) => <span>{item.stock}</span> },
    { key: "status", label: "Status", render: (item) => getStatusBadge(getStockStatus(item.stock)) },
    { key: "created_at", label: "Created", render: (item) => <span style={{ fontSize: 13, color: "#64748b" }}>{new Date(item.created_at).toLocaleDateString()}</span> },
    {
      key: "actions",
      label: "Actions",
      className: "text-end",
      render: (item) => (
        <div className="d-flex gap-1 justify-content-end">
          <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }} onClick={(e) => { e.stopPropagation(); router.push(`/admin/products/${item.id}`); }} title="View">
            <i className="bi bi-eye" />
          </button>
          <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }} onClick={(e) => { e.stopPropagation(); router.push(`/admin/products/${item.id}`); }} title="Edit">
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
      <Breadcrumb items={[{ label: "Products", href: "/admin/products" }]} />

      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 style={{ fontWeight: 600, margin: 0 }}>Products</h5>
        <Link href="/admin/products/new" className="btn btn-primary" style={{ borderRadius: 8, fontSize: 14 }}>
          <i className="bi bi-plus-lg me-2" />Add Product
        </Link>
      </div>

      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search products..."
        filters={[
          {
            key: "category",
            label: "All Categories",
            value: categoryFilter,
            options: [],
            onChange: setCategoryFilter,
          },
          {
            key: "status",
            label: "All Status",
            value: statusFilter,
            options: [
              { value: "in_stock", label: "In Stock" },
              { value: "low_stock", label: "Low Stock" },
              { value: "out_of_stock", label: "Out of Stock" },
            ],
            onChange: setStatusFilter,
          },
        ]}
        sortOptions={[
          { value: "-created_at", label: "Newest First" },
          { value: "created_at", label: "Oldest First" },
          { value: "name", label: "Name A-Z" },
          { value: "-name", label: "Name Z-A" },
          { value: "price", label: "Price Low-High" },
          { value: "-price", label: "Price High-Low" },
        ]}
        sortValue={sort}
        onSortChange={setSort}
      />

      {error && !loading ? (
        <ErrorState message={error} onRetry={fetchProducts} />
      ) : products.length === 0 && !loading ? (
        <EmptyState
          icon="bi-box-seam"
          title="No products found"
          description="Get started by adding your first product."
          actionLabel="Add Product"
          actionHref="/admin/products/new"
        />
      ) : (
        <>
          <div className="admin-card">
            <DataTable
              columns={columns}
              data={products}
              loading={loading}
              keyExtractor={(item) => item.id}
              emptyMessage="No products found"
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
        title="Delete Product"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        loading={deleting}
      />
    </div>
  );
}
