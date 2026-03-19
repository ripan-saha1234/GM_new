import React from 'react'
import './WhatsNewNotices.css'

const notices = [
  {
    id: 1,
    title: 'Water supply disruption on March 15–16',
    date: '2026-03-10',
    tag: 'General',
    tagVariant: 'general',
  },
  {
    id: 2,
    title: 'Property tax payment deadline extended',
    date: '2026-03-08',
    tag: 'General',
    tagVariant: 'general',
  },
  {
    id: 3,
    title: 'New waste management guidelines',
    date: '2026-03-05',
    tag: 'Awareness',
    tagVariant: 'awareness',
  },
  {
    id: 4,
    title: 'Recruitment for Junior Engineer posts',
    date: '2026-03-03',
    tag: 'Employment',
    tagVariant: 'employment',
  },
  {
    id: 5,
    title: 'e‑Tender for road construction Phase II',
    date: '2026-03-01',
    tag: 'Tender',
    tagVariant: 'tender',
  },
]

const quickLinks = [
  'Citizen’s Charter',
  'Service Rates',
  'Feedback',
  'Grievance',
]

const WhatsNewNotices = () => (
  <section className="whatsnew-section">
    <div className="whatsnew-layout">
      <div className="whatsnew-left">
        <div className="whatsnew-header">
          <h2 className="whatsnew-title">What&apos;s New / Notices</h2>
          <button className="whatsnew-viewall" type="button">
            View All →
          </button>
        </div>

        <div className="whatsnew-list">
          {notices.map((item) => (
            <article key={item.id} className="whatsnew-card">
              <div className="whatsnew-card-icon">
                <img src="/notice-icon.svg" alt="" aria-hidden="true" />
              </div>
              <div className="whatsnew-card-main">
                <h3 className="whatsnew-card-title">{item.title}</h3>
                <div className="whatsnew-card-meta">
                  <span className="whatsnew-card-date">{item.date}</span>
                  <span className={`whatsnew-card-tag whatsnew-card-tag--${item.tagVariant}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="whatsnew-right">
        <div className="whatsnew-newsletter">
          <h3 className="whatsnew-newsletter-title">e‑Newsletter</h3>
          <p className="whatsnew-newsletter-text">
            Stay updated with our periodic newsletters
          </p>
          <button className="whatsnew-newsletter-btn" type="button">
            View Newsletters
          </button>
        </div>

        <div className="whatsnew-quicklinks">
          <h3 className="whatsnew-quicklinks-title">Quick Links</h3>
          <div className="whatsnew-quicklinks-grid">
            {quickLinks.map((label) => (
              <button key={label} className="whatsnew-quicklink-btn" type="button">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhatsNewNotices

