import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ title, icon }) => {
  return (
    <article className="service-card">
      <div className="service-card-icon-area">
        {icon ?? null}
      </div>
      <p className="service-card-title">{title}</p>
    </article>
  )
}

export default ServiceCard
