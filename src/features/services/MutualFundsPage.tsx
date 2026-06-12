import React from 'react'
import { Link } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'

export const MutualFundsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Banner */}
      <Banner
        title="Mutual Funds and SIF"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Mutual Funds and SIF"
      />

      {/* 1. The Shah Capital Advantage */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">The Shah Capital Advantage</h2>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ServiceCard
                title="Diversification"
                text="Mutual funds provide exposure to a broad range of asset classes and securities, helping reduce concentration risk while creating a more balanced investment portfolio."
                icon="fa-solid fa-chart-pie"
                colorTheme="blue"
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <ServiceCard
                title="Professional Management"
                text="Investments are managed by experienced fund managers and research teams who continuously analyse markets and portfolio allocation strategies."
                icon="fa-solid fa-user-tie"
                colorTheme="indigo"
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <ServiceCard
                title="Affordability"
                text="Mutual funds allow investors to begin investing with relatively low initial capital through flexible SIP and lump sum investment options."
                icon="fa-solid fa-wallet"
                colorTheme="green"
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <ServiceCard
                title="Liquidity"
                text="Most mutual funds provide liquidity and flexibility by allowing investors to redeem units at prevailing Net Asset Value (NAV), subject to applicable terms."
                icon="fa-solid fa-coins"
                colorTheme="amber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Investment Process */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Our Investment Process</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="We Understand"
                text="Every financial journey is different. Before discussing investments, returns, or products, we focus on understanding the investor first — their goals, responsibilities, financial priorities, investment horizon, and overall relationship with risk."
                icon="fa-solid fa-handshake"
                num="01"
                colorTheme="teal"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="We Inform"
                text="Our role is to simplify mutual funds, asset allocation, market cycles, investment risks, and portfolio structures in a way that helps investors make informed and confident decisions. Our approach is transparent, research-driven, and focused on suitability rather than pushing financial products."
                icon="fa-solid fa-circle-info"
                num="02"
                colorTheme="purple"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="We Execute"
                text="Once the right investment framework is identified, we help investors implement and monitor their portfolios through a disciplined long-term approach. From SIP setup and portfolio allocation to ongoing reviews and guidance, we help ensure investments remain aligned with long-term financial objectives."
                icon="fa-solid fa-square-check"
                num="03"
                colorTheme="orange"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Disciplined, Goal-Based Investing — Not Product Selection. */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Disciplined, Goal-Based Investing — Not Product Selection</h2>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Long-Term Wealth"
                text="Mutual funds are one of the most effective ways to build long-term wealth through professionally managed and diversified investments. At Shah Capital Services, we help individuals, families, and business owners identify mutual fund solutions aligned with their financial goals, investment horizon, and risk appetite."
                icon="fa-solid fa-chart-line"
                colorTheme="emerald"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Structured Guidance"
                text="Whether you are looking to start SIPs, create long-term wealth, plan for retirement, or optimise your portfolio, we provide structured mutual fund investment guidance designed around your financial objectives."
                icon="fa-solid fa-bullseye"
                colorTheme="blue"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Goal-Based Planning"
                text="Our services include SIP investments, lump sum investments, equity mutual funds, debt funds, hybrid funds, ELSS tax-saving funds, portfolio reviews, and goal-based investment planning."
                icon="fa-solid fa-briefcase"
                colorTheme="indigo"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Disciplined Strategy"
                text="We focus on creating disciplined investment strategies that support long-term financial growth while helping investors navigate market opportunities with confidence."
                icon="fa-solid fa-circle-check"
                colorTheme="amber"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Personalized Approach"
                text="At Shah Capital Services, our approach is personalized, research-driven, and focused on long-term wealth creation through structured financial planning and continuous portfolio monitoring."
                icon="fa-solid fa-sliders"
                colorTheme="rose"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Investment Journey"
                text="Start your mutual fund investment journey with Shah Capital Services and build a portfolio aligned with your financial future."
                icon="fa-solid fa-hourglass-half"
                colorTheme="cyan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Risk Profiling */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Risk Profiling</h3>
                <p className="mf-intro-text">
                  Risk profiling is an important part of building a suitable investment strategy. It helps investors understand their ability and willingness to take risks and ensures that investment decisions align with their financial goals, investment horizon, and comfort with market fluctuations.
                </p>
                <p className="mf-intro-text mb-0">
                  At Shah Capital Services, risk profiling helps us create investment strategies that are aligned with long-term financial stability rather than short-term market behaviour.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Risk Tolerance"
                text="How comfortable an investor is with market fluctuations and temporary volatility."
                icon="fa-solid fa-gauge-high"
                colorTheme="orange"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Risk Capacity"
                text="The investor’s financial ability to withstand losses without affecting long-term financial stability."
                icon="fa-solid fa-shield-halved"
                colorTheme="rose"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Investment Horizon"
                text="The duration for which an investor plans to remain invested before requiring access to funds."
                icon="fa-solid fa-calendar-days"
                colorTheme="indigo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Commonly Used For */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Commonly Used For</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10">
              <p className="mf-intro-text text-center">
                Mutual funds are commonly used for a wide range of financial objectives and investment needs, depending on an investor’s goals, risk profile, and investment horizon.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Wealth Creation"
                text="Long-term wealth creation through structured equity and market participation."
                icon="fa-solid fa-chart-line"
                colorTheme="emerald"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Retirement Planning"
                text="Creating reliable financial reserves for post-employment phases of life."
                icon="fa-solid fa-umbrella"
                colorTheme="indigo"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Tax Optimization"
                text="Tax-efficient investing via ELSS and other tax-saving mutual fund structures."
                icon="fa-solid fa-file-invoice-dollar"
                colorTheme="green"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Goal Planning"
                text="Funding major life milestones such as home purchase, business launch, or legacy planning."
                icon="fa-solid fa-bullseye"
                colorTheme="blue"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Emergency Reserves"
                text="Building highly liquid emergency reserves for unforeseen life events."
                icon="fa-solid fa-life-ring"
                colorTheme="rose"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Education Planning"
                text="Ensuring adequate funding for your children's future educational and career goals."
                icon="fa-solid fa-graduation-cap"
                colorTheme="amber"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Income Generation"
                text="Providing consistent systematic withdrawal plans (SWP) or regular dividend streams."
                icon="fa-solid fa-hand-holding-dollar"
                colorTheme="orange"
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <ServiceCard
                title="Portfolio Balance"
                text="Optimal asset allocation to ensure diversification across equity, debt, gold, and other classes."
                icon="fa-solid fa-chart-pie"
                colorTheme="purple"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Specialized Investment Funds (SIF) Section */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Specialized Investment Funds (SIF)</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10">
              <p className="mf-intro-text text-center">
                Specialized Investment Funds (SIFs) represent a dynamic asset class designed for investors seeking sophisticated strategies, greater flexibility, and alternative options beyond conventional mutual fund categories.
              </p>
            </div>
          </div>

          <h3 className="text-center fw-bold mb-4">What Is a Specialized Investment Fund (SIF)?</h3>
          <div className="row g-4 mb-5">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Regulatory Framework"
                text="Specialized Investment Funds (SIFs) are a new category of investment products introduced by SEBI to provide investors access to more flexible and sophisticated investment strategies than traditional mutual funds, while remaining within a regulated framework."
                icon="fa-solid fa-scale-balanced"
                colorTheme="blue"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Sophisticated Strategies"
                text="SIFs are designed for investors seeking advanced portfolio strategies, greater flexibility, and differentiated investment opportunities beyond conventional mutual fund offerings."
                icon="fa-solid fa-brain"
                colorTheme="purple"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Dynamic Management"
                text="Unlike traditional mutual funds, SIFs can adopt a wider range of investment approaches, enabling fund managers to respond more dynamically to market opportunities while maintaining regulatory oversight."
                icon="fa-solid fa-arrows-spin"
                colorTheme="emerald"
              />
            </div>
          </div>

          <h3 className="text-center fw-bold mb-4">Why Consider SIFs?</h3>
          <div className="row justify-content-center mb-4">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                As investors gain experience and wealth, their requirements often evolve beyond standard investment products.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Strategy Sophistication"
                text="SIFs provide access to more sophisticated investment strategies designed to target specific market outcomes."
                icon="fa-solid fa-puzzle-piece"
                colorTheme="amber"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Portfolio Construction"
                text="SIFs provide flexible portfolio construction options tailored to sophisticated risk-return profiles."
                icon="fa-solid fa-cubes"
                colorTheme="indigo"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Dynamic Allocation"
                text="SIFs enable dynamic asset allocation across various classes, allowing managers to capture shifts in market regimes."
                icon="fa-solid fa-shuffle"
                colorTheme="cyan"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Risk Management"
                text="SIFs incorporate advanced risk management approaches to help protect capital and optimize risk-adjusted returns."
                icon="fa-solid fa-shield-halved"
                colorTheme="rose"
              />
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <ServiceCard
                title="Differentiated Opportunities"
                text="SIFs open up diversified investment opportunities that are typically not accessible through traditional mutual funds."
                icon="fa-solid fa-globe"
                colorTheme="teal"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                They are particularly relevant for investors seeking portfolio solutions beyond conventional mutual fund categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How Shah Capital Services Can Help */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">How Shah Capital Services Can Help</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <ServiceCard
                title="Evaluating Suitability"
                text="At Shah Capital Services, we help investors understand whether Specialized Investment Funds align with their financial goals, risk appetite, and portfolio requirements."
                icon="fa-solid fa-user-check"
                colorTheme="green"
              />
            </div>

            <div className="col-xl-5 col-lg-6 col-md-6">
              <ServiceCard
                title="Strategic Allocation"
                text="Our role is to help evaluate suitability, explain investment strategies, and ensure that any allocation fits within an investor's broader financial plan and long-term objectives."
                icon="fa-solid fa-sitemap"
                colorTheme="indigo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Build A Portfolio Aligned With Your Financial Future */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Build A Portfolio Aligned With Your Financial Future</h3>
                <p className="mf-intro-text">
                  At Shah Capital Services, we believe successful investing is built on discipline, patience, structure, and long-term thinking — not short-term market noise.
                </p>
                <p className="mf-intro-text mb-5">
                  Whether you are starting your first SIP or reviewing an existing portfolio, we help bring clarity, structure, and professional guidance to your investment journey.
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
