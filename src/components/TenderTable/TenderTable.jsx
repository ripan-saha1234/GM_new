import React from 'react'
import './TenderTable.css'

const EyeIcon = () => (
 <img src="/eye.svg" alt="Eye" />
)

const TenderTable = ({ tenders = [] }) => {
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
          {tenders.map((tender, index) => (
            <tr key={index}>
              <td>{tender.tenderDate}</td>
              <td>{tender.lastDate}</td>
              <td>{tender.tenderNo}</td>
              <td className="tender-table-name">{tender.name}</td>
              <td className="tender-table-view">
                <a href={tender.viewLink || '#'} className="tender-table-view-link" aria-label="View tender details">
                  <EyeIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TenderTable
