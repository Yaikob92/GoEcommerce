import Link from "next/link";

export default function BlogDetailsPage() {
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
              <li className="current">Blog Details</li>
            </ol>
          </nav>
          <h1>Blog Details</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img
                      src="/img/blog/blog-hero-7.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="title">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </h2>

                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <Link href="/blog/my-post">John Doe</Link>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <Link href="/blog/my-post">
                          <time dateTime="2020-01-01">Jan 1, 2022</time>
                        </Link>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>{" "}
                        <Link href="/blog/my-post">12 Comments</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="content">
                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam
                      quas. Quibusdam animi praesentium. Aliquam et laboriosam
                      eius aut nostrum quidem aliquid dicta. Et eveniet enim.
                      Qui velit est ea dolorem doloremque deleniti aperiam unde
                      soluta. Est cum et quod quos aut ut et sit sunt. Voluptate
                      porro consequatur assumenda perferendis dolore.
                    </p>

                    <p>
                      Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt
                      non reiciendis. Sequi in accusamus harum vel aspernatur.
                      Excepturi numquam nihil cumque odio. Et voluptate
                      cupiditate.
                    </p>

                    <blockquote>
                      <p>
                        Et vero doloremque tempore voluptatem ratione vel aut.
                        Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                        autem quos.
                      </p>
                    </blockquote>

                    <p>
                      Sed quo laboriosam qui architecto. Occaecati repellendus
                      omnis dicta inventore tempore provident voluptas mollitia
                      aliquid. Id repellendus quia. Asperiores nihil magni dicta
                      est suscipit perspiciatis. Voluptate ex rerum assumenda
                      dolores nihil quaerat. Dolor porro tempora et quibusdam
                      voluptas. Beatae aut at ad qui tempore corrupti velit
                      quisquam rerum. Omnis dolorum exercitationem harum qui qui
                      blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                      aspernatur ea neque qui. Architecto voluptatem magni. Vel
                      magnam quod et tempora deleniti error rerum nihil tempora.
                    </p>

                    <h3>Et quae iure vel ut odit alias.</h3>
                    <p>
                      Officiis animi maxime nulla quo et harum eum quis a. Sit
                      hic in qui quos fugit ut rerum atque. Optio provident
                      dolores atque voluptatem rem excepturi molestiae qui.
                      Voluptatem laborum omnis ullam quibusdam perspiciatis nulla
                      nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                      Quia et suscipit non sequi. Maxime sed odit. Beatae
                      nesciunt nesciunt accusamus quia aut ratione aspernatur
                      dolor. Sint harum eveniet dicta exercitationem minima.
                      Exercitationem omnis asperiores natus aperiam dolor
                      consequatur id ex sed. Quibusdam rerum dolores sint
                      consequatur quidem ea. Beatae minima sunt libero soluta
                      sapiente in rem assumenda. Et qui odit voluptatem. Cum
                      quibusdam voluptatem voluptatem accusamus mollitia aut
                      atque aut.
                    </p>
                    <img
                      src="/img/blog/blog-hero-2.webp"
                      className="img-fluid"
                      alt=""
                    />

                    <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                    <p>
                      Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                      porro amet nostrum. In assumenda quia quae a id
                      praesentium. Quos deleniti libero sed occaecati aut porro
                      autem. Consectetur sed excepturi sint non placeat quia
                      repellat incidunt labore. Autem facilis hic dolorum dolores
                      vel. Consectetur quasi id et optio praesentium aut
                      asperiores eaque aut. Explicabo omnis quibusdam esse. Ex
                      libero illum iusto totam et ut aut blanditiis. Veritatis
                      numquam ut illum ut a quam vitae.
                    </p>
                    <p>
                      Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                      enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                      nisi asperiores est veniam.
                    </p>
                  </div>

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            {/* Blog Comments Section */}
            <section id="blog-comments" className="blog-comments section">
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="blog-comments-3">
                  <div className="section-header">
                    <h3>
                      Discussion <span className="comment-count">(8)</span>
                    </h3>
                  </div>

                  <div className="comments-wrapper">
                    {/* Comment 1 */}
                    <article className="comment-card">
                      <div className="comment-header">
                        <div className="user-info">
                          <img
                            src="/img/person/person-f-9.webp"
                            alt="User avatar"
                            loading="lazy"
                          />
                          <div className="meta">
                            <h4 className="name">Sarah Williams</h4>
                            <span className="date">
                              <i className="bi bi-calendar3"></i> February 13,
                              2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim donec
                          porttitora entum suscipit rhoncus. Accusantium quam,
                          ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                          risus at semper.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <button className="action-btn like-btn">
                          <i className="bi bi-hand-thumbs-up"></i>
                          <span>12</span>
                        </button>
                        <button className="action-btn reply-btn">
                          <i className="bi bi-reply"></i>
                          <span>Reply</span>
                        </button>
                      </div>
                    </article>

                    {/* Comment 2 with replies */}
                    <article className="comment-card">
                      <div className="comment-header">
                        <div className="user-info">
                          <img
                            src="/img/person/person-m-9.webp"
                            alt="User avatar"
                            loading="lazy"
                          />
                          <div className="meta">
                            <h4 className="name">James Cooper</h4>
                            <span className="date">
                              <i className="bi bi-calendar3"></i> February 13,
                              2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Quisque ut nisi. Donec mi odio, faucibus at, scelerisque
                          quis, convallis in, nisi. Suspendisse non nisl sit amet
                          velit hendrerit rutrum. Ut leo. Ut a nisl id ante
                          tempus hendrerit.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <button className="action-btn like-btn">
                          <i className="bi bi-hand-thumbs-up"></i>
                          <span>8</span>
                        </button>
                        <button className="action-btn reply-btn">
                          <i className="bi bi-reply"></i>
                          <span>Reply</span>
                        </button>
                      </div>

                      {/* Reply Thread */}
                      <div className="reply-thread">
                        {/* Reply 1 */}
                        <article className="comment-card reply">
                          <div className="comment-header">
                            <div className="user-info">
                              <img
                                src="/img/person/person-f-9.webp"
                                alt="User avatar"
                                loading="lazy"
                              />
                              <div className="meta">
                                <h4 className="name">Emily Parker</h4>
                                <span className="date">
                                  <i className="bi bi-calendar3"></i> February
                                  13, 2025
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Cras ultricies mi eu turpis hendrerit fringilla.
                              Vestibulum ante ipsum primis in faucibus orci luctus
                              et ultrices posuere cubilia Curae.
                            </p>
                          </div>
                          <div className="comment-actions">
                            <button className="action-btn like-btn">
                              <i className="bi bi-hand-thumbs-up"></i>
                              <span>5</span>
                            </button>
                            <button className="action-btn reply-btn">
                              <i className="bi bi-reply"></i>
                              <span>Reply</span>
                            </button>
                          </div>
                        </article>

                        {/* Reply 2 */}
                        <article className="comment-card reply">
                          <div className="comment-header">
                            <div className="user-info">
                              <img
                                src="/img/person/person-f-7.webp"
                                alt="User avatar"
                                loading="lazy"
                              />
                              <div className="meta">
                                <h4 className="name">Daniel Brown</h4>
                                <span className="date">
                                  <i className="bi bi-calendar3"></i> February
                                  13, 2025
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Nam commodo suscipit quam. Vestibulum ullamcorper
                              mauris at ligula. Fusce fermentum odio nec arcu.
                            </p>
                          </div>
                          <div className="comment-actions">
                            <button className="action-btn like-btn">
                              <i className="bi bi-hand-thumbs-up"></i>
                              <span>3</span>
                            </button>
                            <button className="action-btn reply-btn">
                              <i className="bi bi-reply"></i>
                              <span>Reply</span>
                            </button>
                          </div>
                        </article>
                      </div>
                    </article>

                    {/* Comment 3 */}
                    <article className="comment-card">
                      <div className="comment-header">
                        <div className="user-info">
                          <img
                            src="/img/person/person-m-6.webp"
                            alt="User avatar"
                            loading="lazy"
                          />
                          <div className="meta">
                            <h4 className="name">Rachel Adams</h4>
                            <span className="date">
                              <i className="bi bi-calendar3"></i> February 13,
                              2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Vivamus elementum semper nisi. Aenean vulputate eleifend
                          tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                          eleifend ac, enim.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <button className="action-btn like-btn">
                          <i className="bi bi-hand-thumbs-up"></i>
                          <span>6</span>
                        </button>
                        <button className="action-btn reply-btn">
                          <i className="bi bi-reply"></i>
                          <span>Reply</span>
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>

            {/* Blog Comment Form Section */}
            <section
              id="blog-comment-form"
              className="blog-comment-form section"
            >
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <form method="post" role="form">
                  <div className="section-header">
                    <h3>Share Your Thoughts</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>

                  <div className="row gy-3">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="col-12 form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="url"
                        name="website"
                        className="form-control"
                        id="website"
                        placeholder="Your website (optional)"
                      />
                    </div>

                    <div className="col-12 form-group">
                      <label htmlFor="comment">Your Comment *</label>
                      <textarea
                        className="form-control"
                        name="comment"
                        id="comment"
                        rows={5}
                        placeholder="Write your thoughts here..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn-submit">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>

          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              {/* Search Widget */}
              <div className="search-widget widget-item">
                <h3 className="widget-title">Search</h3>
                <form action="">
                  <input type="text" />
                  <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li>
                    <a href="#">General <span>(25)</span></a>
                  </li>
                  <li>
                    <a href="#">Lifestyle <span>(12)</span></a>
                  </li>
                  <li>
                    <a href="#">Travel <span>(5)</span></a>
                  </li>
                  <li>
                    <a href="#">Design <span>(22)</span></a>
                  </li>
                  <li>
                    <a href="#">Creative <span>(8)</span></a>
                  </li>
                  <li>
                    <a href="#">Educaion <span>(14)</span></a>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>

                <div className="post-item">
                  <img
                    src="/img/blog/blog-post-square-1.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <Link href="/blog/my-post">
                        Nihil blanditiis at in nihil autem
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <div className="post-item">
                  <img
                    src="/img/blog/blog-post-square-2.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <Link href="/blog/my-post">
                        Quidem autem et impedit
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <div className="post-item">
                  <img
                    src="/img/blog/blog-post-square-3.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <Link href="/blog/my-post">
                        Id quia et et ut maxime similique occaecati ut
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <div className="post-item">
                  <img
                    src="/img/blog/blog-post-square-4.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <Link href="/blog/my-post">
                        Laborum corporis quo dara net para
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>

                <div className="post-item">
                  <img
                    src="/img/blog/blog-post-square-5.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <Link href="/blog/my-post">
                        Et dolores corrupti quae illo quod dolor
                      </Link>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
              </div>

              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">IT</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Mac</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Office</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  <li>
                    <a href="#">Studio</a>
                  </li>
                  <li>
                    <a href="#">Smart</a>
                  </li>
                  <li>
                    <a href="#">Tips</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
