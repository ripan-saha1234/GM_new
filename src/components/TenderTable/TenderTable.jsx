import React, { useEffect, useMemo, useState } from 'react'
import './TenderTable.css'

const EyeIcon = () => (
 <img src="/eye.svg" alt="Eye" />
)

const TenderTable = ({ tenders = [] }) => {
  const [selectedTender, setSelectedTender] = useState(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedTender(null)
    }

    if (selectedTender) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedTender])

  const tenderRows = useMemo(
    () => tenders.map((tender, index) => ({ ...tender, id: tender.tenderNo || index })),
    [tenders]
  )

  return (
    <div className="tender-table-wrapper">
      <table className="tender-table">
        <thead>
          <tr>
            <th>Tender Date</th>
            <th>Last Date</th>
            <th>Tender No.</th>
            <th>Name</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {tenderRows.map((tender) => (
            <tr key={tender.id}>
              <td>{tender.tenderDate}</td>
              <td>{tender.lastDate}</td>
              <td>{tender.tenderNo}</td>
              <td className="tender-table-name">{tender.name}</td>
              <td className="tender-table-view">
                <button
                  type="button"
                  className="tender-table-view-link"
                  aria-label={`View details for ${tender.tenderNo}`}
                  onClick={() => setSelectedTender(tender)}
                >
                  <EyeIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTender && (
        <div className="tender-modal-overlay" onClick={() => setSelectedTender(null)} role="presentation">
          <div
            className="tender-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tender-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="tender-modal-close"
              onClick={() => setSelectedTender(null)}
              aria-label="Close tender details"
            >
              &times;
            </button>

            <div className="tender-modal-header">
              <p className="tender-modal-label">Tender Details</p>
              <h3 id="tender-modal-title">{selectedTender.tenderNo}</h3>
            </div>

            <div className="tender-modal-content">
              <div className="tender-modal-row">
                <span>Tender Date</span>
                <strong>{selectedTender.tenderDate}</strong>
              </div>
              <div className="tender-modal-row">
                <span>Last Date</span>
                <strong>{selectedTender.lastDate}</strong>
              </div>
              <div className="tender-modal-row">
                <span>Name</span>
                <strong>{selectedTender.name}</strong>
              </div>
              <div className="tender-modal-row">
                <span>Description</span>
                <strong>{selectedTender.description || 'No additional details available.'}</strong>
              </div>
              <div className="tender-modal-row">
                <span>Department</span>
                <strong>{selectedTender.department || 'General'}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TenderTable
