import { createFileRoute } from '@tanstack/react-router'
import Banner from '#/features/banner/Banner'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'

export const Route = createFileRoute('/knowledge-hub/newsletter')({
  head: () => ({
    meta: [
      {
        title: 'Newsletter | Shah Capital Services',
      },
      {
        name: 'description',
        content: 'Subscribe to our newsletter to receive the latest updates, financial insights, and news from Shah Capital Services.',
      },
    ],
  }),
  component: NewsletterComponent,
})

function NewsletterComponent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated subscription
    alert('Thank you for subscribing! We will notify you when our newsletter launches.')
  }

  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Newsletter" subTitle="Knowledge Hub" subTitleLink="/knowledge-hub" thirdTitle="Newsletter" />

        <section className="newsletter-coming-soon-section py-5 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <FadeInAdvanced variant="fadeInUp" delay={100}>
                  <div 
                    className="text-center p-5 rounded-4 shadow-lg border"
                    style={{
                      background: '#ffffff',
                      borderColor: '#eaeaea',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <div 
                      className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
                      style={{
                        width: '90px',
                        height: '90px',
                        background: 'rgba(15, 118, 110, 0.08)', // light teal background
                        color: '#0f766e', // teal color
                      }}
                    >
                      <i className="fa-solid fa-paper-plane fa-3x"></i>
                    </div>

                    <h2 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
                      Our Newsletter is Coming Soon
                    </h2>
                    
                    <p className="text-muted fs-5 mb-5 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
                      We are preparing a monthly digest of premium financial insights, market updates, and investment tips tailored for your wealth growth. Subscribe below to be the first to know when we launch!
                    </p>

                    <form onSubmit={handleSubmit} className="row g-3 justify-content-center mx-auto" style={{ maxWidth: '500px' }}>
                      <div className="col-md-8">
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          className="form-control py-3 px-4 rounded-3 border-secondary-subtle"
                          style={{
                            fontSize: '1rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div className="col-md-4 d-grid">
                        <button type="submit" className="thm-btn w-100 py-3 rounded-3" style={{ border: 'none' }}>
                          Notify Me
                        </button>
                      </div>
                    </form>
                  </div>
                </FadeInAdvanced>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
