import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { allServices } from 'content-collections'
import { MutualFundsPage } from '#/features/services/MutualFundsPage'
import { StocksAndSecuritiesPage } from '#/features/services/StocksAndSecuritiesPage'
import { DepositsAndBondsPage } from '#/features/services/DepositsAndBondsPage'
import { MiscInsurancePage } from '#/features/services/MiscInsurancePage'
import { LifeInsurancePage } from '#/features/services/LifeInsurancePage'
import { HealthInsurancePage } from '#/features/services/HealthInsurancePage'
import { GiftCityPage } from '#/features/services/GiftCityPage'
import { VehicleInsurancePage } from '#/features/services/VehicleInsurancePage'
import { NriCornerPage } from '#/features/services/NriCornerPage'
import { ReachUsModal } from '#/components/ReachUsForm'

const getZohoServiceName = (slug: string): string => {
  switch (slug) {
    case 'mutual-funds':
      return 'Mutual Funds'
    case 'stocks-and-securities':
      return 'Stocks and Securities'
    case 'deposits-and-bonds':
      return 'Fixed Deposit'
    case 'misc-insurance':
      return 'Miscellaneous Insurance'
    case 'life-insurance':
      return 'Life Insurance'
    case 'health-insurance':
      return 'Health Insurance'
    case 'gift-city-investments':
      return 'Gift City'
    case 'vehicle-insurance':
      return 'Vehicle Insurance'
    case 'nri-corner':
      return 'NRI Corner'
    default:
      return '-Select-'
  }
}

const isDev = import.meta.env.DEV

const baseUrl = isDev ? 'http://localhost:3000' : import.meta.env.VITE_BASE_URL

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = allServices.find((s) => s.slug === params.slug)
    if (!service) {
      throw notFound({ throw: true })
    }
    return service
  },
  head: ({ loaderData, params }) => {
    if (params.slug === 'mutual-funds') {
      return {
        meta: [
          {
            title: 'Mutual Funds and SIF | Shah Capital Services',
          },
          {
            name: 'description',
            content: 'Structured mutual fund and Specialized Investment Fund (SIF) solutions focused on disciplined investing, goal-based planning, and long-term wealth creation.',
          },
          { property: 'og:title', content: 'Mutual Funds and SIF | Shah Capital Services' },
          { property: 'og:description', content: 'Structured mutual fund and Specialized Investment Fund (SIF) solutions focused on disciplined investing.' },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: `${baseUrl}/services/mutual-funds` },
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            rel: 'canonical',
            href: `${baseUrl}/services/mutual-funds`,
          },
        ],
      }
    }

    if (params.slug === 'stocks-and-securities') {
      return {
        meta: [
          {
            title: 'Stocks & Securities | Shah Capital Services',
          },
          {
            name: 'description',
            content: 'Direct equity approached with discipline — not speculation. Open a Demat account and build a structured portfolio.',
          },
          { property: 'og:title', content: 'Stocks & Securities | Shah Capital Services' },
          { property: 'og:description', content: 'Direct equity approached with discipline — not speculation. Open a Demat account and build a structured portfolio.' },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: `${baseUrl}/services/stocks-and-securities` },
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            rel: 'canonical',
            href: `${baseUrl}/services/stocks-and-securities`,
          },
        ],
      }
    }

    return {
      meta: [
        {
          title: `${loaderData?.title ?? 'Services'} | Shah Capital Services`,
        },
        {
          name: 'description',
          content:
            loaderData?.summary ??
            'Shah Capital Services offers a range of financial services to help you achieve your investment goals.',
        },
        // Open Graph
        { property: 'og:title', content: loaderData?.title },
        { property: 'og:description', content: loaderData?.summary },
        { property: 'og:image', content: loaderData?.image },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `${baseUrl}/services/${params.slug}` },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: loaderData?.title },
        { name: 'twitter:description', content: loaderData?.summary },
        { name: 'twitter:image', content: loaderData?.image },
        { name: 'twitter:url', content: `${baseUrl}/services/${params.slug}` },
        {
          rel: 'canonical',
          href: `${baseUrl}/services/${params.slug}`,
        },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: loaderData?.title,
            description: loaderData?.summary,
            image: loaderData?.image,
            author: {
              '@type': 'Person',
              name: 'Shah Capital Services',
            },
            datePublished: `${JSON.parse(JSON.stringify(loaderData?.lastModified))}`,
          }),
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const service = Route.useLoaderData()
  const { slug } = Route.useParams()

  if (slug === 'mutual-funds') {
    return <MutualFundsPage />
  }

  if (slug === 'stocks-and-securities') {
    return <StocksAndSecuritiesPage />
  }

  if (slug === 'deposits-and-bonds') {
    return <DepositsAndBondsPage />
  }

  if (slug === 'misc-insurance') {
    return <MiscInsurancePage />
  }

  if (slug === 'life-insurance') {
    return <LifeInsurancePage />
  }

  if (slug === 'health-insurance') {
    return <HealthInsurancePage />
  }

  if (slug === 'gift-city-investments') {
    return <GiftCityPage />
  }

  if (slug === 'vehicle-insurance') {
    return <VehicleInsurancePage />
  }

  if (slug === 'nri-corner') {
    return <NriCornerPage />
  }

  return (
    <main style={{ maxWidth: '990px', margin: 'auto' }}>
      <div>
        <img
          src={service.image}
          alt={service.title}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <article className={'px-4 pb-5'}>
        <div id="blog-markdown" className={'mt-3'}>
          <MDXContent code={service.mdx} />
        </div>
      </article>

      <div className={'py-4 d-flex align-items-center justify-content-center'}>
        <button
          type="button"
          className={'thm-btn'}
          data-bs-toggle="modal"
          data-bs-target="#reachUsModal"
        >
          Fill Out Form
        </button>
      </div>

      <ReachUsModal defaultService={getZohoServiceName(slug)} />
    </main>
  )
}
