"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const { register, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError("First name and last name are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await register({
        email,
        password,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
      });
      setSuccess(res.message || "Account created. Please check your email to verify your account.");
    } catch (err: unknown) {
      const apiErr = err as { message?: string; error?: { code?: string } };
      const code = apiErr?.error?.code;

      if (code === "EMAIL_TAKEN") {
        setError("An account with this email already exists.");
      } else if (code === "WEAK_PASSWORD") {
        setError(apiErr?.message || "Password does not meet requirements.");
      } else {
        setError(apiErr?.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return null;

  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Register</li>
            </ol>
          </nav>
          <h1>Register</h1>
        </div>
      </div>

      {/* Register Section */}
      <section id="register" className="register section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="registration-form-wrapper" data-aos="zoom-in" data-aos-delay="200">
                <div className="section-header mb-4 text-center">
                  <h2>Create Your Account</h2>
                  <p>Sign up to start shopping and enjoy exclusive offers</p>
                </div>

                {success ? (
                  <div className="text-center">
                    <div className="alert alert-success" role="alert">
                      <i className="bi bi-check-circle me-2"></i>
                      {success}
                    </div>
                    <p className="mt-3">
                      Already verified? <Link href="/login">Sign in</Link>
                    </p>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="first_name"
                              placeholder="First Name"
                              required
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="last_name"
                              placeholder="Last Name"
                              required
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className="bi bi-eye toggle-password"></i>
                        </div>
                        <small className="password-requirements">
                          Must be at least 8 characters long and include uppercase, lowercase, number,
                          and special character
                        </small>
                      </div>

                      <div className="form-group mb-4">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="password-input">
                          <input
                            type="password"
                            className="form-control"
                            name="confirm_password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <i className="bi bi-eye toggle-password"></i>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Creating Account...
                            </>
                          ) : (
                            "Create Account"
                          )}
                        </button>
                      </div>

                      <div className="text-center">
                        <p className="mb-0">
                          Already have an account? <Link href="/login">Sign in</Link>
                        </p>
                      </div>
                    </form>
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
