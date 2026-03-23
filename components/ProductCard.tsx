'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
  tag?: string | null;
  index?: number;
}

export default function ProductCard({ id, name, price, category, sizes, tag, index = 0 }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizes, setShowSizes] = useState(false);
  const { addItem, openCart } = useCartStore();

  const bgColors = [
    'bg-[#1a1a1a]', 'bg-[#161616]', 'bg-[#1c1c1c]',
    'bg-[#181818]', 'bg-[#141414]', 'bg-[#1e1e1e]'
  ];
  const bgColor = bgColors[index % bgColors.length];

  const handleAddToCart = () => {
    if (!selectedSize && sizes.length > 0) {
      setShowSizes(true);
      return;
    }
    addItem({ id, name, price, category, image: '', size: selectedSize });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer"
    >
      <Link href={`/shop/${id}`}>
        {/* Image area */}
        <div className={`relative overflow-hidden ${bgColor} aspect-[3/4]`}>
          {/* Tag */}
          {tag && (
            <div className="absolute top-3 left-3 z-10 bg-axom-red px-2 py-0.5">
              <span className="text-[9px] text-white uppercase tracking-widest font-medium">{tag}</span>
            </div>
          )}

          {/* Placeholder product visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-axom-border/30 font-display text-6xl font-black select-none">
              {name.charAt(0)}
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-axom-black/20"
          />

          {/* Bottom red line */}
          <div className="product-card-line" />
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-axom-muted mb-1">{category}</p>
            <Link href={`/shop/${id}`}>
              <h3 className="font-display text-axom-cream text-base leading-tight group-hover:text-axom-white transition-colors">
                {name}
              </h3>
            </Link>
          </div>
          <span className="text-axom-red font-display text-lg font-bold flex-shrink-0">${price}</span>
        </div>

        {/* Size selector (shows on click) */}
        <AnimatePresence>
          {showSizes && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-3"
            >
              <p className="text-[10px] uppercase tracking-widest text-axom-muted mb-2">Select Size</p>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSize(s); setShowSizes(false); }}
                    className={`px-2.5 py-1 text-[10px] uppercase tracking-widest border transition-all duration-200 ${
                      selectedSize === s
                        ? 'border-axom-red text-axom-cream bg-axom-red/10'
                        : 'border-axom-border text-axom-silver hover:border-axom-silver'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add to cart */}
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.97 }}
          className={`mt-4 w-full py-2.5 text-[10px] uppercase tracking-widest border transition-all duration-300 flex items-center justify-center gap-2 ${
            added
              ? 'border-axom-red bg-axom-red text-white'
              : 'border-axom-border text-axom-silver hover:border-axom-cream hover:text-axom-cream'
          }`}
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Added
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {showSizes || selectedSize ? 'Add to Cart' : 'Quick Add'}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
