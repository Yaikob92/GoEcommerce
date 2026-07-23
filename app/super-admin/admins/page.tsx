"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { apiGet, apiPatch, apiDelete } from "@/lib/api";

interface Admin {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phone: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface AdminListResponse {
  admins: Admin[];
  total_count: number;
  page: number;
  limit: number;
  total_pages: number;
}

export default function AdminsPage() {
  const router = useRouter();
  const [data, setData] = useState<AdminListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState("");
  const [sort, setSort] = useState("-created_at");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchAdmins = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", "10");
      if (search) params.set("search", search);
      if (roleFilter) params.set("role", roleFilter);
      if (sort) params.set("sort", sort);

      const res = await apiGet<AdminListResponse>(
        `/api/v1/super-admin/admins?${params.toString()}`
      );
      if (res.success && res.data) {
        setData(res.data);
      }
    } catch {
      setError("Failed to load admins.");
    } finally {
      setLoading(false);
    }
  }, [page, search, roleFilter, sort]);

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchAdmins();
  };

  const toggleStatus = async (admin: Admin) => {
    setActionLoading(admin.id);
    try {
      await apiPatch(`/api/v1/super-admin/admins/${admin.id}/status`, {
        is_active: !admin.is_active,
      });
      fetchAdmins();
    } catch {
      setError("Failed to update status.");
    } finally {
      setActionLoading(null);
    }
  };

  const deleteAdmin = async (admin: Admin) => {
    if (!confirm(`Are you sure you want to delete ${admin.first_name} ${admin.last_name}?`)) {
      return;
    }
    setActionLoading(admin.id);
    try {
      await apiDelete(`/api/v1/super-admin/admins/${admin.id}`);
      fetchAdmins();
    } catch {
      setError("Failed to delete admin.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="admins-page">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <form className="d-flex gap-2" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search admins..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 280 }}
            />
            <select
              className="form-select"
              value={roleFilter}
              onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
              style={{ maxWidth: 160 }}
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
            <select
              className="form-select"
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              style={{ maxWidth: 180 }}
            >
              <option value="-created_at">Newest First</option>
              <option value="created_at">Oldest First</option>
              <option value="name">Name A-Z</option>
              <option value="-name">Name Z-A</option>
              <option value="email">Email A-Z</option>
              <option value="-email">Email Z-A</option>
            </select>
          </form>
        </div>
        <Link href="/super-admin/admins/new" className="btn btn-primary">
          <i className="bi bi-plus-lg me-1"></i> Create Admin
        </Link>
      </div>

      {error && (
        <div className="alert alert-danger alert-dismissible" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError("")}></button>
        </div>
      )}

      <div className="admin-card">
        <div className="admin-card-body p-0">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border" style={{ color: "var(--accent-color)" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : data && data.admins.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Joined</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.admins.map((admin) => (
                      <tr key={admin.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="admin-avatar me-2">
                              {admin.first_name?.charAt(0) || "?"}
                            </div>
                            <span>{admin.first_name} {admin.last_name}</span>
                          </div>
                        </td>
                        <td className="text-muted">{admin.email}</td>
                        <td>
                          <span className={`badge ${admin.role === "super_admin" ? "bg-dark" : "bg-secondary"}`}>
                            {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${admin.is_active ? "bg-success" : "bg-danger"}`}>
                            {admin.is_active ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="text-muted">
                          {new Date(admin.created_at).toLocaleDateString()}
                        </td>
                        <td className="text-end">
                          <div className="btn-group btn-group-sm">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => router.push(`/super-admin/admins/${admin.id}`)}
                              title="Edit"
                            >
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button
                              className={`btn ${admin.is_active ? "btn-outline-warning" : "btn-outline-success"}`}
                              onClick={() => toggleStatus(admin)}
                              disabled={actionLoading === admin.id || admin.role === "super_admin"}
                              title={admin.is_active ? "Deactivate" : "Activate"}
                            >
                              {admin.is_active ? (
                                <i className="bi bi-pause-circle"></i>
                              ) : (
                                <i className="bi bi-play-circle"></i>
                              )}
                            </button>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => deleteAdmin(admin)}
                              disabled={actionLoading === admin.id || admin.role === "super_admin"}
                              title="Delete"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {data.total_pages > 1 && (
                <div className="d-flex justify-content-between align-items-center px-3 py-3">
                  <small className="text-muted">
                    Showing {((data.page - 1) * data.limit) + 1} to {Math.min(data.page * data.limit, data.total_count)} of {data.total_count} admins
                  </small>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className={`page-item ${data.page <= 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setPage(data.page - 1)}>Prev</button>
                      </li>
                      {Array.from({ length: data.total_pages }, (_, i) => i + 1).map((p) => (
                        <li key={p} className={`page-item ${p === data.page ? "active" : ""}`}>
                          <button className="page-link" onClick={() => setPage(p)}>{p}</button>
                        </li>
                      ))}
                      <li className={`page-item ${data.page >= data.total_pages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setPage(data.page + 1)}>Next</button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5 text-muted">
              <i className="bi bi-people" style={{ fontSize: 48 }}></i>
              <p className="mt-3">No admins found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
