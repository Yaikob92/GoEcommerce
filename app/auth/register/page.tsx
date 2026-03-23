'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { authApi } from '@/lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await authApi.register(form);
      // Auto-login after registration
      const res = await authApi.login({ email: form.email, password: form.password });
      localStorage.setItem('axom_access_token', res.data.access_token);
      localStorage.setItem('axom_refresh_token', res.data.refresh_token);
      router.push('/');
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-axom-dark border-r border-axom-border flex-col justify-end p-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="font-display font-black text-axom-cream/[0.03] leading-none"
            style={{ fontSize: '280px' }}>X</span>
        </div>
        {/* Animated red accent lines */}
        <div className="absolute top-1/3 left-0 w-16 h-px bg-axom-red" />
        <div className="absolute top-1/3 right-0 w-16 h-px bg-axom-red" />
        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-widest text-axom-red mb-4">Join AXOM</p>
          <h1 className="font-display text-5xl text-axom-cream font-black leading-tight mb-6">
            Join the<br />inner circle.
          </h1>
          <div className="flex flex-col gap-3">
            {['Early access to limited drops', 'Exclusive member pricing', 'Zero spam. Ever.'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-axom-red rounded-full" />
                <p className="text-axom-silver text-xs">{item}</p>
              </div>
            ))}
          </div>
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
          <Link href="/" className="block lg:hidden font-display text-2xl font-black tracking-widest2 text-axom-cream mb-12">
            AXOM
          </Link>

          <p className="text-[10px] uppercase tracking-widest text-axom-red mb-2">New Here</p>
          <h2 className="font-display text-3xl text-axom-cream font-black mb-8">Create Account</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-axom-muted mb-2">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="input-axom"
                required
                minLength={2}
              />
            </div>
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
                placeholder="Min. 6 characters"
                className="input-axom"
                required
                minLength={6}
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
              <span>{loading ? 'Creating account...' : 'Create Account'}</span>
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-axom-muted">
            Already a member?{' '}
            <Link href="/auth/login" className="text-axom-cream hover:text-axom-white underline underline-offset-4 transition-colors">
              Sign in
            </Link>
          </p>

          <p className="mt-4 text-center text-[10px] text-axom-muted leading-relaxed">
            By creating an account, you agree to our{' '}
            <a href="#" className="underline hover:text-axom-silver">Terms</a> and{' '}
            <a href="#" className="underline hover:text-axom-silver">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
