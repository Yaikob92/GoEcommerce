"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  totalItems,
  limit,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalItems);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
      <span className="text-muted" style={{ fontSize: 13 }}>
        Showing {startItem} to {endItem} of {totalItems.toLocaleString()} entries
      </span>
      <nav>
        <ul className="pagination pagination-sm mb-0">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page - 1)}
              disabled={page === 1}
            >
              <i className="bi bi-chevron-left" />
            </button>
          </li>
          {getPageNumbers().map((p, i) =>
            p === "..." ? (
              <li key={`ellipsis-${i}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            ) : (
              <li
                key={p}
                className={`page-item ${page === p ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(p)}
                >
                  {p}
                </button>
              </li>
            )
          )}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page + 1)}
              disabled={page === totalPages}
            >
              <i className="bi bi-chevron-right" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}


