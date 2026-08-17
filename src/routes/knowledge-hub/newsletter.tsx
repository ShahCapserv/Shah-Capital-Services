import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Banner from '#/features/banner/Banner'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import Swal from 'sweetalert2'

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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get("email")
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "95f869f1-87c4-46cc-bf28-245a55e7aadb",
          subject: "New Newsletter Subscription",
          from_name: "Shah Capital Services Newsletter",
          email: email
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        Swal.fire({
          title: 'Subscribed!',
          text: 'Thank you for subscribing! We will notify you of our next release.',
          icon: 'success',
          confirmButtonColor: 'var(--fixpro-base, #0f766e)',
          customClass: {
            popup: 'rounded-4 shadow-lg border-0',
          }
        })
        form.reset()
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#e74c3c',
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#e74c3c',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const pdfFiles = import.meta.glob('/content/newsletter/*.pdf', { query: '?url', import: 'default', eager: true }) as Record<string, string>
  
  const newsletters = Object.keys(pdfFiles).map((path) => {
    const filename = path.split('/').pop() || ''
    const title = filename.replace('.pdf', '')
    return {
      id: filename,
      title: title,
      pdfUrl: pdfFiles[path],
    }
  })

  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Newsletter" subTitle="Knowledge Hub" subTitleLink="/knowledge-hub" thirdTitle="Newsletter" />

        <section className="newsletter-section py-5 my-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <FadeInAdvanced variant="fadeInUp">
                  <h2 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
                    Exclusive Insights & Market Analysis
                  </h2>
                  <p className="text-muted fs-5" style={{ lineHeight: '1.7' }}>
                    Stay ahead of the curve with our curated newsletters featuring deep dives into market trends, portfolio strategies, and macroeconomic updates.
                  </p>
                </FadeInAdvanced>
              </div>
            </div>

            <div className="row g-4 mb-5">
              {newsletters.map((newsletter) => (
                <div key={newsletter.id} className="col-lg-12">
                  <FadeInAdvanced variant="fadeInUp" delay={100}>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-row align-items-center p-4 bg-white" style={{ border: '1px solid #eaeaea' }}>
                      <div className="d-flex align-items-center justify-content-center rounded-circle me-4" style={{ width: '60px', height: '60px', background: 'rgba(15, 118, 110, 0.1)', color: 'var(--fixpro-base, #0f766e)' }}>
                        <i className="fa-regular fa-file-pdf fa-2x"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold mb-0" style={{ color: '#1e293b' }}>{newsletter.title}</h4>
                      </div>
                      <div className="d-flex gap-3 ms-3">
                        <a href={newsletter.pdfUrl} target="_blank" rel="noreferrer" className="thm-btn px-4 py-2 rounded-3 text-decoration-none">
                          Read <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                        <a href={newsletter.pdfUrl} download className="btn btn-outline-secondary px-4 py-2 rounded-3 text-decoration-none d-flex align-items-center">
                          <i className="fa-solid fa-download me-2"></i> Download
                        </a>
                      </div>
                    </div>
                  </FadeInAdvanced>
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-5 pt-5 border-top">
              <div className="col-xl-8 col-lg-10">
                <FadeInAdvanced variant="fadeInUp" delay={200}>
                  <div 
                    className="text-center p-5 rounded-4 border"
                    style={{
                      background: '#fafafa',
                      borderColor: '#eaeaea',
                    }}
                  >
                    <div 
                      className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle bg-white shadow-sm"
                      style={{
                        width: '70px',
                        height: '70px',
                        color: '#0f766e',
                      }}
                    >
                      <i className="fa-solid fa-envelope-open-text fa-2x"></i>
                    </div>

                    <h3 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
                      Never Miss an Update
                    </h3>
                    
                    <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
                      Subscribe to our mailing list to receive our latest newsletters, market analysis, and wealth management tips directly to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="row g-2 justify-content-center mx-auto" style={{ maxWidth: '500px' }}>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email address"
                          className="form-control py-3 px-4 rounded-3 border-secondary-subtle"
                          style={{
                            fontSize: '1rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div className="col-sm-4 d-grid">
                        <button type="submit" disabled={isSubmitting} className="thm-btn w-100 py-3 rounded-3" style={{ border: 'none', opacity: isSubmitting ? 0.7 : 1 }}>
                          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
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

