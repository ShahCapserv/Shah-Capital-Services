// routes/api/corporate-deposits.ts
// Server-side API route that fetches data from a public Google Sheet
// via the Google Sheets v4 API and returns it as JSON.
import { createFileRoute } from '@tanstack/react-router'

const SHEET_ID = '12y2lkTnKAwEUfpTO4P2tPCdojWwGSjW3cOIbHIwEOP4'
const RANGE = 'Sheet1' // fetches the entire first sheet

export const Route = createFileRoute('/api/corporate-deposits')({
  server: {
    handlers: {
      GET: async () => {
        const apiKey = process.env.VITE_GOOGLE_SHEETS_API_KEY

        if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
          return new Response(
            JSON.stringify({ error: 'Google Sheets API key is not configured.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          )
        }

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(RANGE)}?key=${apiKey}`

        try {
          const response = await fetch(url)

          if (!response.ok) {
            const errorText = await response.text()
            return new Response(
              JSON.stringify({ error: `Google Sheets API error: ${response.status}`, details: errorText }),
              { status: response.status, headers: { 'Content-Type': 'application/json' } }
            )
          }

          const data = await response.json() as { values?: string[][] }
          const rows: string[][] = data.values ?? []

          return new Response(JSON.stringify({ rows }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              // Cache for 5 seconds on the server edge / CDN
              'Cache-Control': 'public, max-age=5, s-maxage=5',
            },
          })
        } catch (err) {
          return new Response(
            JSON.stringify({ error: 'Failed to fetch sheet data.', details: String(err) }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          )
        }
      },
    },
  },
})
