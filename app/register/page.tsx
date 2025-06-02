import Link from "next/link";

export default function RegisterPage() {
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
                <form action="#" method="POST">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          placeholder="Last Name"
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
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
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
                        placeholder="Confirm Password"
                      />
                      <i className="bi bi-eye toggle-password"></i>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Create Account
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      Already have an account? <Link href="/login">Sign in</Link>
                    </p>
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
