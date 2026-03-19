import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  const closeMenu = () => {
    setOpenDropdown(null)
    setMenuOpen(false)
  }

  const ChevronIcon = () => (
    <span className="nav-chevron" aria-hidden="true">
      <img src="/chevron-down.svg" alt="Chevron Icon" />
    </span>
  )

  return (
    <div className="navbar" ref={navRef}>
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.svg" alt="Gobardanga Municipality logo" />
          <div className="logo-text">
            <div className="logo-title">Gobardanga Municipality</div>
            <div className="logo-subtitle">Estb. 1870 · North 24 Parganas</div>
          </div>
        </div>

        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
        </button>

        {menuOpen && (
          <div
            className="nav-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
          </li>

          <li className={`nav-item-dropdown ${openDropdown === 'notice' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('notice')}
              aria-expanded={openDropdown === 'notice'}
              aria-haspopup="true"
            >
              Notice Board
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/notice-board" onClick={closeMenu}>All Notices</Link>
              <Link to="/notice-board/tenders" onClick={closeMenu}>Tenders</Link>
              <Link to="/notice-board/announcements" onClick={closeMenu}>Announcements</Link>
            </div>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>

          <li>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
          </li>

          <li>
            <Link to="/finance" onClick={closeMenu}>Finance</Link>
          </li>

          <li>
            <Link to="/councillors" onClick={closeMenu}>Councillors</Link>
          </li>

          <li>
            <Link to="/tourism" onClick={closeMenu}>Tourism</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
