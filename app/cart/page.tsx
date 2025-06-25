import Link from "next/link";

export default function CartPage() {
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
              <li className="current">Cart</li>
            </ol>
          </nav>
          <h1>Cart</h1>
        </div>
      </div>

      {/* Cart Section */}
      <section id="cart" className="cart section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="cart-items">
                <div className="cart-header d-none d-lg-block">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h5>Product</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Price</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Total</h5>
                    </div>
                  </div>
                </div>

                {/* Cart Item 1 */}
                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                      <div className="product-info d-flex align-items-center">
                        <div className="product-image">
                          <img
                            src="/img/product/product-f-1.webp"
                            alt="Premium Dress"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="product-title">
                            <Link href="#">Premium Dress</Link>
                          </h6>
                          <div className="product-meta">
                            <span className="product-color">Color: Black</span>
                            <span className="product-size">Size: M</span>
                          </div>
                          <button className="remove-item" type="button">
                            <i className="bi bi-trash"></i> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="price-tag">
                        <span className="current-price">ETB 129.00</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="quantity-selector">
                        <button className="quantity-btn decrease" type="button">
                          <i className="bi bi-dash"></i>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          defaultValue={2}
                          min={1}
                          max={10}
                        />
                        <button className="quantity-btn increase" type="button">
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="item-total">
                        <span>ETB 258.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cart Item 1 */}

                {/* Cart Item 2 */}
                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                      <div className="product-info d-flex align-items-center">
                        <div className="product-image">
                          <img
                            src="/img/product/product-m-1.webp"
                            alt="Classic Jacket"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="product-title">
                            <Link href="#">Classic Jacket</Link>
                          </h6>
                          <div className="product-meta">
                            <span className="product-color">Color: Black</span>
                            <span className="product-size">Size: M</span>
                          </div>
                          <button className="remove-item" type="button">
                            <i className="bi bi-trash"></i> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="price-tag">
                        <span className="current-price">ETB 95.00</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="quantity-selector">
                        <button className="quantity-btn decrease" type="button">
                          <i className="bi bi-dash"></i>
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          defaultValue={1}
                          min={1}
                          max={10}
                        />
                        <button className="quantity-btn increase" type="button">
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="item-total">
                        <span>ETB 95.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cart Item 2 */}

                <div className="cart-actions">
                  <div className="row">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                      <div className="coupon-form">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon code"
                          />
                          <button className="btn btn-outline-accent" type="button">
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 text-md-end">
                      <button className="btn btn-outline-heading me-2">
                        <i className="bi bi-arrow-clockwise"></i> Update Cart
                      </button>
                      <button className="btn btn-outline-remove">
                        <i className="bi bi-trash"></i> Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
              <div className="cart-summary">
                <h4 className="summary-title">Order Summary</h4>

                <div className="summary-item">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">ETB 353.00</span>
                </div>

                <div className="summary-item shipping-item">
                  <span className="summary-label">Shipping</span>
                  <div className="shipping-options">
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="standard"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="standard">
                        Standard Delivery - ETB 4.99
                      </label>
                    </div>
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="express"
                      />
                      <label className="form-check-label" htmlFor="express">
                        Express Delivery - ETB 12.99
                      </label>
                    </div>
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="free"
                      />
                      <label className="form-check-label" htmlFor="free">
                        Free Shipping (Orders over ETB 300)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="summary-item">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">ETB 28.24</span>
                </div>

                <div className="summary-item discount">
                  <span className="summary-label">Discount</span>
                  <span className="summary-value">-ETB 0.00</span>
                </div>

                <div className="summary-total">
                  <span className="summary-label">Grand Total</span>
                  <span className="summary-value">ETB 381.24</span>
                </div>

                <div className="checkout-button">
                  <Link href="/checkout" className="btn btn-accent w-100">
                    Proceed to Checkout <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>

                <div className="continue-shopping">
                  <Link href="/" className="btn btn-link w-100">
                    <i className="bi bi-arrow-left"></i> Continue Shopping
                  </Link>
                </div>

                <div className="payment-methods">
                  <p className="payment-title">We Accept</p>
                  <div className="payment-icons">
                    <i className="bi bi-credit-card"></i>
                    <i className="bi bi-paypal"></i>
                    <i className="bi bi-wallet2"></i>
                    <i className="bi bi-bank"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
