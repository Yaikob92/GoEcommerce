"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiPost } from "@/lib/api";
import Breadcrumb from "@/components/common/Breadcrumb";
import FormInput from "@/components/common/FormInput";
import FormTextarea from "@/components/common/FormTextarea";
import { useToast } from "@/components/common/Toast";

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  description: z.string().optional(),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function AdminAddCategoryPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: CategoryFormData) => {
    try {
      setSubmitting(true);
      const res = await apiPost("/api/v1/admin/categories", data);
      if (res.success) {
        showToast("Category created successfully", "success");
        router.push("/admin/categories");
      } else {
        showToast(res.message || "Failed to create category", "error");
      }
    } catch {
      showToast("Failed to create category", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-form-page">
      <Breadcrumb
        items={[
          { label: "Categories", href: "/admin/categories" },
          { label: "Add Category" },
        ]}
      />

      <div className="admin-card" style={{ maxWidth: 600 }}>
        <div className="admin-card-header">
          <h5>Add New Category</h5>
        </div>
        <div className="admin-card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label="Category Name"
              placeholder="Enter category name"
              required
              error={errors.name?.message}
              {...register("name")}
            />

            <FormTextarea
              label="Description"
              placeholder="Enter category description (optional)"
              error={errors.description?.message}
              {...register("description")}
            />

            <div className="d-flex gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ borderRadius: 8, fontSize: 14, padding: "10px 24px" }}
              >
                {submitting && <span className="spinner-border spinner-border-sm me-2" />}
                Create Category
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => router.push("/admin/categories")}
                style={{ borderRadius: 8, fontSize: 14, padding: "10px 24px" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
