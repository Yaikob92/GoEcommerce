import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="footer-main">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-about">
                <Link href="/" className="logo">
                  <span className="sitename">FashionStore</span>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in nibh vehicula, facilisis magna ut, consectetur
                  lorem. Proin eget tortor risus.
                </p>

                <div className="social-links mt-4">
                  <h5>Connect With Us</h5>
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="TikTok">
                      <i className="bi bi-tiktok"></i>
                    </a>
                    <a href="#" aria-label="Pinterest">
                      <i className="bi bi-pinterest"></i>
                    </a>
                    <a href="#" aria-label="YouTube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4>Shop</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/category">New Arrivals</Link>
                  </li>
                  <li>
                    <Link href="/category">Bestsellers</Link>
                  </li>
                  <li>
                    <Link href="/category">Women&apos;s Clothing</Link>
                  </li>
                  <li>
                    <Link href="/category">Men&apos;s Clothing</Link>
                  </li>
                  <li>
                    <Link href="/category">Accessories</Link>
                  </li>
                  <li>
                    <Link href="/category">Sale</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4>Support</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/support">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/account">Order Status</Link>
                  </li>
                  <li>
                    <Link href="/shipping-info">Shipping Info</Link>
                  </li>
                  <li>
                    <Link href="/return-policy">Returns &amp; Exchanges</Link>
                  </li>
                  <li>
                    <a href="#">Size Guide</a>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h4>Contact Information</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>123 Fashion Street, New York, NY 10001</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>hello@example.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-clock"></i>
                    <span>
                      Monday-Friday: 9am-6pm
                      <br />
                      Saturday: 10am-4pm
                      <br />
                      Sunday: Closed
                    </span>
                  </div>
                </div>

                <div className="app-buttons mt-4">
                  <a href="#" className="app-btn">
                    <i className="bi bi-apple"></i>
                    <span>App Store</span>
                  </a>
                  <a href="#" className="app-btn">
                    <i className="bi bi-google-play"></i>
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="copyright">
                <p>
                  © <span>Copyright</span>{" "}
                  <strong className="sitename">MyWebsite</strong>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="credits mt-1">
                Designed by{" "}
                <a
                  href="https://bootstrapmade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BootstrapMade
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="d-flex flex-wrap justify-content-lg-end justify-content-center align-items-center gap-4">
                <div className="payment-methods">
                  <div className="payment-icons">
                    <i
                      className="bi bi-credit-card"
                      aria-label="Credit Card"
                    ></i>
                    <i className="bi bi-paypal" aria-label="PayPal"></i>
                    <i className="bi bi-apple" aria-label="Apple Pay"></i>
                    <i className="bi bi-google" aria-label="Google Pay"></i>
                    <i className="bi bi-shop" aria-label="Shop Pay"></i>
                    <i
                      className="bi bi-cash"
                      aria-label="Cash on Delivery"
                    ></i>
                  </div>
                </div>

                <div className="legal-links">
                  <Link href="/terms">Terms</Link>
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Cookies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
