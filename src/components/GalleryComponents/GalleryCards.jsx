import React from 'react'
import './GalleryCards.css'

const GalleryCards = ({ images = [] }) => {
  return (
    <div className="gallery-cards">
      {images.map((item, index) => (
        <div key={item.id ?? index} className="gallery-card">
          {item.src ? (
            <div className="gallery-card-image">
              <img src={item.src} alt={item.alt ?? ''} />
            </div>
          ) : (
            <div className="gallery-card-placeholder" aria-hidden />
          )}
        </div>
      ))}
    </div>
  )
}

export default GalleryCards
