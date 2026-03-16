import React from 'react'
import './CouncilList.css'

const CouncilList = ({ members = [] }) => {
  return (
    <div className="council-list">
      {members.map((member, index) => (
        <article key={index} className="council-card">
          <div className="council-card-image-wrapper">
            {member.image && member.image.trim() !== '' ? (
              <img src={member.image} alt={member.name} className="council-card-image" />
            ) : (
              <div className="council-card-image-placeholder" aria-hidden />
            )}
          </div>
          <div className="council-card-info">
            <h3 className="council-card-name">{member.name}</h3>
            <p className="council-card-role">{member.role}</p>
            <span className="council-card-phone">Phone: {member.phone}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CouncilList
