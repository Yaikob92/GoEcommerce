'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-axom-void border-l border-axom-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-axom-border">
              <div>
                <h2 className="font-display text-xl text-axom-cream">Your Cart</h2>
                <p className="text-[11px] text-axom-silver uppercase tracking-widest mt-0.5">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="text-axom-muted hover:text-axom-cream transition-colors"
                aria-label="Close cart"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="text-axom-border">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                  <p className="text-axom-muted text-sm uppercase tracking-widest">Your cart is empty</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-4 py-5 border-b border-axom-border">
                        {/* Image placeholder */}
                        <div className="w-20 h-24 bg-axom-steel flex-shrink-0 shimmer" />

                        <div className="flex-1 min-w-0">
                          <p className="font-display text-sm text-axom-cream leading-tight">{item.name}</p>
                          {item.size && (
                            <p className="text-[10px] text-axom-muted uppercase tracking-widest mt-1">Size: {item.size}</p>
                          )}
                          <p className="text-axom-red font-medium mt-1 text-sm">${item.price}</p>

                          <div className="flex items-center justify-between mt-3">
                            {/* Qty controls */}
                            <div className="flex items-center border border-axom-border">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                                className="w-7 h-7 flex items-center justify-center text-axom-silver hover:text-axom-cream transition-colors text-sm"
                              >−</button>
                              <span className="w-8 text-center text-xs text-axom-cream">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                                className="w-7 h-7 flex items-center justify-center text-axom-silver hover:text-axom-cream transition-colors text-sm"
                              >+</button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id, item.size)}
                              className="text-[10px] uppercase tracking-widest text-axom-muted hover:text-axom-red transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-axom-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-widest text-axom-silver">Subtotal</span>
                  <span className="font-display text-xl text-axom-cream">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-axom-muted mb-5">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full text-center">
                  <span>Proceed to Checkout</span>
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
