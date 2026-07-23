"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import { apiPost } from "@/lib/api";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!token) {
      setStatus("error");
      setMessage("No reset token provided.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setStatus("error");
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await apiPost("/api/auth/reset-password", { token, password });
      setStatus("success");
      setMessage(res.message || "Password reset successfully!");
    } catch (err: unknown) {
      const apiErr = err as { message?: string };
      setStatus("error");
      setMessage(apiErr.message || "Failed to reset password. The link may have expired.");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <>
        <div className="page-title light-background position-relative">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">Reset Password</li>
              </ol>
            </nav>
            <h1>Reset Password</h1>
          </div>
        </div>
        <section id="reset-password" className="login section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8" data-aos="zoom-in" data-aos-delay="200">
                <div className="login-form-wrapper text-center">
                  <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: "3rem" }}></i>
                  <h2 className="mt-3">Invalid Link</h2>
                  <p>This password reset link is invalid or has expired.</p>
                  <Link href="/forgot-password" className="btn btn-primary mt-3">
                    Request New Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="page-title light-background position-relative">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Reset Password</li>
            </ol>
          </nav>
          <h1>Reset Password</h1>
        </div>
      </div>

      <section id="reset-password" className="login section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8" data-aos="zoom-in" data-aos-delay="200">
              <div className="login-form-wrapper">
                <div className="login-header text-center">
                  <h2>Reset Password</h2>
                  <p>Enter your new password below.</p>
                </div>

                {status === "success" && (
                  <>
                    <div className="alert alert-success" role="alert">
                      {message}
                    </div>
                    <div className="text-center">
                      <Link href="/login" className="btn btn-primary">
                        Sign In
                      </Link>
                    </div>
                  </>
                )}

                {status === "error" && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}

                {status !== "success" && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter new password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    <div className="d-grid gap-2 mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Resetting..." : "Reset Password"}
                      </button>
                    </div>

                    <div className="signup-link text-center">
                      <span>Remember your password?</span>
                      <Link href="/login">Sign in</Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <>
          <div className="page-title light-background position-relative">
            <div className="container">
              <nav className="breadcrumbs">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="current">Reset Password</li>
                </ol>
              </nav>
              <h1>Reset Password</h1>
            </div>
          </div>
          <section id="reset-password" className="login section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
