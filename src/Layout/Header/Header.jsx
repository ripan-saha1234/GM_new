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
  const currentLabel =
    pageTitle ||
    location.pathname
      .split('/')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ') ||
    'Page'

  return (
    <header className="header">
      <div
        className={`hero-section ${isHomePage ? 'hero-home' : 'hero-inner'}`}
        style={!isHomePage ? { backgroundImage: `url(${headerBackground})` } : undefined}
      >
        <Navbar />
        {isHomePage ? (
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Gobardanga</h1>
            <p className="hero-subtitle">
              Committed to transparent governance and citizen welfare since 1870
            </p>
            <div className="hero-search">
              <input
                type="text"
                placeholder="Search services, notices..."
                aria-label="Search services and notices"
              />
            </div>
          </div>
        ) : (
          <div className="hero-inner-overlay">
            <div className="hero-inner-container">
              <h1 className="hero-inner-title">{currentLabel}</h1>
              <div className="hero-breadcrumb">
                <span className="hero-breadcrumb-root">Home</span>
                <span className="hero-breadcrumb-separator">›</span>
                <span className="hero-breadcrumb-current">{currentLabel}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {isHomePage && <NewUpdate />}
    </header>
  )
}

export default Header
