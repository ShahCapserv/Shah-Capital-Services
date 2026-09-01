import React from 'react'
import Banner from '#/features/banner/Banner'
import { ServiceCard } from './ServiceCard'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import { ReachUsModal } from '#/components/ReachUsForm'

export const StocksAndSecuritiesPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Banner */}
      <Banner
        title="Stocks & Securities"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Stocks & Securities"
      />

      {/* 1. Open A Demat Account */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Open A Demat Account</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                A Demat account acts as the foundation for participating in modern financial markets. It allows investors to securely hold and manage investments digitally while enabling seamless access across multiple investment products and market opportunities.
              </p>
              <p className="mf-intro-text mb-0">
                Whether you are beginning your investment journey or actively participating in financial markets, a well-structured digital investment setup simplifies investing, improves accessibility, and enhances portfolio management.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Demat & Trading Account"
                  text="We assist investors with complete Demat account opening support and trading account setup to establish a solid investment foundation."
                  icon="fa-solid fa-folder-open"
                  colorTheme="blue"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Digital Onboarding"
                  text="Get hassle-free digital onboarding assistance along with direct platform guidance to navigate market portals and execute trades smoothly."
                  icon="fa-solid fa-laptop-code"
                  colorTheme="indigo"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Portfolio Support"
                  text="Access comprehensive portfolio tracking assistance and platform guidance to monitor and analyze all holdings in real time."
                  icon="fa-solid fa-magnifying-glass-chart"
                  colorTheme="green"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Open A Demat Account */}
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Open A Demat Account?</h2>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="One Stop Solution"
                  text="One integrated account to access and invest across Stocks, Mutual Funds, IPOs, Bonds, Derivatives, and other market-linked investment products. A centralized investment structure simplifies portfolio tracking and long-term wealth management."
                  icon="fa-solid fa-rupee-sign"
                  colorTheme="emerald"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Seamless Digital Access"
                  text="Access your investments seamlessly across mobile platforms, desktop platforms, digital dashboards, and online portfolio tracking systems. Whether investing or trading, digital access helps simplify execution, monitoring, and investment management."
                  icon="fa-solid fa-mobile-screen-button"
                  colorTheme="purple"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Research Insights"
                  text="Gain access to research-backed market insights and investment support covering equity markets, investment themes, market trends, trading opportunities, portfolio strategies, and sectoral developments. Research-driven investing helps create more informed and structured investment decisions."
                  icon="fa-solid fa-chart-line"
                  colorTheme="amber"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
                <ServiceCard
                  title="Cost Optimization"
                  text="Enjoy competitive pricing structures across investment and trading segments along with digital-first access and streamlined account management features. Efficient cost structures help investors optimize long-term investment participation."
                  icon="fa-solid fa-percent"
                  colorTheme="rose"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Thematic Investment"
                  text="Thematic investing focuses on participating in long-term structural trends, sectors, or economic themes that may create future growth opportunities. This approach allows investors to align portfolios with emerging ideas, industries, innovation trends, and long-term market developments."
                  icon="fa-solid fa-cubes"
                  colorTheme="cyan"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Direct Equity, Approached With Discipline — Not Speculation.
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Direct Equity, Approached With Discipline — Not Speculation</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Equity investments can play an important role in long-term wealth creation when approached with discipline, patience, and proper market understanding.
              </p>
              <p className="mf-intro-text mb-0">
                At Shah Capital Services, we help investors participate in equity markets through structured investment guidance, strategic portfolio planning, and long-term investment thinking instead of short-term speculation.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Structured Planning"
                  text="We assist individuals, families, professionals, and business owners in navigating equity markets, securities investments, and diversified market-linked opportunities aligned to their financial goals, investment horizon, and overall risk profile."
                  icon="fa-solid fa-sitemap"
                  colorTheme="orange"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="End-to-End Execution"
                  text="Our offerings include equity investment guidance, demat and trading account assistance, IPO investments, bonds, commodities, thematic investments, Equity SIP plans, and portfolio tracking support."
                  icon="fa-solid fa-wallet"
                  colorTheme="indigo"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Platform & Tools"
                  text="Investors gain access to research-backed insights and digital investment platforms designed to simplify investing, portfolio monitoring, and long-term wealth management."
                  icon="fa-solid fa-microscope"
                  colorTheme="teal"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-2">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
                <ServiceCard
                  title="Investment Philosophy"
                  text="Our core philosophy focuses on disciplined investing, diversification, long-term wealth creation, structured financial planning, and risk-aware participation in equity markets."
                  icon="fa-solid fa-user-lock"
                  colorTheme="rose"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Market Conviction"
                  text="At Shah Capital Services, we believe equity investing should be approached with structure, clarity, and long-term perspective — not emotion or market noise."
                  icon="fa-solid fa-sliders"
                  colorTheme="blue"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 4. Our Investment Process
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Our Investment Process</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="We Understand"
                  text="Every investor approaches markets differently. Before discussing stocks, sectors, or investment products, we focus on understanding financial goals, investment horizon, existing investments, liquidity requirements, risk comfort, and return expectations. This helps create investment strategies aligned with long-term suitability instead of short-term market behaviour."
                  icon="fa-solid fa-handshake"
                  num="01"
                  colorTheme="teal"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="We Inform"
                  text="Financial markets can often appear complex and emotionally driven. Our role is to simplify equity investing concepts, market cycles, investment risks, portfolio diversification, sector allocation, and long-term investing principles. We believe informed investors are better positioned to remain disciplined through changing market conditions."
                  icon="fa-solid fa-circle-info"
                  num="02"
                  colorTheme="purple"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="We Execute"
                  text="Once the appropriate framework is identified, we help investors execute and monitor their portfolios through a structured and disciplined approach. This includes demat account assistance, portfolio tracking support, investment execution support, long-term allocation guidance, periodic reviews, and ongoing investment assistance. Our focus remains on helping investors stay aligned with long-term financial objectives while navigating evolving market environments."
                  icon="fa-solid fa-square-check"
                  num="03"
                  colorTheme="orange"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 5. Services Offered */}
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Services Offered</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Explore our diverse product offerings designed to provide structured participation in financial growth.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Equity"
                  text="Participate in long-term wealth creation opportunities through disciplined equity investing and diversified market exposure."
                  icon="fa-solid fa-circle-nodes"
                  colorTheme="blue"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="IPO"
                  text="Access Initial Public Offerings (IPOs) and participate in companies entering public markets with structured guidance."
                  icon="fa-solid fa-building-circle-arrow-right"
                  colorTheme="indigo"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Commodities"
                  text="Diversify investment exposure through commodity-linked market participation opportunities and strategic assets."
                  icon="fa-solid fa-gem"
                  colorTheme="amber"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Bonds"
                  text="Access fixed income and bond investment opportunities for diversification and consistent income generation."
                  icon="fa-solid fa-rupee-sign"
                  colorTheme="green"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Mutual Funds"
                  text="Build diversified portfolios through professionally managed mutual fund investment solutions aligned to long-term goals."
                  icon="fa-solid fa-chart-pie"
                  colorTheme="emerald"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Investors Choose Shah Capital Services
      <section className="mf-section">
        <div className="container">
          <h2 className="mf-section-title">Why Investors Choose Shah Capital Services</h2>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Structured Approach"
                  text="We follow a defined process-driven framework that brings structure to portfolio management rather than reacting to short-term market changes."
                  icon="fa-solid fa-sitemap"
                  colorTheme="blue"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Research-Backed"
                  text="Our insights are supported by research and analysis, helping to make informed and steady investment decisions."
                  icon="fa-solid fa-chart-line"
                  colorTheme="indigo"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Long-Term Wealth"
                  text="We align client portfolios with long-term wealth creation goals, maintaining patience through shifting cycles."
                  icon="fa-solid fa-money-bill-trend-up"
                  colorTheme="green"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={400}>
                <ServiceCard
                  title="Digital Accessibility"
                  text="Enjoy smooth digital platform access to execute transactions and view portfolio performance in real time."
                  icon="fa-solid fa-laptop"
                  colorTheme="purple"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Goal-Based Guidance"
                  text="Every strategy is designed around clear objectives, linking your portfolio directly to real-life priorities."
                  icon="fa-solid fa-bullseye"
                  colorTheme="orange"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Diversified Participation"
                  text="We ensure exposure to diverse sectors and assets to build a highly balanced and risk-mitigated investment base."
                  icon="fa-solid fa-globe"
                  colorTheme="teal"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Personal Support"
                  text="Get dedicated guidance and personalized support to navigate complexities with utmost clarity."
                  icon="fa-solid fa-user-check"
                  colorTheme="emerald"
                />
              </FadeInAdvanced>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-xl-10 text-center">
              <p className="lead fw-bold text-theme-base">
                At Shah Capital Services, we believe successful equity investing is built through discipline, patience, and consistency — not speculation.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 7. Equity Investing With Structure & Long-Term Perspective
      <section className="mf-section mf-section--light">
        <div className="container">
          <h2 className="mf-section-title">Equity Investing With Structure & Long-Term Perspective</h2>
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <p className="mf-intro-text">
                Equity investing involves participating in ownership opportunities across businesses, sectors, and economic growth themes through publicly traded securities.
              </p>
              <p className="mf-intro-text mb-0">
                While equity markets can experience short-term volatility, disciplined investing combined with long-term participation has historically played an important role in wealth creation. Rather than focusing on short-term market movements or speculative activity, we help investors build portfolios aligned with their broader financial objectives.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={100}>
                <ServiceCard
                  title="Strategic Allocation"
                  text="Structured portfolio allocation and goal-based investing tailored strictly to your liquidity requirements."
                  icon="fa-solid fa-map-location-dot"
                  colorTheme="indigo"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={200}>
                <ServiceCard
                  title="Risk-Aware Planning"
                  text="Risk-aware strategies and long-term market participation designed to navigate volatility confidently."
                  icon="fa-solid fa-shield-halved"
                  colorTheme="rose"
                />
              </FadeInAdvanced>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant="fadeInUp" delay={300}>
                <ServiceCard
                  title="Research Decisioning"
                  text="Diversification across assets supported by research-driven decision making and continuous monitoring."
                  icon="fa-solid fa-magnifying-glass-chart"
                  colorTheme="emerald"
                />
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 8. Build A Structured Equity Portfolio */}
      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="mf-intro-content text-center">
                <h3 className="services-three__title fs-4 mb-4">Build A Structured Equity Portfolio</h3>
                <p className="mf-intro-text mb-5">
                  Whether you are opening your first Demat account, exploring market opportunities, or building a diversified long-term portfolio, Shah Capital Services helps bring structure, clarity, and guidance to your investment journey.
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

      <ReachUsModal defaultService="Stocks and Securities" />
    </div>
  )
}

