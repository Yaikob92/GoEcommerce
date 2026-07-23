"use client";

interface SkeletonLoaderProps {
  rows?: number;
  columns?: number;
  type?: "table" | "card" | "stats" | "form";
}

function Pulse({ width, height, borderRadius = 4 }: { width?: string | number; height?: string | number; borderRadius?: number }) {
  return (
    <div
      className="skeleton-pulse"
      style={{ width: width || "100%", height: height || 16, borderRadius }}
    />
  );
}

export default function SkeletonLoader({ rows = 5, columns = 4, type = "table" }: SkeletonLoaderProps) {
  if (type === "stats") {
    return (
      <div className="row g-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="col-sm-6 col-lg-3">
            <div className="stat-card">
              <Pulse width={48} height={48} borderRadius={12} />
              <div className="flex-grow-1">
                <Pulse width="60%" height={24} />
                <Pulse width="40%" height={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="row g-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="col-sm-6 col-lg-4">
            <div className="admin-card">
              <div className="admin-card-body">
                <Pulse height={180} borderRadius={8} />
                <Pulse width="70%" height={16} />
                <Pulse width="50%" height={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "form") {
    return (
      <div className="admin-card">
        <div className="admin-card-body p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="mb-3">
              <Pulse width="30%" height={14} />
              <div className="mt-2">
                <Pulse height={40} borderRadius={8} />
              </div>
            </div>
          ))}
          <Pulse width={120} height={38} borderRadius={8} />
        </div>
      </div>
    );
  }

  return (
    <div className="admin-card">
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              {Array.from({ length: columns }).map((_, i) => (
                <th key={i}>
                  <Pulse width="70%" height={12} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                {Array.from({ length: columns }).map((_, colIdx) => (
                  <td key={colIdx}>
                    <Pulse width={colIdx === 0 ? "80%" : "60%"} height={14} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
