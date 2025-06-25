"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/");
    } catch (err: unknown) {
      const apiErr = err as { message?: string; error?: { code?: string } };
      const code = apiErr?.error?.code;

      if (code === "EMAIL_NOT_VERIFIED") {
        setError("Please verify your email before logging in. Check your inbox for the verification link.");
      } else if (code === "ACCOUNT_LOCKED") {
        setError("Account locked due to too many failed attempts. Try again in 15 minutes.");
      } else if (code === "INVALID_CREDENTIALS") {
        setError("Invalid email or password.");
      } else {
        setError(apiErr?.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return null;

  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background position-relative">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Login</li>
            </ol>
          </nav>
          <h1>Login</h1>
        </div>
      </div>

      {/* Login Section */}
      <section id="login" className="login section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8" data-aos="zoom-in" data-aos-delay="200">
              <div className="login-form-wrapper">
                <div className="login-header text-center">
                  <h2>Login</h2>
                  <p>Welcome back! Please enter your details</p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Link href="/forgot-password" className="forgot-link">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      Remember for 30 days
                    </label>
                  </div>

                  <div className="d-grid gap-2 mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Signing in...
                        </>
                      ) : (
                        "Sign in"
                      )}
                    </button>
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-google me-2"></i>Sign in with Google
                    </button>
                  </div>

                  <div className="signup-link text-center">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/register">Sign up for free</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
