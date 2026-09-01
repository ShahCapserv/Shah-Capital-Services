import React, { useState } from 'react'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import { ReachUsModal } from '#/components/ReachUsForm'

export const MiscInsurancePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'travel' | 'miscellaneous'>('travel')

  return (
    <div className="page-wrapper">
      <Banner
        title="Miscellaneous Insurance"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Miscellaneous Insurance"
      />

      {/* Tabs Selector */}
      <section className="pt-5 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <ul className="nav nav-pills nav-fill shadow-sm rounded-4 p-2 bg-light" id="misc-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'travel' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('travel')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Travel Insurance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'miscellaneous' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('miscellaneous')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Miscellaneous Insurance
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {activeTab === 'travel' && (
        <>
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
    </>
  )}

  {activeTab === 'miscellaneous' && (
    <>
      {/* Intro Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h2 className="services-three__title fs-3 mb-4 fw-bold">Miscellaneous Insurance</h2>
                <p className="mf-intro-text mb-3">
                  The miscellaneous insurance covers all the other fields that are not covered under fire, marine and life insurance. This includes fields like engineering, rural, social insurance and personal insurances like Mediclaim, accidental insurance, etc.
                </p>
                <p className="mf-intro-text mb-0">
                  Insurance is an essential tool for managing risk and protecting oneself, assets, and business interests. Miscellaneous Insurance plays a versatile role in safeguarding against various risks. This insurance covers a range of unique and often unforeseen situations, making it an important component of comprehensive financial protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Life Insurance Products */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Some Non-Life Insurance Includes</h2>
          <div className="row g-4 justify-content-center">
            {[
              { title: 'Burglary Insurance', icon: 'fa-solid fa-shield-halved', color: 'blue' },
              { title: 'Jewellers Block Policy', icon: 'fa-solid fa-gem', color: 'indigo' },
              { title: 'Bankers Indemnity Policy', icon: 'fa-solid fa-building-columns', color: 'green' },
              { title: 'Money Insurance', icon: 'fa-solid fa-coins', color: 'purple' },
              { title: 'Shopkeepers Policy', icon: 'fa-solid fa-shop', color: 'rose' },
              { title: 'Householders Policy', icon: 'fa-solid fa-house-chimney', color: 'orange' },
              { title: 'Suhana Safar Policy', icon: 'fa-solid fa-plane-departure', color: 'emerald' },
              { title: 'All Risk Insurance Policy', icon: 'fa-solid fa-folder-open', color: 'amber' },
              { title: 'Mediclaim Policy', icon: 'fa-solid fa-file-medical', color: 'cyan' },
              { title: 'Overseas Mediclaim Policy', icon: 'fa-solid fa-earth-asia', color: 'teal' },
              { title: 'Personal Accident Policy', icon: 'fa-solid fa-user-shield', color: 'blue' },
            ].map((prod, idx) => (
              <div key={idx} className="col-xl-4 col-md-6 d-flex align-items-stretch">
                <FadeInAdvanced variant="fadeInUp" delay={(idx % 3) * 100} className="w-100 d-flex">
                  <ServiceCard
                    title={prod.title}
                    text={`Coverage for ${prod.title.toLowerCase()} policies under miscellaneous non-life insurance structures.`}
                    icon={prod.icon}
                    colorTheme={prod.color as any}
                  />
                </FadeInAdvanced>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Disclaimer Section */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
                <h4 className="fw-bold mb-3 text-warning-emphasis">
                  <i className="fa-solid fa-circle-exclamation me-2"></i>Disclaimer
                </h4>
                <p className="text-muted mb-3" style={{ fontSize: '14px', lineHeight: '1.7', textAlign: 'justify' }}>
                  Insurance is a subject matter of solicitation. The information provided in this website cannot substitute for the advice of a licensed professional. The information and data provided on this website is of a general nature and strictly for informational purposes. The Insurance Regulatory and Development Authority Of India (IRDAI) accepts no responsibility or liability for decisions based whatsoever with regard to the information on this website.
                </p>
                <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.7', textAlign: 'justify' }}>
                  The Insurance Regulatory and Development Authority Of India (IRDAI) maintains this website to enhance public access and awareness to information about the IRDAI and the licensed entities and their functions. Our goal is to keep this information timely and accurate. If errors are brought to our attention, we will try to correct them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )}

      {/* Footer CTA */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">
                  {activeTab === 'travel' ? 'Begin Your Journey With Confidence' : 'Protect Your Assets & Business'}
                </h3>
                <p className="mf-intro-text mb-5">
                  {activeTab === 'travel'
                    ? 'Ready to secure your next trip? Let Shah Capital Services help you find the right travel insurance coverage for your journey.'
                    : 'Ready to manage your risk and safeguard your properties? Let Shah Capital Services guide you to the right non-life insurance options.'}
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
                    href="https://zfrmz.in/cF7FzTMbXiUiFj6Zd2Ue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn btn-glow-effect"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReachUsModal defaultService={activeTab === 'travel' ? 'Travel Insurance' : 'Miscellaneous Insurance'} />
    </div>
  )
}

