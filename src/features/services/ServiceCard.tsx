import React from 'react'
import Swal from 'sweetalert2'

export interface ServiceCardProps {
  title: string
  text: string
  icon: string
  num?: string
  colorTheme?: 'blue' | 'indigo' | 'green' | 'purple' | 'rose' | 'orange' | 'emerald' | 'amber' | 'cyan' | 'teal'
}

const colorMap = {
  blue: '#0284c7',
  indigo: '#4f46e5',
  green: '#16a34a',
  purple: '#7c3aed',
  rose: '#e11d48',
  orange: '#ea580c',
  emerald: '#059669',
  amber: '#d97706',
  cyan: '#0891b2',
  teal: '#0d9488',
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, icon, num, colorTheme }) => {
  const isLengthy = text.length > 120

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault()
    const activeColor = (colorTheme && colorMap[colorTheme]) || 'var(--fixpro-base, #0f766e)'
    Swal.fire({
      title: title,
      text: text,
      iconHtml: `<i class="${icon}" style="color: ${activeColor}"></i>`,
      confirmButtonColor: activeColor,
      confirmButtonText: 'Close',
      customClass: {
        popup: 'rounded-4 shadow-lg border-0',
        icon: 'border-0 fs-1 mx-auto mt-2 text-theme-base',
      },
    })
  }

  const themeClass = colorTheme ? `mf-card--theme-${colorTheme}` : ''

  return (
    <div className={`mf-card ${themeClass}`}>
      {num && <div className="mf-process-num">{num}</div>}
      <div className="mf-card__header">
        <div className="mf-card__icon-wrapper">
          <i className={icon}></i>
        </div>
        <h3 className="mf-card__title">{title}</h3>
      </div>
      <div className="mf-card__body">
        <p className="mf-card__text">{text}</p>
        {isLengthy && (
          <a href="#" onClick={handleReadMore} className="mf-card__read-more">
            Read More<span className="icon-arrow-right"></span>
          </a>
        )}
      </div>
    </div>
  )
}
