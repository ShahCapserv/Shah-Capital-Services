import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import { ReachUsModal } from '#/components/ReachUsForm'

export const LifeInsurancePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="Life Insurance"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Life Insurance"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Protection First. Planning Next.</h2>
                <p className="mf-intro-text mb-0">
                  Before wealth creation comes wealth protection. At Shah Capital Services, we believe life insurance is one of the most important foundations of financial planning. Before building an investment portfolio, it is essential to ensure that your family's financial future is protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Insurance Matters */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Life Insurance Matters</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Life insurance is designed to protect the people who depend on you financially. It is not an investment decision — it is a risk management decision to safeguard your family's lifestyle.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Income Replacement"
                text="Replaces the earning capacity of the primary breadwinner, helping the family maintain their lifestyle and cover daily expenses."
                icon="fa-solid fa-wallet"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Liability Protection"
                text="Ensures that any outstanding debts, home loans, or business liabilities do not become a financial burden for your family."
                icon="fa-solid fa-shield-halved"
                colorTheme="rose"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Goal Protection"
                text="Guarantees funding for critical long-term milestones, such as your children's higher education or marriage, even in your absence."
                icon="fa-solid fa-bullseye"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="https://shelf.shahcapserv.com/external/36c6d59480356ea6d47b2e9494dc34babe955b78347a79f6ff544ccea2a332e2/download?directDownload=true" target="_blank" rel="noopener noreferrer" className="thm-btn">
              <i className="fa-solid fa-download me-2"></i> Why Life Insurance Matters
            </a>
          </div>
        </div>
      </section>

      {/* Structured Insurance Review */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Are You Under-Insured or Over-Insured?</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Many people either purchase insufficient coverage or pay high premiums for unsuitable policies. A structured life insurance review helps identify your true protection requirements.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Coverage Gap Assessment"
                text="We evaluate existing policies, outstanding liabilities, and income replacement needs to calculate your exact financial protection requirement."
                icon="fa-solid fa-chart-bar"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Policy Suitability"
                text="We review your current life policies to ensure you are paying for high-utility term protection rather than complex, low-yield blended products."
                icon="fa-solid fa-file-shield"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Our Process</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="We Understand"
                text="We evaluate your liabilities, family goals, and income structure to get a clear picture of your protection needs."
                icon="fa-solid fa-handshake"
                num="01"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="We Inform"
                text="We explain the differences between term insurance, endowment plans, and other products to help simplify your decisions."
                icon="fa-solid fa-circle-info"
                num="02"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="We Execute"
                text="We assist with policy comparison, application processing, medical scheduling, and ongoing claim support."
                icon="fa-solid fa-square-check"
                num="03"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Why Clients Choose Shah Capital Services</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Protection-First Philosophy"
                text="We prioritize term life insurance to maximize your family's coverage per rupee, rather than pushing high-commission investment-linked plans."
                icon="fa-solid fa-shield-heart"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Multiple Insurer Access"
                text="We provide unbiased access to leading life insurance providers, letting you compare premium quotes and claim settlement ratios."
                icon="fa-solid fa-server"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Long-Term Financial Continuity"
                text="We integrate your protection plan directly into your broader wealth management and estate planning objectives."
                icon="fa-solid fa-sitemap"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Protect Your Family's Financial Future Today</h3>
                <p className="mf-intro-text mb-5">
                  Unsure if your current life insurance coverage is sufficient? Let Shah Capital Services perform a structured review of your protection portfolio.
                </p>
                <div className="pb-2 d-flex align-items-center justify-content-center gap-3">
                  <button
                    type="button"
                    className="thm-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#reachUsModal"
                  >
                    Contact Us
                  </button>
                  <a
                    href="https://zfrmz.in/cF7FzTMbXiUiFj6Zd2Ue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReachUsModal defaultService="Life Insurance" />
    </div>
  )
}

