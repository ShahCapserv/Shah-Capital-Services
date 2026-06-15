import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const NriCornerPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="NRI Corner"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="NRI Corner"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Stay Connected To India's Growth Story</h2>
                <p className="mf-intro-text mb-0">
                  Whether you're building wealth abroad, supporting family in India, planning your return, or exploring investment opportunities, India continues to offer compelling opportunities for long-term wealth creation. At Shah Capital Services, we help Non-Resident Indians (NRIs) access and manage investment opportunities in India through a structured, goal-based approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities For NRIs */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Investment Opportunities For NRIs</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                We assist NRIs in navigating a comprehensive range of investment options in India to build a diversified portfolio.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Mutual Funds"
                text="Access professionally managed mutual fund solutions designed for long-term wealth creation, retirement planning, and goal-based investing."
                icon="fa-solid fa-circle-dollar-to-slot"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Stocks & Securities"
                text="Participate directly in India's growth story through equities, initial public offerings (IPOs), and market-linked investment opportunities."
                icon="fa-solid fa-money-bill-trend-up"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Fixed Deposits & Fixed Income"
                text="Explore fixed income solutions designed to provide stability, predictable returns, and reliable portfolio diversification."
                icon="fa-solid fa-piggy-bank"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Bonds & Debt Instruments"
                text="Access fixed income opportunities that can complement long-term wealth creation and regular income generation goals."
                icon="fa-solid fa-coins"
                colorTheme="amber"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="GIFT City Opportunities"
                text="Explore global and India-focused investment solutions in foreign currency through India's International Financial Services Centre (IFSC)."
                icon="fa-solid fa-city"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Insurance Solutions"
                text="Protect your family, assets, and financial future through suitable life, health, travel, and protection-oriented insurance solutions."
                icon="fa-solid fa-umbrella"
                colorTheme="rose"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Why NRIs Invest In India */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Why NRIs Invest In India</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                India's economic landscape offers unique advantages for overseas investors looking to grow their capital.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Economic Growth Potential"
                text="Participate in one of the world's fastest-growing major economies, driven by digital transformation and infrastructure growth."
                icon="fa-solid fa-chart-line"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Diversification"
                text="Balance global investments by introducing India-focused opportunities, providing a hedge across different geographies."
                icon="fa-solid fa-chart-pie"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Family & Commitments"
                text="Effectively support future goals, responsibilities, child education, and family needs in India with local asset bases."
                icon="fa-solid fa-people-roof"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Long-Term Wealth"
                text="Build exposure to India's long-term growth story through disciplined investing and compounding returns."
                icon="fa-solid fa-gem"
                colorTheme="amber"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Shah Capital */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Shah Capital Services?</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Personalized Guidance"
                text="Tailored investment advice aligned with your specific financial goals, risk profile, and regulatory requirements."
                icon="fa-solid fa-user-gear"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Comprehensive Solutions"
                text="Unbiased access to multiple investment avenues and product manufacturers through a single relationship manager."
                icon="fa-solid fa-folder-open"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Dedicated Support"
                text="Seamless support throughout onboarding, investment execution, periodic portfolio reviews, and ongoing servicing."
                icon="fa-solid fa-headset"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Global & Local Perspective"
                text="Helping NRIs connect global financial objectives with Indian investment opportunities under compliant frameworks."
                icon="fa-solid fa-globe"
                colorTheme="cyan"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Build Your India Portfolio With Confidence</h3>
                <p className="mf-intro-text mb-5">
                  Ready to explore investment opportunities in India? Let our dedicated team guide you through a smooth, compliant onboarding and investment journey.
                </p>
                <div className="pb-2 d-flex align-items-center justify-content-center">
                  <Link to="/contact" className="thm-btn">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
