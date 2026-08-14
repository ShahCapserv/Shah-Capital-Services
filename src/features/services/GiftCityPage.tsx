import React from 'react'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import { ReachUsModal } from '#/components/ReachUsForm'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const GiftCityPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="GIFT City Investments"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="GIFT City"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Access Global Opportunities Through India's Hub</h2>
                <p className="mf-intro-text mb-0">
                  GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre (IFSC), created to provide investors access to global financial opportunities through a world-class regulatory and operational framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consider GIFT City */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Consider GIFT City Investments?</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                GIFT City brings together banking, investment management, insurance, and capital markets under a unified regulatory ecosystem governed by the IFSCA, creating an investor-friendly global framework.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Cross-Border Transactions"
                text="Enables a streamlined investment process for eligible investors by facilitating efficient cross-border transactions through recognized financial infrastructure."
                icon="fa-solid fa-right-left"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Gateway To Global Investing"
                text="Provides access to foreign currency-based investments, helping investors build globally diversified portfolios beyond domestic markets."
                icon="fa-solid fa-earth-americas"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Unified Regulatory Ecosystem"
                text="Governed by the unified regulator IFSCA, ensuring high compliance, simplified procedures, and clear operational frameworks."
                icon="fa-solid fa-scale-balanced"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Streamlined Experience"
                text="Modern technology and regulatory framework support efficient asset allocation, enhanced transparency, and improved investor service."
                icon="fa-solid fa-arrows-spin"
                colorTheme="amber"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Competitive Hub"
                text="Offers a globally competitive financial ecosystem comparable to leading international hubs like Singapore, London, or Dubai."
                icon="fa-solid fa-trophy"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Who Can Benefit?</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="NRIs & OCIs"
                text="Non-Resident Indians and Overseas Citizens of India looking for tax-efficient, simplified channels to invest in global and Indian assets."
                icon="fa-solid fa-passport"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="HNWIs & Family Offices"
                text="High-Net-Worth Individuals and family offices seeking foreign currency exposure, sophisticated asset structures, and alternative routes."
                icon="fa-solid fa-user-tie"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Global & Domestic Investors"
                text="Eligible domestic retail and institutional investors looking for international diversification under liberalized remittance schemes."
                icon="fa-solid fa-chart-line"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* How Shah Capital Can Help */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">How Shah Capital Services Can Help</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Evaluating Suitability"
                text="We help investors evaluate whether GIFT City structures and global alternative products align with their overall goals, timeline, and risk appetite."
                icon="fa-solid fa-user-check"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Strategic Allocation Guidance"
                text="Our team assists in understanding the associated regulations, explaining global product features, and integrating them into your broader plan."
                icon="fa-solid fa-sitemap"
                colorTheme="purple"
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
                <h3 className="services-three__title fs-4 mb-4">Explore Global Opportunities With Confidence</h3>
                <p className="mf-intro-text mb-5">
                  Ready to diversify your portfolio internationally through India's premier financial hub? Let Shah Capital Services guide your GIFT City investment journey.
                </p>
                <div className="pb-2 d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="thm-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#reachUsModal"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReachUsModal defaultService="Gift City" />
    </div>
  )
}

