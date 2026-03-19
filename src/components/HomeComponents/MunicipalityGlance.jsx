import React from 'react'
import './MunicipalityGlance.css'

const stats = [
  { id: 1, value: '20.50 sq km', label: 'Area' },
  { id: 2, value: '1,21,592', label: 'Population' },
  { id: 3, value: '30,232', label: 'Households' },
  { id: 4, value: '91.99%', label: 'Literacy Rate' },
]

const MunicipalityGlance = () => (
  <section className="glance-section">
    <h2 className="glance-title">Municipality at a Glance</h2>
    <div className="glance-grid">
      {stats.map((item) => (
        <div key={item.id} className="glance-card">
          <div className="glance-value">{item.value}</div>
          <div className="glance-label">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
)

export default MunicipalityGlance

