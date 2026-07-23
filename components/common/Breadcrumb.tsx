"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb mb-0" style={{ fontSize: 13, background: "none", padding: 0 }}>
        <li className="breadcrumb-item">
          <Link href="/admin/dashboard" style={{ color: "#8c0d4f", textDecoration: "none" }}>
            <i className="bi bi-house-door" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? "active" : ""}`}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href} style={{ color: "#8c0d4f", textDecoration: "none" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#64748b" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
