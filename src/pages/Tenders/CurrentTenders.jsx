import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import TenderTable from '../../components/TenderTable/TenderTable'
import './Tenders.css'

const CURRENT_TENDERS = [
  { tenderDate: '12/01/2024', lastDate: '25/01/2024', tenderNo: 'TN-2024-001', name: 'Lorem ipsum dolor sit amet, consectet.....', viewLink: '#' },
  { tenderDate: '15/01/2024', lastDate: '28/01/2024', tenderNo: 'TN-2024-002', name: 'Lorem ipsum dolor sit amet, consectet.....', viewLink: '#' },
  { tenderDate: '18/01/2024', lastDate: '30/01/2024', tenderNo: 'TN-2024-003', name: 'Lorem ipsum dolor sit amet, consectet.....', viewLink: '#' },
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
