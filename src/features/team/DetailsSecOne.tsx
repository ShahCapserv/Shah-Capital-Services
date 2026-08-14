import { servicesData } from '#/routes/services/index.tsx'
// import Progressbar from '@/components/elements/Progressbar'
import { Link } from '@tanstack/react-router'

interface SocialLink {
  href: string
  iconClass: string
  label: string
}

interface AddressItem {
  iconClass: string
  label: string
  value: string
  linkHref?: string
  linkPrefix?: string
}

interface PracticeAreaItem {
  label: string
}

interface SkillItem {
  title: string
  percent: number
}

interface TeamMemberDetails {
  name: string
  subTitle: string
  image: string
  imageAlt: string
  bio: string
  socialLinks: SocialLink[]
  addressItems: AddressItem[]
  practiceAreaListOne: PracticeAreaItem[]
  practiceAreaListTwo: PracticeAreaItem[]
  skills: SkillItem[]
}

const teamMemberDetails: TeamMemberDetails = {
  name: 'Shah Capital Services',
  subTitle: '',
  image: '/assets/images/founder.jpg',
  imageAlt: 'Shah Capital Profile Picture',
  bio: ' When the noise of markets, products, and opinions gets louder, most people either freeze or make decisions they later regret. Shah Capital was built for those who decided not to leave it to chance. Founded on a family legacy of financial management that stretches back over two decades, Shah Capital is a full-scope wealth management firm serving business families and working professionals across Chennai.',
  socialLinks: [
    { href: '#', iconClass: 'fab fa-twitter', label: 'Twitter' },
    { href: '#', iconClass: 'fab fa-facebook', label: 'Facebook' },
    { href: '#', iconClass: 'fab fa-pinterest-p', label: 'Pinterest' },
    { href: '#', iconClass: 'fab fa-instagram', label: 'Instagram' },
  ],
  addressItems: [
    {
      iconClass: 'icon-location',
      label: 'Address',
      value: 'Chennai, India - 600001',
      linkHref: 'https://maps.app.goo.gl/81FrRB1rU24cNwu29',
    },
    {
      iconClass: 'icon-call',
      label: 'Phone Number',
      value: '+91 9840999879',
      linkHref: '+919840999879',
      linkPrefix: 'tel:',
    },
    {
      iconClass: 'icon-envelope',
      label: 'Email',
      value: 'support@shahcapserv.com',
      linkHref: 'support@shahcapserv.com',
      linkPrefix: 'mailto:',
    },
  ],
  practiceAreaListOne: [
    { label: 'Electric Repair' },
    { label: 'Lighting & Fixture' },
    { label: 'European Lard Sration' },
  ],
  practiceAreaListTwo: [
    { label: 'Electric Maintenance' },
    { label: 'Colling Service' },
    { label: 'A/c Repair' },
  ],
  skills: [
    { title: 'Repair Device', percent: 80 },
    { title: 'Replace Device', percent: 95 },
    { title: 'Diagnostics', percent: 65 },
  ],
}

const DetailsSecOne: React.FC = () => {
  const {
    name,
    subTitle,
    image,
    imageAlt,
    // bio,
    socialLinks,
    addressItems,
    // practiceAreaListOne,
    // practiceAreaListTwo,
    // skills,
  } = teamMemberDetails

  const services = servicesData.map((service) => {
    const serive = {
      title: service.title,
      percent: Math.floor(Math.random() * 100) + 1, // Random percentage for demonstration
    }
    return serive
  })

  return (
    <section className="team-details">
      <div className="container">
        <div className="team-details__bottom mb-5">
          <div className="row">
            <div className="col-12">
              <div className="mf-card mf-card--theme-teal">
                <div className="mf-card__header">
                  <div className="mf-card__icon-wrapper">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <h3 className="mf-card__title">Mr. Kishor B Shah – Founder’s Note</h3>
                </div>
                <div className="mf-card__body">
                  <p className="mf-intro-text mb-3">
                    Behind Shah Capital Services is a simple belief — that
                    financial services should be built on honesty, discipline, and
                    long-term thinking.
                  </p>
                  <p className="mf-intro-text mb-3">
                    The journey began with a clear observation: many individuals
                    don't lack opportunities, but often lack clarity and structure
                    in how they approach financial decisions. In many cases,
                    choices are influenced by noise, short-term trends, or
                    emotion, rather than a well-defined process.
                  </p>
                  <p className="mf-intro-text mb-3">
                    This led to a clear direction — to build an approach that is
                    steady, process-driven, and rooted in consistency. The focus
                    has always been on maintaining discipline through market
                    cycles, rather than reacting to them.
                  </p>
                  <p className="mf-intro-text mb-3">
                    Over time, this philosophy has shaped how Shah Capital
                    Services operates — with an emphasis on clarity, structured
                    thinking, and long-term orientation. The intent is not to
                    follow trends, but to remain aligned with a defined approach,
                    even when it requires patience.
                  </p>
                  <p className="mf-intro-text mb-0">
                    In an industry that can sometimes lean toward short-term
                    thinking, Shah Capital Services is positioned with a different
                    mindset — grounded in process, guided by conviction, and
                    anchored in a long-term perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="team-details__top">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="team-details__top-left">
                <div className="team-details__img-1">
                  <img
                    src={image}
                    style={{ width: 'auto', height: 'auto' }}
                    alt={imageAlt}
                    className={'w-100 h-100 object-cover'}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="team-details__top-right">
                <div className="team-details__client-box">
                  <h3 className="team-details__client-name">{name}</h3>
                  {subTitle && (
                  <span className="team-details__client-sub-title">
                    {subTitle}
                  </span>
                  )}
                  <div className="team-details__social">
                    {socialLinks.map((social) => (
                      <Link
                        to={social.href}
                        key={social.label}
                        aria-label={social.label}
                      >
                        <i className={social.iconClass}></i>
                      </Link>
                    ))}
                  </div>
                  <p className="team-details__client-text">
                    Most people know they should manage their money better. Most
                    people just don't. Life gets in the way. Businesses demand
                    attention. Families grow. The financial decisions that
                    should be made today get pushed to tomorrow - and tomorrow
                    becomes years.
                  </p>
                  <ul className="team-details__client-address list-unstyled">
                    {addressItems.map((item) => (
                      <li key={item.label}>
                        <p>
                          <span className={item.iconClass}></span>
                          {item.label}
                        </p>
                        <h5>
                          {item.linkHref && item.linkPrefix ? (
                            <Link
                              to={`${item.linkPrefix}${item.linkHref}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <Link
                              to={`${item.linkHref}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.value}
                            </Link>
                          )}
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default DetailsSecOne



