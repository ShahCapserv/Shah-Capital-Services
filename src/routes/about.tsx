import { createFileRoute, useLocation } from '@tanstack/react-router'

import OurPartners from '#/components/elements/OurPartners'
import Banner from '#/features/banner/Banner'
import AboutOne from '#/features/home-one/AboutOne'
// import BlogOne from '#/features/home-one/BlogOne'
// import BrandOne from '#/features/home-one/BrandOne'
// import ServiceOne from '#/features/home-one/ServiceOne'
// import TeamOne from '#/features/home-one/TeamOne'
// import TestimonialOne from '#/features/home-one/TestimonialOne'
import DetailsSecOne from '#/features/team/DetailsSecOne.tsx'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About | Shah Capital Services',
      },
    ],
  }),
  component: About,
})

function About() {
  const { pathname } = useLocation()

  const bannerTitle = pathname.split('/')
  const title = bannerTitle[bannerTitle.length - 1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main>
      <div className="page-wrapper">
        <Banner title={title} subTitle={title} />
        <AboutOne secClass="about-page" />
        <DetailsSecOne />
        {/* <ServiceOne /> */}
        <OurPartners secClass="sliding-text-twoo" />
        {/* <TeamOne /> */}
        {/* <BrandOne /> */}
        {/* <TestimonialOne /> */}
        {/* <BlogOne /> */}
      </div>
    </main>
  )
}
