import Link from "next/link";

export default function OrderConfirmationPage() {
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
              <li className="current">Order Confirmation</li>
            </ol>
          </nav>
          <h1>Order Confirmation</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Order Confirmation Section */}
      <section id="order-confirmation" className="order-confirmation section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="order-confirmation-3">
            <div className="row g-0">
              {/* Left sidebar with order summary */}
              <div className="col-lg-4 sidebar" data-aos="fade-right">
                <div className="sidebar-content">
                  {/* Success animation */}
                  <div className="success-animation">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  {/* Order number and date */}
                  <div className="order-id">
                    <h4>Order #ORD-935721</h4>
                    <div className="order-date">March 2, 2025</div>
                  </div>

                  {/* Order progress stepper */}
                  <div className="order-progress">
                    <div className="stepper-container">
                      <div className="stepper-item completed">
                        <div className="stepper-icon">1</div>
                        <div className="stepper-text">Confirmed</div>
                      </div>
                      <div className="stepper-item current">
                        <div className="stepper-icon">2</div>
                        <div className="stepper-text">Processing</div>
                      </div>
                      <div className="stepper-item">
                        <div className="stepper-icon">3</div>
                        <div className="stepper-text">Shipped</div>
                      </div>
                      <div className="stepper-item">
                        <div className="stepper-icon">4</div>
                        <div className="stepper-text">Delivered</div>
                      </div>
                    </div>
                  </div>

                  {/* Price summary */}
                  <div className="price-summary">
                    <h5>Order Summary</h5>
                    <ul className="summary-list">
                      <li>
                        <span>Subtotal</span>
                        <span>ETB 219.97</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>ETB 0.00</span>
                      </li>
                      <li>
                        <span>Tax</span>
                        <span>ETB 18.70</span>
                      </li>
                      <li className="total">
                        <span>Total</span>
                        <span>ETB 238.67</span>
                      </li>
                    </ul>
                  </div>

                  {/* Delivery info */}
                  <div className="delivery-info">
                    <h5>Delivery Information</h5>
                    <p className="delivery-estimate">
                      <i className="bi bi-calendar-check"></i>
                      <span>Estimated delivery: March 7-9, 2025</span>
                    </p>
                    <p className="shipping-method">
                      <i className="bi bi-truck"></i>
                      <span>Free Shipping</span>
                    </p>
                  </div>

                  {/* Customer service */}
                  <div className="customer-service">
                    <h5>Need Help?</h5>
                    <a href="#" className="help-link">
                      <i className="bi bi-chat-dots"></i>
                      <span>Contact Support</span>
                    </a>
                    <a href="#" className="help-link">
                      <i className="bi bi-question-circle"></i>
                      <span>FAQs</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="col-lg-8 main-content" data-aos="fade-in">
                {/* Thank you message */}
                <div className="thank-you-message">
                  <h1>Thanks for your order!</h1>
                  <p>
                    We&apos;ve received your order and will begin processing it
                    right away. We&apos;ll send you updates via email as your
                    order progresses.
                  </p>
                </div>

                {/* Shipping details */}
                <div className="details-card" data-aos="fade-up">
                  <div className="card-header" data-toggle="collapse">
                    <h3>
                      <i className="bi bi-geo-alt"></i>
                      Shipping Details
                    </h3>
                    <i className="bi bi-chevron-down toggle-icon"></i>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="detail-group">
                          <label>Ship To</label>
                          <address>
                            Michael Thompson<br />
                            789 Oakwood Lane<br />
                            Seattle, WA 98101<br />
                            United States
                          </address>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-group">
                          <label>Contact</label>
                          <div className="contact-info">
                            <p>
                              <i className="bi bi-envelope"></i>{" "}
                              michael.t@example.com
                            </p>
                            <p>
                              <i className="bi bi-telephone"></i> (206)
                              555-1234
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment details */}
                <div className="details-card" data-aos="fade-up">
                  <div className="card-header" data-toggle="collapse">
                    <h3>
                      <i className="bi bi-credit-card"></i>
                      Payment Details
                    </h3>
                    <i className="bi bi-chevron-down toggle-icon"></i>
                  </div>
                  <div className="card-body">
                    <div className="payment-method">
                      <div className="payment-icon">
                        <i className="bi bi-credit-card-2-front"></i>
                      </div>
                      <div className="payment-details">
                        <div className="card-type">American Express</div>
                        <div className="card-number">
                          •••• •••• •••• 3782
                        </div>
                      </div>
                    </div>
                    <div className="billing-address mt-4">
                      <h5>Billing Address</h5>
                      <p>Same as shipping address</p>
                    </div>
                  </div>
                </div>

                {/* Order items */}
                <div className="details-card" data-aos="fade-up">
                  <div className="card-header" data-toggle="collapse">
                    <h3>
                      <i className="bi bi-bag-check"></i>
                      Order Items
                    </h3>
                    <i className="bi bi-chevron-down toggle-icon"></i>
                  </div>
                  <div className="card-body">
                    <div className="item">
                      <div className="item-image">
                        <img
                          src="/img/product/product-7.webp"
                          alt="Product"
                          loading="lazy"
                        />
                      </div>
                      <div className="item-details">
                        <h4>Wireless Bluetooth Speaker</h4>
                        <div className="item-meta">
                          <span>Color: Navy Blue</span>
                        </div>
                        <div className="item-price">
                          <span className="quantity">1 ×</span>
                          <span className="price">ETB 129.99</span>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item-image">
                        <img
                          src="/img/product/product-9.webp"
                          alt="Product"
                          loading="lazy"
                        />
                      </div>
                      <div className="item-details">
                        <h4>Smart Fitness Tracker</h4>
                        <div className="item-meta">
                          <span>Color: Black</span>
                          <span>Size: Medium</span>
                        </div>
                        <div className="item-price">
                          <span className="quantity">1 ×</span>
                          <span className="price">ETB 89.98</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="action-area" data-aos="fade-up">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <a href="#" className="btn btn-back">
                        <i className="bi bi-arrow-left"></i>
                        Return to Shop
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="#" className="btn btn-account">
                        <span>View in Account</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Recommended products */}
                <div className="recommended" data-aos="fade-up">
                  <h3>You Might Also Like</h3>
                  <div className="row g-4">
                    <div className="col-6 col-md-4">
                      <div className="product-card">
                        <div className="product-image">
                          <img
                            src="/img/product/product-11.webp"
                            alt="Product"
                            loading="lazy"
                          />
                        </div>
                        <h5>Wireless Earbuds</h5>
                        <div className="product-price">ETB 59.99</div>
                        <a href="#" className="btn btn-add-cart">
                          <i className="bi bi-plus"></i>
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-md-4">
                      <div className="product-card">
                        <div className="product-image">
                          <img
                            src="/img/product/product-10.webp"
                            alt="Product"
                            loading="lazy"
                          />
                        </div>
                        <h5>Portable Phone Charger</h5>
                        <div className="product-price">ETB 34.99</div>
                        <a href="#" className="btn btn-add-cart">
                          <i className="bi bi-plus"></i>
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 d-none d-md-block">
                      <div className="product-card">
                        <div className="product-image">
                          <img
                            src="/img/product/product-8.webp"
                            alt="Product"
                            loading="lazy"
                          />
                        </div>
                        <h5>Smart Watch</h5>
                        <div className="product-price">ETB 149.99</div>
                        <a href="#" className="btn btn-add-cart">
                          <i className="bi bi-plus"></i>
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Order Confirmation Section */}
    </>
  );
}
