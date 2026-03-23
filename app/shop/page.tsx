'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/api';

const CATEGORIES = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Footwear'];
const SORT_OPTIONS = ['Newest', 'Price: Low to High', 'Price: High to Low'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filtered = MOCK_PRODUCTS
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="border-b border-axom-border bg-axom-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">AXOM Store</p>
            <h1 className="font-display text-5xl md:text-7xl text-axom-cream font-black">Shop All</h1>
          </motion.div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-axom-void/95 backdrop-blur border-b border-axom-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4 overflow-x-auto">
          {/* Category filters */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-axom-cream text-axom-black'
                    : 'text-axom-muted hover:text-axom-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-axom-border text-axom-silver text-[10px] uppercase tracking-widest px-3 py-1.5 outline-none cursor-pointer flex-shrink-0"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-axom-dark text-axom-cream">{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        <p className="text-[10px] uppercase tracking-widest text-axom-muted mb-8">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8"
        >
          {filtered.map((p, i) => (
            <ProductCard key={p.id} {...p} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
