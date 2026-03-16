import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import NewUpdate from '../../components/NewUpdate/NewUpdate'
import { usePageContext } from '../../context/context'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const { pageTitle, headerBackground } = usePageContext()
  const isHomePage = location.pathname === '/'

  return (
    <header className="header">
      <div
        className={`hero-section ${isHomePage ? 'hero-home' : 'hero-inner'}`}
        style={!isHomePage ? { backgroundImage: `url(${headerBackground})` } : undefined}
      >
        <Navbar />
        {!isHomePage && (
          <div className="hero-inner-overlay">
            <h1 className="hero-inner-title">{pageTitle || 'Page'}</h1>
          </div>
        )}
      </div>
      {isHomePage && <NewUpdate />}
    </header>
  )
}

export default Header
