"use client";

import { forwardRef } from "react";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="mb-3">
        <label className="form-label">
          {label}
          {props.required && <span className="text-danger ms-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={`form-control ${error ? "is-invalid" : ""} ${className}`}
          style={{ borderRadius: 8, fontSize: 14, padding: "10px 14px", minHeight: 100 }}
          {...props}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
export default FormTextarea;
