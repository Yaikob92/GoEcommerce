import Link from "next/link";

export default function SearchPage() {
  return (
    <>
      {/* Search Results Header Section */}
      <section id="search-results-header" className="search-results-header section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="search-results-header">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="results-count" data-aos="fade-right" data-aos-delay="200">
                  <h2>Search Results</h2>
                  <p>
                    We found <span className="results-number">24</span> results
                    for{" "}
                    <span className="search-term">&quot;Lorem ipsum&quot;</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <form method="post" className="search-form">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      name="search"
                      defaultValue="Lorem ipsum"
                      required
                    />
                    <button className="btn search-btn" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="search-filters mt-4" data-aos="fade-up" data-aos-delay="400">
              <div className="row">
                <div className="col-lg-8">
                  <div className="filter-tags">
                    <span className="filter-label">Filters:</span>
                    <div className="tags-wrapper">
                      <span className="filter-tag">
                        Category: Blog
                        <i className="bi bi-x-circle"></i>
                      </span>
                      <span className="filter-tag">
                        Date: Last Month
                        <i className="bi bi-x-circle"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                  <div className="sort-options">
                    <label htmlFor="sort-select" className="me-2">
                      Sort by:
                    </label>
                    <select
                      id="sort-select"
                      className="form-select form-select-sm d-inline-block w-auto"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="date-desc">Newest First</option>
                      <option value="date-asc">Oldest First</option>
                      <option value="title-asc">Title A-Z</option>
                      <option value="title-desc">Title Z-A</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Search Results Header Section */}

      {/* Search Product List Section */}
      <section id="search-product-list" className="search-product-list section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {/* Product 1 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in">
                <div className="product-image">
                  <img
                    src="/img/product/product-f-1.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-f-2.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women&apos;s Fashion</div>
                  <h4 className="product-title">
                    <Link href="/product">Tempor Incididunt</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 129.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.8 <span>(42)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="product-image">
                  <img
                    src="/img/product/product-m-1.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-m-2.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Collection</div>
                  <h4 className="product-title">
                    <Link href="/product">Elit Consectetur</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 95.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.6 <span>(28)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="product-image">
                  <img
                    src="/img/product/product-f-3.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-f-4.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-25%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <Link href="/product">Adipiscing Magna</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      ETB 75.00
                      <span className="original-price">ETB 99.00</span>
                    </div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.9 <span>(56)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="product-image">
                  <img
                    src="/img/product/product-m-3.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-m-4.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Footwear</div>
                  <h4 className="product-title">
                    <Link href="/product">Labore Dolore</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 145.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.7 <span>(35)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="product-image">
                  <img
                    src="/img/product/product-f-5.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-f-6.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Fashion</div>
                  <h4 className="product-title">
                    <Link href="/product">Magna Aliqua</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 89.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.5 <span>(23)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="500">
                <div className="product-image">
                  <img
                    src="/img/product/product-m-5.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-m-6.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-15%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women&apos;s Fashion</div>
                  <h4 className="product-title">
                    <Link href="/product">Eiusmod Tempor</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      ETB 110.00
                      <span className="original-price">ETB 129.00</span>
                    </div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.8 <span>(47)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="600">
                <div className="product-image">
                  <img
                    src="/img/product/product-f-7.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-f-8.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <Link href="/product">Incididunt Labore</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 55.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.6 <span>(31)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 8 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in" data-aos-delay="700">
                <div className="product-image">
                  <img
                    src="/img/product/product-m-7.webp"
                    className="main-image img-fluid"
                    alt="Product"
                  />
                  <img
                    src="/img/product/product-m-8.webp"
                    className="hover-image img-fluid"
                    alt="Product Variant"
                  />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Quick View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="action-btn"
                        data-bs-toggle="tooltip"
                        title="Add to Cart"
                      >
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Fashion</div>
                  <h4 className="product-title">
                    <Link href="/product">Aliqua Magna</Link>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">ETB 79.00</div>
                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      4.7 <span>(39)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Search Product List Section */}

      {/* Category Pagination Section */}
      <section id="category-pagination" className="category-pagination section">
        <div className="container">
          <nav
            className="d-flex justify-content-center"
            aria-label="Page navigation"
          >
            <ul>
              <li>
                <a href="#" aria-label="Previous page">
                  <i className="bi bi-arrow-left"></i>
                  <span className="d-none d-sm-inline">Previous</span>
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li className="ellipsis">...</li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="#" aria-label="Next page">
                  <span className="d-none d-sm-inline">Next</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* End Category Pagination Section */}
    </>
  );
}
