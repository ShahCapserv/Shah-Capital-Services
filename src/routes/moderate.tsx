import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/moderate')({
  component: ModerateProfilePage,
})

function ModerateProfilePage() {
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
              <h1 className="fw-bold mb-4" style={{ color: '#eab308', fontSize: '3.5rem' }}>
                Moderate Investor
              </h1>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Moderate investor seeks a balance between risk and stability, invest in a mix of equity and debt to achieve steady long-term growth.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <img 
                src="/assets/images/internal/moderate/1.png" 
                alt="Moderate Risk Meter" 
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxWidth: '90%', objectFit: 'cover', maxHeight: '400px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Qualities */}
      <section className="py-5" style={{ backgroundColor: '#f4f6fb' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-5" style={{ color: '#0b0742' }}>
            Moderate Investor's Qualities
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Stability</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Balanced blend of equity and debt for risk-adjusted returns
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Approach</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Diversified portfolio targeting consistent mid-long term growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
                <div className="card-body">
                  <h3 className="fw-bold mb-4" style={{ color: '#0b0742', fontSize: '1.75rem' }}>Outlook</h3>
                  <p className="card-text mb-0" style={{ color: '#1a1f36', fontSize: '1.15rem', lineHeight: '1.6' }}>
                    Domestic-focused with optional global fund exposure
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
                src="/assets/images/internal/moderate/2.jpg" 
                alt="Moderate Investor Bicyclist" 
                className="img-fluid"
                style={{ maxWidth: '85%' }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#444' }}>Moderate</strong> investor seeks a balance between risk and stability, invest in a mix of equity and debt to achieve steady long-term growth.
              </p>
              <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '0' }}>
                You want your investments to grow – but not at the cost of sleepless nights. This strategy is tailor-made for investors who believe in balance. With exposure to both equity and debt, you can benefit from market upsides while cushioning the downsides.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
