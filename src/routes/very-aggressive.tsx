import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/very-aggressive')({
  component: VeryAggressiveProfilePage,
})

function VeryAggressiveProfilePage() {
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
              <h1 className="fw-bold mb-4" style={{ color: '#dc2626', fontSize: '3.5rem' }}>
                Very Aggressive Investor
              </h1>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Very Aggressive investor typically prefers higher risk and volatility in their portfolio, believe in long-term growth by investing in equity or sectoral funds.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <img 
                src="/assets/images/internal/very-aggressive/1.png" 
                alt="Very Aggressive Risk Meter" 
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
            Very Aggressive Investor's Qualities
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Growth</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Pure equity exposure with high-risk, high-return potential focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Focus</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Actively managed, performance-led investment picks
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Reach</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Global, thematic, and emerging market exposure
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
                src="/assets/images/internal/very-aggressive/2.jpg" 
                alt="Very Aggressive Investor Train" 
                className="img-fluid"
                style={{ maxWidth: '85%' }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#444' }}>Very Aggressive</strong> investor typically prefers higher risk and volatility in their portfolio, believe in long-term growth by investing in equity or sectoral funds.
              </p>
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '0' }}>
                You're not average. Your ambition is bold - and your strategy should match it. This high-conviction portfolio is designed for maximum capital appreciation. It includes handpicked aggressive equity schemes, emerging sectors, and bold allocations. You play to win, and so do we.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
