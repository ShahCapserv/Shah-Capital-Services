import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const VehicleInsurancePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Banner
        title="Vehicle Insurance"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Vehicle Insurance"
      />

      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Drive Protected. Drive With Confidence.</h2>
                <p className="mf-intro-text mb-0">
                  Vehicle insurance provides financial protection against losses arising from accidents, theft, natural calamities, and third-party liabilities involving your vehicle. Whether you own a car, two-wheeler, or commercial vehicle, insurance plays an important role in protecting your asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vehicle Insurance Matters */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Vehicle Insurance Matters</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Every vehicle owner faces risks on the road. Having appropriate insurance coverage helps ensure that unexpected events do not result in significant financial setbacks.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Accidental & Theft Protection"
                text="Covers costs of repairs arising from road accidents, fire, and provides financial recovery in case of vehicle theft or total loss."
                icon="fa-solid fa-car-burst"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Third-Party Liabilities"
                text="Protects against legal and financial liabilities for damage caused to third-party properties or injuries caused to other individuals."
                icon="fa-solid fa-scale-balanced"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Natural & Man-Made Disasters"
                text="Covers damages caused by floods, earthquakes, storms, riots, or vandalism, keeping your repair expenses managed."
                icon="fa-solid fa-cloud-showers-water"
                colorTheme="green"
              />
            </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* More Than A Regulatory Requirement */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">More Than A Regulatory Requirement</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                While third-party insurance is mandatory by law, a comprehensive policy offers true security for your hard-earned asset and peace of mind.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Comprehensive Asset Protection"
                text="Guarantees coverage for your own vehicle damages alongside mandatory third-party liability, protecting the market value of your asset."
                icon="fa-solid fa-car"
                colorTheme="orange"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Add-On Coverage Options"
                text="Access key riders such as Zero Depreciation, Engine Protection, Roadside Assistance, and Consumables cover for complete security."
                icon="fa-solid fa-folder-plus"
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
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Multi-Provider Quotation"
                text="Instead of comparing individually, we fetch and present competitive quotes, coverage terms, and IDV evaluations from leading insurers in one place."
                icon="fa-solid fa-file-invoice-dollar"
                colorTheme="teal"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
              <ServiceCard
                title="Renewals & Claim Assistance"
                text="We manage policy renewals so your cover never lapses and guide you through documentation, claims filing, and garage network allocation."
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
              <FadeInAdvanced variant="fadeInUp" delay={400}>
              <ServiceCard
                title="Personalized Customization"
                text="We help select policies with appropriate Insured Declared Value (IDV) and riders matching your usage and vehicle age."
                icon="fa-solid fa-sliders"
                colorTheme="blue"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
              <ServiceCard
                title="Transparent Comparisons"
                text="Clear breakdown of premiums, deductible clauses, cash-free garage networks, and NCB benefits across multiple providers."
                icon="fa-solid fa-magnifying-glass-chart"
                colorTheme="indigo"
              />
            </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
              <ServiceCard
                title="Dedicated Support"
                text="Ongoing support for queries, endorsements, policy transfers, and seamless coordination during accidental claims."
                icon="fa-solid fa-headset"
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
                <h3 className="services-three__title fs-4 mb-4">Drive Protected on Every Road</h3>
                <p className="mf-intro-text mb-5">
                  Is your vehicle insurance policy expiring soon, or are you buying a new vehicle? Let Shah Capital Services help you find the right comprehensive coverage.
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
