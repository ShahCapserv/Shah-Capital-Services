import React, { useState } from 'react'
import Banner from '#/features/banner/Banner'
import { createFileRoute } from '@tanstack/react-router'
import { ServiceCard } from '#/features/services/ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const [activeTab, setActiveTab] = useState<'insights' | 'security'>('insights')

  return (
    <main>
      <Banner title="Portfolio Tracker" subTitle="Portfolio Tracker" />
      <section className="login-one" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row align-items-center g-5">
            {/* Left side: Feature Tabs */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="mb-4">
                <ul className="nav nav-pills nav-fill shadow-sm rounded-4 p-2 bg-light" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link rounded-pill ${activeTab === 'insights' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                      onClick={() => setActiveTab('insights')}
                      type="button"
                      style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                    >
                      Real-Time Insights
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link rounded-pill ${activeTab === 'security' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                      onClick={() => setActiveTab('security')}
                      type="button"
                      style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                    >
                      Secure Access
                    </button>
                  </li>
                </ul>
              </div>

              <div className="login-feature-content">
                <style>
                  {`
                    .login-feature-content .mf-card__title {
                      font-size: 1.5rem !important;
                      margin-bottom: 1.2rem;
                    }
                    .login-feature-content .mf-card__text {
                      font-size: 1.15rem !important;
                      line-height: 1.7;
                    }
                    .login-feature-content .mf-card {
                      padding: 3rem 2.5rem !important;
                      min-height: 350px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                    }
                    .login-feature-content .mf-card__icon {
                      font-size: 3rem !important;
                      margin-bottom: 1.5rem;
                    }
                  `}
                </style>
                {activeTab === 'insights' && (
                  <FadeInAdvanced variant="fadeInUp" delay={100} className="w-100 d-flex">
                    <ServiceCard
                      title="Real-Time Insights"
                      text="Track your portfolio performance with live market updates and advanced analytics. Our platform provides comprehensive tools to monitor your investments, analyze market trends, and make informed financial decisions with real-time data at your fingertips."
                      icon="fa-solid fa-chart-line"
                      colorTheme="green"
                    />
                  </FadeInAdvanced>
                )}
                {activeTab === 'security' && (
                  <FadeInAdvanced variant="fadeInUp" delay={100} className="w-100 d-flex">
                    <ServiceCard
                      title="Secure Access"
                      text="Your financial data is protected with enterprise-grade security and end-to-end encryption. We implement industry-leading security protocols, multi-factor authentication, and continuous monitoring to ensure your sensitive information and assets remain completely safe and confidential."
                      icon="fa-solid fa-shield-halved"
                      colorTheme="green"
                    />
                  </FadeInAdvanced>
                )}
              </div>
            </div>

            {/* Right side: Login form */}
            <div className="col-lg-6 col-md-12">
              <div className="login-one__form mx-auto" style={{ maxWidth: '500px' }}>
                <div className="inner-title text-center">
                  <h2>Portfolio Tracker</h2>
                </div>
                <form
                  action="https://mf.shahcapserv.com/finnsys/home_loginauth.asp"
                  method="post"
                  target="_blank"
                >
                  <div className="row">
                    {/* Login As */}
                    <div className="col-xl-12">
                      <div className="form-group mb-3">
                        <label htmlFor="loginType" className="form-label fw-semibold mb-2" style={{ display: 'block', color: 'var(--fixpro-black)' }}>
                          <i className="fa-solid fa-users me-2" style={{ color: 'var(--fixpro-base)' }}></i> Login As
                        </label>
                        <div className="input-box">
                          <select
                            name="login_type"
                            id="loginType"
                            className="form-select"
                            defaultValue="INV"
                          >
                            <option value="INV">Investor</option>
                            <option value="ADV">Associate</option>
                            <option value="ADM">Admin</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Login ID */}
                    <div className="col-xl-12">
                      <div className="form-group mb-3">
                        <label htmlFor="loginName" className="form-label fw-semibold mb-2" style={{ display: 'block', color: 'var(--fixpro-black)' }}>
                          <i className="fa-solid fa-user me-2" style={{ color: 'var(--fixpro-base)' }}></i> Login ID
                        </label>
                        <div className="input-box">
                          <input
                            type="text"
                            name="LoginName"
                            id="loginName"
                            placeholder="Login ID"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-xl-12">
                      <div className="form-group mb-3">
                        <label htmlFor="loginPassword" className="form-label fw-semibold mb-2" style={{ display: 'block', color: 'var(--fixpro-black)' }}>
                          <i className="fa-solid fa-lock me-2" style={{ color: 'var(--fixpro-base)' }}></i> Password
                        </label>
                        <div className="input-box">
                          <input
                            type="password"
                            name="Password"
                            id="loginPassword"
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Forgot Password & Login Button */}
                    <div className="remember-forget">
                      <div className="forget">
                        <a
                          href="https://mf.shahcapserv.com/finnsys/passreminder.asp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="form-group">
                        <button
                          className="thm-btn"
                          type="submit"
                          name="LOGIN"
                          value="Login"
                        >
                          Login Now
                          <span>
                            <i className="icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Create Account */}
                    <div className="create-account text-center">
                      <p>
                        Not registered yet?{' '}
                        <a
                          href="https://mf.shahcapserv.com/finnsys/create.account.asp?toplan=&UD_CART=&UD_GOAL="
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Create an Account
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
