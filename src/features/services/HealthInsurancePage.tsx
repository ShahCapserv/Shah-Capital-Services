import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const HealthInsurancePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="Health Insurance"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Health Insurance"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Protect Your Health. Protect Your Wealth.</h2>
                <p className="mf-intro-text mb-0">
                  Healthcare costs continue to rise every year, making health insurance one of the most important components of financial planning. A medical emergency can significantly impact savings, investments, and long-term financial goals if adequate protection is not in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Health Insurance Matters */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Health Insurance Matters</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Most people spend years building wealth but often underestimate the financial impact of medical treatments. Health insurance helps ensure that medical expenses do not derail the financial future you are working to build.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Savings Protection"
                text="Prevents medical bills from draining your emergency funds, keeping your liquid cash reserves intact for their intended purposes."
                icon="fa-solid fa-piggy-bank"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Investment Security"
                text="Avoids the need to prematurely liquidate equity, mutual funds, or other long-term investments during market downturns to pay medical bills."
                icon="fa-solid fa-shield-halved"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Goal Preservation"
                text="Ensures that financial targets, such as planning for retirement or funding your children's higher education, remain on track."
                icon="fa-solid fa-bullseye"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Rising Healthcare Costs */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Managing Rising Healthcare Costs</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Medical inflation has consistently remained high. Having suitable health insurance coverage helps manage these rising costs while providing access to quality healthcare.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Hospitalization & Surgeries"
                text="Covers inpatient hospitalization costs, room rent, ICU charges, nursing fees, and surgical procedure expenses."
                icon="fa-solid fa-bed-pulse"
                colorTheme="rose"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Critical Illness Cover"
                text="Provides a lump-sum payout upon diagnosis of specified major life-threatening illnesses, assisting with specialized treatment costs."
                icon="fa-solid fa-circle-exclamation"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Pre & Post Hospitalization"
                text="Covers medical expenses incurred before admission and after discharge, including diagnostic tests, check-ups, and medicines."
                icon="fa-solid fa-file-medical"
                colorTheme="purple"
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
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Policy Selection & Fitment"
                text="We help evaluate family floater plans, individual policies, and senior citizen covers across multiple providers to identify the most suitable options."
                icon="fa-solid fa-file-invoice-dollar"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Renewal & Claim Support"
                text="Our team assists you with timely renewals, coverage updates, documentation, and guidance during the medical claim settlement process."
                icon="fa-solid fa-notes-medical"
                colorTheme="amber"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Why Clients Choose Us</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Personalized Guidance"
                text="We help select coverage matching your family structure, age, medical history, and specific protection needs."
                icon="fa-solid fa-user-doctor"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Leading Health Providers"
                text="Access to a wide range of plans from India's top health insurance companies with high claim settlement track records."
                icon="fa-solid fa-network-wired"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Transparent Policy Evaluation"
                text="We simplify policy wording, co-payment clauses, waiting periods, and sub-limits so you know exactly what is covered."
                icon="fa-solid fa-magnifying-glass-chart"
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
                <h3 className="services-three__title fs-4 mb-4">Protect Your Health and Wealth Today</h3>
                <p className="mf-intro-text mb-5">
                  Looking for individual or family floater health insurance? Let Shah Capital Services help you find the right health protection coverage.
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
