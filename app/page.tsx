'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/api';

const MARQUEE_ITEMS = ['NEW COLLECTION', 'SS26', 'PRECISION DARKWEAR', 'AXOM', 'LIMITED DROPS', 'AVANT-GARDE'];

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const featured = MOCK_PRODUCTS.slice(0, 3);
  const remaining = MOCK_PRODUCTS.slice(3);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        {/* Parallax BG */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 bg-axom-void">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(var(--axom-cream) 1px, transparent 1px), linear-gradient(90deg, var(--axom-cream) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-axom-steel/30 via-transparent to-transparent" />
          {/* Big background letter */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="font-display font-black text-axom-cream leading-none"
              style={{ fontSize: 'clamp(200px, 40vw, 600px)' }}
            >
              A
            </motion.span>
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24"
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            {/* Category tag */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-axom-red" />
              <span className="text-[10px] uppercase tracking-widest text-axom-red">SS26 Collection</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="font-display font-black text-axom-cream leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(56px, 10vw, 160px)' }}>
              Wear<br />
              <span className="text-stroke">Nothing</span><br />
              Ordinary.
            </motion.h1>

            {/* Sub & CTA */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <p className="text-axom-silver text-sm max-w-xs leading-relaxed">
                Avant-garde silhouettes engineered for those who reject the ordinary. Precision construction. Zero compromise.
              </p>
              <Link href="/shop" className="btn-primary flex-shrink-0">
                <span>Explore Collection</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-12 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-axom-muted [writing-mode:vertical-rl]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-axom-muted to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-axom-border py-3 overflow-hidden bg-axom-dark">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6">
              <span className="text-[10px] uppercase tracking-widest text-axom-muted">{item}</span>
              <span className="text-axom-red text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED ASYMMETRIC GRID ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">Featured</p>
            <h2 className="font-display text-4xl md:text-6xl text-axom-cream">New Arrivals</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden md:block">View All</Link>
        </div>

        {/* Asymmetric 3-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Hero product — large */}
          <div className="md:col-span-5 md:row-span-2">
            <ProductCard {...featured[0]} index={0} />
          </div>
          {/* Right top */}
          <div className="md:col-span-4">
            <ProductCard {...featured[1]} index={1} />
          </div>
          {/* Right bottom – editorial text block */}
          <div className="md:col-span-3 bg-axom-steel border border-axom-border flex flex-col justify-end p-8">
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-3">Philosophy</p>
            <p className="font-display text-2xl text-axom-cream leading-tight mb-4">
              "Darkness is not absence. It is presence without apology."
            </p>
            <div className="w-8 h-px bg-axom-red" />
          </div>
          {/* Bottom right */}
          <div className="md:col-span-4">
            <ProductCard {...featured[2]} index={2} />
          </div>
        </div>
      </section>

      {/* ── CATEGORY BANNER ── */}
      <section className="border-y border-axom-border bg-axom-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-axom-border">
            {['Outerwear', 'Bottoms', 'Tops', 'Footwear'].map((cat, i) => (
              <Link key={cat} href="/shop"
                className="bg-axom-dark px-6 py-10 group flex flex-col justify-between min-h-[180px] hover:bg-axom-steel transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-widest text-axom-muted">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl text-axom-cream mb-2 group-hover:text-axom-white transition-colors">{cat}</h3>
                  <div className="flex items-center gap-2 text-axom-red">
                    <span className="text-[10px] uppercase tracking-widest">Explore</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    >→</motion.span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PRODUCTS GRID ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">Catalog</p>
            <h2 className="font-display text-4xl md:text-5xl text-axom-cream">All Pieces</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-8">
          {remaining.map((p, i) => (
            <ProductCard key={p.id} {...p} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/shop" className="btn-ghost">Load More</Link>
        </div>
      </section>

      {/* ── EDITORIAL CTA ── */}
      <section className="relative overflow-hidden bg-axom-dark border-y border-axom-border py-24 md:py-36">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="font-display font-black text-axom-cream/[0.02] leading-none"
            style={{ fontSize: 'clamp(120px, 25vw, 400px)' }}>
            AXOM
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-axom-red mb-4">Membership</p>
            <h2 className="font-display text-4xl md:text-6xl text-axom-cream leading-tight max-w-lg">
              Be first.<br />Be rare.
            </h2>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-4 w-full max-w-sm">
            <p className="text-axom-silver text-sm leading-relaxed">
              Join the AXOM inner circle. Early access to limited drops, exclusive collaborations, and zero noise.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-axom flex-1"
              />
              <button className="btn-primary flex-shrink-0 px-6">
                <span>Join</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .text-stroke {
          -webkit-text-stroke: 1px var(--axom-cream);
          color: transparent;
        }
      `}</style>
    </>
  );
}
