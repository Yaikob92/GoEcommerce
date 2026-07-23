"use client";

const VARIANT_STYLES: Record<string, { bg: string; color: string }> = {
  success: { bg: "#dcfce7", color: "#166534" },
  danger: { bg: "#fee2e2", color: "#991b1b" },
  warning: { bg: "#fef3c7", color: "#92400e" },
  info: { bg: "#dbeafe", color: "#1e40af" },
  primary: { bg: "#ede9fe", color: "#5b21b6" },
  secondary: { bg: "#f1f5f9", color: "#475569" },
  muted: { bg: "#f1f5f9", color: "#94a3b8" },
};

interface BadgeProps {
  variant?: string;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export default function Badge({
  variant = "secondary",
  children,
  className = "",
  dot,
}: BadgeProps) {
  const style = VARIANT_STYLES[variant] || VARIANT_STYLES.secondary;

  return (
    <span
      className={`badge ${className}`}
      style={{
        background: style.bg,
        color: style.color,
        fontWeight: 500,
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 6,
        display: "inline-flex",
        alignItems: "center",
        gap: dot ? 6 : 0,
      }}
    >
      {dot && (
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: style.color,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}

export function getStatusBadge(status: string) {
  const map: Record<string, { variant: string; label: string }> = {
    active: { variant: "success", label: "Active" },
    inactive: { variant: "muted", label: "Inactive" },
    pending: { variant: "warning", label: "Pending" },
    paid: { variant: "info", label: "Paid" },
    processing: { variant: "primary", label: "Processing" },
    shipped: { variant: "info", label: "Shipped" },
    delivered: { variant: "success", label: "Delivered" },
    cancelled: { variant: "danger", label: "Cancelled" },
    in_stock: { variant: "success", label: "In Stock" },
    out_of_stock: { variant: "danger", label: "Out of Stock" },
    low_stock: { variant: "warning", label: "Low Stock" },
  };
  const match = map[status] || { variant: "secondary", label: status };
  return <Badge variant={match.variant} dot>{match.label}</Badge>;
}
