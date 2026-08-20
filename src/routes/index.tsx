import HowWeWork from '#/components/HowWeWork.tsx'
import OurPartners from '#/components/elements/OurPartners'
// import AboutOne from '#/features/home-one/AboutOne'
// import BlogOne from '#/features/home-one/BlogOne'
// import BrandOne from '#/features/home-one/BrandOne'
import CounterOne from '#/features/home-one/CounterOne'
// import FeatureOne from '#/features/home-one/FeatureOne'
// import MainSlider from '#/features/home-one/MainSlider'
// import ServiceOne from '#/features/home-one/ServiceOne'
// import TestimonialOne from '#/features/home-one/TestimonialOne'
// import VideoOne from '#/features/home-one/VideoOne'
// import WhyChooseOne from '#/features/home-one/WhyChooceOne'
// import TestimonialsThree from '#/features/home-three/TestimonialsThree.tsx'
import { createFileRoute, Link } from '@tanstack/react-router'

import { Fragment, useState, useEffect, useRef } from 'react'
// import slideImg from '/assets/images/resources/main-slider-two-img-1-1.jpg'
// import slideImgSmall from '/assets/images/resources/main-slider-two-small-img-1-1.jpg'
// import shapeOne from '/assets/images/shapes/main-slider-two-shape-1.png'

// import slideImgTwo from '/assets/images/resources/main-slider-two-img-1-2.jpg'
// import slideImgSmallTwo from '/assets/images/resources/main-slider-two-small-img-1-2.jpg'

// import slideImgThree from '/assets/images/resources/main-slider-two-img-1-3.jpg'
// import slideImgSmallThree from '/assets/images/resources/main-slider-two-small-img-1-3.jpg'

import useFixproContext from '@/components/context/useFixproContext'
import SectionWrapper from '@/components/elements/SectionWrapper'
import { ReachUsForm } from '@/components/ReachUsForm'

import MarqueeSlider from '#/components/elements/MarqueeSlider'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { servicesData } from './services'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Home | Shah Capital Services',
      },
      {
        name: 'description',
        content:
          'Your Trusted Partner in Financial Growth and Wealth Management',
      },
    ],
  }),
  component: App,
})

const MobileAppSection: React.FC = () => {
  return (
    <section className="mobile-app-section py-5 bg-white border-top">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Mobile App Image Mockup */}
          <div className="col-xl-5 col-lg-5 text-center mb-5 mb-lg-0">
            <div className="mobile-app-image-container">
              <img
                src="/assets/images/resources/portfolio_app_mockup.png"
                alt="Mobile App Mockup"
                className="img-fluid app-mockup-img-new"
              />
            </div>
          </div>
          {/* Right Column: Text & Content */}
          <div className="col-xl-7 col-lg-7 pl-lg-5">
            <div className="ps-lg-4 text-start">
              <span
                className="text-uppercase tracking-wider fw-semibold text-muted mb-2 d-block"
                style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}
              >
                Mobile App
              </span>
              <h2
                className="fw-bold mb-4"
                style={{
                  color: '#0d233a',
                  fontSize: '2.5rem',
                  lineHeight: '1.25',
                }}
              >
                Invest and Track your portfolio on the go
              </h2>
              <p
                className="mb-3"
                style={{
                  fontSize: '1.05rem',
                  color: '#555555',
                  lineHeight: '1.75',
                }}
              >
                Experience the new way of investing through our Smart Featured
                App enabled with transaction capability.
              </p>
              <p
                className="mb-4"
                style={{
                  fontSize: '1.05rem',
                  color: '#555555',
                  lineHeight: '1.75',
                }}
              >
                You can track the performance of your investments in real time
                and you will also get to know the daily change in your
                investments.
              </p>
              <h4
                className="fw-bold mb-3"
                style={{ color: '#0d233a', fontSize: '1.25rem' }}
              >
                Download our Latest Mobile App
              </h4>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=mobi.mywealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <div className="store-badge-icon">
                    <svg
                      viewBox="0 0 360 360"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.8 10.5C28.2 15 25.5 22 25.5 31.2v297.5c0 9.2 2.7 16.2 7.3 20.8l1.4 1.4L200.7 184v-3.2L34.2 9.1l-1.4 1.4z"
                        fill="#00e5ff"
                      />
                      <path
                        d="M259.1 242.4L200.7 184v-3.2L259.1 122l1.4.8 69.1 39.3c19.7 11.2 19.7 29.5 0 40.7l-69.1 39.3-1.4.3z"
                        fill="#ffca28"
                      />
                      <path
                        d="M260.5 242.1L200.7 182.3 32.8 349.5c6.5 6.9 17.3 7.7 29.5.7l198.2-112.7"
                        fill="#ff3d00"
                      />
                      <path
                        d="M260.5 122.3L62.3 14.7C50.1 7.7 39.3 8.5 32.8 15.4L200.7 182.3l59.8-59.8-1.1-.2z"
                        fill="#4caf50"
                      />
                    </svg>
                  </div>
                  <div className="store-badge-text">
                    <span className="store-badge-text-small">Get it on</span>
                    <span className="store-badge-text-large">Google Play</span>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/in/app/my-wealth/id1116107323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <div className="store-badge-icon">
                    <svg
                      viewBox="0 0 384 512"
                      width="22"
                      height="24"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-74.7-18.7-36.1.6-70.1 21.5-88.5 54-39.6 69-10.2 173.5 27.5 228.7 18.6 26.9 40.3 57 69 56 28-1 38.4-18 70.4-18 32 0 41.8 18 70.4 17 29-.5 47.7-27.4 66.2-54 21.6-31.7 30.4-62.6 30.8-64.1-.8-.4-59.7-22.9-59.7-93.2zm-51.2-168.4c15.7-19.2 26.3-45.9 23.5-72.5-22.8 1-50.6 15.2-66.9 34.2-14.3 16.4-26.8 43.4-23.5 69.6 25.3 2 51.2-12.1 66.9-31.3z" />
                    </svg>
                  </div>
                  <div className="store-badge-text">
                    <span className="store-badge-text-small">
                      Download on the
                    </span>
                    <span className="store-badge-text-large">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <main>
      <div className="page-wrapper">
        <MainSliderTwo />
        {/* <MainSlider /> */}
        {/* <CounterOne /> */}
        <HowWeWork />
        {/* <TestimonialOne /> */}
        {/* <TestimonialsThree /> */}
        {/* <FeatureOne /> */}
        {/* <AboutOne /> */}
        {/* <ServiceOne /> */}
        {/* <WhyChooseOne /> */}
        {/* <ProjectOne /> */}
        {/* <VideoOne /> */}
        {/* <TeamOne /> */}
        {/* <BrandOne /> */}
        {/* <PricingOne /> */}
        {/* <BlogOne /> */}
        <MobileAppSection />
        <style>
          {`
            .custom-partner-accordion .accordion-button::after {
              display: none !important;
            }
            .custom-partner-accordion .partner-icon {
              transition: transform 0.3s ease;
              margin-left: 10px;
              color: var(--fixpro-base, #0b0742);
            }
            .custom-partner-accordion .accordion-button:not(.collapsed) .partner-icon {
              transform: rotate(180deg);
            }
          `}
        </style>
        <div className="accordion mb-5 custom-partner-accordion" id="partnersAccordion" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="accordion-item border-0 bg-transparent">
            <h2 className="accordion-header d-flex justify-content-center" id="headingPartners">
              <button
                className="accordion-button collapsed fw-bold shadow-none d-flex align-items-center justify-content-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePartners"
                aria-expanded="false"
                aria-controls="collapsePartners"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--fixpro-base, #0b0742)', 
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  width: 'auto',
                  border: 'none',
                  padding: '1rem 2rem'
                }}
              >
                <span>Our Partners</span>
                <i className="fa-solid fa-chevron-down partner-icon"></i>
              </button>
            </h2>
            <div
              id="collapsePartners"
              className="accordion-collapse collapse"
              aria-labelledby="headingPartners"
              data-bs-parent="#partnersAccordion"
            >
              <div className="accordion-body p-0">
                <OurPartners secClass="sliding-text-twoo" hideTitle={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const MainSliderTwo: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <SectionWrapper id="home" className="main-slider-two">
      <div className="main-slider-two__carousel position-relative">
        <div className="item active">
          <div className="main-slider-two__bg one" style={{ transition: 'none', transform: 'scale(1)' }}></div>
          <div className="main-slider-two__overly"></div>

          {/* Viewport 1: Hero Content */}
          <div className="hero-viewport-container">
            {/* Empty spacer to balance layout vertical flex alignment */}
            <div></div>

            <div className="container d-flex justify-content-center">
              <div className="main-slider-two__content d-flex flex-column justify-content-center align-content-center">
                <h2 className="main-slider-two__title text-center">
                  Because You <span>HAVE</span> <br /> better things to do
                </h2>
                <p className="main-slider-two__text text-center mt-2 mb-1">
                  Operating for over 2 decades, servicing individuals and families <br />
                  and delivering optimum satisfaction to our valued investors.
                </p>
              </div>
            </div>

            <div className="services-slider-wrapper">
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={"auto"}
                loop={true}
                onSwiper={setSwiperInstance}
                className="services-swiper"
              >
                {servicesData.map((service) => (
                  <SwiperSlide key={service.id} style={{ width: 'auto' }}>
                    <div className="items d-flex justify-content-center">
                      <div
                        className="services-one__single"
                        style={{
                          width: '200px',
                          height: '200px',
                          marginRight: '10px',
                        }}
                      >
                        <div
                          className="services-one__icon"
                          style={{ transform: 'scale(0.8)', marginBottom: '10px' }}
                        >
                          <span>{service.icon}</span>
                        </div>
                        <h3
                          className="services-one__title"
                          style={{ fontSize: '1rem', lineHeight: '1.2' }}
                        >
                          <Link to={service.path}>
                            {service.title.split('\n').map((line, i, arr) => (
                              <Fragment key={i}>
                                {line}
                                {i < arr.length - 1 && <br />}
                              </Fragment>
                            ))}
                          </Link>
                        </h3>
                        <Link
                          to={service.path}
                          className="services-one__read-more"
                          style={{ fontSize: '0.8rem' }}
                        >
                          Learn More<span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Arrow Controls */}
              <button
                type="button"
                className="services-slider-arrow arrow-prev"
                onClick={() => swiperInstance?.slidePrev()}
                aria-label="Previous service"
              >
                <span className="fa fa-chevron-left"></span>
              </button>
              <button
                type="button"
                className="services-slider-arrow arrow-next"
                onClick={() => swiperInstance?.slideNext()}
                aria-label="Next service"
              >
                <span className="fa fa-chevron-right"></span>
              </button>
            </div>

            <div className="mobile-services-marquee w-100" style={{ height: 'fit-content', zIndex: 4, marginTop: '20px' }}>
              <MarqueeSlider mode="1" className="sliding-text__list">
                {servicesData.map((service) => (
                  <div key={service.id} style={{ paddingRight: '15px' }}>
                    <div className="items">
                      <div
                        className="services-one__single"
                        style={{
                          width: '200px',
                          height: '200px',
                          marginRight: '0px',
                        }}
                      >
                        <div
                          className="services-one__icon"
                          style={{ transform: 'scale(0.8)', marginBottom: '10px' }}
                        >
                          <span>{service.icon}</span>
                        </div>
                        <h3
                          className="services-one__title"
                          style={{ fontSize: '1rem', lineHeight: '1.2' }}
                        >
                          <Link to={service.path}>
                            {service.title.split('\n').map((line, i, arr) => (
                              <Fragment key={i}>
                                {line}
                                {i < arr.length - 1 && <br />}
                              </Fragment>
                            ))}
                          </Link>
                        </h3>
                        <Link
                          to={service.path}
                          className="services-one__read-more"
                          style={{ fontSize: '0.8rem' }}
                        >
                          Learn More<span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </MarqueeSlider>
            </div>

            <div className="main-slider-two__btn-box justify-content-center d-flex flex-row align-items-center flex-nowrap mt-4">
              <div className="main-slider-two__btn">
                <Link
                  to="/services"
                  className="thm-btn"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Discover More <span className="icon-arrow-right"></span>
                </Link>
              </div>
              <div
                className="main-slider-two__video-link"
                style={{
                  transform: 'scale(0.75)',
                  transformOrigin: 'left center',
                  marginLeft: '10px',
                }}
              >
                <a
                  href="https://www.youtube.com/@shahcapserv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-popup"
                  title="Visit our YouTube Channel"
                >
                  <div className="main-slider-two__video-icon">
                    <span className="fa fa-play"></span>
                    <i className="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Viewport 2: Form Content (always visible, seen after scroll) */}
          <div className="container pt-2 pb-5 d-flex justify-content-center" style={{ position: 'relative', zIndex: 11 }}>
            <div className="w-100" style={{ maxWidth: '500px' }}>
              <div className="card border-0 p-4 hero-transparent-form" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <ReachUsForm title="" showCard={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
