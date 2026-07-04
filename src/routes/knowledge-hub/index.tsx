import { createFileRoute, Link } from '@tanstack/react-router'

import FadeInAdvanced from '#/components/elements/FadeInAdvanced.tsx'
import TextAnimation from '#/components/elements/TextAnimation.tsx'
import Banner from '#/features/banner/Banner.tsx'

export const Route = createFileRoute('/knowledge-hub/')({
  head: () => ({
    meta: [
      {
        title: 'Knowledge Hub | Shah Capital Services',
      },
      {
        name: 'description',
        content:
          'Explore financial tools, blog articles, and newsletter updates from Shah Capital Services.',
      },
    ],
  }),
  component: KnowledgeHubIndex,
})

const sections = [
  {
    title: 'Calculators',
    description:
      'Plan your investments with our easy-to-use SIP, Lump Sum, SWP, and other financial calculators.',
    icon: 'fa-solid fa-calculator',
    link: '/knowledge-hub/calculators',
    color: '#0f766e',
    bgColor: 'rgba(15, 118, 110, 0.08)',
  },
  {
    title: 'Blog & News',
    description:
      'Stay updated with the latest financial insights, market analysis, and investment tips from our experts.',
    icon: 'fa-solid fa-newspaper',
    link: '/knowledge-hub/blogs',
    color: '#6366f1',
    bgColor: 'rgba(99, 102, 241, 0.08)',
  },
  {
    title: 'Newsletter',
    description:
      'Subscribe to our monthly newsletter to receive curated financial wisdom directly in your inbox.',
    icon: 'fa-solid fa-paper-plane',
    link: '/knowledge-hub/newsletter',
    color: '#e11d48',
    bgColor: 'rgba(225, 29, 72, 0.08)',
  },
]

function KnowledgeHubIndex() {
  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Knowledge Hub" subTitle="Knowledge Hub" />

        <section className="py-5 my-5">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1 mb-5">
              <h6 className="section-title__tagline">
                <span className="section-title__tagline-border"></span>
                Explore
              </h6>
              <h3 className="section-title__title title-animation">
                <TextAnimation>
                  Your Financial Knowledge Center
                </TextAnimation>
              </h3>
              <p
                className="text-muted mx-auto mt-3"
                style={{ maxWidth: '650px', lineHeight: '1.7' }}
              >
                Discover powerful financial tools, expert insights, and
                exclusive updates — all in one place.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              {sections.map((section, index) => (
                <FadeInAdvanced
                  key={section.title}
                  className="col-xl-4 col-lg-6 col-md-6"
                  variant={index === 0 ? 'fadeInLeft' : index === 2 ? 'fadeInRight' : 'fadeInUp'}
                  delay={(index + 1) * 150}
                >
                  <Link
                    to={section.link}
                    className="text-decoration-none"
                    style={{ display: 'block' }}
                  >
                    <div
                      className="text-center p-4 p-lg-5 rounded-4 shadow-sm border h-100"
                      style={{
                        background: '#ffffff',
                        borderColor: '#eaeaea',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.transform = 'translateY(-8px)'
                        el.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.transform = 'translateY(0)'
                        el.style.boxShadow = ''
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: section.bgColor,
                          color: section.color,
                        }}
                      >
                        <i className={`${section.icon} fa-2x`}></i>
                      </div>

                      <h4
                        className="fw-bold mb-3"
                        style={{ color: '#1e293b' }}
                      >
                        {section.title}
                      </h4>

                      <p
                        className="text-muted mb-4"
                        style={{
                          lineHeight: '1.6',
                          fontSize: '0.95rem',
                        }}
                      >
                        {section.description}
                      </p>

                      <span
                        className="fw-semibold"
                        style={{ color: section.color }}
                      >
                        Explore <i className="fa fa-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </Link>
                </FadeInAdvanced>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
