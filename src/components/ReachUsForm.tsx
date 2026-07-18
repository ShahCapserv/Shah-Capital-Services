import React from 'react'
import { ZohoServiceForm } from './convert'

interface ReachUsFormProps {
  title?: string
  showCard?: boolean
}

export const ReachUsForm: React.FC<ReachUsFormProps> = ({
  title = 'Contact Us',
  showCard = true,
}) => {
  const content = (
    <div className="reach-us-form-inner">
      {title && (
        <>
          <h3 className="card-title fw-bold" style={{ marginBottom: '15px' }}>{title}</h3>
          <hr style={{ borderColor: 'rgba(var(--fixpro-white-rgb), 0.1)', marginBottom: '20px' }} />
        </>
      )}
      <ZohoServiceForm />
    </div>
  )

  if (showCard) {
    return (
      <div className="card">
        <div className="card-body">{content}</div>
      </div>
    )
  }

  return content
}

interface ReachUsModalProps {
  defaultService?: string
}

export const ReachUsModal: React.FC<ReachUsModalProps> = ({ defaultService }) => {
  return (
    <div
      className="modal fade"
      id="reachUsModal"
      tabIndex={-1}
      aria-labelledby="reachUsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ backgroundColor: 'var(--fixpro-white)', border: 'none', borderRadius: '15px' }}>
          <div className="modal-header" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <h5 className="modal-title fw-bold" id="reachUsModalLabel" style={{ color: 'var(--fixpro-black)' }}>
              Contact Us
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <ZohoServiceForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReachUsForm
