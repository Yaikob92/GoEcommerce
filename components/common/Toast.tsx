"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

export interface ToastItem {
  id: string;
  message: string;
  variant: "success" | "error" | "warning" | "info";
}

interface ToastContextType {
  showToast: (message: string, variant?: ToastItem["variant"]) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counterRef = useRef(0);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastItem["variant"] = "info") => {
      const id = `toast-${++counterRef.current}`;
      setToasts((prev) => [...prev, { id, message, variant }]);
      setTimeout(() => removeToast(id), 4000);
    },
    [removeToast]
  );

  const ICONS: Record<string, string> = {
    success: "bi-check-circle-fill",
    error: "bi-x-circle-fill",
    warning: "bi-exclamation-triangle-fill",
    info: "bi-info-circle-fill",
  };

  const COLORS: Record<string, string> = {
    success: "#16a34a",
    error: "#dc2626",
    warning: "#d97706",
    info: "#2563eb",
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 380,
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="toast-show"
            style={{
              background: "#fff",
              borderRadius: 10,
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              animation: "slideInRight 0.3s ease",
              borderLeft: `4px solid ${COLORS[toast.variant]}`,
            }}
          >
            <i
              className={`bi ${ICONS[toast.variant]}`}
              style={{ fontSize: 18, color: COLORS[toast.variant], flexShrink: 0 }}
            />
            <span style={{ fontSize: 14, flex: 1, color: "#1e293b" }}>
              {toast.message}
            </span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                padding: 0,
                fontSize: 16,
              }}
            >
              <i className="bi bi-x" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
