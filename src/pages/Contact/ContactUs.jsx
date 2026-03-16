import React, { useEffect } from 'react'
import InputField from "../../components/Input/InputField";
import TextAreaField from "../../components/Input/TextAreaField";
import './ContactUs.css'
import { usePageContext } from '../../context/context'

function Contact() {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Contact Us')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <>
    <section className="contact-section">

      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2 className="contact-left-heading">Get in touch</h2>
        <p className="contact-left-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden>
           <img src="/location-icon.svg" alt="" srcset="" />
          </div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-card-detail">No. 12/4, Green Park Lane, Gobordanga, North 24 Parganas, Pin- 743248,</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden>
           <img src="/email-icon.svg" alt="" srcset="" />
          </div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-detail">contact@gobordanga.com</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon" aria-hidden>
           <img src="/call-icon.svg" alt="" srcset="" />
          </div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-detail">+91 8764983648</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <h2>Send us an message</h2>

        <form className="contact-form">

          <InputField
            label="Name"
            required
            placeholder="Enter your name"
          />

          <div className="two-col">
            <InputField
              label="Email"
              required
              type="email"
              placeholder="Enter your email"
            />

            <InputField
              label="Phone number"
              placeholder="Enter your phone number"
            />
          </div>

          <TextAreaField
            label="Message"
            required
            placeholder="Type your message"
          />

          <button className="submit-btn">Submit</button>

        </form>
      </div>
     
    </section>
    <div className="map-container">
     <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.1083399688755!2d88.75133847476583!3d22.872455921914597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b30bf368c9d3%3A0xe46ec9a5b704f194!2sGobardanga%20Municipality!5e0!3m2!1sen!2sin!4v1772084593968!5m2!1sen!2sin"
     width="100%"
     height="450"
     style={{ border: 0 }}
     allowFullScreen=""
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
   />
   </div>
   </>
  );
}

export default Contact;