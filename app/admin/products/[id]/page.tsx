"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiGet, apiPut } from "@/lib/api";
import Breadcrumb from "@/components/common/Breadcrumb";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";
import FormTextarea from "@/components/common/FormTextarea";
import ImageUpload from "@/components/common/ImageUpload";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import ErrorState from "@/components/common/ErrorState";
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

interface ProductData {
  id: string;
  name: string;
  description: string;
  category_id: string;
  price: number;
  discount_price: number;
  quantity: number;
  sku: string;
  status: string;
  image_url: string;
}

export default function AdminEditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  const { showToast } = useToast();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [productRes, categoriesRes] = await Promise.all([
        apiGet<ProductData>(`/api/v1/admin/products/${productId}`),
        apiGet<{ categories: Category[] }>("/api/v1/admin/categories?limit=100"),
      ]);

      if (productRes.success && productRes.data) {
        setProduct(productRes.data);
        reset({
          name: productRes.data.name,
          description: productRes.data.description,
          category_id: productRes.data.category_id,
          price: productRes.data.price,
          discount_price: productRes.data.discount_price || undefined,
          quantity: productRes.data.quantity,
          sku: productRes.data.sku,
          status: productRes.data.status,
        });
      } else {
        setError("Product not found.");
      }

      if (categoriesRes.success && categoriesRes.data) {
        setCategories(categoriesRes.data.categories || []);
      }
    } catch {
      setError("Failed to load product data.");
    } finally {
      setLoading(false);
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

      const res = await apiPut(`/api/v1/admin/products/${productId}`, formData);
      if (res.success) {
        showToast("Product updated successfully", "success");
        router.push("/admin/products");
      } else {
        showToast(res.message || "Failed to update product", "error");
      }
    } catch {
      showToast("Failed to update product", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Breadcrumb
          items={[
            { label: "Products", href: "/admin/products" },
            { label: "Edit Product" },
          ]}
        />
        <SkeletonLoader type="form" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <Breadcrumb
          items={[
            { label: "Products", href: "/admin/products" },
            { label: "Edit Product" },
          ]}
        />
        <ErrorState message={error || "Product not found"} onRetry={fetchData} />
      </div>
    );
  }

  return (
    <div className="admin-form-page">
      <Breadcrumb
        items={[
          { label: "Products", href: "/admin/products" },
          { label: product.name },
        ]}
      />

      <div className="admin-card" style={{ maxWidth: 800 }}>
        <div className="admin-card-header d-flex align-items-center justify-content-between">
          <h5>Edit Product</h5>
          <span
            className="badge"
            style={{
              background: product.status === "active" ? "#dcfce7" : "#f1f5f9",
              color: product.status === "active" ? "#166534" : "#64748b",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: 6,
            }}
          >
            {product.status}
          </span>
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
                Update Product
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
