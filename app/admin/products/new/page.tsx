"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiPost, apiGet } from "@/lib/api";
import Breadcrumb from "@/components/common/Breadcrumb";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";
import FormTextarea from "@/components/common/FormTextarea";
import ImageUpload from "@/components/common/ImageUpload";
import { useToast } from "@/components/common/Toast";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  category_id: z.string().min(1, "Category is required"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  discount_price: z.number().min(0, "Discount price must be positive").optional(),
  quantity: z.number().min(0, "Quantity must be positive"),
  sku: z.string().min(1, "SKU is required"),
  status: z.string().min(1, "Status is required"),
});

type ProductFormData = z.infer<typeof productSchema>;

interface Category {
  id: string;
  name: string;
}

export default function AdminAddProductPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [images, setImages] = useState<File[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [fetchingCategories, setFetchingCategories] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      status: "active",
      quantity: 0,
    },
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await apiGet<{ categories: Category[] }>("/api/v1/admin/categories?limit=100");
      if (res.success && res.data) {
        setCategories(res.data.categories || []);
      }
    } catch {
      // silently fail
    } finally {
      setFetchingCategories(false);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category_id", data.category_id);
      formData.append("price", String(data.price));
      if (data.discount_price) {
        formData.append("discount_price", String(data.discount_price));
      }
      formData.append("quantity", String(data.quantity));
      formData.append("sku", data.sku);
      formData.append("status", data.status);
      images.forEach((img) => formData.append("images", img));

      const res = await apiPost("/api/v1/admin/products", formData);
      if (res.success) {
        showToast("Product created successfully", "success");
        router.push("/admin/products");
      } else {
        showToast(res.message || "Failed to create product", "error");
      }
    } catch {
      showToast("Failed to create product", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-form-page">
      <Breadcrumb
        items={[
          { label: "Products", href: "/admin/products" },
          { label: "Add Product" },
        ]}
      />

      <div className="admin-card" style={{ maxWidth: 800 }}>
        <div className="admin-card-header">
          <h5>Add New Product</h5>
        </div>
        <div className="admin-card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-8">
                <FormInput
                  label="Product Name"
                  placeholder="Enter product name"
                  required
                  error={errors.name?.message}
                  {...register("name")}
                />

                <FormTextarea
                  label="Description"
                  placeholder="Enter product description"
                  required
                  error={errors.description?.message}
                  {...register("description")}
                />

                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      label="Price"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      required
                      error={errors.price?.message}
                      {...register("price", { valueAsNumber: true })}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      label="Discount Price"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      error={errors.discount_price?.message}
                      helperText="Leave empty if no discount"
                      {...register("discount_price", { valueAsNumber: true })}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      label="Quantity"
                      type="number"
                      min="0"
                      placeholder="0"
                      required
                      error={errors.quantity?.message}
                      {...register("quantity", { valueAsNumber: true })}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      label="SKU"
                      placeholder="e.g. PROD-001"
                      required
                      error={errors.sku?.message}
                      {...register("sku")}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <FormSelect
                      label="Category"
                      placeholder="Select category"
                      required
                      error={errors.category_id?.message}
                      options={categories.map((c) => ({ value: c.id, label: c.name }))}
                      {...register("category_id")}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormSelect
                      label="Status"
                      required
                      error={errors.status?.message}
                      options={[
                        { value: "active", label: "Active" },
                        { value: "draft", label: "Draft" },
                        { value: "archived", label: "Archived" },
                      ]}
                      {...register("status")}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <ImageUpload
                  label="Product Images"
                  multiple
                  maxFiles={5}
                  value={images}
                  onChange={setImages}
                />
              </div>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ borderRadius: 8, fontSize: 14, padding: "10px 24px" }}
              >
                {submitting && <span className="spinner-border spinner-border-sm me-2" />}
                Create Product
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => router.push("/admin/products")}
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
