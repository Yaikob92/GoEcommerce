"use client";

import { forwardRef } from "react";

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, placeholder, className = "", ...props }, ref) => {
    return (
      <div className="mb-3">
        <label className="form-label">
          {label}
          {props.required && <span className="text-danger ms-1">*</span>}
        </label>
        <select
          ref={ref}
          className={`form-select ${error ? "is-invalid" : ""} ${className}`}
          style={{ borderRadius: 8, fontSize: 14, padding: "10px 14px" }}
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
export default FormSelect;
