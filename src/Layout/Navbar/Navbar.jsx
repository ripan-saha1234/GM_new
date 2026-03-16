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
          <img src="/logo.svg" alt="Logo" />
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
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>

          <li className={`nav-item-dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('about')}
              aria-expanded={openDropdown === 'about'}
              aria-haspopup="true"
            >
              About us
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/about" onClick={closeMenu}>About Us</Link>
              <Link to="/about/team" onClick={closeMenu}>Our Team</Link>
              <Link to="/about/history" onClick={closeMenu}>History</Link>
            </div>
          </li>

          <li className={`nav-item-dropdown ${openDropdown === 'departments' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('departments')}
              aria-expanded={openDropdown === 'departments'}
              aria-haspopup="true"
            >
              Departments
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/departments" onClick={closeMenu}>All Departments</Link>
              <Link to="/departments/administration" onClick={closeMenu}>Administration</Link>
              <Link to="/departments/planning" onClick={closeMenu}>Planning</Link>
            </div>
          </li>

          <li className={`nav-item-dropdown ${openDropdown === 'projects' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('projects')}
              aria-expanded={openDropdown === 'projects'}
              aria-haspopup="true"
            >
              Projects
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/projects" onClick={closeMenu}>All Projects</Link>
              <Link to="/projects/ongoing" onClick={closeMenu}>Ongoing</Link>
              <Link to="/projects/completed" onClick={closeMenu}>Completed</Link>
            </div>
          </li>

          <li className={`nav-item-dropdown ${openDropdown === 'download' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('download')}
              aria-expanded={openDropdown === 'download'}
              aria-haspopup="true"
            >
              Download
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/download" onClick={closeMenu}>All Downloads</Link>
              <Link to="/download/latest" onClick={closeMenu}>Latest</Link>
              <Link to="/download/old" onClick={closeMenu}>Old</Link>
            </div>
          </li>
          <li className={`nav-item-dropdown ${openDropdown === 'gallery' ? 'open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown('gallery')}
              aria-expanded={openDropdown === 'gallery'}
              aria-haspopup="true"
            >
              Gallery
              <ChevronIcon />
            </button>
            <div className="nav-dropdown">
              <Link to="/gallery" onClick={closeMenu}>All Galleries</Link>
              <Link to="/gallery/latest" onClick={closeMenu}>Latest</Link>
              <Link to="/gallery/old" onClick={closeMenu}>Old</Link>
            </div>
          </li>
          <li><Link to="/contact" onClick={closeMenu}>Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
