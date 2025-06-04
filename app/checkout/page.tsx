import Link from "next/link";

export default function CheckoutPage() {
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
              <li className="current">Checkout</li>
            </ol>
          </nav>
          <h1>Checkout</h1>
        </div>
      </div>

      {/* Checkout Section */}
      <section id="checkout" className="checkout section">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-8">
              {/* Checkout Steps */}
              <div className="checkout-steps mb-4" data-aos="fade-up">
                <div className="step active" data-step="1">
                  <div className="step-number">1</div>
                  <div className="step-title">Information</div>
                </div>
                <div className="step-connector"></div>
                <div className="step" data-step="2">
                  <div className="step-number">2</div>
                  <div className="step-title">Shipping</div>
                </div>
                <div className="step-connector"></div>
                <div className="step" data-step="3">
                  <div className="step-number">3</div>
                  <div className="step-title">Payment</div>
                </div>
                <div className="step-connector"></div>
                <div className="step" data-step="4">
                  <div className="step-number">4</div>
                  <div className="step-title">Review</div>
                </div>
              </div>

              {/* Checkout Forms Container */}
              <div
                className="checkout-forms"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {/* Step 1: Customer Information */}
                <div className="checkout-form active" data-form="1">
                  <div className="form-header">
                    <h3>Customer Information</h3>
                    <p>Please enter your contact details</p>
                  </div>
                  <form className="checkout-form-element">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                          type="text"
                          name="first-name"
                          className="form-control"
                          id="first-name"
                          placeholder="Your First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          type="text"
                          name="last-name"
                          className="form-control"
                          id="last-name"
                          placeholder="Your Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                    <div className="text-end mt-4">
                      <button
                        type="button"
                        className="btn btn-primary next-step"
                        data-next="2"
                      >
                        Continue to Shipping
                      </button>
                    </div>
                  </form>
                </div>

                {/* Step 2: Shipping Address */}
                <div className="checkout-form" data-form="2">
                  <div className="form-header">
                    <h3>Shipping Address</h3>
                    <p>Where should we deliver your order?</p>
                  </div>
                  <form className="checkout-form-element">
                    <div className="form-group">
                      <label htmlFor="address">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="Street Address"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="apartment">
                        Apartment, Suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="apartment"
                        id="apartment"
                        placeholder="Apartment, Suite, Unit, etc."
                      />
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-4 form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          id="city"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div className="col-md-4 form-group mt-3 mt-md-0">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          id="state"
                          placeholder="State"
                          required
                        />
                      </div>
                      <div className="col-md-4 form-group mt-3 mt-md-0">
                        <label htmlFor="zip">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          className="form-control"
                          id="zip"
                          placeholder="ZIP Code"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="country">Country</label>
                      <select
                        className="form-select"
                        id="country"
                        name="country"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                      </select>
                    </div>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="save-address"
                        name="save-address"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="save-address"
                      >
                        Save this address for future orders
                      </label>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary prev-step"
                        data-prev="1"
                      >
                        Back to Information
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary next-step"
                        data-next="3"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>

                {/* Step 3: Payment Method */}
                <div className="checkout-form" data-form="3">
                  <div className="form-header">
                    <h3>Payment Method</h3>
                    <p>Choose how you&apos;d like to pay</p>
                  </div>
                  <form className="checkout-form-element">
                    <div className="payment-methods">
                      <div className="payment-method active">
                        <div className="payment-method-header">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment-method"
                              id="credit-card"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="credit-card"
                            >
                              Credit / Debit Card
                            </label>
                          </div>
                          <div className="payment-icons">
                            <i className="bi bi-credit-card-2-front"></i>
                            <i className="bi bi-credit-card"></i>
                          </div>
                        </div>
                        <div className="payment-method-body">
                          <div className="row">
                            <div className="col-12 form-group">
                              <label htmlFor="card-number">Card Number</label>
                              <input
                                type="text"
                                className="form-control"
                                name="card-number"
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                required
                              />
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-md-6 form-group">
                              <label htmlFor="expiry">
                                Expiration Date
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="expiry"
                                id="expiry"
                                placeholder="MM/YY"
                                required
                              />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                              <label htmlFor="cvv">
                                Security Code (CVV)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="cvv"
                                id="cvv"
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="card-name">Name on Card</label>
                            <input
                              type="text"
                              className="form-control"
                              name="card-name"
                              id="card-name"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="payment-method mt-3">
                        <div className="payment-method-header">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment-method"
                              id="paypal"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paypal"
                            >
                              PayPal
                            </label>
                          </div>
                          <div className="payment-icons">
                            <i className="bi bi-paypal"></i>
                          </div>
                        </div>
                        <div className="payment-method-body d-none">
                          <p>
                            You will be redirected to PayPal to complete your
                            purchase securely.
                          </p>
                        </div>
                      </div>

                      <div className="payment-method mt-3">
                        <div className="payment-method-header">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment-method"
                              id="apple-pay"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="apple-pay"
                            >
                              Apple Pay
                            </label>
                          </div>
                          <div className="payment-icons">
                            <i className="bi bi-apple"></i>
                          </div>
                        </div>
                        <div className="payment-method-body d-none">
                          <p>
                            You will be prompted to authorize payment with Apple
                            Pay.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary prev-step"
                        data-prev="2"
                      >
                        Back to Shipping
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary next-step"
                        data-next="4"
                      >
                        Review Order
                      </button>
                    </div>
                  </form>
                </div>

                {/* Step 4: Order Review */}
                <div className="checkout-form" data-form="4">
                  <div className="form-header">
                    <h3>Review Your Order</h3>
                    <p>
                      Please review your information before placing your order
                    </p>
                  </div>
                  <form className="checkout-form-element">
                    <div className="review-sections">
                      <div className="review-section">
                        <div className="review-section-header">
                          <h4>Contact Information</h4>
                          <button
                            type="button"
                            className="btn-edit"
                            data-edit="1"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="review-section-content">
                          <p className="review-name">John Doe</p>
                          <p className="review-email">
                            johndoe@example.com
                          </p>
                          <p className="review-phone">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>

                      <div className="review-section mt-3">
                        <div className="review-section-header">
                          <h4>Shipping Address</h4>
                          <button
                            type="button"
                            className="btn-edit"
                            data-edit="2"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="review-section-content">
                          <p>123 Main Street, Apt 4B</p>
                          <p>New York, NY 10001</p>
                          <p>United States</p>
                        </div>
                      </div>

                      <div className="review-section mt-3">
                        <div className="review-section-header">
                          <h4>Payment Method</h4>
                          <button
                            type="button"
                            className="btn-edit"
                            data-edit="3"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="review-section-content">
                          <p>
                            <i className="bi bi-credit-card-2-front me-2"></i>{" "}
                            Credit Card ending in 3456
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <div className="success-message d-none">
                      Your order has been placed successfully! Thank you for your
                      purchase.
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary prev-step"
                        data-prev="3"
                      >
                        Back to Payment
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success place-order-btn"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Order Summary */}
              <div
                className="order-summary"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="order-summary-header">
                  <h3>Order Summary</h3>
                  <button
                    type="button"
                    className="btn-toggle-summary d-lg-none"
                  >
                    <i className="bi bi-chevron-down"></i>
                  </button>
                </div>

                <div className="order-summary-content">
                  <div className="order-items">
                    <div className="order-item">
                      <div className="order-item-image">
                        <img
                          src="/img/product/product-1.webp"
                          alt="Product"
                          className="img-fluid"
                        />
                      </div>
                      <div className="order-item-details">
                        <h4>Lorem Ipsum Dolor</h4>
                        <p className="order-item-variant">
                          Color: Black | Size: M
                        </p>
                        <div className="order-item-price">
                          <span className="quantity">1 x</span>
                          <span className="price">$89.99</span>
                        </div>
                      </div>
                    </div>

                    <div className="order-item">
                      <div className="order-item-image">
                        <img
                          src="/img/product/product-2.webp"
                          alt="Product"
                          className="img-fluid"
                        />
                      </div>
                      <div className="order-item-details">
                        <h4>Sit Amet Consectetur</h4>
                        <p className="order-item-variant">
                          Color: White | Size: L
                        </p>
                        <div className="order-item-price">
                          <span className="quantity">2 x</span>
                          <span className="price">$59.99</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-totals">
                    <div className="order-subtotal d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>$209.97</span>
                    </div>
                    <div className="order-shipping d-flex justify-content-between">
                      <span>Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="order-tax d-flex justify-content-between">
                      <span>Tax</span>
                      <span>$21.00</span>
                    </div>
                    <div className="order-total d-flex justify-content-between">
                      <span>Total</span>
                      <span>$240.96</span>
                    </div>
                  </div>

                  <div className="promo-code mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Promo Code"
                        aria-label="Promo Code"
                      />
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="secure-checkout mt-4">
                    <div className="secure-checkout-header">
                      <i className="bi bi-shield-lock"></i>
                      <span>Secure Checkout</span>
                    </div>
                    <div className="payment-icons mt-2">
                      <i className="bi bi-credit-card-2-front"></i>
                      <i className="bi bi-credit-card"></i>
                      <i className="bi bi-paypal"></i>
                      <i className="bi bi-apple"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Privacy Modals */}
          <div
            className="modal fade"
            id="termsModal"
            tabIndex={-1}
            aria-labelledby="termsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="termsModalLabel">
                    Terms and Conditions
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="privacyModal"
            tabIndex={-1}
            aria-labelledby="privacyModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="privacyModalLabel">
                    Privacy Policy
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
