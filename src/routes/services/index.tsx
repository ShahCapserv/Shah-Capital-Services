import { createFileRoute, Link } from '@tanstack/react-router'

import { ReachUsForm } from '#/components/ReachUsForm.tsx'
import Banner from '#/features/banner/Banner'
import type { AnimationVariant } from '@/components/elements/FadeInAdvanced'
import FadeInAdvanced from '@/components/elements/FadeInAdvanced'
import type { ReactNode } from 'react'
import { ServiceCard } from '#/features/services/ServiceCard'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      {
        title: 'Services | Shah Capital Services',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Services" subTitle="Services" />
        <ServicesSec />
        <section className="contact-page">
          <div className="container">
            <ReachUsForm title="" />
          </div>
        </section>
      </div>
    </main>
  )
}

interface ServiceItem {
  id: number
  icon: ReactNode
  iconClass: string
  subTitle: string
  title: string
  text: string
  desc: Array<string>
  path: string
  animationClass: AnimationVariant
  animationDelay: number
  colorTheme: 'blue' | 'indigo' | 'green' | 'purple' | 'rose' | 'orange' | 'emerald' | 'amber' | 'cyan' | 'teal'
  iconStr: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: <i className="fa-solid fa-vault"></i>,
    iconClass: 'icon-socket',
    subTitle: 'Service Type 1',
    title: 'Mutual Funds & SIF',
    text: 'Disciplined, goal-based investing — not product selection.',
    desc: [
      `Mutual funds are one of the most effective ways to build long-term wealth through
                professionally managed and diversified investments. At Shah Capital Services, we help
                individuals, families, and business owners identify mutual fund solutions aligned with their
                financial goals, investment horizon, and risk appetite.`,
      `Whether you are looking to start SIPs, create long-term wealth, plan for retirement, or
                optimise your portfolio, we provide structured mutual fund investment guidance designed
                around your financial objectives.`,
      `Our services include SIP investments, lump sum investments, equity mutual funds, debt
                funds, hybrid funds, ELSS tax-saving funds, portfolio reviews, and goal-based investment
                planning. We focus on creating disciplined investment strategies that support long-term
                financial growth while helping investors navigate market opportunities with confidence.`,
      `At Shah Capital Services, our approach is personalized, research-driven, and focused on long-
                term wealth creation through structured financial planning and continuous portfolio
                monitoring.`,
      `Start your mutual fund investment journey with Shah Capital Services and build a portfolio
                aligned with your financial future.`,
    ],
    path: '/services/mutual-funds',
    animationClass: 'fadeInLeft',
    animationDelay: 100,
    colorTheme: 'teal',
    iconStr: 'fa-solid fa-vault',
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-money-bill-trend-up"></i>,
    iconClass: 'icon-ceiling-lamp',
    subTitle: 'Service Type 2',
    title: 'Stocks & Securities',
    text: 'Direct equity, approached with discipline — not speculation.',
    desc: [
      `Equity investments can play an important role in long-term wealth creation when approached
                with discipline and proper market understanding. At Shah Capital Services, we help investors
                participate in stock market opportunities through structured investment guidance and
                strategic portfolio planning.`,
      `We assist clients in navigating equity markets, securities investments, and diversified market-
                linked opportunities based on their financial goals, investment horizon, and risk profile.`,
      `Our services include equity investment guidance, demat and trading account assistance, IPO
                investments, bonds, commodities, thematic investments, Equity SIP plans, and portfolio
                tracking support. Investors also gain access to research-backed insights and digital
                investment platforms designed to simplify investing and long-term portfolio management.`,
      `Our investment philosophy focuses on disciplined investing, diversification, long-term wealth
                creation, and structured financial planning tailored to each investor’s financial objectives.`,
      `Build a structured equity portfolio with guidance from Shah Capital Services.`,
    ],
    path: '/services/stocks-and-securities',
    animationClass: 'fadeInUp',
    animationDelay: 300,
    colorTheme: 'blue',
    iconStr: 'fa-solid fa-money-bill-trend-up',
  },
  {
    id: 4,
    icon: <i className="fa-solid fa-earth-americas"></i>,
    iconClass: 'icon-laptop',
    subTitle: 'Service Type 4',
    title: 'Gift City',
    text: 'Global investing, structured through India.',
    desc: [
      `GIFT City (Gujarat International Finance Tec-City) has emerged as India’s international
                financial hub offering access to global investment opportunities, foreign currency-based
                investments, and internationally structured financial products.`,
      `At Shah Capital Services, we help eligible investors explore investment opportunities
                available through GIFT City structures while understanding the associated regulatory
                framework, diversification benefits, and global market exposure.`,
      `These investment opportunities provide access to international financial markets, portfolio
                diversification beyond domestic investments, and exposure to global investment ecosystems
                through structured financial solutions.`,
      `Our approach focuses on aligning global investment opportunities with each investor’s
                financial goals, risk appetite, and long-term wealth strategy.`,
      `Explore global investment opportunities through GIFT City with Shah Capital Services.`,
    ],
    path: '/services/gift-city-investments',
    animationClass: 'fadeInLeft',
    animationDelay: 500,
    colorTheme: 'indigo',
    iconStr: 'fa-solid fa-earth-americas',
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-piggy-bank"></i>,
    iconClass: 'icon-ac1',
    subTitle: 'Service Type 5',
    title: 'Deposits & Bonds',
    text: 'Stability where it is needed.',
    desc: [
      `Deposits & bonds continue to remain a preferred investment option for investors seeking
                stability, predictable returns, and capital protection. At Shah Capital Services, we help clients
                identify fixed deposit solutions suited to their financial goals, liquidity requirements, and
                investment horizon.`,
      `We assist investors in evaluating fixed income options across different tenures and financial
                institutions to support structured financial planning and stable wealth preservation.`,
      `Our offerings include company fixed deposits, fixed maturity plans (FMPs), debentures, 54EC
                bonds, and other fixed income investment solutions designed to provide stable and efficient
                investment opportunities.`,
      `Fixed deposits and fixed income products are suitable for investors looking for comparatively
                lower market volatility, predictable returns, and capital preservation-focused investment
                strategies. Certain products may also offer tax efficiency and flexible tenure options based on
                investment objectives.`,
      `At Shah Capital Services, we provide personalized fixed income guidance and structured
                investment support designed around your financial objectives and liquidity preferences.`,
      `Secure your investments with fixed deposit solutions tailored to your financial needs.`,
    ],
    path: '/services/deposits-and-bonds',
    animationClass: 'fadeInUp',
    animationDelay: 700,
    colorTheme: 'green',
    iconStr: 'fa-solid fa-piggy-bank',
  },
  {
    id: 6,
    icon: <i className="fa-solid fa-umbrella"></i>,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 6',
    title: 'Life Insurance',
    text: 'Financial protection for your family — nothing more, nothing less.',
    desc: [
      `Life insurance is a fundamental component of financial planning, designed to provide security
                and financial protection to your family in the event of an unfortunate loss. At Shah Capital Services,
                we assist clients in choosing suitable life insurance policies that align with their family protection and financial goals.`,
      `Life insurance provides a financial safety net for dependants, helping them cover living expenses, debt payments, education, and other future financial needs. We guide you through the process of selecting policies with appropriate sum assured values based on your current income, liabilities, and dependants' needs.`,
      `Our guidance covers a range of life insurance products, including term plans, whole life policies, and other protection strategies. We focus on transparency, helping you understand premium structures, policy tenures, and claim processes so you can make informed protection decisions.`,
    ],
    path: '/services/life-insurance',
    animationClass: 'fadeInRight',
    animationDelay: 900,
    colorTheme: 'amber',
    iconStr: 'fa-solid fa-umbrella',
  },
  {
    id: 7,
    icon: <i className="fa-solid fa-briefcase-medical"></i>,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 7',
    title: 'Health Insurance',
    text: 'Protect your savings from medical uncertainty.',
    desc: [
      `Health insurance helps reduce the financial burden arising from medical emergencies, hospitalisation expenses, and ongoing healthcare treatments. At Shah Capital Services, we help clients evaluate and select health insurance policies tailored to their healthcare requirements and budget considerations.`,
      `With rising healthcare costs, a suitable medical insurance policy is crucial for protecting your savings. We assist you in comparing health coverage benefits, including pre and post-hospitalisation expenses, day-care procedures, critical illness riders, and cashless treatment availability across hospital networks.`,
      `Our aim is to provide structured protection planning, helping you understand policy limits, waiting periods for pre-existing conditions, co-payment clauses, and renewal terms for both individual and family floater plans.`,
    ],
    path: '/services/health-insurance',
    animationClass: 'flipInY',
    animationDelay: 1000,
    colorTheme: 'orange',
    iconStr: 'fa-solid fa-briefcase-medical',
  },
  {
    id: 8,
    icon: <i className="fa-solid fa-car-burst"></i>,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 8',
    title: 'Vehicle Insurance',
    text: 'Protect your vehicle, finances, and peace of mind on the road.',
    desc: [
      `Vehicle insurance provides financial protection against losses arising from accidents, theft, natural calamities, and third-party liabilities involving your vehicle. Whether you own a car, two-wheeler, or commercial vehicle, insurance plays an important role in protecting your asset.`,
      `While third-party insurance is mandatory by law, a comprehensive policy offers true security for your hard-earned asset. We compare quotes, coverage terms, and IDV evaluations from leading insurers in one place.`,
      `We manage policy renewals so your cover never lapses and guide you through documentation, claims filing, and garage network allocation, ensuring a transparent and convenient process.`,
    ],
    path: '/services/vehicle-insurance',
    animationClass: 'fadeInUp',
    animationDelay: 1050,
    colorTheme: 'rose',
    iconStr: 'fa-solid fa-car-burst',
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-plane-departure"></i>,
    iconClass: 'icon-ceiling-lamp-2',
    subTitle: 'Service Type 3',
    title: 'Miscellaneous Insurance',
    text: 'Overseas mediclaim, personal accident, burglary, shopkeepers, and other miscellaneous policies.',
    desc: [
      `Insurance plays a critical role in protecting individuals, families, assets, and businesses
                against financial uncertainties. At Shah Capital Services, we help clients identify suitable
                insurance solutions based on their financial responsibilities, lifestyle requirements, and long-
                term protection goals.`,
      `Our insurance solutions include life insurance, health insurance, vehicle insurance, travel
                insurance, mediclaim policies, personal accident insurance, overseas mediclaim coverage,
                burglary insurance, household insurance, shopkeepers policies, money insurance, and other
                miscellaneous insurance products designed to provide comprehensive financial protection.`,
      `Health insurance helps reduce the financial burden arising from medical expenses and
                hospitalisation costs, while life insurance supports long-term family protection and income
                security. Vehicle insurance provides financial protection against theft, accidental damages,
                and third-party liabilities. Travel insurance offers coverage against travel-related disruptions,
                emergencies, and unforeseen expenses during domestic or international travel.`,
      `At Shah Capital Services, we focus on personalized guidance, transparent processes, and
                structured protection planning to help clients choose insurance solutions aligned with their
                specific needs and financial goals.`,
      `Protect your future with comprehensive insurance solutions from Shah Capital Services.`,
    ],
    path: '/services/misc-insurance',
    animationClass: 'fadeInRight',
    animationDelay: 1100,
    colorTheme: 'cyan',
    iconStr: 'fa-solid fa-plane-departure',
  },
  {
    id: 9,
    icon: <i className="fa-solid fa-earth-asia"></i>,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 9',
    title: 'NRI Corner',
    text: 'Stay connected to India\'s growth story.',
    desc: [
      `Whether you're building wealth abroad, supporting family in India, planning your return, or exploring investment opportunities, India continues to offer compelling opportunities for long-term wealth creation.`,
      `At Shah Capital Services, we help Non-Resident Indians (NRIs) access and manage investment opportunities in India through a structured, goal-based approach aligned with their financial objectives.`,
    ],
    path: '/services/nri-corner',
    animationClass: 'fadeInUp',
    animationDelay: 1150,
    colorTheme: 'teal',
    iconStr: 'fa-solid fa-earth-asia',
  },
]

const ServicesSec: React.FC = () => {
  return (
    <>
      <section className="services-page">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((service, index) => {
              const cardContent = (
                <div className="services-three__single">
                  <div className="services-three__icon">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="services-three__title">
                    <Link to={service.path}>{service.title}</Link>
                  </h3>
                  <p className="services-three__text">{service.text}</p>
                  <Link
                    to={service.path}
                    className="services-three__learn-more"
                  >
                    Learn More<span className="icon-arrow-right"></span>
                  </Link>
                </div>
              )

              return (
                <div key={service.id} className="col-xl-4 col-lg-6 d-flex align-items-stretch">
                  <FadeInAdvanced
                    variant="fadeInUp"
                    delay={service.animationDelay}
                    animateOnLoad={true}
                    className="w-100 d-flex"
                  >
                    {cardContent}
                  </FadeInAdvanced>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}


export function ServiceModal({ service }: { service: ServiceItem | null }) {
  return (
    <div
      className="modal fade"
      id="serviceModal"
      tabIndex={-1}
      aria-labelledby="serviceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {service ? service.title : 'Service Details'}
              </h1>
              <p className="text-muted">{service ? service.text : ''}</p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {service && service.desc.length <= 0 ? (
              <p className={'text-danger fw-3 fs-2'}>No Content Provided Yet</p>
            ) : (
              <>
                {service?.desc.map((paragraph, index) => (
                  <p key={index} className={'mb-2'}>
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
