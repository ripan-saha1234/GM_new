import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import TenderTable from '../../components/TenderTable/TenderTable'
import './Tenders.css'

const CURRENT_TENDERS = [
  {
    tenderDate: '12/01/2024',
    lastDate: '25/01/2024',
    tenderNo: 'TN-2024-001',
    name: 'Supply and Installation of LED Street Lights (Ward 1-5)',
    description: 'Procurement, installation and 1-year maintenance of energy-efficient LED street lighting units.',
    department: 'Lighting Department',
  },
  {
    tenderDate: '15/01/2024',
    lastDate: '28/01/2024',
    tenderNo: 'TN-2024-002',
    name: 'Road Repair and Bituminous Overlay Work (Phase II)',
    description: 'Restoration of damaged municipal roads including overlay work and lane marking in priority stretches.',
    department: 'Roads Department',
  },
  {
    tenderDate: '18/01/2024',
    lastDate: '30/01/2024',
    tenderNo: 'TN-2024-003',
    name: 'Drainage Cleaning and Desilting Before Monsoon',
    description: 'Cleaning and desilting of major drains, culverts and feeder channels to improve water discharge.',
    department: 'Sewerage and Drainage',
  },
]

const CurrentTenders = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Current Tenders')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="tenders-page">
      <TenderTable tenders={CURRENT_TENDERS} />
    </div>
  )
}

export default CurrentTenders
