"use client";

import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="mb-3">
        <label className="form-label">
          {label}
          {props.required && <span className="text-danger ms-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`form-control ${error ? "is-invalid" : ""} ${className}`}
          style={{ borderRadius: 8, fontSize: 14, padding: "10px 14px" }}
          {...props}
        />
        {error && <div className="invalid-feedback">{error}</div>}
        {helperText && !error && (
          <small className="text-muted">{helperText}</small>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
