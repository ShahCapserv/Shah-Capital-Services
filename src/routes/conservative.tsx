import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/conservative')({
  component: ConservativeProfilePage,
})

function ConservativeProfilePage() {
  return (
    <main className="profile-page-container pt-5">
      {/* Section 1: Introduction */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
              <p className="mb-3" style={{ color: '#444', fontSize: '1.15rem' }}>
                Awesome! Based on your responses, your investment risk profile is:
              </p>
              <h1 className="fw-bold mb-4" style={{ color: '#00a651', fontSize: '3.5rem' }}>
                Conservative Investor
              </h1>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Conservative investor prioritizes capital protection and predictable returns. They mainly invest in low-risk debt instruments and fixed-income options.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <img 
                src="/assets/images/internal/conservative/1.png" 
                alt="Conservative Risk Meter" 
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxWidth: '90%', objectFit: 'cover', maxHeight: '400px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Qualities */}
      <section className="py-5" style={{ backgroundColor: '#f6f7fa' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-5" style={{ color: '#0b0742' }}>
            Conservative Investor's Qualities
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Security</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Primarily debt-based, prioritizing capital preservation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Plan</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Stable investment options with low market fluctuation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Coverage</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Limited to local or low-volatility instruments only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Risk Meter & Details */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <img 
                src="/assets/images/internal/conservative/2.jpg" 
                alt="Conservative Investor Turtle" 
                className="img-fluid"
                style={{ maxWidth: '85%' }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#444' }}>Conservative investor</strong> prioritizes capital protection and predictable returns, mainly invest in low-risk debt instruments and fixed-income options.
              </p>
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '0' }}>
                You don't chase trends. You value consistency, security, and peace of mind. We understand that protecting your capital is just as important as growing it. With a conservative strategy, you get curated investments that prioritize stability – without compromising future value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
