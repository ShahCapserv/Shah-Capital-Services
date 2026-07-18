import { Link } from '@tanstack/react-router'
import { socialLinks } from '#/constants'

import FadeInAdvanced from '../elements/FadeInAdvanced'
import footerShape1 from '/assets/images/shapes/footer-widget-shape-1.png'

interface WorkingHour {
  id: number
  day: string
  hours: string
}

interface NavLink {
  id: string
  label: string
  to: string
  isExternal?: boolean
}

interface ContactItem {
  id: number
  icon: string
  lines: { text: string; href?: string }[]
}

const workingHours: WorkingHour[] = [
  { id: 1, day: 'Mon - Fri', hours: '9:00 AM - 5:00 PM' },
  { id: 2, day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
  { id: 3, day: 'Sunday', hours: 'Closed' },
]

const quickLinks: NavLink[] = [
  { id: crypto.randomUUID(), label: 'Home', to: '/' },
  { id: crypto.randomUUID(), label: 'About Us', to: '/about' },
  { id: crypto.randomUUID(), label: 'Services', to: '/services' },
  { id: crypto.randomUUID(), label: 'Knowledge Hub', to: '/knowledge-hub' },
  { id: crypto.randomUUID(), label: 'Contact', to: '/contact' },
]

const otherLinks: NavLink[] = [
  { id: crypto.randomUUID(), label: 'Disclaimer', to: '/disclaimer' },
  {
    id: crypto.randomUUID(),
    label: 'Commission Disclosure',
    to: '/commission-disclosure',
  },
  { id: crypto.randomUUID(), label: 'Privacy Policy', to: '/privacy-policy' },
  { id: crypto.randomUUID(), label: 'Code of Conduct', to: '/code-of-conduct' },
  { id: crypto.randomUUID(), label: 'SID / SAI / KIM', to: 'https://www.sebi.gov.in/filings/mutual-funds.html', isExternal: true },
]

// const serviceLinks: NavLink[] = [
//   { id: crypto.randomUUID(), label: 'Electric Repair', to: '/electric-panel-repair' },
//   { id: crypto.randomUUID(), label: 'Smart Watch Repair', to: '/installing-ceiling-fan' },
//   { id: crypto.randomUUID(), label: 'Smartphone Repair', to: '/commercial-services' },
//   { id: crypto.randomUUID(), label: 'Laptop Repair', to: '/lighting-fixtures' },
//   { id: crypto.randomUUID(), label: 'Desktop Repair', to: '/short-circuit-repair' },
// ]

const contactItems: ContactItem[] = [
  {
    id: 1,
    icon: 'icon-phone-call',
    lines: [{ text: '04445128067', href: 'tel:04445128067' }],
  },
  {
    id: 2,
    icon: 'icon-envelope',
    lines: [
      { text: 'support@shahcapserv.com', href: 'mailto:support@shahcapserv.com' },
    ],
  },
  {
    id: 3,
    icon: 'icon-location',
    lines: [
      {
        text: '#477, Mint St, Kondithope, George Town, Chennai, Tamil Nadu 600001',
        href: 'https://maps.app.goo.gl/2HqZX7hsfHYBG6qz7?g_st=iw',
      },
    ],
  },
  {
    id: 4,
    icon: 'fab fa-whatsapp',
    lines: [
      {
        text: '+91 9840999879',
        href: 'https://wa.me/919840999879',
      },
    ],
  },
]


const bottomMenuLinks: NavLink[] = [
  { id: crypto.randomUUID(), label: 'Support', to: '/contact' },
  { id: crypto.randomUUID(), label: 'Terms and Condition', to: '/about' },
  { id: crypto.randomUUID(), label: 'Privacy and Policy', to: '/about' },
]

const FooterOne: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Handle form submission logic here
  }
  return (
    <footer className="site-footer">
      <div className="site-footer__bg-color">
        <div className="footer-widget__shape-1">
          <img
            src={footerShape1}
            style={{ width: 'auto', height: 'auto' }}
            alt="footer shape"
          />
        </div>
      </div>
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            {/* About Column */}
            <FadeInAdvanced className="col-xl-3" variant="fadeInUp" delay={100}>
              <div
                className="footer-widget__column footer-widget__about pt-0"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  gap: '20px',
                }}
              >
                <div className="footer-widget__logo">
                  <Link to="/">
                    <img
                      // src={'logo-landscape-2.png'}
                      src={'/footer-logo.png'}
                      width={'200px'}
                      height={'200px'}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div
                  className="footer-widget__amfi"
                  style={{
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <img
                    src={'/assets/images/amfi-logo.png'}
                    style={{
                      maxWidth: '80px',
                      width: '100%',
                      height: 'auto',
                      borderRadius: '6px',
                    }}
                    alt="AMFI Logo"
                  />
                  <div
                    className="amfi-details-text"
                    style={{
                      fontSize: '12px',
                      color: 'rgba(var(--fixpro-white-rgb), 0.75)',
                      textAlign: 'center',
                      lineHeight: '1.6',
                      marginTop: '5px',
                    }}
                  >
                    <p style={{ margin: '0 0 2px 0' }}>
                      AMFI Registration No.:{' '}
                      <strong style={{ color: '#fff' }}>261365</strong>
                    </p>
                    <p style={{ margin: '0 0 2px 0' }}>
                      ARN Registration Date:{' '}
                      <strong style={{ color: '#fff' }}>10 Jan 2023</strong>
                    </p>
                    <p style={{ margin: '0 0 2px 0' }}>
                      ARN Valid Till:{' '}
                      <strong style={{ color: '#fff' }}>09 Jan 2029</strong>
                    </p>
                    <p style={{ margin: '0 0 2px 0' }}>
                      GSTIN No.:{' '}
                      <strong style={{ color: '#fff' }}>33AEVFS9078R1ZL</strong>
                    </p>
                  </div>
                </div>
                {/* <p className="footer-widget__about-text">
                  Secure other greater pleasures, or else he endures pains to
                  avoid worse pains selection
                </p> */}
                {/* <div className="footer-widget__working-box">
                  <h3 className="footer-widget__working-title">
                    Working Hours:
                  </h3>
                  <ul className="footer-widget__working-hour list-unstyled">
                    {workingHours.map((item) => (
                      <li key={item.id}>
                        <p>
                          {item.day}
                          <span>{item.hours}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </FadeInAdvanced>

            {/* Right Columns */}
            <div className="col-xl-9 pt-4">
              <div className="footer-widget__right">
                {/* Newsletter */}
                {/* <div className="footer-widget__column footer-widget__newsletter">
                  <div className="footer-widget__newsletter-bg"></div>
                  <h3 className="footer-widget__newsletter-title">
                    Subscribe To Our Newsletter To
                    <br /> Get Latest Update
                  </h3>
                  <form
                    className="footer-widget__newsletter-form mc-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="footer-widget__newsletter-form-input-box">
                      <input
                        type="email"
                        placeholder="Enter email"
                        name="EMAIL"
                      />
                    </div>
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn thm-btn"
                    >
                      Subscribe
                    </button>
                  </form>
                </div> */}

                <div className="footer-widget__right-bottom">
                  <div className="row">
                    {/* Quick Links */}
                    <FadeInAdvanced
                      className="col-xl-4 col-lg-4 col-md-4"
                      variant="fadeInUp"
                      delay={200}
                    >
                      <div className="footer-widget__column footer-widget__usefull-link">
                        <div className="footer-widget__title-box">
                          <h3 className="footer-widget__title">Quick Links</h3>
                        </div>
                        <div className="footer-widget__link-box">
                          <ul className="footer-widget__link list-unstyled">
                            {quickLinks.map((link) => (
                              <li key={link.id}>
                                <Link to={link.to}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeInAdvanced>

                    {/* Others */}
                    <FadeInAdvanced
                      className="col-xl-4 col-lg-4 col-md-4 "
                      variant="fadeInUp"
                      delay={300}
                    >
                      <div className="footer-widget__column footer-widget__services">
                        <div className="footer-widget__title-box">
                          <h3 className="footer-widget__title">Legal</h3>
                        </div>
                        <ul className="footer-widget__link list-unstyled">
                          {otherLinks.map((link) => (
                            <li key={link.id}>
                              {link.isExternal ? (
                                <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
                              ) : (
                                <Link to={link.to as any}>{link.label}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeInAdvanced>

                    {/* Services */}
                    {/* <FadeInAdvanced
                      className="col-xl-4 col-lg-4 col-md-4 "
                      variant="fadeInUp"
                      delay={300}
                    >
                      <div className="footer-widget__column footer-widget__services">
                        <div className="footer-widget__title-box">
                          <h3 className="footer-widget__title">Our Services</h3>
                        </div>
                        <ul className="footer-widget__link list-unstyled">
                          {serviceLinks.map((link) => (
                            <li key={link.id}>
                              <Link to={link.to}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeInAdvanced> */}

                    {/* Contact Info */}
                    <FadeInAdvanced
                      className="col-xl-4 col-lg-4 col-md-4"
                      variant="fadeInUp"
                      delay={400}
                    >
                      <div className="footer-widget__contact-box">
                        <div className="footer-widget__title-box">
                          <h3 className="footer-widget__title">
                            Official info
                          </h3>
                        </div>
                        <ul className="footer-widget__contact list-unstyled">
                          {contactItems.map((item) => (
                            <li key={item.id}>
                              <div className="icon">
                                <span className={item.icon}></span>
                              </div>
                              <div className="content">
                                {item.lines.map((line, i) => (
                                  <p key={i}>
                                    {line.href ? (
                                      <a href={line.href} target={'_blank'}>
                                        {line.text}
                                      </a>
                                    ) : (
                                      line.text
                                    )}
                                  </p>
                                ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/* Social Links */}
                        <div
                          className="site-footer__social"
                          style={{
                            borderTop: 'none',
                            paddingTop: 0,
                            paddingBottom: 0,
                            justifyContent: 'flex-start',
                            marginTop: '20px',
                          }}
                        >
                          {socialLinks.map((social) => (
                            <a key={social.id} href={social.href} title={social.title}>
                              <i className={social.iconClass}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </FadeInAdvanced>
                  </div>

                  {/* Disclaimer Section */}
                  <FadeInAdvanced variant="fadeInUp" delay={500}>
                    <div
                      className="site-footer__disclaimer mt-4"
                      style={{
                        borderTop:
                          '1px dashed rgba(var(--fixpro-white-rgb), 0.2)',
                        paddingTop: '25px',
                        paddingBottom: '25px',
                        color: 'rgba(var(--fixpro-white-rgb), 0.6)',
                        fontSize: '13px',
                        lineHeight: '1.8',
                      }}
                    >
                      <p className="mb-3" style={{ textAlign: 'justify' }}>
                        <strong>Disclaimer:</strong>{' '}
                        <a
                          href="https://www.shahcapserv.com"
                          style={{
                            color: 'rgba(var(--fixpro-white-rgb), 0.8)',
                          }}
                        >
                          www.shahcapserv.com
                        </a>{' '}
                        is an online website of Shah Capital Services,
                        registered vide ARN - 261365 as an AMFI Registered
                        Mutual Fund Distributor. The said website intends to
                        provide educative and informative details related to
                        investments in Mutual Funds. We do not charge any fees
                        for these calculators and information, because we earn
                        our commissions from the Mutual Fund companies. The
                        website does not guarantee any returns or financial goal
                        success by any means.
                      </p>
                      <p className="mb-2">
                        Mutual Fund investments are subject to market risks,
                        read all scheme related documents carefully before
                        investing.
                      </p>
                      <p className="mb-0">
                        Insurance is the subject matter of solicitation.
                      </p>
                    </div>
                  </FadeInAdvanced>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__bottom-text text-danger fw-bold">
              BEWARE OF SUSPICIOUS PHONE CALLS OF FICTITIOUS / FRAUDULENT OFFERS
            </p>
            <p className="site-footer__bottom-text">
              © {new Date().getFullYear()} Shah Capital Services, Inc. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterOne
