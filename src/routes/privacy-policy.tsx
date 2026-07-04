import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { privacyPolicy } from 'content-collections'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      {
        title: `${privacyPolicy.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: privacyPolicy.summary,
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
            {privacyPolicy.title}
          </h1>
          <time
            className={'d-block mb-2 text-muted'}
            about={privacyPolicy.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>
        </div>
        <div 
          className="privacy-policy-content text-start" 
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
              .privacy-policy-content strong, .privacy-policy-content b {
                color: #0b0742;
              }
              .privacy-policy-content h3 {
                color: #0b0742;
                font-weight: 700;
                font-size: 1.25rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
            `}
          </style>
          <MDXContent code={privacyPolicy.mdx} />
        </div>
      </div>
    </main>
  )
}
