import React from 'react'
import './NewUpdate.css'

const NewUpdate = () => {
    return (
      <div className="new-update">
        <div className="update-title">
          <span className="update-title-icon">📢</span>
          <span>New Updates</span>
        </div>

        <div className="update-marquee">
          <marquee>
            Property tax payment deadline extended to March 31, 2026
            &nbsp; • &nbsp;
            Water supply disruption on March 15–16 due to maintenance
            &nbsp; • &nbsp;
            New waste management guidelines effective from April 1
            &nbsp; • &nbsp;
            e‑Tender for road construction published on official portal
          </marquee>
        </div>
      </div>
    )
}

export default NewUpdate