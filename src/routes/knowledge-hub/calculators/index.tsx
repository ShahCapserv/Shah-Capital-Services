import { createFileRoute } from '@tanstack/react-router'

import Calculators from '#/components/calc/Calculators.tsx'
import Banner from '#/features/banner/Banner.tsx'

export const Route = createFileRoute('/knowledge-hub/calculators/')(
  {
    head: () => ({
      meta: [
        {
          title: 'Calculators | Knowledge Hub | Shah Capital Services',
        },
        {
          name: 'description',
          content:
            'Use our financial calculators to plan your SIP, lump sum, and other investments. Explore tools in the Shah Capital Services Knowledge Hub.',
        },
      ],
    }),
    component: CalculatorsPage,
  },
)

function CalculatorsPage() {
  return (
    <main>
      <div className="page-wrapper">
        <Banner
          title="Calculators"
          subTitle="Knowledge Hub"
          subTitleLink="/knowledge-hub"
          thirdTitle="Calculators"
        />

        <Calculators />
      </div>
    </main>
  )
}
