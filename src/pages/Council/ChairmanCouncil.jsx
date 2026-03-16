import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import CouncilList from '../../components/CouncilList/CouncilList'
import './Council.css'

const CHAIRMAN_COUNCIL_MEMBERS = [
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Mounita Chatterjee', role: 'Founder', phone: '+91 98765 43210', image: '/about_pic4.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic4.svg' },
  { name: 'Mounita Chatterjee', role: 'Founder', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic4.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Mounita Chatterjee', role: 'Founder', phone: '+91 98765 43210', image: '/about_pic4.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic4.svg' },
  { name: 'Mounita Chatterjee', role: 'Founder', phone: '+91 98765 43210', image: '/about_pic3.svg' },
  { name: 'Subhajit Chatterjee', role: 'Councillor', phone: '+91 98765 43210', image: '/about_pic4.svg' },
]

const ChairmanCouncil = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Chairman – in – Councils ')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    <div className="council-page">
      <CouncilList members={CHAIRMAN_COUNCIL_MEMBERS} />
    </div>
  )
}

export default ChairmanCouncil
