import { companyLogos } from '#/constants'
import { HandCoinsIcon } from 'lucide-react'
import MarqueeSlider from './MarqueeSlider'

export type SecProp = {
  secClass?: string
  hideTitle?: boolean
}

const OurPartners: React.FC<SecProp> = ({ secClass, hideTitle }) => {
  // Split logos into two rows for double marquee
  const midpoint = Math.ceil(companyLogos.length / 2)
  const row1Logos = companyLogos.slice(0, midpoint)
  const row2Logos = companyLogos.slice(midpoint)

  return (
    <section className={`sliding-text ${secClass} mt-5`}>
      {!hideTitle && (
        <div className="section-title text-center sec-title-animation animation-style1 mb-4">
          <h6 className="section-title__tagline">
            <span className="section-title__tagline-border"></span>
            Our Partners
          </h6>
        </div>
      )}
      <div className="my-5 partners-double-marquee">
        {/* Row 1: Left direction */}
        <MarqueeSlider mode="1" className="sliding-text__list" direction="left">
          {row1Logos.map((item) => (
            <li key={item.id}>
              <div className="icon">
                <HandCoinsIcon className={'size-4'} />
              </div>
              <span>
                <img src={item.imgSrc} alt={`Partner Logo`} />
              </span>
            </li>
          ))}
        </MarqueeSlider>
        {/* Row 2: Right direction (opposite) */}
        <MarqueeSlider
          mode="1"
          className="sliding-text__list"
          direction="right"
        >
          {row2Logos.map((item) => (
            <li key={item.id}>
              <div className="icon">
                <HandCoinsIcon className={'size-4'} />
              </div>
              <span>
                <img src={item.imgSrc} alt={item.name || `Partner Logo`} />
              </span>
            </li>
          ))}
        </MarqueeSlider>
      </div>
    </section>
  )
}

export default OurPartners
