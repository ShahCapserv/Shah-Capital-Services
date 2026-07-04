import Banner from '#/features/banner/Banner'
import { createFileRoute } from '@tanstack/react-router'
import { ServiceCard } from '#/features/services/ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Portfolio Tracker" subTitle="Portfolio Tracker" />
      <section className="login-one" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row align-items-center g-5">
            {/* Left side: Account Image */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="login-feature-cards row g-3 mb-4">
                <style>
                  {`
                    .login-feature-cards .mf-card__title {
                      font-size: 1.5rem !important;
                    }
                    .login-feature-cards .mf-card__text {
                      font-size: 1.15rem !important;
                      line-height: 1.6;
                    }
                  `}
                </style>
                <div className="col-md-6">
                  <FadeInAdvanced variant="fadeInUp" delay={100} className="h-100 d-flex">
                    <ServiceCard
                      title="Real-Time Insights"
                      text="Track your portfolio performance with live market updates."
                      icon="fa-solid fa-chart-line"
                      colorTheme="green"
                    />
                  </FadeInAdvanced>
                </div>
                <div className="col-md-6">
                  <FadeInAdvanced variant="fadeInUp" delay={200} className="h-100 d-flex">
                    <ServiceCard
                      title="Secure Access"
                      text="Your financial data is protected with enterprise-grade security."
                      icon="fa-solid fa-shield-halved"
                      colorTheme="green"
                    />
                  </FadeInAdvanced>
                </div>
              </div>
              <div className="login-graphics-container text-center mb-4">
                <FadeInAdvanced variant="fadeInUp" delay={300}>
                  <img
                    src="/assets/images/account-img.png"
                    alt="Portfolio Tracker Dashboard"
                    className="img-fluid rounded-4 shadow-lg mb-4"
                    style={{ width: '100%', objectFit: 'cover', maxHeight: '500px', border: '1px solid rgba(0,0,0,0.1)' }}
                  />
                </FadeInAdvanced>
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
