import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const TravelInsurancePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="Travel Insurance"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Travel Insurance"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Travel With Confidence. Stay Protected.</h2>
                <p className="mf-intro-text mb-0">
                  Every journey is an experience, whether it is a long-awaited vacation, an international business trip, or overseas education. Travel insurance helps provide financial protection against unforeseen situations such as medical emergencies, trip cancellations, lost baggage, and travel delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Travel Insurance Matters</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Travel often involves uncertainties that may be beyond your control. A medical emergency in a foreign country, a delayed flight, or lost baggage can result in unexpected expenses. Travel insurance helps provide financial support during such situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of Travel Insurance */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Advantages of Travel Insurance</h2>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Medical Emergency"
                text="Provides financial protection against eligible medical expenses and emergency hospitalization during international or domestic travel."
                icon="fa-solid fa-house-medical"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Baggage Protection"
                text="Coverage for the loss, theft, or delay of checked-in baggage, helping reduce expenses and inconvenience during your trip."
                icon="fa-solid fa-suitcase"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Document Protection"
                text="Provides emergency assistance and coverage for expenses in situations involving the loss of passports or other travel documents."
                icon="fa-solid fa-passport"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Flight Delays & Missed Connection"
                text="Compensation for eligible lodging, meals, and booking expenses arising from travel delays or missed flight connections."
                icon="fa-solid fa-plane-slash"
                colorTheme="amber"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Personal Liability"
                text="Coverage against certain legal and third-party liabilities that may arise during your travel, subject to policy terms."
                icon="fa-solid fa-scale-balanced"
                colorTheme="rose"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Adventure Sports Cover"
                text="Optional protection available under select policies to cover sports, trekking, and other recreational travel activities."
                icon="fa-solid fa-person-snowboarding"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Theft & Loss Protection"
                text="Coverage for specified losses arising from theft, scams, or loss of money during your travel, subject to policy guidelines."
                icon="fa-solid fa-user-shield"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Peace Of Mind"
                text="Travel with confidence knowing that round-the-clock global financial assistance and support are available during unexpected situations."
                icon="fa-solid fa-heart"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Who Should Consider Travel Insurance?</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Students & Academics"
                text="Essential for students studying abroad, providing long-term health coverage, study interruptions, and emergency assistance."
                icon="fa-solid fa-graduation-cap"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Families & Senior Citizens"
                text="Protects senior citizens and families travelling internationally where healthcare and emergency medical costs can be extremely high."
                icon="fa-solid fa-people-group"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Business & Frequent Flyers"
                text="Coverage customized for business travellers, including multi-trip plans, baggage protection, and flight disruption options."
                icon="fa-solid fa-briefcase"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* How Shah Capital Can Help */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">How Shah Capital Services Can Help</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Policy Selection & Comparison"
                text="We assist travellers by comparing plans across multiple insurance providers, evaluating benefits, and identifying coverage suited for your destination and duration."
                icon="fa-solid fa-code-compare"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Documentation & Claim Support"
                text="Our team provides end-to-end guidance from documentation and premium payouts to renewal alerts and global claim assistance support."
                icon="fa-solid fa-envelope-open-text"
                colorTheme="purple"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Begin Your Journey With Confidence</h3>
                <p className="mf-intro-text mb-5">
                  Ready to secure your next trip? Let Shah Capital Services help you find the right travel insurance coverage for your journey.
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
