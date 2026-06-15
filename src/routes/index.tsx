import HowWeWork from '#/components/HowWeWork.tsx'
import SlidingText from '#/components/elements/SlidingText'
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

import { Fragment, useState } from 'react'
// import slideImg from '/assets/images/resources/main-slider-two-img-1-1.jpg'
// import slideImgSmall from '/assets/images/resources/main-slider-two-small-img-1-1.jpg'
// import shapeOne from '/assets/images/shapes/main-slider-two-shape-1.png'

// import slideImgTwo from '/assets/images/resources/main-slider-two-img-1-2.jpg'
// import slideImgSmallTwo from '/assets/images/resources/main-slider-two-small-img-1-2.jpg'

// import slideImgThree from '/assets/images/resources/main-slider-two-img-1-3.jpg'
// import slideImgSmallThree from '/assets/images/resources/main-slider-two-small-img-1-3.jpg'

import useFixproContext from '@/components/context/useFixproContext'
import SectionWrapper from '@/components/elements/SectionWrapper'

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
                  href="https://play.google.com/store/apps/details?id=com.finnsys.slidingmenu&hl=en_IN"
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
                  href="https://apps.apple.com/in/app/fundconnect/id965208599"
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
        <CounterOne />
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
        <SlidingText secClass="sliding-text-twoo" />
      </div>
    </main>
  )
}

const isDev = import.meta.env.DEV

const MainSliderTwo: React.FC = () => {
  const { handleVideoClick } = useFixproContext()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleVideoClick(e, 'https://www.youtube.com/watch?v=Get7rqXYrbQ')
  }
  return (
    <SectionWrapper id="home" className="main-slider-two">
      <div
        className="main-slider-two__carousel position-relative"
        // style={{ height: '100dvh' }}
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={
            isDev
              ? undefined
              : {
                  delay: 6000,
                  disableOnInteraction: false,
                }
          }
          loop={true}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={setSwiperInstance}
        >
          {Array.from({ length: 5 }).map((_, idx) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                <div className={`item ${activeIndex === idx ? 'active' : ''}`}>
                  <div className="main-slider-two__bg one"></div>
                  <div className="main-slider-two__overly"></div>
                  <div
                    className="container d-flex justify-content-center"
                    style={{ paddingBottom: '80px' }}
                  >
                    <div className="main-slider-two__content d-flex flex-column justify-content-center align-content-center">
                      <h2 className="main-slider-two__title text-center">
                        Because You <span>HAVE</span> <br /> better things to do
                      </h2>
                      <p className="main-slider-two__text text-center">
                        We have been operating for over a decade, providing
                        top-notch services {/* We have been <br /> operating for
                        over a decade */}<br /> and delivering exceptional results to our
                        valued clients.
                      </p>
                      <div className="main-slider-two__btn-box justify-content-center">
                        <div className="main-slider-two__btn">
                          <a href="/about" className="thm-btn">
                            Discover More{' '}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <div className="main-slider-two__video-link">
                          <a
                            href="#"
                            onClick={handleVideo}
                            className="video-popup"
                            title="video"
                          >
                            <div className="main-slider-two__video-icon">
                              <span className="fa fa-play"></span>
                              <i className="ripple"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>
            <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="main-slider-two__bg one"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImg}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmall}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="main-slider-two__bg two"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImgTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmallTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="main-slider-two__bg three"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImgThree}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmallThree}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        {/* <div className="owl-nav">
          <button
            title="prev"
            onClick={() => swiperInstance?.slidePrev()}
            type="button"
            // role="presentation"
            className="owl-prev"
          >
            <span className="icon-arrow-right"></span>
          </button>
          <button
            title="next"
            onClick={() => swiperInstance?.slideNext()}
            type="button"
            // role="presentation"
            className="owl-next"
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div> */}

        <div
          className={'position-absolute bottom-0 start-0 mb-5'}
          style={{ height: 'fit-content', width: '100%', zIndex: 4 }}
        >
          <MarqueeSlider mode="1" className="sliding-text__list">
            {servicesData.map((service) => (
              <div key={service.id}>
                <div className="items">
                  <div
                    className="services-one__single"
                    style={{
                      // aspectRatio: 1,
                      width: '240px',
                      height: '220px',
                      marginRight: '10px',
                    }}
                  >
                    <div className="services-one__icon">
                      <span>{service.icon}</span>
                      {/* <span className={service.iconClass}></span> */}
                    </div>
                    <h3 className="services-one__title fs-5">
                      <Link to={service.path}>
                        {service.title.split('\n').map((line, i, arr) => (
                          <Fragment key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </Fragment>
                        ))}
                      </Link>
                    </h3>
                    {/* <p className="services-one__single-text">{service.text}</p> */}
                    <Link to={service.path} className="services-one__read-more">
                      Learn More<span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </MarqueeSlider>
        </div>
      </div>
    </SectionWrapper>
  )
}
