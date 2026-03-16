import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Homepage/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactUs from './pages/Contact/ContactUs'
import BoardCouncil from './pages/Council/BoardCouncil'
import ChairmanCouncil from './pages/Council/ChairmanCouncil'
import CurrentProjects from './pages/Projects/CurrentProjects'
import PastProjects from './pages/Projects/PastProjects'
import CurrentTenders from './pages/Tenders/CurrentTenders'
import ArchievedTenders from './pages/Tenders/ArchievedTenders'
import Gallery from './pages/Gallery/Gallery'
import Services from './pages/Services/Services'
function App() {
  return (
   <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="board-council" element={<BoardCouncil />} />
          <Route path="chairman-council" element={<ChairmanCouncil />} />
          <Route path="current-projects" element={<CurrentProjects />} />
          <Route path="past-projects" element={<PastProjects />} />
          <Route path="current-tenders" element={<CurrentTenders />} />
          <Route path="archived-tenders" element={<ArchievedTenders />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
