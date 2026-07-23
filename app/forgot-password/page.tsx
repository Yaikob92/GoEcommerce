"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await apiPost("/api/auth/forgot-password", { email });
      setStatus("success");
      setMessage("If an account exists with that email, a password reset link has been sent.");
    } catch {
      setStatus("success");
      setMessage("If an account exists with that email, a password reset link has been sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-title light-background position-relative">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Forgot Password</li>
            </ol>
          </nav>
          <h1>Forgot Password</h1>
        </div>
      </div>

      <section id="forgot-password" className="login section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8" data-aos="zoom-in" data-aos-delay="200">
              <div className="login-form-wrapper">
                <div className="login-header text-center">
                  <h2>Forgot Password?</h2>
                  <p>Enter your email address and we&apos;ll send you a link to reset your password.</p>
                </div>

                {status === "success" && (
                  <div className="alert alert-success" role="alert">
                    {message}
                  </div>
                )}

                {status === "error" && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="d-grid gap-2 mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                  </div>

                  <div className="signup-link text-center">
                    <span>Remember your password?</span>
                    <Link href="/login">Sign in</Link>
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
