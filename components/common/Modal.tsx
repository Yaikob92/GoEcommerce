"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const SIZE_MAP = { sm: "modal-sm", md: "", lg: "modal-lg", xl: "modal-xl" };

export default function Modal({
  show,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (show) {
      el.classList.add("show");
      el.style.display = "block";
      document.body.classList.add("modal-open");
    } else {
      el.classList.remove("show");
      el.style.display = "none";
      document.body.classList.remove("modal-open");
    }
    return () => {
      el.classList.remove("show");
      el.style.display = "none";
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} />
      <div
        ref={ref}
        className={`modal fade ${SIZE_MAP[size]}`}
        tabIndex={-1}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: 12, border: "none" }}>
            <div
              className="modal-header"
              style={{ borderBottom: "1px solid #e9ecef", padding: "16px 20px" }}
            >
              <h5 className="modal-title" style={{ fontWeight: 600, fontSize: 16 }}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body" style={{ padding: "16px 20px" }}>
              {children}
            </div>
            {footer && (
              <div
                className="modal-footer"
                style={{ borderTop: "1px solid #e9ecef", padding: "12px 20px" }}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
