import Link from "next/link";

export default function ShippingInfoPage() {
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
              <li className="current">Shipping Info</li>
            </ol>
          </nav>
          <h1>Shipping Info</h1>
        </div>
      </div>

      {/* Shipping Info Section */}
      <section id="shipping-info" className="shipping-info section">
        <div className="container" data-aos="fade-up">
          <div className="content-wrapper">
            {/* Delivery Options */}
            <div className="content-block" data-aos="fade-up" data-aos-delay="100">
              <div className="section-heading">
                <i className="bi bi-truck"></i>
                <h3>Delivery Options</h3>
                <p>
                  Choose the delivery option that best suits your needs
                </p>
              </div>

              <div className="row gy-4 gx-lg-5">
                <div className="col-md-6 col-lg-4">
                  <div className="delivery-card">
                    <div className="card-icon">
                      <i className="bi bi-lightning-charge"></i>
                    </div>
                    <h4>Express Delivery</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Delivery within 1-2 business days.
                    </p>
                    <div className="delivery-time">
                      <i className="bi bi-clock"></i>
                      <span>1-2 Business Days</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="delivery-card">
                    <div className="card-icon">
                      <i className="bi bi-box-seam"></i>
                    </div>
                    <h4>Standard Shipping</h4>
                    <p>
                      Proin dapibus nisl ornare diam varius tempus. Delivery
                      within 3-5 business days.
                    </p>
                    <div className="delivery-time">
                      <i className="bi bi-clock"></i>
                      <span>3-5 Business Days</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="delivery-card">
                    <div className="card-icon">
                      <i className="bi bi-pin-map"></i>
                    </div>
                    <h4>Local Shipping</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                      Delivery within 2-3 business days.
                    </p>
                    <div className="delivery-time">
                      <i className="bi bi-clock"></i>
                      <span>2-3 Business Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Costs */}
            <div
              className="content-block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="section-heading">
                <i className="bi bi-cash-coin"></i>
                <h3>Shipping Costs</h3>
                <p>Transparent pricing for all shipping options</p>
              </div>

              <div className="shipping-rates">
                <div className="rate-item">
                  <div className="rate-type">Standard Shipping</div>
                  <div className="rate-cost">$5.99</div>
                  <div className="rate-info">For orders under $50</div>
                </div>
                <div className="rate-item highlight">
                  <div className="rate-type">Free Shipping</div>
                  <div className="rate-cost">$0.00</div>
                  <div className="rate-info">For orders over $50</div>
                </div>
                <div className="rate-item">
                  <div className="rate-type">Express Shipping</div>
                  <div className="rate-cost">$12.99</div>
                  <div className="rate-info">1-2 business days delivery</div>
                </div>
              </div>
            </div>

            {/* International Shipping */}
            <div
              className="content-block"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="section-heading">
                <i className="bi bi-globe"></i>
                <h3>International Shipping</h3>
                <p>We deliver worldwide with reliable carriers</p>
              </div>

              <div className="international-info">
                <div className="info-item">
                  <i className="bi bi-clock-history"></i>
                  <h5>Delivery Time</h5>
                  <p>
                    5-10 business days for most international destinations
                  </p>
                </div>
                <div className="info-item">
                  <i className="bi bi-currency-dollar"></i>
                  <h5>Customs &amp; Duties</h5>
                  <p>
                    Import duties and taxes are not included in the shipping
                    cost
                  </p>
                </div>
                <div className="info-item">
                  <i className="bi bi-shield-check"></i>
                  <h5>Reliable Service</h5>
                  <p>
                    Tracked shipping with leading international carriers
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div
              className="content-block"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="section-heading">
                <i className="bi bi-question-circle"></i>
                <h3>Shipping FAQ</h3>
                <p>Common questions about our shipping services</p>
              </div>

              <div className="faq-list">
                <div className="faq-item">
                  <h3>
                    <i className="bi bi-question-circle"></i>
                    How can I track my order?
                    <i className="bi bi-chevron-down faq-toggle"></i>
                  </h3>
                  <div className="faq-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      You can track your order using the tracking number provided
                      in your shipping confirmation email.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <h3>
                    <i className="bi bi-question-circle"></i>
                    What if I&apos;m not home for delivery?
                    <i className="bi bi-chevron-down faq-toggle"></i>
                  </h3>
                  <div className="faq-answer">
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris. The carrier will leave a notification and attempt
                      delivery again or leave your package at a secure location.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <h3>
                    <i className="bi bi-question-circle"></i>
                    Do you offer weekend delivery?
                    <i className="bi bi-chevron-down faq-toggle"></i>
                  </h3>
                  <div className="faq-answer">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Weekend
                      delivery is available for express shipping in select areas.
                    </p>
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
