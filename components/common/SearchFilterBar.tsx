"use client";

import React from "react";

export interface FilterOption {
  value: string;
  label: string;
}

interface SearchFilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filters?: {
    key: string;
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
  }[];
  sortOptions?: FilterOption[];
  sortValue?: string;
  onSortChange?: (value: string) => void;
  actions?: React.ReactNode;
}

export default function SearchFilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filters,
  sortOptions,
  sortValue,
  onSortChange,
  actions,
}: SearchFilterBarProps) {
  return (
    <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
      <div className="position-relative flex-grow-1" style={{ maxWidth: 320 }}>
        <i
          className="bi bi-search position-absolute"
          style={{ left: 12, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 14 }}
        />
        <input
          type="text"
          className="form-control"
          style={{ paddingLeft: 36, borderRadius: 8, fontSize: 14 }}
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {filters?.map((filter) => (
        <select
          key={filter.key}
          className="form-select"
          style={{ width: "auto", minWidth: 140, borderRadius: 8, fontSize: 14 }}
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
        >
          <option value="">{filter.label}</option>
          {filter.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}

      {sortOptions && onSortChange && (
        <select
          className="form-select"
          style={{ width: "auto", minWidth: 160, borderRadius: 8, fontSize: 14 }}
          value={sortValue || ""}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {actions && <div className="ms-auto">{actions}</div>}
    </div>
  );
}
