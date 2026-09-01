import React from 'react'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import { ReachUsModal } from '#/components/ReachUsForm'

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
          <h2 className="mf-section-title">Investment Avenues For NRIs</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Non-Resident Indians have access to broad categories of financial instruments under current FEMA regulations. We help evaluate and execute plans across these primary avenues.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Mutual Funds"
                text="Invest in professionally managed equity, debt, or hybrid mutual funds to participate in diversfied market segments and sectors under FEMA-compliant structures."
                icon="fa-solid fa-chart-pie"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Bonds & Corporate Deposits"
                text="Access high-credit-rated fixed-income corporate deposits, government securities, and tax-free bonds to generate stable, predictable yields."
                icon="fa-solid fa-piggy-bank"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Equities & IPOs"
                text="Open NRE/NRO Demat accounts to trade directly on primary exchanges (NSE & BSE) or participate in initial public offerings of growing businesses."
                icon="fa-solid fa-arrow-trend-up"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding & Regulatory Onboarding */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Regulatory Framework & Onboarding Guidance</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                A structured onboarding process helps ensure regulatory compliance and operational simplicity for NRI investors.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="NRE & NRO Accounts"
                text="We guide you in understanding and setting up Non-Resident External (NRE) accounts for repatriable funds and Non-Resident Ordinary (NRO) accounts for domestic earnings."
                icon="fa-solid fa-building-columns"
                num="01"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="PIS (Portfolio Investment Scheme)"
                text="For direct equities, we assist in navigating PIS permissions or utilizing non-PIS routes to trade on exchanges in a compliant manner."
                icon="fa-solid fa-file-circle-check"
                num="02"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="KYC & Documentation"
                text="Step-by-step assistance in executing NRI KYC, FATCA declarations, tax status updates, and required bank linked mandates."
                icon="fa-solid fa-address-card"
                num="03"
                colorTheme="orange"
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
                <div className="pb-2 d-flex flex-wrap align-items-center justify-content-center gap-4">
                  <button
                    type="button"
                    className="thm-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#reachUsModal"
                  >
                    Contact Us
                  </button>
                  <a
                    href="https://zfrmz.in/k39OigbpztM0gK6Dqwxm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn btn-glow-effect"
                  >
                    Onboard Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ReachUsModal defaultService="NRI Corner" />
    </div>
  )
}

