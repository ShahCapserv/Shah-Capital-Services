import React from 'react'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import { ReachUsModal } from '#/components/ReachUsForm'

export const NpsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="National Pension Scheme"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="NPS"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Retire on Your Own Terms</h2>
                <p className="mf-intro-text mb-0">
                  The National Pension Scheme (NPS) is a government-backed, voluntary retirement savings scheme regulated by the PFRDA (Pension Fund Regulatory and Development Authority). It is designed to help individuals build a disciplined retirement corpus through market-linked, professionally managed pension funds — while offering some of the most attractive tax benefits available in India today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NPS */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">What is NPS</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                NPS is a defined-contribution pension scheme where your contributions are invested across a mix of equity, corporate debt, and government securities, based on your chosen allocation or age-based auto allocation. The corpus accumulates over your working years and is used to provide you a regular income after retirement, along with a lump-sum withdrawal.
              </p>
              <p className="mf-intro-text mt-3">
                NPS is open to all Indian citizens (resident and NRI) between 18 and 70 years of age, and is available through two account types:
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Tier I Account (Pension Account)"
                text="The primary retirement account with a lock-in until retirement (age 60). Mandatory for availing tax benefits. Partial withdrawals permitted only for specific purposes after 3 years, subject to conditions."
                icon="fa-solid fa-lock"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Tier II Account (Investment Account)"
                text="A voluntary savings account with no lock-in — withdraw anytime. Can only be opened if you already have a Tier I account. No tax benefit on contributions (except for specified government employees under a 3-year lock-in)."
                icon="fa-solid fa-unlock"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Rules Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Key Features & Rules</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Choice of Pension Funds"
                text="Choose from Active Choice (set your own mix of Equity, Corporate Bonds, Government Securities) or Auto Choice. Equity exposure is capped for a measured risk profile."
                icon="fa-solid fa-sliders"
                num="01"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Tax Benefits"
                text="Deduction up to ₹1.5L under Sec 80CCD(1), and an additional ₹50,000 under Sec 80CCD(1B). Employer contributions are deductible under Sec 80CCD(2)."
                icon="fa-solid fa-file-invoice-dollar"
                num="02"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Withdrawal & Exit Rules"
                text="At retirement: Up to 60% withdrawn tax-free; balance is annuitized. Before retirement: Full exit permitted only under specific conditions. Partial withdrawal permitted after 3 years."
                icon="fa-solid fa-money-bill-transfer"
                num="03"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Should Consider & How We Help */}
      <section className="mf-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <FadeInAdvanced variant="fadeInLeft" delay={100}>
                <div className="pe-lg-4">
                  <h3 className="services-three__title fs-4 mb-3 fw-bold">Who Should Consider NPS?</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary mt-1 me-3"></i>
                      <p className="mb-0">Salaried and self-employed individuals looking to build a dedicated retirement corpus.</p>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary mt-1 me-3"></i>
                      <p className="mb-0">Investors seeking additional tax deduction beyond the ₹1.5 lakh limit under Section 80C.</p>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary mt-1 me-3"></i>
                      <p className="mb-0">Long-term investors comfortable with a lock-in until retirement in exchange for disciplined, low-cost, professionally managed savings.</p>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-lg-6">
              <FadeInAdvanced variant="fadeInRight" delay={200}>
                <div className="ps-lg-4 border-start border-2 border-primary border-opacity-25">
                  <h3 className="services-three__title fs-4 mb-3 fw-bold">How Shah Capital Services Helps</h3>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-angle-right text-primary mt-1 me-3"></i>
                      <p className="mb-0">Guidance on choosing between Active and Auto Choice, and selecting the right pension fund manager.</p>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-angle-right text-primary mt-1 me-3"></i>
                      <p className="mb-0">Help with account opening (Tier I / Tier II), KYC, and ongoing servicing.</p>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-angle-right text-primary mt-1 me-3"></i>
                      <p className="mb-0">Periodic review of allocation as you approach retirement.</p>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-angle-right text-primary mt-1 me-3"></i>
                      <p className="mb-0">Support with partial withdrawal and exit/annuity formalities when the time comes.</p>
                    </li>
                  </ul>
                </div>
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
                <h3 className="services-three__title fs-4 mb-4">Start Planning Your Retirement Today</h3>
                <p className="mf-intro-text mb-5">
                  Ready to secure your financial future? Contact us to learn more about NPS and how it fits into your long-term wealth strategy.
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

      <ReachUsModal defaultService="NPS" />
    </div>
  )
}
