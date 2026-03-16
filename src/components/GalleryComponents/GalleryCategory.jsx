import React from 'react'
import './GalleryCategory.css'

const GalleryCategory = ({ categories = [], activeId, onSelect }) => {
  return (
    <nav className="gallery-category" aria-label="Gallery categories">
     
      <ul className="gallery-category-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              type="button"
              className={`gallery-category-item ${activeId === cat.id ? 'gallery-category-item--active' : ''}`}
              onClick={() => onSelect?.(cat.id)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GalleryCategory
