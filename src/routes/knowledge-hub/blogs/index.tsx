import type { AnimationVariant } from '#/components/elements/FadeInAdvanced'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import Banner from '#/features/banner/Banner'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { allPosts } from 'content-collections'
import TextAnimation from '#/components/elements/TextAnimation'

export const Route = createFileRoute('/knowledge-hub/blogs/')({
  loader: () => {
    const blogs = allPosts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    const newBlogs = blogs.map((blog, index) => ({
      ...blog,
      animation: index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight',
      animationDelay: (index + 1) * 100,
    }))
    return newBlogs
  },
  component: RouteComponent,
})

function RouteComponent() {
  const blogs = Route.useLoaderData()
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 3

  // Calculate paginated blogs
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  return (
    <main>
      <Banner title="Blog & News" subTitle="Knowledge Hub" subTitleLink="/knowledge-hub" thirdTitle="Blog & News" />
      <section className="blog-page">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1 mb-5">
            <h6 className="section-title__tagline">
              <span className="section-title__tagline-border"></span>blog &
              News
            </h6>
            <h3 className="section-title__title title-animation">
              <TextAnimation>
                Our Latest Blogs and News Updates
              </TextAnimation>
            </h3>
          </div>
          <div className="row">
            {currentBlogs.map((post) => (
              <FadeInAdvanced
                key={post._meta.path}
                className="col-xl-4 col-lg-4 col-md-6"
                variant={post.animation as AnimationVariant}
                delay={post.animationDelay}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img
                        src={post.image}
                        width={410}
                        height={240}
                        alt={post.title}
                      />
                      <div className="blog-one__plus">
                        <Link to="/knowledge-hub/blogs/$slug" params={{ slug: post.slug }}>
                          <i className="fa fa-plus"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-one__date">
                      <p>
                        {new Date(post.createdAt).getDate()} <br />{' '}
                        {new Date(post.createdAt).toLocaleString('en-US', {
                          month: 'short',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <p>
                          <span className="icon-user"></span>
                          {post.author}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fas fa-clock text-teal"></span>
                          {' '}{post.readTime} Min Read
                        </p>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link to="/knowledge-hub/blogs/$slug" params={{ slug: post.slug }}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="blog-one__read-more">
                      <Link to="/knowledge-hub/blogs/$slug" params={{ slug: post.slug }}>
                        Learn More <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInAdvanced>
            ))}
            {totalPages > 1 && (
              <ul className="styled-pagination text-center clearfix list-unstyled">
                <li className="arrow prev">
                  <button
                    onClick={(e) => {
                      handlePageChange(currentPage - 1)
                      e.preventDefault()
                    }}
                    disabled={currentPage === 1}
                  >
                    <span className="fas fa-angle-left"></span>{' '}
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li
                    key={index}
                    className={`count ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className="pg-btn"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className="arrow next">
                  <button
                    aria-label="Next"
                    onClick={(e) => {
                      handlePageChange(currentPage + 1)
                      e.preventDefault()
                    }}
                    disabled={currentPage === totalPages}
                  >
                    <span className="fas fa-angle-right"></span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
