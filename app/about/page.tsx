import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">About</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About 2 Section */}
      <section id="about-2" className="about-2 section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <div className="intro-block">
                <span className="label-badge">
                  <i className="bi bi-layers"></i> Explore Details
                </span>
                <h2 className="section-heading">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </h2>
                <p className="section-desc">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa.
                </p>
                <a href="#" className="btn-primary-action">
                  Find Out More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="video-card">
                <img
                  src="/img/about/about-wide3.png"
                  className="img-fluid"
                  alt="About video"
                />
                <a
                  href="https://www.youtube.com/watch?v=wnHW6o8WMas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-trigger"
                  title="Watch Video"
                >
                  <i className="bi bi-play-fill"></i>
                </a>
              </div>
              <div className="row mt-3 gy-3">
                <div className="col-sm-6">
                  <p className="supporting-text">
                    Corporis omnis consequatur quisquam ex consequuntur quo omnis
                    eligendi amet eos ut officiis soluta.
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="supporting-text">
                    Mollitia qui quidem dolores praesentium quasi ut et
                    voluptates repudiandae sint molestiae quo eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <div className="feature-content">
                  <h3>
                    <a href="#" className="stretched-link">
                      Inventore veritatis
                    </a>
                  </h3>
                  <p>
                    Nam libero tempore cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-person-check"></i>
                </div>
                <div className="feature-content">
                  <h3>
                    <a href="#" className="stretched-link">
                      Accusamus dignissimos
                    </a>
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-clipboard-data"></i>
                </div>
                <div className="feature-content">
                  <h3>
                    <a href="#" className="stretched-link">
                      Dolorem consectetur
                    </a>
                  </h3>
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet consectetur adipisci velit sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section light-background">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="metric-card">
                <div className="metric-icon">
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <div className="metric-body">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="0"
                    className="purecounter metric-value"
                  >
                    232
                  </span>
                  <h3 className="metric-label">Happy Clients</h3>
                  <p className="metric-desc">Consequuntur quae diligentiam</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="metric-card">
                <div className="metric-icon">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <div className="metric-body">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="0"
                    className="purecounter metric-value"
                  >
                    521
                  </span>
                  <h3 className="metric-label">Projects</h3>
                  <p className="metric-desc">Adipisci atque cum quia aut</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="metric-card">
                <div className="metric-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="metric-body">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="0"
                    className="purecounter metric-value"
                  >
                    1453
                  </span>
                  <h3 className="metric-label">Hours Of Support</h3>
                  <p className="metric-desc">Aut commodi quaerat natus</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="metric-card">
                <div className="metric-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="metric-body">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="0"
                    className="purecounter metric-value"
                  >
                    32
                  </span>
                  <h3 className="metric-label">Hard Workers</h3>
                  <p className="metric-desc">Rerum asperiores dolor voluptate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="review-card">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas vestibulum ante ipsum.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-f-3.webp"
                    alt="Sophia Hartwell"
                  />
                  <div className="reviewer-info">
                    <h4>Sophia Hartwell</h4>
                    <span>Brand Strategist</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="review-card featured">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Curabitur pretium tincidunt lacus nulla gravida orci a odio
                    dignissim congue rutrum at lorem et iaculis amet consequat
                    vestibulum nulla facilisi morbi tempus.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-m-4.webp"
                    alt="Marcus Ellison"
                  />
                  <div className="reviewer-info">
                    <h4>Marcus Ellison</h4>
                    <span>VP of Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="review-card">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor maecenas faucibus mollis interdum tempor.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-f-11.webp"
                    alt="Leona Mitchell"
                  />
                  <div className="reviewer-info">
                    <h4>Leona Mitchell</h4>
                    <span>Operations Lead</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="review-card">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-m-10.webp"
                    alt="Julian Prescott"
                  />
                  <div className="reviewer-info">
                    <h4>Julian Prescott</h4>
                    <span>Creative Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="review-card featured">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur praesent commodo
                    cursus magna vel scelerisque nisl consectetur et vivamus
                    sagittis lacus augue.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-f-14.webp"
                    alt="Clara Jennings"
                  />
                  <div className="reviewer-info">
                    <h4>Clara Jennings</h4>
                    <span>Product Architect</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="review-card">
                <div className="review-body">
                  <div className="star-group">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Fusce dapibus tellus ac cursus commodo tortor mauris
                    condimentum nibh ut fermentum massa justo sit amet risus etiam
                    porta.
                  </p>
                </div>
                <div className="review-footer">
                  <img
                    src="/assets/img/person/person-m-15.webp"
                    alt="Owen Blackwood"
                  />
                  <div className="reviewer-info">
                    <h4>Owen Blackwood</h4>
                    <span>Platform Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
