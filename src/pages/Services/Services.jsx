import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './Services.css'

const SERVICES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Service ${i + 1}`,
  icon: <img src="/eye.svg" alt="Service Icon" />,
}))

const Services = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Services')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="services-page">
      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
