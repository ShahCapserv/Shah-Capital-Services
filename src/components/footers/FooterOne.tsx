import { Link } from '@tanstack/react-router'
import { socialLinks } from '#/constants'
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

const quickLinks: NavLink[] = [
  { id: 'quick-home', label: 'Home', to: '/' },
  { id: 'quick-about', label: 'About Us', to: '/about' },
  { id: 'quick-services', label: 'Services', to: '/services' },
  { id: 'quick-hub', label: 'Knowledge Hub', to: '/knowledge-hub' },
  { id: 'quick-contact', label: 'Contact', to: '/contact' },
  { id: 'quick-careers', label: 'Careers', to: 'https://careers.shahcapserv.com/', isExternal: true },
]

const otherLinks: NavLink[] = [
  { id: 'other-disclaimer', label: 'Disclaimer', to: '/disclaimer' },
  {
    id: 'other-commission',
    label: 'Commission Disclosure',
    to: '/commission-disclosure',
  },
  { id: 'other-privacy', label: 'Privacy Policy', to: '/privacy-policy' },
  { id: 'other-conduct', label: 'Code of Conduct', to: '/code-of-conduct' },
  { id: 'other-sid', label: 'SID / SAI / KIM', to: 'https://www.sebi.gov.in/filings/mutual-funds.html', isExternal: true },
]

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
        text: '#477, Mint St, Kondithope, Chennai, Tamil Nadu 600001',
        href: 'https://maps.app.goo.gl/81FrRB1rU24cNwu29',
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

const FooterOne: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__bg-color">
        <div className="footer-widget__shape-1 d-none d-md-block">
          <img
            src={footerShape1}
            loading="lazy"
            decoding="async"
            style={{ width: 'auto', height: 'auto' }}
            alt="footer shape"
          />
        </div>
      </div>
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            {/* About Column */}
            <div className="col-xl-3 col-lg-12">
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
                      src={'/footer-logo.png'}
                      loading="lazy"
                      decoding="async"
                      alt="Shah Capital Services Logo"
                      style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
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
                    loading="lazy"
                    decoding="async"
                    className="amfi-logo"
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
                      ARN Valid Till:{' '}
                      <strong style={{ color: '#fff' }}>09 Jan 2029</strong>
                    </p>
                    <p style={{ margin: '0 0 2px 0' }}>
                      GSTIN No.:{' '}
                      <strong style={{ color: '#fff' }}>33AEVFS9078R1ZL</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Columns */}
            <div className="col-xl-9 pt-4">
              <div className="footer-widget__right">
                <div className="footer-widget__right-bottom">
                  <div className="row">
                    {/* Quick Links */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0">
                      <div className="footer-widget__column footer-widget__usefull-link">
                        <div className="footer-widget__title-box">
                          <h3 className="footer-widget__title">Quick Links</h3>
                        </div>
                        <div className="footer-widget__link-box">
                          <ul className="footer-widget__link list-unstyled">
                            {quickLinks.map((link) => (
                              <li key={link.id}>
                                {link.isExternal ? (
                                  <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                ) : (
                                  <Link to={link.to}>{link.label}</Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Legal / Others */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0">
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
                    </div>

                    {/* Contact Info */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
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
                              <div className="content" style={{ wordBreak: 'break-all' }}>
                                {item.lines.map((line, i) => (
                                  <p key={i}>
                                    {line.href ? (
                                      <a href={line.href} target={'_blank'} rel="noopener noreferrer">
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
                            <a
                              key={social.id}
                              href={social.href}
                              title={social.title}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={social.iconClass}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer Section */}
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
                    <p className="mb-2" style={{ textAlign: 'justify' }}>
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
                      Mutual Fund &amp; SIF Distributor. The said website
                      intends to provide educative and informative details
                      related to investments and insurance.
                    </p>
                    <p className="mb-2">
                      We do not charge any fees for these calculators and
                      information, because we earn from the companies as
                      distribution commission.
                    </p>
                    <p className="mb-2">
                      The website does not guarantee any returns or financial
                      goal success by any means.
                    </p>
                    <p className="mb-2" style={{ textAlign: 'justify' }}>
                      Investments in securities market are subject to market
                      risks, read all the related documents carefully before
                      investing. Please read the risk disclosure document,
                      rights and obligations, guidance note, Do’s and Don’ts
                      and policies and procedure carefully before making any
                      investment decision. Brokerage will not exceed the SEBI
                      prescribed limit. Margins as prescribed by Exchange /
                      SEBI will be applicable.
                    </p>
                    <p className="mb-2">
                      Mutual Fund and/or SIF investments are subject to market
                      risks. Please read all scheme related documents
                      carefully.
                    </p>
                    <p className="mb-0">
                      Insurance is the subject matter of solicitation.
                    </p>
                  </div>
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




