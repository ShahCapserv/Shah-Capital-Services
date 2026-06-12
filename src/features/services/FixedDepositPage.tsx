import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'

export const FixedDepositPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('corporate')

  return (
    <div className="page-wrapper">
      <Banner
        title="Fixed Deposits & Fixed Income"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Fixed Deposits"
      />

      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <h2 className="mf-section-title">Stability & Predictability</h2>
              <p className="mf-intro-text">
                Fixed income instruments continue to play an important role in portfolio construction for investors seeking stability, predictable income, capital preservation, and diversification from market-linked investments.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills nav-fill mb-5 shadow-sm rounded-4 p-2 bg-light" id="fd-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'corporate' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('corporate')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Corporate Deposits
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'fmps' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('fmps')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Fixed Maturity Plans
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === '54ec' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('54ec')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    54EC Bonds
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'debentures' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('debentures')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Debentures
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="fd-tabContent">
            {activeTab === 'corporate' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Corporate Deposits</h3>
                <p className="mb-4 text-muted">
                  Corporate Deposits are fixed income investment instruments where funds are deposited with companies for a fixed tenure at a predetermined rate of interest.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Benefits of Investing</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Competitive interest rates</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Short and medium-term options</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Flexible tenure structures</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Predictable income generation</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Features</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Lock-in period may be as low as 6 months</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> No TDS if interest is within limits</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Spread investments across issuers</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'fmps' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Fixed Maturity Plans (FMPs)</h3>
                <p className="mb-4 text-muted">
                  Closed-ended debt mutual fund schemes with a fixed maturity period. They primarily invest in debt and money market instruments maturing on or before the maturity date.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Why FMPs?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Better post-tax efficiency</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Defined investment tenure</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Lower interest rate volatility</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Diversification across instruments</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Where Do FMPs Invest?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Certificates of Deposit (CDs)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Commercial Papers (CPs)</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Money Market Instruments</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Corporate Bonds</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === '54ec' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">54EC Bonds</h3>
                <p className="mb-4 text-muted">
                  Capital gain tax-saving bonds that allow eligible investors to claim exemption on long-term capital gains under Section 54EC of the Income Tax Act.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Key Features</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Tax exemption under Section 54EC</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Fixed interest payout structure</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> High credit quality issuers</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Fixed lock-in / maturity period</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Important Conditions</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Applicable on eligible long-term capital gains</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Must be made within 6 months from transfer</li>
                      <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Premature transfer impacts exemption</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'debentures' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Debentures</h3>
                <p className="mb-4 text-muted">
                  Debt instruments issued by corporations or institutions to raise capital, generally backed by the creditworthiness and reputation of the issuer.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Convertible Debentures</h5>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Can be converted into equity shares</li>
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Potential equity participation</li>
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Lower coupon rates compared to NCDs</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Non-Convertible (NCDs)</h5>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Pure fixed income instruments</li>
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Fixed interest payouts & maturity</li>
                      <li className="mb-2"><i className="fa-solid fa-arrow-right text-theme-base me-2"></i> Higher coupon rates relative to convertible</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-5 text-center">
            <Link to="/contact" className="thm-btn">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
