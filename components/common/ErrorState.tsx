"use client";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="text-center py-5">
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "#fee2e2",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="bi bi-exclamation-triangle" style={{ fontSize: 36, color: "#dc2626" }} />
      </div>
      <h5 className="mt-3 mb-1" style={{ fontWeight: 600, color: "#1e293b" }}>
        Error
      </h5>
      <p style={{ fontSize: 14, color: "#94a3b8", maxWidth: 360, margin: "0 auto" }}>
        {message}
      </p>
      {onRetry && (
        <button
          className="btn btn-outline-primary mt-3"
          style={{ borderRadius: 8, fontSize: 14 }}
          onClick={onRetry}
        >
          <i className="bi bi-arrow-clockwise me-2" />
          Try Again
        </button>
      )}
    </div>
  );
}
