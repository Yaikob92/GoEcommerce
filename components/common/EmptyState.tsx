"use client";

import Link from "next/link";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon = "bi-inbox",
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="text-center py-5">
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "#f1f5f9",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className={`bi ${icon}`} style={{ fontSize: 36, color: "#94a3b8" }} />
      </div>
      <h5 className="mt-3 mb-1" style={{ fontWeight: 600, color: "#1e293b" }}>
        {title}
      </h5>
      {description && (
        <p style={{ fontSize: 14, color: "#94a3b8", maxWidth: 360, margin: "0 auto" }}>
          {description}
        </p>
      )}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="btn btn-primary mt-3"
          style={{ borderRadius: 8, fontSize: 14 }}
        >
          <i className="bi bi-plus-lg me-2" />
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && (
        <button
          className="btn btn-primary mt-3"
          style={{ borderRadius: 8, fontSize: 14 }}
          onClick={onAction}
        >
          <i className="bi bi-plus-lg me-2" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
