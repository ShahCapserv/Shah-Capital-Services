import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { commissionDisclosure } from 'content-collections'
import equityCommissions from '../constants/equity-commissions.json'

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

function EquityCommissionsTable() {
  return (
    <div className="table-responsive my-4 shadow-sm" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <table className="table table-bordered align-middle mb-0" style={{ borderColor: '#d3dfd8', fontSize: '14px' }}>
        <thead className="sticky-top" style={{ backgroundColor: '#dcf0e4', borderBottom: '2px solid #b3cbbd', zIndex: 1 }}>
          <tr>
            <th className="py-3 px-3" style={{ backgroundColor: '#dcf0e4' }}>Funds</th>
            <th className="py-3 px-3 text-end" style={{ backgroundColor: '#dcf0e4' }}>Commission (Approx.)%</th>
            <th className="py-3 px-3 text-end" style={{ backgroundColor: '#dcf0e4' }}>Minimum Investment</th>
            <th className="py-3 px-3 text-end" style={{ backgroundColor: '#dcf0e4' }}>Base Expense Ratio (%)</th>
            <th className="py-3 px-3" style={{ backgroundColor: '#dcf0e4' }}>Exit Load (Period)</th>
          </tr>
        </thead>
        <tbody>
          {equityCommissions.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-3 fw-medium">{item['Funds']}</td>
              <td className="py-2 px-3 text-end">{item['Commission (Approx.)%']}</td>
              <td className="py-2 px-3 text-end">{item['Minimum Investment']}</td>
              <td className="py-2 px-3 text-end">{item['Base Expense Ratio (%)']}</td>
              <td className="py-2 px-3">{item['Exit Load (Period)']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

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
          className="commission-disclosure-content text-start mb-5" 
          style={{ 
            fontSize: '15px', 
            lineHeight: '1.8', 
            color: '#444',
            width: '100%',
            maxWidth: '100%' 
          }}
        >
          <MDXContent code={commissionDisclosure.mdx} components={{ EquityCommissionsTable }} />
        </div>
      </div>
    </main>
  )
}
