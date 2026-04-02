import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import TenderTable from '../../components/TenderTable/TenderTable'
import './Tenders.css'

const ARCHIVED_TENDERS = [
  {
    tenderDate: '12/11/2023',
    lastDate: '26/11/2023',
    tenderNo: 'AT-2023-041',
    name: 'Public Park Renovation and Seating Upgrade',
    description: 'Renovation of walking paths, seating, landscaping and lighting in municipal public parks.',
    department: 'Parks and Gardens',
  },
  {
    tenderDate: '05/09/2023',
    lastDate: '20/09/2023',
    tenderNo: 'AT-2023-027',
    name: 'Municipal Office Network and CCTV Maintenance',
    description: 'Annual maintenance of LAN infrastructure, network racks, CCTV cameras and backup systems.',
    department: 'Information Technology',
  },
  {
    tenderDate: '22/07/2023',
    lastDate: '08/08/2023',
    tenderNo: 'AT-2023-013',
    name: 'Water Pump Station Motor Servicing and Repair',
    description: 'Repair and servicing of pumping station motors, control panels and connected electrical components.',
    department: 'Water Supply',
  },
]

const ArchievedTenders = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Archived Tenders')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="tenders-page">
      <TenderTable tenders={ARCHIVED_TENDERS} />
    </div>
  )
}

export default ArchievedTenders
