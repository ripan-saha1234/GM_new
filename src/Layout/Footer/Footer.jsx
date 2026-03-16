import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Sed do eiusmod tempor incididunt</a></li>
            <li><a href="#">Sed do eiusmod tempor incididunt</a></li>
            <li><a href="#">Sed do eiusmod tempor incididunt</a></li>
            <li><a href="#">Sed do eiusmod tempor incididunt</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-contact">
            <p className="footer-address">
              No. 12/4, Green Park Lane, Gobordanga, North 24 Parganas, Pin-743248,
            </p>
            <p><a href="tel:+918764983648">+91 8764983648</a></p>
            <p><a href="mailto:contact@gobordanga.com">contact@gobordanga.com</a></p>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © Copyright 2024, All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
