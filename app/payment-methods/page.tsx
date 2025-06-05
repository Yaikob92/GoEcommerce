import Link from "next/link";

export default function PaymentMethodsPage() {
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
              <li className="current">Payment Methods</li>
            </ol>
          </nav>
          <h1>Payment Methods</h1>
        </div>
      </div>

      {/* Paymnt Methods Section */}
      <section id="paymnt-methods" className="paymnt-methods section">
        <div className="container" data-aos="fade-up">
          {/* Header */}
          <div className="payment-header text-center" data-aos="fade-up">
            <h2>Payment Methods</h2>
            <p>Choose from our secure and convenient payment options</p>
          </div>

          {/* Payment Options Grid */}
          <div className="payment-options" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="payment-card credit-card">
                  <div className="card-content">
                    <div className="icon-box">
                      <i className="bi bi-credit-card"></i>
                    </div>
                    <h4>Credit / Debit Cards</h4>
                    <p>Visa, Mastercard, American Express</p>
                    <div className="accepted-cards">
                      <span className="card-icon visa">Visa</span>
                      <span className="card-icon mastercard">Mastercard</span>
                      <span className="card-icon amex">Amex</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="payment-card paypal">
                  <div className="card-content">
                    <div className="icon-box">
                      <i className="bi bi-paypal"></i>
                    </div>
                    <h4>PayPal</h4>
                    <p>Fast and secure online payments</p>
                    <div className="accepted-cards">
                      <span className="card-icon paypal">PayPal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="payment-card bank-transfer">
                  <div className="card-content">
                    <div className="icon-box">
                      <i className="bi bi-bank"></i>
                    </div>
                    <h4>Bank Transfer</h4>
                    <p>Direct bank-to-bank transfers</p>
                    <div className="accepted-cards">
                      <span className="card-icon bank">Bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="security-features" data-aos="fade-up" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="security-content">
                  <h3>Secure Payments</h3>
                  <p className="subtitle">Your security is our top priority</p>
                  <ul className="security-list">
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <div className="feature-text">
                        <h5>SSL Encryption</h5>
                        <p>All transactions are protected with 256-bit SSL encryption</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-lock"></i>
                      <div className="feature-text">
                        <h5>PCI Compliant</h5>
                        <p>We follow strict PCI DSS security standards</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-shield-lock"></i>
                      <div className="feature-text">
                        <h5>Fraud Protection</h5>
                        <p>Advanced fraud detection and prevention systems</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="process-steps">
                  <h4>Payment Process</h4>
                  <div className="steps-list">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h5>Choose Payment Method</h5>
                        <p>Select your preferred payment option at checkout</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h5>Enter Details</h5>
                        <p>Provide your payment information securely</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h5>Confirm Payment</h5>
                        <p>Review and confirm your payment details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="payment-faqs" data-aos="fade-up" data-aos-delay="300">
            <h3>Payment FAQs</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  When will I be charged?
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </h3>
                <div className="faq-answer">
                  <p>Your payment will be processed immediately after you place your order. The charge will appear on your statement within 1-2 business days.</p>
                </div>
              </div>

              <div className="faq-item">
                <h3>
                  Is it safe to save my card?
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </h3>
                <div className="faq-answer">
                  <p>Yes, we use industry-standard encryption to protect your payment information. Your card details are never stored on our servers.</p>
                </div>
              </div>

              <div className="faq-item">
                <h3>
                  What currencies do you accept?
                  <i className="bi bi-chevron-down faq-toggle"></i>
                </h3>
                <div className="faq-answer">
                  <p>We accept payments in USD, EUR, GBP, and many other major currencies. The available currencies will be shown at checkout.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="payment-support" data-aos="fade-up" data-aos-delay="400">
            <div className="support-content">
              <i className="bi bi-headset"></i>
              <h4>Need Help?</h4>
              <p>Our payment support team is available 24/7 to assist you</p>
              <div className="support-actions">
                <a href="#" className="btn-primary">
                  <i className="bi bi-chat-dots"></i>
                  Chat Now
                </a>
                <span className="divider">or</span>
                <a href="#" className="contact-email">
                  <i className="bi bi-envelope"></i>
                  payment.support@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
