"use client";

import { useState } from "react";

export default function QuantitySelector({
  defaultValue = 1,
  min = 1,
  max = 24,
}: {
  defaultValue?: number;
  min?: number;
  max?: number;
}) {
  const [quantity, setQuantity] = useState(defaultValue);

  const decrease = () => {
    setQuantity((prev) => Math.max(min, prev - 1));
  };

  const increase = () => {
    setQuantity((prev) => Math.min(max, prev + 1));
  };

  return (
    <div className="quantity-selector">
      <button
        className="quantity-btn decrease"
        type="button"
        onClick={decrease}
        disabled={quantity <= min}
      >
        <i className="bi bi-dash"></i>
      </button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        min={min}
        max={max}
        readOnly
      />
      <button
        className="quantity-btn increase"
        type="button"
        onClick={increase}
        disabled={quantity >= max}
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
}
