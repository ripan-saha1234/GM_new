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
import Tourism from './pages/Tourism/Tourism'
import Projects from './pages/Projects/Projects'
import NoticeBoard from './pages/NoticeBoard/NoticeBoard'
import FinancePage from './pages/Departments/FinancePage/FinancePage'
import PublicSupportPage from './pages/Contact/PublicSupportPage'
import CouncillorPage from './pages/Council/CouncillorPage/CouncillorPage'
import OtherKeyPersons from './pages/Council/CouncillorPage/OtherKeyPersons'
import AllEventsPage from './pages/AllEventsPage/AllEventsPage'
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<PublicSupportPage />} />
          <Route path="board-council" element={<BoardCouncil />} />
          <Route path="chairman-council" element={<ChairmanCouncil />} />
          <Route path='councillors' element={<CouncillorPage/>}/>
          <Route path='key-persons' element={<OtherKeyPersons/>}/>
          {/* <Route path="current-projects" element={<CurrentProjects />} />
          <Route path="past-projects" element={<PastProjects />} /> */}
          <Route path='gallery' element={<AllEventsPage/>}/>
          <Route path='projects' element={<Projects />} />
          <Route path="current-tenders" element={<CurrentTenders />} />
          <Route path="archived-tenders" element={<ArchievedTenders />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="services" element={<Services />} />
          <Route path='tourism' element={<Tourism />} />
          <Route path='notice-board' element={<NoticeBoard />} />
          <Route path='departments'>
            <Route path='finance' element={<FinancePage/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
