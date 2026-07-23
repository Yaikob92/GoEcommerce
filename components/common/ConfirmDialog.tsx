"use client";

import Modal from "./Modal";

interface ConfirmDialogProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "primary";
  loading?: boolean;
}

export default function ConfirmDialog({
  show,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  variant = "danger",
  loading,
}: ConfirmDialogProps) {
  const btnClass = variant === "danger" ? "btn-danger" : "btn-primary";

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={title}
      size="sm"
      footer={
        <>
          <button
            type="button"
            className="btn btn-light"
            onClick={onClose}
            disabled={loading}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={`btn ${btnClass}`}
            onClick={onConfirm}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm me-2" />
            )}
            {confirmLabel}
          </button>
        </>
      }
    >
      <p className="mb-0" style={{ fontSize: 14, color: "#64748b" }}>
        {message}
      </p>
    </Modal>
  );
}
