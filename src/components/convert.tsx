import type { ChangeEvent, FormEvent } from 'react'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

// Type safety definitions for form state
interface FormData {
  SingleLine: string // Client Name
  PhoneNumber_countrycode: string // Mobile Number (10 digits)
  Email: string // Email Address
  Dropdown3: string // Service Selection
  zf_referrer_name: string
  zf_redirect_url: string
  zc_gad: string
}

interface ZohoServiceFormProps {
  defaultService?: string
}

export const ZohoServiceForm: React.FC<ZohoServiceFormProps> = ({ defaultService }) => {
  const [formData, setFormData] = useState<FormData>({
    SingleLine: '',
    PhoneNumber_countrycode: '',
    Email: '',
    Dropdown3: defaultService || '-Select-',
    zf_referrer_name: '',
    zf_redirect_url: '',
    zc_gad: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. Build dynamic redirect URL with a submission flag query parameter
      const currentUrl = new URL(window.location.href)
      currentUrl.searchParams.set('submitted', 'true')
      
      setFormData((prev) => ({
        ...prev,
        zf_redirect_url: currentUrl.toString(),
        ...(defaultService ? { Dropdown3: defaultService } : {})
      }))

      // 2. Check if we just returned from a successful submission
      const params = new URLSearchParams(window.location.search)
      if (params.get('submitted') === 'true') {
        Swal.fire({
          title: 'Thank You!',
          text: 'Your request has been successfully submitted. Our team will contact you shortly.',
          icon: 'success',
          confirmButtonColor: 'var(--fixpro-base, #0f766e)',
          confirmButtonText: 'Great!',
          customClass: {
            popup: 'rounded-4 shadow-lg border-0',
          }
        })

        // Clean up the URL parameter so refreshing doesn't trigger the modal again
        const cleanUrl = new URL(window.location.href)
        cleanUrl.searchParams.delete('submitted')
        window.history.replaceState({}, '', cleanUrl.pathname + cleanUrl.search)
      }
    }
  }, [defaultService])

  const [termsAccepted, setTermsAccepted] = useState(false)

  // Sync typing inputs with state
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    // For phone: strip non-digits and limit to 10 digits
    if (name === 'PhoneNumber_countrycode') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // 1. Mandatory fields check
    if (
      !formData.SingleLine.trim() ||
      !formData.PhoneNumber_countrycode.trim() ||
      !formData.Email.trim() ||
      formData.Dropdown3 === '-Select-'
    ) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all mandatory fields.',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    // 2. Mobile: must be exactly 10 digits
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

    // 3. Email format check
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

    // 4. Terms & Conditions check
    if (!termsAccepted) {
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'warning',
        title: 'Terms & Conditions',
        text: 'Please accept the Terms and Conditions to proceed.',
        confirmButtonColor: '#e74c3c',
      })
      return false
    }

    // All valid — form will POST naturally to Zoho's server
  }

  return (
    <div className="form-container">
      {/* Critical: action, method, and acceptCharset match Zoho configuration exactly */}
      <form
        name="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleFormSubmit}
        action="https://forms.zohopublic.in/shahcapserv/form/ServiceInterestForm1/formperma/GrkJuXH1-UmbYtfdKwHDr8tbvWmc4V8ryZ413nPgrQk/htmlRecords/submit"
        id="form"
      >
        {/* Hidden Tracking Configurations */}
        <input
          type="hidden"
          name="zf_referrer_name"
          value={formData.zf_referrer_name}
        />
        <input
          type="hidden"
          name="zf_redirect_url"
          value={formData.zf_redirect_url}
        />
        <input type="hidden" name="zc_gad" value={formData.zc_gad} />

        {/* Terms accepted hidden field — Zoho requires this */}
        <input
          type="hidden"
          name="zf_termsAndConditions_v1"
          value={termsAccepted ? '1' : ''}
        />

        {/* Name + Mobile Row */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="floatingInputName"
                name="SingleLine"
                className="form-control"
                maxLength={255}
                value={formData.SingleLine}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="floatingInputName" className="fw-bold">Name *</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                className="form-control"
                placeholder=" "
                id="floatingInputPhone"
                type="tel"
                name="PhoneNumber_countrycode"
                maxLength={10}
                inputMode="numeric"
                pattern="\d{10}"
                value={formData.PhoneNumber_countrycode}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInputPhone" className="fw-bold">Mobile * (10 digits)</label>
            </div>
          </div>
        </div>

        {/* Email + Service Row */}
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInputEmail"
                placeholder=" "
                type="email"
                name="Email"
                maxLength={255}
                value={formData.Email}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInputEmail" className="fw-bold">Email address *</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingServiceInterest"
                aria-label="Service Interest"
                name="Dropdown3"
                value={formData.Dropdown3}
                onChange={handleInputChange}
              >
                <option value="-Select-">-Select-</option>
                <option value="Mutual Funds">Mutual Funds &amp; SIF</option>
                <option value="Stocks and Securities">Stocks &amp; Securities</option>
                <option value="Gift City">Gift City</option>
                <option value="Fixed Deposit">Deposits &amp; Bonds</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Vehicle Insurance">Vehicle Insurance</option>
                <option value="Miscellaneous Insurance">Miscellaneous Insurance</option>
                <option value="NRI Corner">NRI Corner</option>
              </select>
              <label htmlFor="floatingServiceInterest" className="fw-bold">Service Interest *</label>
            </div>
          </div>
        </div>

        {/* Terms & Submit Button on the same line */}
        <div className="d-flex flex-row align-items-center justify-content-between flex-wrap gap-2 mb-3 mt-4">
          <div className="form-check m-0" style={{ fontSize: '13px', color: 'inherit' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="reachUsTerms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="reachUsTerms" style={{ color: 'inherit' }}>
              I agree to the{' '}
              <a href="/terms-and-condition" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                Terms &amp; Conditions
              </a>{' '}
              *
            </label>
          </div>

          <button type="submit" className="thm-btn" style={{ padding: '8px 20px', fontSize: '13px', width: 'auto' }}>
            Send Request
          </button>
        </div>
      </form>
    </div>
  )
}
