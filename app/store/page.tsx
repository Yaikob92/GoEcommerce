import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Summer Floral Dress",
    price: "$149.99",
    image: "/img/product/product-1.webp",
    label: "New Season",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Classic Leather Jacket",
    price: "$199.99",
    image: "/img/product/product-2.webp",
    label: "New Season",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Casual Denim Jeans",
    price: "$89.99",
    image: "/img/product/product-3.webp",
    label: "New Season",
    rating: 3.0,
  },
  {
    id: 4,
    name: "Elegant Silk Blouse",
    price: "$129.99",
    image: "/img/product/product-4.webp",
    label: "New Season",
    rating: 4.0,
  },
];

const categories = [
  { name: "Clothing", href: "/store?category=clothing" },
  { name: "Shoes", href: "/store?category=shoes" },
  { name: "Accessories", href: "/store?category=accessories" },
  { name: "Electronics", href: "/store?category=electronics" },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    <>
      {Array.from({ length: full }).map((_, i) => (
        <i key={`full-${i}`} className="bi bi-star-fill"></i>
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <i key={`empty-${i}`} className="bi bi-star"></i>
      ))}
    </>
  );
}

export default function StorePage() {
  return (
    <>
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Category</li>
            </ol>
          </nav>
          <h1>Category</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              <div className="product-categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="category-tree list-unstyled mb-0">
                  {categories.map((cat) => (
                    <li key={cat.name} className="category-item">
                      <div className="d-flex justify-content-between align-items-center category-header">
                        <Link href={cat.href} className="category-link">
                          {cat.name}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-range-widget widget-item">
                <h3 className="widget-title">Price Range</h3>
                <div className="price-range-container">
                  <div className="current-range mb-3">
                    <span className="min-price">$0</span>
                    <span className="max-price float-end">$1000</span>
                  </div>
                  <div className="range-slider">
                    <div className="slider-track"></div>
                    <div className="slider-progress"></div>
                    <input
                      type="range"
                      className="min-range"
                      min="0"
                      max="1000"
                      defaultValue="0"
                      step="10"
                    />
                    <input
                      type="range"
                      className="max-range"
                      min="0"
                      max="1000"
                      defaultValue="500"
                      step="10"
                    />
                  </div>
                  <div className="price-inputs mt-3">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control min-price-input"
                            placeholder="Min"
                            min="0"
                            max="1000"
                            defaultValue="0"
                            step="10"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control max-price-input"
                            placeholder="Max"
                            min="0"
                            max="1000"
                            defaultValue="500"
                            step="10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-actions mt-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary w-100"
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>

              <div className="brand-filter-widget widget-item">
                <h3 className="widget-title">
                  Choose your preferred asbeza category
                </h3>
                <div className="brand-filter-content">
                  <div className="brand-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search brands..."
                    />
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="brand-list">
                    {[
                      { id: "brand1", label: "Clothing" },
                      { id: "brand2", label: "Shoes" },
                      { id: "brand3", label: "Accessories" },
                      { id: "brand4", label: "Electronics" },
                    ].map((brand) => (
                      <div key={brand.id} className="brand-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={brand.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={brand.id}
                          >
                            {brand.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="brand-actions">
                    <button className="btn btn-sm btn-outline-primary">
                      Apply Filter
                    </button>
                    <button className="btn btn-sm btn-link">Clear All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <section id="category-header" className="category-header section">
              <div className="container" data-aos="fade-up">
                <div
                  className="filter-container mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="filter-item search-form">
                        <label
                          htmlFor="productSearch"
                          className="form-label"
                        >
                          Search Products
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="productSearch"
                            placeholder="Search for products..."
                            aria-label="Search for products"
                          />
                          <button
                            className="btn search-btn"
                            type="button"
                          >
                            <i className="bi bi-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                      <div className="filter-item">
                        <label
                          htmlFor="priceRange"
                          className="form-label"
                        >
                          Price Range
                        </label>
                        <select
                          className="form-select"
                          id="priceRange"
                        >
                          <option>All Prices</option>
                          <option>Under $25</option>
                          <option>$25 to $50</option>
                          <option>$50 to $100</option>
                          <option>$100 to $200</option>
                          <option>$200 &amp; Above</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                      <div className="filter-item">
                        <label htmlFor="sortBy" className="form-label">
                          Sort By
                        </label>
                        <select className="form-select" id="sortBy">
                          <option>Featured</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Customer Rating</option>
                          <option>Newest Arrivals</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="filter-item">
                        <label className="form-label">View</label>
                        <div className="d-flex align-items-center">
                          <div className="view-options me-3">
                            <button
                              type="button"
                              className="btn view-btn active"
                              data-view="grid"
                              aria-label="Grid view"
                            >
                              <i className="bi bi-grid-3x3-gap-fill"></i>
                            </button>
                            <button
                              type="button"
                              className="btn view-btn"
                              data-view="list"
                              aria-label="List view"
                            >
                              <i className="bi bi-list-ul"></i>
                            </button>
                          </div>
                          <div className="items-per-page">
                            <select
                              className="form-select"
                              id="itemsPerPage"
                              aria-label="Items per page"
                            >
                              <option value="12">12 per page</option>
                              <option value="24">24 per page</option>
                              <option value="48">48 per page</option>
                              <option value="96">96 per page</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <strong className="active-filter-label">
                        12 products found
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="category-product-list" className="category-product-list section">
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                  {products.map((product) => (
                    <div key={product.id} className="col-lg-6">
                      <div className="product-box">
                        <div className="product-thumb">
                          <span className="product-label">
                            {product.label}
                          </span>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="main-img"
                            loading="lazy"
                          />
                          <div className="product-overlay">
                            <div className="product-quick-actions">
                              <button
                                type="button"
                                className="quick-action-btn"
                              >
                                <i className="bi bi-heart"></i>
                              </button>
                              <button
                                type="button"
                                className="quick-action-btn"
                              >
                                <i className="bi bi-arrow-repeat"></i>
                              </button>
                              <button
                                type="button"
                                className="quick-action-btn"
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                            </div>
                            <div className="add-to-cart-container">
                              <Link href={`/product/${product.id}`}>
                                <button
                                  type="button"
                                  className="add-to-cart-btn"
                                >
                                  Product Detail
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-details">
                            <h3 className="product-title">
                              <Link href={`/product/${product.id}`}>
                                {product.name}
                              </Link>
                            </h3>
                            <div className="product-price">
                              <span>{product.price}</span>
                            </div>
                          </div>
                          <div className="product-rating-container">
                            <div className="rating-stars">
                              {renderStars(product.rating)}
                            </div>
                            <span className="rating-number">
                              {product.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="category-pagination" className="category-pagination section">
              <div className="container">
                <nav
                  className="d-flex justify-content-center"
                  aria-label="Page navigation"
                >
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <Link href="/store?page=2" className="page-link">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="/store?page=3" className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="/store?page=2" className="page-link">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
