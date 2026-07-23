"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { apiPost } from "@/lib/api";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    () => (token ? "loading" : "error")
  );
  const [message, setMessage] = useState(() =>
    token ? "" : "No verification token provided."
  );

  useEffect(() => {
    if (!token) return;

    let active = true;
    (async () => {
      try {
        const res = await apiPost("/api/auth/verify-email", { token });
        if (!active) return;
        setStatus("success");
        setMessage(res.message || "Email verified successfully!");
      } catch (err: unknown) {
        if (!active) return;
        const apiErr = err as { message?: string };
        setStatus("error");
        setMessage(apiErr.message || "Verification failed. The link may have expired.");
      }
    })();
    return () => {
      active = false;
    };
  }, [token]);

  return (
    <>
      <div className="page-title light-background position-relative">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Verify Email</li>
            </ol>
          </nav>
          <h1>Verify Email</h1>
        </div>
      </div>

      <section id="verify-email" className="login section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="login-form-wrapper text-center">
                {status === "loading" && (
                  <>
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h2>Verifying your email...</h2>
                    <p>Please wait while we verify your email address.</p>
                  </>
                )}
                {status === "success" && (
                  <>
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "3rem" }}></i>
                    <h2 className="mt-3">Email Verified!</h2>
                    <p>{message}</p>
                    <Link href="/login" className="btn btn-primary mt-3">
                      Sign In
                    </Link>
                  </>
                )}
                {status === "error" && (
                  <>
                    <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: "3rem" }}></i>
                    <h2 className="mt-3">Verification Failed</h2>
                    <p>{message}</p>
                    <Link href="/login" className="btn btn-primary mt-3">
                      Back to Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function VerifyEmailPage() {
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
                  <li className="current">Verify Email</li>
                </ol>
              </nav>
              <h1>Verify Email</h1>
            </div>
          </div>
          <section id="verify-email" className="login section">
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
      <VerifyEmailContent />
    </Suspense>
  );
}
