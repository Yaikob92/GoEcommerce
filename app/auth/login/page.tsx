'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { authApi } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await authApi.login(form);
      localStorage.setItem('axom_access_token', res.data.access_token);
      localStorage.setItem('axom_refresh_token', res.data.refresh_token);
      router.push('/');
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — editorial panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-axom-dark border-r border-axom-border flex-col justify-end p-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="font-display font-black text-axom-cream/[0.03] leading-none"
            style={{ fontSize: '280px' }}>A</span>
        </div>
        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-widest text-axom-red mb-4">Welcome back</p>
          <h1 className="font-display text-5xl text-axom-cream font-black leading-tight mb-6">
            Sign in to your<br />AXOM account.
          </h1>
          <p className="text-axom-silver text-sm leading-relaxed max-w-sm">
            Access your orders, saved pieces, and exclusive member drops. Precision at every touchpoint.
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm"
        >
          {/* Mobile logo */}
          <Link href="/" className="block lg:hidden font-display text-2xl font-black tracking-widest2 text-axom-cream mb-12">
            AXOM
          </Link>

          <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">Account</p>
          <h2 className="font-display text-3xl text-axom-cream font-black mb-8">Sign In</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-axom-muted mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="input-axom"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-axom-muted mb-2">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="input-axom"
                required
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-axom-red text-xs uppercase tracking-widest"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-axom-border" />
            <span className="text-[10px] text-axom-muted uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-axom-border" />
          </div>

          <p className="mt-6 text-center text-[11px] text-axom-muted">
            No account?{' '}
            <Link href="/auth/register" className="text-axom-cream hover:text-axom-white underline underline-offset-4 transition-colors">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
