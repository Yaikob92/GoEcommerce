'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { MOCK_PRODUCTS } from '@/lib/api';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id);
  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const { addItem, openCart } = useCartStore();

  const related = MOCK_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    addItem({ id: product.id, name: product.name, price: product.price, category: product.category, image: '', size: selectedSize });
    setAdded(true);
    setTimeout(() => { setAdded(false); openCart(); }, 1400);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-axom-muted">
        <Link href="/" className="hover:text-axom-cream transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-axom-cream transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-axom-silver">{product.name}</span>
      </div>

      {/* PDP — split screen */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* LEFT — sticky image */}
          <div className="md:sticky md:top-20 md:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-axom-steel aspect-[3/4] overflow-hidden"
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-axom-border/20 select-none"
                  style={{ fontSize: 'clamp(100px, 20vw, 300px)' }}>
                  {product.name.charAt(0)}
                </span>
              </div>
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-4 left-4 bg-axom-red px-2.5 py-1">
                  <span className="text-[9px] text-white uppercase tracking-widest">{product.tag}</span>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT — scrolling details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="py-2"
          >
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-3">{product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl text-axom-cream font-black leading-tight mb-4">
              {product.name}
            </h1>
            <p className="font-display text-3xl text-axom-red mb-8">${product.price}</p>

            {/* Description */}
            <p className="text-axom-silver text-sm leading-loose mb-8 max-w-md">
              Engineered from premium weight fabric with a deliberately oversized silhouette. The interior is fully lined with brushed viscose. A signature piece for those who understand restraint as the ultimate luxury.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                ['Material', '78% Wool, 22% Polyamide'],
                ['Origin', 'Crafted in Portugal'],
                ['Weight', 'Heavy Weight'],
                ['Fit', 'Oversized'],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-axom-border pt-3">
                  <p className="text-[9px] uppercase tracking-widest text-axom-muted mb-0.5">{label}</p>
                  <p className="text-xs text-axom-cream">{value}</p>
                </div>
              ))}
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] uppercase tracking-widest text-axom-silver">Size</p>
                <button className="text-[10px] uppercase tracking-widest text-axom-muted underline hover:text-axom-cream">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSize(s); setError(''); }}
                    className={`py-2.5 text-[10px] uppercase tracking-widest border transition-all duration-200 ${
                      selectedSize === s
                        ? 'border-axom-cream text-axom-cream bg-axom-steel'
                        : 'border-axom-border text-axom-muted hover:border-axom-silver hover:text-axom-silver'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-axom-red text-[10px] uppercase tracking-widest mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Add to cart CTA */}
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.98 }}
              className={`btn-primary w-full py-4 text-sm mb-4 ${added ? '!bg-axom-red !text-white' : ''}`}
            >
              <span className="flex items-center justify-center gap-3">
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="ok"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.button>

            <button className="btn-ghost w-full py-3.5 text-sm">Save to Wishlist</button>
          </motion.div>
        </div>
      </div>

      {/* Related */}
      <div className="border-t border-axom-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">More like this</p>
          <h2 className="font-display text-3xl text-axom-cream mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <div key={p.id}>
                <Link href={`/shop/${p.id}`} className="block bg-axom-steel aspect-[3/4] mb-4 hover:opacity-80 transition-opacity flex items-center justify-center">
                  <span className="font-display font-black text-axom-border/20 text-6xl">{p.name.charAt(0)}</span>
                </Link>
                <p className="font-display text-sm text-axom-cream">{p.name}</p>
                <p className="text-axom-red text-sm mt-1">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
