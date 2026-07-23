"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiGet, apiPut } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import Breadcrumb from "@/components/common/Breadcrumb";
import FormInput from "@/components/common/FormInput";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import ErrorState from "@/components/common/ErrorState";
import { useToast } from "@/components/common/Toast";

const profileSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const passwordSchema = z.object({
  current_password: z.string().min(1, "Current password is required"),
  new_password: z.string().min(8, "Password must be at least 8 characters"),
  confirm_password: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.new_password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function AdminProfilePage() {
  const { user, refreshUser } = useAuth();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileSubmitting, setProfileSubmitting] = useState(false);
  const [passwordSubmitting, setPasswordSubmitting] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    reset: resetProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
    formState: { errors: passwordErrors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await apiGet<Record<string, string>>("/api/auth/me");
      if (res.success && res.data) {
        const d = res.data;
        resetProfile({
          first_name: d.first_name || "",
          last_name: d.last_name || "",
          phone: d.phone || "",
        });
        setAvatarPreview(d.profile_picture_url || "");
      } else if (user) {
        resetProfile({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone || "",
        });
        setAvatarPreview(user.profile_picture_url || "");
      }
    } catch {
      if (user) {
        resetProfile({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone || "",
        });
        setAvatarPreview(user.profile_picture_url || "");
      } else {
        setError("Failed to load profile.");
      }
    } finally {
      setLoading(false);
    }
  };

  const onProfileSubmit = async (data: ProfileFormData) => {
    try {
      setProfileSubmitting(true);
      const res = await apiPut("/api/auth/me", data);
      if (res.success) {
        showToast("Profile updated successfully", "success");
        await refreshUser();
      } else {
        showToast(res.message || "Failed to update profile", "error");
      }
    } catch {
      showToast("Failed to update profile", "error");
    } finally {
      setProfileSubmitting(false);
    }
  };

  const onPasswordSubmit = async (data: PasswordFormData) => {
    try {
      setPasswordSubmitting(true);
      const res = await apiPut("/api/auth/me/password", {
        current_password: data.current_password,
        new_password: data.new_password,
      });
      if (res.success) {
        showToast("Password changed successfully", "success");
        resetPassword();
      } else {
        showToast(res.message || "Failed to change password", "error");
      }
    } catch {
      showToast("Failed to change password", "error");
    } finally {
      setPasswordSubmitting(false);
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarPreview(URL.createObjectURL(file));

    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const token = document.cookie
        .split("; ")
        .find((c) => c.startsWith("access_token="))
        ?.split("=")[1];
      const res = await fetch("/api/auth/me/avatar", {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        showToast("Avatar updated", "success");
        await refreshUser();
      } else {
        showToast(json.message || "Failed to upload avatar", "error");
      }
    } catch {
      showToast("Failed to upload avatar", "error");
    }
  };

  if (loading) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Profile" }]} />
        <SkeletonLoader type="form" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Breadcrumb items={[{ label: "Profile" }]} />
        <ErrorState message={error} onRetry={fetchProfile} />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb items={[{ label: "Profile" }]} />

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="admin-card mb-3">
            <div className="admin-card-header">
              <h5>Profile Information</h5>
            </div>
            <div className="admin-card-body p-4">
              <form onSubmit={handleSubmitProfile(onProfileSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      label="First Name"
                      required
                      error={profileErrors.first_name?.message}
                      {...registerProfile("first_name")}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      label="Last Name"
                      required
                      error={profileErrors.last_name?.message}
                      {...registerProfile("last_name")}
                    />
                  </div>
                </div>
                <FormInput
                  label="Email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  helperText="Contact support to change your email"
                />
                <FormInput
                  label="Phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  error={profileErrors.phone?.message}
                  {...registerProfile("phone")}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={profileSubmitting}
                  style={{ borderRadius: 8, fontSize: 14, padding: "10px 24px" }}
                >
                  {profileSubmitting && <span className="spinner-border spinner-border-sm me-2" />}
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h5>Change Password</h5>
            </div>
            <div className="admin-card-body p-4">
              <form onSubmit={handleSubmitPassword(onPasswordSubmit)}>
                <FormInput
                  label="Current Password"
                  type="password"
                  required
                  error={passwordErrors.current_password?.message}
                  {...registerPassword("current_password")}
                />
                <FormInput
                  label="New Password"
                  type="password"
                  required
                  error={passwordErrors.new_password?.message}
                  helperText="Must be at least 8 characters"
                  {...registerPassword("new_password")}
                />
                <FormInput
                  label="Confirm New Password"
                  type="password"
                  required
                  error={passwordErrors.confirm_password?.message}
                  {...registerPassword("confirm_password")}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={passwordSubmitting}
                  style={{ borderRadius: 8, fontSize: 14, padding: "10px 24px" }}
                >
                  {passwordSubmitting && <span className="spinner-border spinner-border-sm me-2" />}
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="admin-card">
            <div className="admin-card-header">
              <h5>Avatar</h5>
            </div>
            <div className="admin-card-body text-center p-4">
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: avatarPreview ? "transparent" : "#8c0d4f",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  fontWeight: 700,
                  margin: "0 auto 16px",
                  overflow: "hidden",
                }}
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  user?.first_name?.charAt(0) || "A"
                )}
              </div>
              <label
                className="btn btn-outline-primary btn-sm"
                style={{ borderRadius: 8, fontSize: 13, cursor: "pointer" }}
              >
                <i className="bi bi-camera me-2" />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="d-none"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
