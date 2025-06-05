import Link from "next/link";

export default function BlogPage() {
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
              <li className="current">Blog</li>
            </ol>
          </nav>
          <h1>Blog</h1>
        </div>
      </div>

      {/* Blog Hero Section */}
      <section id="blog-hero" className="blog-hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="blog-grid">
            {/* Main Featured Post */}
            <article className="blog-item main-feature" data-aos="fade-up">
              <img
                src="/img/blog/blog-post-9.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2022</span>
                  <span className="category">Technology</span>
                </div>
                <h2 className="post-title">
                  <Link
                    href="/blog/my-post"
                    title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  >
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Link>
                </h2>
                <p className="post-excerpt">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </article>

            {/* Secondary Featured Posts */}
            <div className="secondary-features">
              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/img/blog/blog-post-portrait-1.webp"
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">Apr. 13th, 2022</span>
                    <span className="category">Business</span>
                  </div>
                  <h3 className="post-title">
                    <Link
                      href="/blog/my-post"
                      title="Ut enim ad minim veniam quis nostrud exercitation"
                    >
                      Ut enim ad minim veniam quis nostrud exercitation
                    </Link>
                  </h3>
                </div>
              </article>

              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="/img/blog/blog-post-portrait-2.webp"
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">Apr. 12th, 2022</span>
                    <span className="category">Lifestyle</span>
                  </div>
                  <h3 className="post-title">
                    <Link
                      href="/blog/my-post"
                      title="Duis aute irure dolor in reprehenderit in voluptate"
                    >
                      Duis aute irure dolor in reprehenderit in voluptate
                    </Link>
                  </h3>
                </div>
              </article>
            </div>

            {/* Regular Posts Grid */}
            <div className="regular-posts">
              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="/img/blog/blog-post-9.webp"
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">Apr. 11th, 2022</span>
                    <span className="category">Tech</span>
                  </div>
                  <h3 className="post-title">
                    <Link
                      href="/blog/my-post"
                      title="Excepteur sint occaecat cupidatat non proident"
                    >
                      Excepteur sint occaecat cupidatat non proident
                    </Link>
                  </h3>
                </div>
              </article>

              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src="/img/blog/blog-post-3.webp"
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">Apr. 10th, 2022</span>
                    <span className="category">Sports</span>
                  </div>
                  <h3 className="post-title">
                    <Link
                      href="/blog/my-post"
                      title="Sunt in culpa qui officia deserunt mollit anim"
                    >
                      Sunt in culpa qui officia deserunt mollit anim
                    </Link>
                  </h3>
                </div>
              </article>

              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src="/img/blog/blog-post-6.webp"
                  alt="Blog Image"
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">Apr. 9th, 2022</span>
                    <span className="category">Culture</span>
                  </div>
                  <h3 className="post-title">
                    <Link
                      href="/blog/my-post"
                      title="Id est laborum et dolorum fuga et harum quidem"
                    >
                      Id est laborum et dolorum fuga et harum quidem
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section id="recent-posts" className="recent-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Recent Posts</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-1.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Politics</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Dolorum optio tempore voluptas dignissimos
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-01-01">Jan 1, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-2.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Sports</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Nisi magni odit consequatur autem nulla dolorem
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-06-05">Jun 5, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-3.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Entertainment</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Possimus soluta ut id suscipit ea ut in quo quia et
                        soluta
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-06-22">Jun 22, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-4.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Sports</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Non rem rerum nam cum quo minus olor distincti
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-06-30">Jun 30, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-5.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Politics</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Accusamus quaerat aliquam qui debitis facilis
                        consequatur
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-01-30">Jan 30, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img position-relative">
                  <img
                    src="/img/blog/blog-post-6.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="post-content">
                    <p className="post-category">Entertainment</p>
                    <h2 className="title">
                      <Link href="/blog/my-post">
                        Distinctio provident quibusdam numquam aperiam aut
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <time dateTime="2025-02-14">Feb 14, 2025</time>
                      <span className="px-2">&bull;</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Pagination Section */}
      <section id="blog-pagination" className="blog-pagination section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-left"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#" className="active">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>...</li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
