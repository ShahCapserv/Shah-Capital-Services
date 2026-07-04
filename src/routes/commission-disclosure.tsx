import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { commissionDisclosure } from 'content-collections'

export const Route = createFileRoute('/commission-disclosure')({
  head: () => ({
    meta: [
      {
        title: `${commissionDisclosure.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: commissionDisclosure.summary,
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const time = new Date().toISOString().split('T')[0]

  return (
    <main className={'my-5 py-4'}>
      <div className="w-100 px-4 px-md-5">
        <div className="mb-4 text-center">
          <h1 className="mb-2" style={{ color: '#0b0742', fontWeight: 700 }}>
            {commissionDisclosure.title}
          </h1>
          <time
            className={'d-block mb-2 text-muted'}
            about={commissionDisclosure.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>
        </div>

        <div 
          className="commission-disclosure-content text-start" 
          style={{ 
            fontSize: '15px', 
            lineHeight: '1.8', 
            color: '#444',
            width: '100%',
            maxWidth: '100%' 
          }}
        >
          <MDXContent code={commissionDisclosure.mdx} />
        </div>
      </div>
    </main>
  )
}
