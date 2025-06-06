import Link from "next/link";

export default function AboutPage() {
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
              <li className="current">About</li>
            </ol>
          </nav>
          <h1>About</h1>
        </div>
      </div>

      {/* About 2 Section */}
      <section id="about-2" className="about-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row mb-lg-5">
            <span className="text-uppercase small-title mb-2">
              About Our Company
            </span>
            <div className="col-lg-6">
              <h2 className="about-title">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </h2>
            </div>
            <div className="col-lg-6 description-wrapper">
              <p className="about-description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="content-card">
                <div className="card-image">
                  <img
                    src="/img/about/about-portrait-16.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-content">
                  <h3>Ut enim ad minima veniam</h3>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur.
                  </p>
                  <a href="#" className="read-more">
                    Explore More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="content-card">
                <div className="card-image">
                  <img
                    src="/img/about/about-portrait-4.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-content">
                  <h3>Quis autem vel eum iure</h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum.
                  </p>
                  <a href="#" className="read-more">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="content-card">
                <div className="card-image">
                  <img
                    src="/img/about/about-portrait-1.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="card-content">
                  <h3>Nam libero tempore</h3>
                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates.
                  </p>
                  <a href="#" className="read-more">
                    Discover More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong>{" "}
                  <span>consequuntur quae</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong>{" "}
                  <span>adipisci atque cum quia aut</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong>{" "}
                  <span>aut commodi quaerat</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong>{" "}
                  <span>rerum asperiores dolor</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="testimonials-slider swiper init-swiper">
            <script
              type="application/json"
              className="swiper-config"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  slidesPerView: 1,
                  loop: true,
                  speed: 600,
                  autoplay: { delay: 5000 },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                }),
              }}
            />

            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>Sed ut perspiciatis unde omnis</h2>
                      <p>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                      </p>
                      <p>
                        Beatae magnam dolore quia ipsum. Voluptatem totam et qui
                        dolore dignissimos. Amet quia sapiente laudantium nihil
                        illo et assumenda sit cupiditate. Nam perspiciatis
                        perferendis minus consequatur. Enim ut eos quo.
                      </p>
                      <div className="profile d-flex align-items-center">
                        <img
                          src="/img/person/person-m-7.webp"
                          className="profile-img"
                          alt=""
                        />
                        <div className="profile-info">
                          <h3>Saul Goodman</h3>
                          <span>Client</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="featured-img-wrapper">
                        <img
                          src="/img/person/person-m-7.webp"
                          className="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>Nemo enim ipsam voluptatem</h2>
                      <p>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                      </p>
                      <p>
                        Dolorem excepturi esse qui amet maxime quibusdam aut
                        repellendus voluptatum. Corrupti enim a repellat cumque
                        est laborum fuga consequuntur. Dolorem nostrum deleniti
                        quas voluptatem iure dolorum rerum. Repudiandae
                        doloribus ut repellat harum vero aut. Modi aut velit
                        aperiam aspernatur odit ut vitae.
                      </p>
                      <div className="profile d-flex align-items-center">
                        <img
                          src="/img/person/person-f-8.webp"
                          className="profile-img"
                          alt=""
                        />
                        <div className="profile-info">
                          <h3>Sara Wilsson</h3>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="featured-img-wrapper">
                        <img
                          src="/img/person/person-f-8.webp"
                          className="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>Labore nostrum eos impedit</h2>
                      <p>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                      </p>
                      <p>
                        Itaque ut explicabo vero occaecati est quam rerum sed.
                        Numquam tempora aut aut quaerat quia illum. Nobis quia
                        autem odit ipsam numquam. Doloribus sit sint corporis
                        eius totam fuga. Hic nostrum suscipit corrupti nam
                        expedita adipisci aut optio.
                      </p>
                      <div className="profile d-flex align-items-center">
                        <img
                          src="/img/person/person-m-9.webp"
                          className="profile-img"
                          alt=""
                        />
                        <div className="profile-info">
                          <h3>Matt Brandon</h3>
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="featured-img-wrapper">
                        <img
                          src="/img/person/person-m-9.webp"
                          className="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>Impedit dolor facilis nulla</h2>
                      <p>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </p>
                      <p>
                        Omnis aspernatur accusantium qui delectus praesentium
                        repellendus. Facilis sint odio aspernatur voluptas commodi
                        qui qui qui pariatur. Corrupti deleniti itaque quaerat
                        ipsum deleniti culpa tempora tempore. Et consequatur
                        exercitationem hic aspernatur nobis est voluptatibus
                        architecto laborum.
                      </p>
                      <div className="profile d-flex align-items-center">
                        <img
                          src="/img/person/person-f-10.webp"
                          className="profile-img"
                          alt=""
                        />
                        <div className="profile-info">
                          <h3>Jena Karlis</h3>
                          <span>Store Owner</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="featured-img-wrapper">
                        <img
                          src="/img/person/person-f-10.webp"
                          className="featured-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
