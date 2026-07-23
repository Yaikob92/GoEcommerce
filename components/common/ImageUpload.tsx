"use client";

import { useRef, useState } from "react";

interface ImageUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  value: File[];
  onChange: (files: File[]) => void;
  error?: string;
}

export default function ImageUpload({
  label = "Images",
  accept = "image/*",
  multiple = false,
  maxFiles = 5,
  value,
  onChange,
  error,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    const combined = [...value, ...newFiles].slice(0, maxFiles);
    onChange(combined);
  };

  const removeFile = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        style={{
          border: `2px dashed ${error ? "#dc2626" : dragOver ? "#8c0d4f" : "#e2e8f0"}`,
          borderRadius: 10,
          padding: "24px",
          textAlign: "center",
          cursor: "pointer",
          background: dragOver ? "#fdf2f8" : "#fafbfc",
          transition: "all 0.2s",
        }}
      >
        <i className="bi bi-cloud-arrow-up" style={{ fontSize: 32, color: "#94a3b8" }} />
        <p className="mb-1 mt-2" style={{ fontSize: 14, color: "#64748b" }}>
          Drag & drop or <span style={{ color: "#8c0d4f", fontWeight: 500 }}>browse</span>
        </p>
        <p className="mb-0" style={{ fontSize: 12, color: "#94a3b8" }}>
          PNG, JPG, WEBP (max {maxFiles} files)
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="d-none"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {error && (
        <div className="text-danger mt-1" style={{ fontSize: 13 }}>
          {error}
        </div>
      )}
      {value.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-2">
          {value.map((file, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: 80,
                height: 80,
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #e2e8f0",
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  fontSize: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-x" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
