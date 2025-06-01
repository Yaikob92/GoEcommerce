import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="ecommerce-hero-2 hero section" id="hero">
        <div className="container">
          <div className="hero-slider swiper init-swiper" data-aos="fade-up">
            <script type="application/json" className="swiper-config">
              {JSON.stringify({
                loop: true,
                speed: 800,
                autoplay: { delay: 5000 },
                effect: "fade",
                fadeEffect: { crossFade: true },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              })}
            </script>
            <div className="swiper-wrapper">
              {/* New Collection Slide */}
              <div className="swiper-slide slide-new">
                <div className="row align-items-center">
                  <div className="col-lg-6 content-col" data-aos="fade-right" data-aos-delay="100">
                    <div className="slide-content">
                      <span className="slide-badge">New Arrivals</span>
                      <h1>
                        Discover Our <span>Latest</span> Collection
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eget tortor risus. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Shop New Arrivals <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 image-col" data-aos="fade-left" data-aos-delay="200">
                    <div className="product-showcase">
                      <div className="product-grid">
                        <div className="product-item" data-aos="fade-up" data-aos-delay="300">
                          <div className="product-image">
                            <img src="/img/product/product-1.webp" alt="New Product 1" />
                          </div>
                          <div className="product-info">
                            <h4>Modern Style</h4>
                            <span className="price">$79.99</span>
                          </div>
                        </div>
                        <div className="product-item" data-aos="fade-up" data-aos-delay="400">
                          <div className="product-image">
                            <img src="/img/product/product-2.webp" alt="New Product 2" />
                          </div>
                          <div className="product-info">
                            <h4>Casual Collection</h4>
                            <span className="price">$64.99</span>
                          </div>
                        </div>
                        <div className="product-item" data-aos="fade-up" data-aos-delay="500">
                          <div className="product-image">
                            <img src="/img/product/product-6.webp" alt="New Product 3" />
                          </div>
                          <div className="product-info">
                            <h4>Premium Design</h4>
                            <span className="price">$89.99</span>
                          </div>
                        </div>
                        <div className="product-item" data-aos="fade-up" data-aos-delay="600">
                          <div className="product-image">
                            <img src="/img/product/product-7.webp" alt="New Product 4" />
                          </div>
                          <div className="product-info">
                            <h4>Elegant Series</h4>
                            <span className="price">$74.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sale Products Slide */}
              <div className="swiper-slide slide-sale">
                <div className="row align-items-center">
                  <div className="col-lg-6 content-col" data-aos="fade-right" data-aos-delay="100">
                    <div className="slide-content">
                      <span className="slide-badge">Limited Time</span>
                      <h1>
                        Season <span>Sale</span> Up To 50% Off
                      </h1>
                      <p>
                        Curabitur aliquet quam id dui posuere blandit. Nulla quis
                        lorem ut libero malesuada feugiat.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Shop Sale <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                      <div className="countdown-container">
                        <div className="countdown-label">Offer ends in:</div>
                        <div className="countdown d-flex" data-count="2025/6/15">
                          <div>
                            <h3 className="count-days"></h3>
                            <h4>Days</h4>
                          </div>
                          <div>
                            <h3 className="count-hours"></h3>
                            <h4>Hours</h4>
                          </div>
                          <div>
                            <h3 className="count-minutes"></h3>
                            <h4>Minutes</h4>
                          </div>
                          <div>
                            <h3 className="count-seconds"></h3>
                            <h4>Seconds</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 image-col" data-aos="fade-left" data-aos-delay="200">
                    <div className="sale-showcase">
                      <div className="main-product">
                        <img src="/img/product/product-8.webp" alt="Sale Product" />
                        <div className="discount-badge">
                          <span className="percent">50%</span>
                          <span className="text">OFF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Products Slide */}
              <div className="swiper-slide slide-featured">
                <div className="row align-items-center">
                  <div className="col-lg-6 content-col" data-aos="fade-right" data-aos-delay="100">
                    <div className="slide-content">
                      <span className="slide-badge">Featured Collection</span>
                      <h1>
                        Premium <span>Quality</span> Products
                      </h1>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit
                        amet dui.
                      </p>
                      <div className="slide-cta">
                        <a href="#" className="btn btn-shop">
                          Explore Collection{" "}
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                      <div className="feature-list">
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Premium Materials</span>
                        </div>
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Handcrafted Quality</span>
                        </div>
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Lifetime Warranty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 image-col" data-aos="fade-left" data-aos-delay="200">
                    <div className="featured-showcase">
                      <div className="featured-image">
                        <img src="/img/product/product-9.webp" alt="Featured Product" />
                        <div className="featured-badge">
                          <i className="bi bi-star-fill"></i>
                          <span>Featured</span>
                        </div>
                      </div>
                      <div className="floating-review" data-aos="fade-up" data-aos-delay="300">
                        <div className="review-stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="review-text">
                          &quot;Exceptional quality and design&quot;
                        </div>
                        <div className="review-author">- Satisfied Customer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}

      {/* Promo Cards Section */}
      <section id="promo-cards" className="promo-cards section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {/* Promo Card 1 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="promo-card card-1">
                <div className="promo-content">
                  <p className="small-text">Etiam vel augue</p>
                  <h3 className="promo-title">Nullam quis ante</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img src="/img/product/product-1.webp" alt="Product" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Promo Card 2 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="promo-card card-2">
                <div className="promo-content">
                  <p className="small-text">Maecenas tempus</p>
                  <h3 className="promo-title">Sed fringilla mauris</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img src="/img/product/product-2.webp" alt="Product" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Promo Card 3 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="promo-card card-3">
                <div className="promo-content">
                  <p className="small-text">Aenean commodo</p>
                  <h3 className="promo-title">Fusce vulputate eleifend</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img src="/img/product/product-f-1.webp" alt="Product" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Promo Card 4 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="promo-card card-4">
                <div className="promo-content">
                  <p className="small-text">Pellentesque auctor</p>
                  <h3 className="promo-title">Vestibulum dapibus nunc</h3>
                  <p className="promo-description">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu in enim justo rhoncus ut.
                  </p>
                  <a href="#" className="btn-shop">
                    Shop Now
                  </a>
                </div>
                <div className="promo-image">
                  <img src="/img/product/product-m-1.webp" alt="Product" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Promo Cards Section */}

      {/* Category Cards Section */}
      <section id="category-cards" className="category-cards section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="category-tabs">
            <ul className="nav justify-content-center" id="category-cards-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="category-cards-men-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-men-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-men-content"
                  aria-selected="false"
                >
                  SHOP MEN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="category-cards-women-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-women-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-women-content"
                  aria-selected="true"
                >
                  SHOP WOMEN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="category-cards-accesoires-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#category-cards-accesoires-content"
                  type="button"
                  role="tab"
                  aria-controls="category-cards-accesoires-content"
                  aria-selected="false"
                >
                  SHOP ACCESSOIRCES
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="category-cards-tabContent">
            {/* Men&apos;s Categories */}
            <div
              className="tab-pane fade"
              id="category-cards-men-content"
              role="tabpanel"
              aria-labelledby="category-cards-men-tab"
            >
              <div className="row g-4">
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-card">
                    <img src="/img/product/product-m-11.webp" alt="Men's Leather" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      LEATHER <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="category-card">
                    <img src="/img/product/product-m-12.webp" alt="Men's Denim" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      DENIM <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="category-card">
                    <img src="/img/product/product-m-19.webp" alt="Men's Swimwear" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      SWIMWEAR <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Women&apos;s Categories */}
            <div
              className="tab-pane fade show active"
              id="category-cards-women-content"
              role="tabpanel"
              aria-labelledby="category-cards-women-tab"
            >
              <div className="row g-4">
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-card">
                    <img src="/img/product/product-f-11.webp" alt="Women's Dresses" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      DRESSES <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="category-card">
                    <img src="/img/product/product-f-18.webp" alt="Women's Tops" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      TOPS <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="category-card">
                    <img src="/img/product/product-f-13.webp" alt="Women's Accessories" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      ACCESSORIES <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kid&apos;s Categories */}
            <div
              className="tab-pane fade"
              id="category-cards-accesoires-content"
              role="tabpanel"
              aria-labelledby="category-cards-accesoires-tab"
            >
              <div className="row g-4">
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-card">
                    <img src="/img/product/product-1.webp" alt="Boys Clothing" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      BOYS <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="category-card">
                    <img src="/img/product/product-2.webp" alt="Girls Clothing" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      GIRLS <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="category-card">
                    <img src="/img/product/product-3.webp" alt="Kids Toys" className="img-fluid" loading="lazy" />
                    <a href="#" className="category-link">
                      TOYS <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Category Cards Section */}

      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Best Sellers</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {/* Product 1 */}
            <div className="col-6 col-lg-3">
              <div className="product-card" data-aos="zoom-in">
                <div className="product-image">
                  <img src="/img/product/product-f-1.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-f-2.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women&apos;s Fashion</div>
                  <h4 className="product-title">
                    <a href="#">Tempor Incididunt</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$129.00</div>
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
                  <img src="/img/product/product-m-1.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-m-2.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Collection</div>
                  <h4 className="product-title">
                    <a href="#">Elit Consectetur</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$95.00</div>
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
                  <img src="/img/product/product-f-3.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-f-4.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-25%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <a href="#">Adipiscing Magna</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      $75.00
                      <span className="original-price">$99.00</span>
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
                  <img src="/img/product/product-m-3.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-m-4.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Footwear</div>
                  <h4 className="product-title">
                    <a href="#">Labore Dolore</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$145.00</div>
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
                  <img src="/img/product/product-f-5.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-f-6.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Fashion</div>
                  <h4 className="product-title">
                    <a href="#">Magna Aliqua</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$89.00</div>
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
                  <img src="/img/product/product-m-5.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-m-6.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge sale">-15%</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Women&apos;s Fashion</div>
                  <h4 className="product-title">
                    <a href="#">Eiusmod Tempor</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">
                      $110.00
                      <span className="original-price">$129.00</span>
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
                  <img src="/img/product/product-f-7.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-f-8.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">Accessories</div>
                  <h4 className="product-title">
                    <a href="#">Incididunt Labore</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$55.00</div>
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
                  <img src="/img/product/product-m-7.webp" className="main-image img-fluid" alt="Product" />
                  <img src="/img/product/product-m-8.webp" className="hover-image img-fluid" alt="Product Variant" />
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Quick View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button type="button" className="action-btn" data-bs-toggle="tooltip" title="Add to Cart">
                        <i className="bi bi-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-badge new">New</div>
                </div>
                <div className="product-details">
                  <div className="product-category">Men&apos;s Fashion</div>
                  <h4 className="product-title">
                    <a href="#">Aliqua Magna</a>
                  </h4>
                  <div className="product-meta">
                    <div className="product-price">$79.00</div>
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
      {/* /Best Sellers Section */}

      {/* Product List Section */}
      <section id="product-list" className="product-list section">
        <div
          className="container isotope-layout"
          data-aos="fade-up"
          data-aos-delay="100"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            <div className="col-12">
              <div className="product-filters isotope-filters mb-5 d-flex justify-content-center" data-aos="fade-up">
                <ul className="d-flex flex-wrap gap-2 list-unstyled">
                  <li className="filter-active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".filter-clothing">Clothing</li>
                  <li data-filter=".filter-accessories">Accessories</li>
                  <li data-filter=".filter-electronics">Electronics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-container isotope-container" data-aos="fade-up" data-aos-delay="200">
            {/* Product Item 1 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">Sale</span>
                  <img src="/img/product/product-1.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-1-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/1">Lorem ipsum dolor sit amet</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$89.99</span>
                    <span className="old-price">$129.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span>(24)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 2 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <img src="/img/product/product-2.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-2-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/2">Consectetur adipiscing elit</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$249.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <span>(18)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 3 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-accessories">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">New</span>
                  <img src="/img/product/product-3.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-3-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/3">Sed do eiusmod tempor</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$59.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <span>(7)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 4 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <img src="/img/product/product-4.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-4-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/4">Incididunt ut labore et dolore</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$79.99</span>
                    <span className="old-price">$99.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span>(32)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 5 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">Sale</span>
                  <img src="/img/product/product-5.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-5-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/5">Magna aliqua ut enim ad minim</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$199.99</span>
                    <span className="old-price">$249.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <span>(15)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 6 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-accessories">
              <div className="product-card">
                <div className="product-image">
                  <img src="/img/product/product-6.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-6-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/6">Veniam quis nostrud exercitation</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$45.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <span>(21)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 7 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-clothing">
              <div className="product-card">
                <div className="product-image">
                  <span className="badge">New</span>
                  <img src="/img/product/product-7.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-7-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/7">Ullamco laboris nisi ut aliquip</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$69.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <span>(11)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}

            {/* Product Item 8 */}
            <div className="col-md-6 col-lg-3 product-item isotope-item filter-electronics">
              <div className="product-card">
                <div className="product-image">
                  <img src="/img/product/product-8.webp" alt="Product" className="img-fluid main-img" />
                  <img src="/img/product/product-8-variant.webp" alt="Product Hover" className="img-fluid hover-img" />
                  <div className="product-overlay">
                    <Link href="/cart" className="btn-cart">
                      <i className="bi bi-cart-plus"></i> Add to Cart
                    </Link>
                    <div className="product-actions">
                      <a href="#" className="action-btn">
                        <i className="bi bi-heart"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h5 className="product-title">
                    <Link href="/product/8">Ex ea commodo consequat</Link>
                  </h5>
                  <div className="product-price">
                    <span className="current-price">$159.99</span>
                  </div>
                  <div className="product-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span>(29)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Item */}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link href="/store" className="view-all-btn">
              View All Products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* /Product List Section */}
    </>
  );
}
