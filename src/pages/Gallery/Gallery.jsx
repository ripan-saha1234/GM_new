import React, { useEffect, useState } from 'react'
import { usePageContext } from '../../context/context'
import GalleryCategory from '../../components/GalleryComponents/GalleryCategory'
import GalleryCards from '../../components/GalleryComponents/GalleryCards'
import './Gallery.css'

const GALLERY_CATEGORIES = [
  { id: 'about-us', label: 'About us' },
  { id: 'arts-culture', label: 'Arts & Culture' },
  { id: 'cleanliness', label: 'Cleanliness' },
  { id: 'dynamics', label: 'Dynamics' },
  { id: 'finance', label: 'Finance' },
  { id: 'food', label: 'Food' },
  { id: 'health', label: 'Health' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resources', label: 'Resources' },
]

const GALLERY_IMAGES = [
  { id: 1, src: '/gallary1.svg', alt: 'Gallery 1' },
  { id: 2, src: '/gallary2.svg', alt: 'Gallery 2' },
  { id: 3, src: '/gallary3.svg', alt: 'Gallery 3' },
  { id: 4, src: '/gallary1.svg', alt: 'Gallery 4' },
  { id: 5, src: '/gallary2.svg', alt: 'Gallery 5' },
  { id: 6, src: '/gallary3.svg', alt: 'Gallery 6' },
  { id: 7, src: '/gallary1.svg', alt: 'Gallery 7' },
  { id: 8, src: '/gallary2.svg', alt: 'Gallery 8' },
  { id: 9, src: '/gallary3.svg', alt: 'Gallery 9' },
  { id: 10, src: '/gallary1.svg', alt: 'Gallery 10' },
  { id: 11, src: '/gallary2.svg', alt: 'Gallery 11' },
  { id: 12, src: '/gallary3.svg', alt: 'Gallery 12' },
]

const Gallery = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()
  const [activeCategory, setActiveCategory] = useState('about-us')

  useEffect(() => {
    updatePageTitle('Gallery')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="gallery-page">
      <GalleryCategory
        mainTitle="Alumni"
        categories={GALLERY_CATEGORIES}
        activeId={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className="gallery-content">
        <GalleryCards images={GALLERY_IMAGES} />
      </div>
    </div>
  )
}

export default Gallery
