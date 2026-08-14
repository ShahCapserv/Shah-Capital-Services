import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { socialLinks } from '#/constants'

function Header() {
  const [isStick, setIsSticky] = useState<boolean>(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${headerRef.current.offsetHeight}px`
        )
      }
    }
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [setIsSticky])

  return (
    <>
      <header className="main-header" ref={headerRef}>
        <nav className="main-menu">
          <Menu />
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}
      >
        <div className="sticky-header__content">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default Header

function Menu() {
  const [isMobileManu, setIsMobileManu] = useState<boolean>(false)

  const handlMobileMenu = () => {
    setIsMobileManu((pre) => !pre)
  }

  return (
    <div className="main-menu__wrapper">
      <div className="main-menu__wrapper-inner">
        <div className="main-menu__left">
          <div className="main-menu__logo">
            <Link to="/">
              <img
                src={'/Logo with disclaimer.png'}
                alt="Logo"
                style={{
                  height: 'auto',
                  maxHeight: '75px',
                  maxWidth: '100%',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Link>
          </div>
        </div>
        <div className="main-menu__main-menu-box">
          <a
            href="#"
            onClick={handlMobileMenu}
            className="mobile-nav__toggler"
            title="mobile-menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          <MenuList />
        </div>
        <div className="main-menu__right d-none d-xl-block">
          <div className="main-menu__btn-box">
            <LoginButton />
          </div>
        </div>
        <MobileNav
          isMobileManu={isMobileManu}
          setIsMobileManu={setIsMobileManu}
        />
      </div>
    </div>
  )
}

const servicesList = [
  { slug: 'mutual-funds', label: 'Mutual Funds & SIF' },
  { slug: 'stocks-and-securities', label: 'Stocks & Securities' },
  { slug: 'gift-city-investments', label: 'Gift City' },
  { slug: 'deposits-and-bonds', label: 'Deposits & Bonds' },
  { slug: 'life-insurance', label: 'Life Insurance' },
  { slug: 'health-insurance', label: 'Health Insurance' },
  { slug: 'vehicle-insurance', label: 'Vehicle Insurance' },
  { slug: 'misc-insurance', label: 'Miscellaneous Insurance' },
  { slug: 'nri-corner', label: 'NRI Corner' },
]

const knowledgeHubList = [
  { slug: 'calculators', label: 'Calculators' },
  { slug: 'blogs', label: 'Blog & News' },
  { slug: 'newsletter', label: 'Newsletter' },
]

function MenuList() {
  const { pathname } = useLocation()
  return (
    <ul className="main-menu__list">
      <li className={pathname === '/' ? 'current' : ''}>
        <Link to="/">Home </Link>
      </li>
      <li className={pathname === '/about' ? 'current' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={`dropdown ${pathname.startsWith('/services') ? 'current' : ''}`}>
        <Link to="/services">Services</Link>
        <ul className="shadow-box">
          {servicesList.map((service) => (
            <li key={service.slug}>
              <Link to={`/services/${service.slug}`}>{service.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`dropdown ${pathname.startsWith('/knowledge-hub') ? 'current' : ''}`}>
        <Link to="/knowledge-hub">Knowledge Hub</Link>
        <ul className="shadow-box">
          {knowledgeHubList.map((item) => (
            <li key={item.slug}>
              <Link to={`/knowledge-hub/${item.slug}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={pathname === '/contact' ? 'current' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

function MobileNav(props: {
  isMobileManu: boolean
  setIsMobileManu: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { isMobileManu, setIsMobileManu } = props
  const [isServicesExpanded, setIsServicesExpanded] = useState<boolean>(false)
  const [isKnowledgeHubExpanded, setIsKnowledgeHubExpanded] = useState<boolean>(false)

  // function closeMenu() {
  //   setIsMobileManu(false)
  // }

  return (
    <div className={`mobile-nav__wrapper ${isMobileManu ? 'expanded' : ''}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={() => setIsMobileManu((pre) => !pre)}
      ></div>
      {/* <!-- /.mobile-nav__overlay --> */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={() => setIsMobileManu((pre) => !pre)}
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box justify-content-center">
          <Link
            to="/"
            aria-label="logo image"
            onClick={() => setIsMobileManu((pre) => !pre)}
          >
            <img
              src={'/footer-logo.png'}
              width={'100%'}
              height={50}
              alt="Logo"
              style={{ height: '200px', margin: '0 auto' }}
            />
          </Link>
        </div>
        <hr />
        <ul className={'d-flex flex-column list-unstyled'}>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Home <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/about"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              About <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <div className="d-flex justify-content-between align-items-center text-light py-2 px-2">
              <Link
                to="/services"
                className="text-light flex-grow-1"
                onClick={() => setIsMobileManu(false)}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <i className={`fa ${isServicesExpanded ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
              </button>
            </div>
            {isServicesExpanded && (
              <ul className="list-unstyled px-3 py-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                {servicesList.map((service) => (
                  <li key={service.slug} className="border-bottom border-secondary border-opacity-25">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-light d-block py-2 px-2"
                      style={{ fontSize: '14px' }}
                      onClick={() => setIsMobileManu(false)}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={'border-bottom border-secondary'}>
            <div className="d-flex justify-content-between align-items-center text-light py-2 px-2">
              <Link
                to="/knowledge-hub"
                className="text-light flex-grow-1"
                onClick={() => setIsMobileManu(false)}
              >
                Knowledge Hub
              </Link>
              <button
                type="button"
                onClick={() => setIsKnowledgeHubExpanded(!isKnowledgeHubExpanded)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                <i className={`fa ${isKnowledgeHubExpanded ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
              </button>
            </div>
            {isKnowledgeHubExpanded && (
              <ul className="list-unstyled px-3 py-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                {knowledgeHubList.map((item) => (
                  <li key={item.slug} className="border-bottom border-secondary border-opacity-25">
                    <Link
                      to={`/knowledge-hub/${item.slug}`}
                      className="text-light d-block py-2 px-2"
                      style={{ fontSize: '14px' }}
                      onClick={() => setIsMobileManu(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/contact"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Contact <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <LoginButton
              isMobile
              onClick={() => setIsMobileManu((pre) => !pre)}
            />
          </li>
        </ul>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:support@shahcapserv.com">support@shahcapserv.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+919840999879">+91 9840999879</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={link.iconClass}
                title={link.title}
              ></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function LoginButton({
  isMobile,
  onClick,
}: {
  isMobile?: boolean
  onClick?: () => void
}) {
  const label = 'Portfolio Tracker'

  if (isMobile) {
    return (
      <Link
        to="/login"
        className="text-light d-flex justify-content-between align-items-center py-2 px-2"
        onClick={onClick}
      >
        {label} <i className="fa fa-angle-right"></i>
      </Link>
    )
  }

  return (
    <Link to="/login" className="thm-btn" onClick={onClick}>
      {label}
      <span className="icon-arrow-right"></span>
    </Link>
  )
}
