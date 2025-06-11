import Link from "next/link";

export default function NotFound() {
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
              <li className="current">404</li>
            </ol>
          </nav>
          <h1>404</h1>
        </div>
      </div>

      {/* Error 404 Section */}
      <section id="error-404" className="error-404 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="error-content text-center text-lg-start">
                <span className="error-badge" data-aos="fade-down" data-aos-delay="300">
                  404 Error
                </span>
                <h1 className="error-title mt-4" data-aos="fade-up" data-aos-delay="400">
                  Lost in Space?
                </h1>
                <p className="error-text mt-3" data-aos="fade-up" data-aos-delay="500">
                  Looks like you&apos;ve ventured into uncharted territory. The
                  page you&apos;re looking for has drifted off into space.
                </p>
                <div className="error-actions mt-4" data-aos="fade-up" data-aos-delay="600">
                  <Link href="/" className="btn btn-outline">
                    <i className="bi bi-arrow-left me-2"></i>Return to Earth
                  </Link>
                  <a href="#" className="btn btn-solid ms-3">
                    <i className="bi bi-search me-2"></i>Explore Pages
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="error-illustration text-center">
                <div className="illustration-container">
                  <div className="planet">
                    <i className="bi bi-globe2"></i>
                  </div>
                  <div className="astronaut">
                    <i className="bi bi-person-workspace"></i>
                  </div>
                  <div className="stars">
                    <i className="bi bi-star-fill star-1"></i>
                    <i className="bi bi-star-fill star-2"></i>
                    <i className="bi bi-star-fill star-3"></i>
                    <i className="bi bi-star-fill star-4"></i>
                    <i className="bi bi-star-fill star-5"></i>
                  </div>
                </div>
                <div className="support-text mt-4">
                  <p>Need help finding your way?</p>
                  <a href="#" className="support-link">
                    <i className="bi bi-life-preserver me-2"></i>Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
