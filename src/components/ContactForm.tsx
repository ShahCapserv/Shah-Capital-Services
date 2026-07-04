import { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [authorized, setAuthorized] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in at least your name and email.',
        confirmButtonColor: '#e74c3c',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#e74c3c',
      })
      return
    }

    if (!authorized) {
      Swal.fire({
        icon: 'warning',
        title: 'Authorization Required',
        text: 'Please authorize representative of Shah Capital Services to contact you.',
        confirmButtonColor: '#e74c3c',
      })
      return
    }

    try {
      /*
       * ─────────────────────────────────────────────
       *  NOTE: Add your backend / API call here.
       * ─────────────────────────────────────────────
       */

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out. We will get back to you shortly.',
        confirmButtonColor: '#75d82fff',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setAuthorized(false)
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#e74c3c',
      })
    }
  }

  return (
    <form
      className="contact-form-validated contact-page__form"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
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
              name="email"
              placeholder="Your Email"
              value={formData.email}
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
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
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
