import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <img src="/footer_logo_new.png" alt="Gobardanga Municipality logo" />
            <div className="footer-logo-text">
              <div className="footer-logo-title">Gobardanga Municipality</div>
              <div className="footer-logo-subtitle">Estb. 1870</div>
            </div>
          </div>
          <p className="footer-brand-text">
            Serving citizens of North 24 Parganas with dedication and transparency.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/departments/finance">Finance</Link></li>
            <li><Link to="/councillors">Councillors</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/contact">Submit Grievance</Link></li>
            <li><Link to="/contact">Feedback</Link></li>
            {/* <li><Link to="/newsletter">e‑Newsletter</Link></li> */}
            <li><Link to="/notice-board">Notice Board</Link></li>
            <li><Link to="/tourism">Tourist Attractions</Link></li>
            <li><Link to="/services">Service Rates</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-contact">
            <p className="footer-contact-row">
              <span className="footer-contact-icon">📍</span>
              <span>
                Municipality Office, Main Road,
                <br />
                Gobardanga, North 24 Parganas
              </span>
            </p>
            <p className="footer-contact-row">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:+919999999999">+91 XXXXX-XXXXX</a>
            </p>
            <p className="footer-contact-row">
              <span className="footer-contact-icon">✉️</span>
              <a href="mailto:info@gobardangamunicipality.in">info@gobardangamunicipality.in</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © 2026 Gobardanga Municipality. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
