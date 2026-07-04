import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/aggressive')({
  component: AggressiveProfilePage,
})

function AggressiveProfilePage() {
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
              <h1 className="fw-bold mb-4" style={{ color: '#ea580c', fontSize: '3.5rem' }}>
                Aggressive Investor
              </h1>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Aggressive investor prefers relatively high risk and returns. They focus on long-term capital growth through diversified equity investments.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <img 
                src="/assets/images/internal/aggressive/1.png" 
                alt="Aggressive Risk Meter" 
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
            Aggressive Investor's Qualities
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Momentum</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Focused equity exposure aiming for strong capital appreciation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Strategy</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Growth-centric allocation in equity and sectoral opportunities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Diversification</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Exposure to emerging markets and niche growth themes
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
                src="/assets/images/internal/aggressive/2.jpg" 
                alt="Aggressive Investor Car" 
                className="img-fluid"
                style={{ maxWidth: '85%' }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#444' }}>Aggressive investor</strong> prefers relatively high risk and returns. They focus on long-term capital growth through diversified equity investments.
              </p>
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '0' }}>
                You're not afraid to go after growth – but you expect strategy behind every move. The aggressive strategy is designed for long-term wealth creation, with a higher allocation to equity. It's ideal for investors who understand market cycles and value patience
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
