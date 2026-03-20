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
import Accounts from './pages/Departments/Accounts/Accounts'
import Education from './pages/Departments/Education/Education'
import Law from './pages/Departments/Law/Law'
import License from './pages/Departments/License/License'
import Health from './pages/Departments/Health/Health'
import Lighting from './pages/Departments/Lighting/Lighting'
import DisasterManagement from './pages/Departments/DisasterManagement/DisasterManagement'
import Roads from './pages/Departments/Roads/Roads'
import SewerageDrainage from './pages/Departments/SewerageDrainage/SewerageDrainage'
import WaterSupply from './pages/Departments/WaterSupply/WaterSupply'
import InformationTechnology from './pages/Departments/InformationTechnology/InformationTechnology'
import ParksGardens from './pages/Departments/ParksGardens/ParksGardens'
import PlanningDevelopment from './pages/Departments/PlanningDevelopment/PlanningDevelopment'
import ExCouncillors from './pages/Council/CouncillorPage/HistoricalArchive'
import HistoricalArchive from './pages/Council/CouncillorPage/HistoricalArchive'
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
          <Route path='councillors' element={<CouncillorPage />} />
          <Route path='historical-archive' element={<HistoricalArchive/>}/>
          <Route path='key-persons' element={<OtherKeyPersons />} />
          {/* <Route path="current-projects" element={<CurrentProjects />} />
          <Route path="past-projects" element={<PastProjects />} /> */}
          <Route path='gallery' element={<AllEventsPage />} />
          <Route path='projects' element={<Projects />} />
          <Route path="current-tenders" element={<CurrentTenders />} />
          <Route path="archived-tenders" element={<ArchievedTenders />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="services" element={<Services />} />
          <Route path='tourism' element={<Tourism />} />
          <Route path='notice-board' element={<NoticeBoard />} />
          <Route path='departments'>
            <Route path='finance' element={<FinancePage />} />
            <Route path='accounts' element={<Accounts />} />
            <Route path='education' element={<Education />} />
            <Route path='law' element={<Law />} />
            <Route path='license' element={<License />} />
            <Route path='health' element={<Health />} />
            <Route path='lighting' element={<Lighting />} />
            <Route path='disaster-management' element={<DisasterManagement/>}/>
            <Route path='roads' element={<Roads/>}/>
            <Route path='sewerage-drainage' element={<SewerageDrainage/>}/>
            <Route path='water-supply' element={<WaterSupply/>}/>
            <Route path='information-technologoy' element={<InformationTechnology/>}/>
            <Route path='parks-gardens' element={<ParksGardens/>}/>
            <Route path='planning-development' element={<PlanningDevelopment/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
