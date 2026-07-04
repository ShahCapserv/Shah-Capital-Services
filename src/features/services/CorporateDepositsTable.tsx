import React, { useEffect, useState } from 'react'

interface SheetData {
  headers: string[]
  rows: string[][]
}

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: SheetData }

export const CorporateDepositsTable: React.FC = () => {
  const [state, setState] = useState<LoadState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        const res = await fetch('/api/corporate-deposits')
        const json = await res.json() as { rows?: string[][], error?: string }

        if (cancelled) return

        if (!res.ok || json.error) {
          setState({ status: 'error', message: json.error ?? 'Unknown error' })
          return
        }

        const allRows: string[][] = json.rows ?? []
        if (allRows.length === 0) {
          setState({ status: 'success', data: { headers: [], rows: [] } })
          return
        }

        // The Google Sheet has a merged title row as the first row.
        // Find the actual header row: first row with more than 1 non-empty cell.
        let headerRowIdx = 0
        for (let i = 0; i < allRows.length; i++) {
          const nonEmpty = allRows[i].filter(c => c && c.trim().length > 0).length
          if (nonEmpty > 1) {
            headerRowIdx = i
            break
          }
        }

        const headers = allRows[headerRowIdx] ?? []
        const dataRows = allRows.slice(headerRowIdx + 1)
        setState({ status: 'success', data: { headers, rows: dataRows } })
      } catch (err) {
        if (!cancelled) {
          setState({ status: 'error', message: String(err) })
        }
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  if (state.status === 'loading') {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-secondary me-3" role="status" aria-hidden="true" />
        <span className="text-muted">Loading latest rates…</span>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="alert alert-warning d-flex align-items-start gap-3 mb-4" role="alert">
        <i className="fa-solid fa-triangle-exclamation mt-1" />
        <div>
          <strong>Unable to load live data.</strong>
          <div className="mt-1" style={{ fontSize: '0.85rem', color: '#555' }}>
            {state.message}
          </div>
        </div>
      </div>
    )
  }

  const { headers, rows } = state.data

  if (rows.length === 0) {
    return <p className="text-muted">No data available in the sheet yet.</p>
  }

  return (
    <div className="table-responsive">
      <table
        className="table table-bordered table-hover table-sm align-middle"
        style={{ fontSize: '0.82rem' }}
      >
        <thead className="table-dark text-center">
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ minWidth: i === 0 ? '220px' : i === headers.length - 1 ? '110px' : undefined }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {headers.map((_, ci) => {
                const cell = row[ci] ?? '–'
                // First column: render as bold if non-empty
                return ci === 0 ? (
                  <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                ) : (
                  <td key={ci} className="text-center">
                    {cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
