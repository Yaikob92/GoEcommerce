"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { apiGet, apiPut } from "@/lib/api";

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

export default function EditAdminPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [admin, setAdmin] = useState<Admin | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchAdmin();
  }, [id]);

  const fetchAdmin = async () => {
    try {
      const res = await apiGet<{ admin: Admin }>(`/api/v1/super-admin/admins/${id}`);
      if (res.success && res.data?.admin) {
        const a = res.data.admin;
        setAdmin(a);
        setFirstName(a.first_name);
        setLastName(a.last_name);
        setEmail(a.email);
        setPhone(a.phone || "");
      }
    } catch {
      setError("Failed to load admin details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      await apiPut(`/api/v1/super-admin/admins/${id}`, {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
      });
      setSuccess("Admin updated successfully.");
      fetchAdmin();
    } catch (err: unknown) {
      const apiErr = err as { message?: string; error?: { code?: string } };
      if (apiErr.error?.code === "EMAIL_TAKEN") {
        setError("An account with this email already exists.");
      } else {
        setError(apiErr.message || "Failed to update admin.");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" style={{ color: "var(--accent-color)" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="alert alert-danger">
        Admin not found.
        <button className="btn btn-link" onClick={() => router.push("/super-admin/admins")}>
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="admin-form-page">
      <div className="admin-card" style={{ maxWidth: 700 }}>
        <div className="admin-card-header d-flex justify-content-between align-items-center">
          <h5><i className="bi bi-pencil-square me-2"></i>Edit Admin</h5>
          <span className={`badge ${admin.is_active ? "bg-success" : "bg-danger"}`}>
            {admin.is_active ? "Active" : "Inactive"}
          </span>
        </div>
        <div className="admin-card-body">
          {error && (
            <div className="alert alert-danger" role="alert">{error}</div>
          )}
          {success && (
            <div className="alert alert-success" role="alert">{success}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Role</label>
                <input
                  type="text"
                  className="form-control"
                  value={admin.role === "super_admin" ? "Super Admin" : "Admin"}
                  readOnly
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Joined</label>
                <input
                  type="text"
                  className="form-control"
                  value={new Date(admin.created_at).toLocaleDateString()}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => router.push("/super-admin/admins")}
              >
                Back to List
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status"></span>
                    Saving...
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-lg me-1"></i> Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
