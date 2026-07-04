import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { disclaimer } from 'content-collections'
// import { z } from 'zod'

export const Route = createFileRoute('/disclaimer')({
  head: () => ({
    meta: [
      {
        title: `${disclaimer.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: disclaimer.summary,
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const time = new Date().toISOString().split('T')[0]

  return (
    <main className="my-5 py-4">
      <div className="w-100 px-4 px-md-5">
        <div className="mb-4 text-center">
          <h1 className="mb-2" style={{ color: '#0b0742', fontWeight: 700 }}>
            {disclaimer.title}
          </h1>
          <time
            className={'d-block mb-2 text-muted'}
            about={disclaimer.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>
        </div>
        <div 
          className="disclaimer-content text-start" 
          style={{ 
            fontSize: '15px', 
            lineHeight: '1.8', 
            color: '#444',
            width: '100%',
            maxWidth: '100%' 
          }}
        >
          <style>
            {`
              .disclaimer-content strong, .disclaimer-content b {
                color: #0b0742;
              }
              .disclaimer-content h3 {
                color: #0b0742;
                font-weight: 700;
                font-size: 1.25rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
            `}
          </style>
          <MDXContent code={disclaimer.mdx} />
        </div>
      </div>
    </main>
  )
}
