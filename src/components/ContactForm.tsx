import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    SingleLine: '',
    Email: '',
    PhoneNumber_countrycode: '',
    subject: '',
    message: '',
    zf_referrer_name: '',
    zf_redirect_url: '',
    zc_gad: '',
  })
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = new URL(window.location.href)
      currentUrl.searchParams.set('submitted', 'true')
      
      setFormData((prev) => ({
        ...prev,
        zf_redirect_url: currentUrl.toString(),
      }))

      const params = new URLSearchParams(window.location.search)
      if (params.get('submitted') === 'true') {
        Swal.fire({
          title: 'Thank You!',
          text: 'Your query has been successfully submitted. Our team will contact you shortly.',
          icon: 'success',
          confirmButtonColor: 'var(--fixpro-base, #0f766e)',
          confirmButtonText: 'Great!',
          customClass: {
            popup: 'rounded-4 shadow-lg border-0',
          }
        })

        const cleanUrl = new URL(window.location.href)
        cleanUrl.searchParams.delete('submitted')
        window.history.replaceState({}, '', cleanUrl.pathname + cleanUrl.search)
      }
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    if (name === 'PhoneNumber_countrycode') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      !formData.SingleLine.trim() ||
      !formData.Email.trim() ||
      !formData.PhoneNumber_countrycode.trim() ||
      !formData.subject ||
      !formData.message.trim()
    ) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all mandatory fields (Name, Email, Phone, Service, and Message).',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    if (!/^\d{10}$/.test(formData.PhoneNumber_countrycode)) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Mobile Number',
        text: 'Please enter a valid 10-digit mobile number.',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    const emailRegex =
      /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/
    if (!emailRegex.test(formData.Email)) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    if (!authorized) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Authorization Required',
        text: 'Please authorize representative of Shah Capital Services to contact you.',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    return true
  }

  return (
    <form
      className="contact-form-validated contact-page__form"
      onSubmit={handleSubmit}
      method="POST"
      action="https://forms.zohopublic.in/shahcapserv/form/ContactUsForm/formperma/uUl0LwPu0Y5pIEobMbEcsTs3Z0vv7y17gCsF_iXr500/htmlRecords/submit"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      id="form"
    >
      <input type="hidden" name="zf_referrer_name" value={formData.zf_referrer_name} />
      <input type="hidden" name="zf_redirect_url" value={formData.zf_redirect_url} />
      <input type="hidden" name="zc_gad" value={formData.zc_gad} />
      <input
        type="hidden"
        name="MultiLine"
        value={`Subject: ${formData.subject}\n\nMessage: ${formData.message}`}
      />

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="SingleLine"
              placeholder="Your name"
              value={formData.SingleLine}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Phone"
              value={formData.PhoneNumber_countrycode}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box" style={{ position: 'relative' }}>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'var(--swal2-footer-border-color)',
                width: '100%',
                height: '60px',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                color: '#777777',
                padding: '0 30px',
                borderRadius: '8px',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
              }}
            >
              <option value="" disabled={true}>
                Select Service
              </option>
              <option value="Mutual Funds & SIF">Mutual Funds & SIF</option>
              <option value="Stocks & Securities">Stocks & Securities</option>
              <option value="Gift City">Gift City</option>
              <option value="Deposits & Bonds">Deposits & Bonds</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Vehicle Insurance">Vehicle Insurance</option>
              <option value="Miscellaneous Insurance">Miscellaneous Insurance</option>
              <option value="NRI Corner">NRI Corner</option>
            </select>
            <span
              className="fa fa-angle-down"
              style={{
                position: 'absolute',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: '#777777',
              }}
            ></span>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-page__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            ></textarea>
          </div>
          <div className="form-check mb-4" style={{ fontSize: '14px', color: '#777777', paddingLeft: '2rem' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="authorizeContact"
              checked={authorized}
              onChange={(e) => setAuthorized(e.target.checked)}
              required
              style={{ width: '1.25rem', height: '1.25rem', float: 'left', marginLeft: '-2rem', cursor: 'pointer' }}
            />
            <label className="form-check-label" htmlFor="authorizeContact" style={{ cursor: 'pointer', paddingLeft: '0.5rem', userSelect: 'none', display: 'inline-block', verticalAlign: 'middle' }}>
              I authorize representative of Shah Capital Services to contact me via call/sms/email. *
            </label>
          </div>
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="footer-widget__newsletter-btn thm-btn"
            >
              Send A Message
              <span>
                <i className="icon-right-arrow"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="result"></div>
    </form>
  )
}
