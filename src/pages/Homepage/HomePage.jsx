import React from 'react'
import './HomePage.css'
import HomeServiceSlider from '../../components/HomeComponents/HomeServiceSlider'
import ExploreSlider from '../../components/HomeComponents/ExploreSlider'
import WhatsNewNotices from '../../components/HomeComponents/WhatsNewNotices'
import MunicipalityGlance from '../../components/HomeComponents/MunicipalityGlance'
import Publications from '../../components/HomeComponents/Publications'
import Achievements from '../../components/HomeComponents/Achievements'
import Tourist from '../../components/HomeComponents/Tourist'
import ChairpersonMessage from './ChairpersonMessage/ChairpersonMessage'
import OurServicesSection from './OurServicesSection/OurServicesSection'
import ExploreEvents from './ExploreEvents/ExploreEvents'
import PublicationsUpdates from './PublicationsUpdates/PublicationsUpdates'
import AchievementsSection from './AchievementsSection/AchievementsSection'
import TouristSection from './TouristSection/TouristSection'

const HOME_SERVICES = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Service ${i + 1}`,
  icon: <img src="/eye.svg" alt="" />,
}))

const HOME_EVENTS = [
  { id: 1, title: 'Lorem Ipsum', description: 'Sed do eiusmod tempor', image: '/about_pic3.svg' },
  { id: 2, title: 'Lorem Ipsum', description: 'Sed do eiusmod tempor', image: '/about_pic4.svg' },
  { id: 3, title: 'Lorem Ipsum', description: 'Sed do eiusmod tempor', image: '/about_pic3.svg' },
  { id: 4, title: 'Lorem Ipsum', description: 'Sed do eiusmod tempor', image: '/about_pic4.svg' },
]

const tenderData = [
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const noticeData = [
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];
const publicationsData = [
  { image: "/publication1.svg" },
  { image: "/publication2.svg" },
  { image: "/publication1.svg" },
  { image: "/publication2.svg" },
  { image: "/publication1.svg" },
  { image: "/publication2.svg" },
];

const achievementsData = [
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },
  { image: "/achieve1.svg" },

];
const touristData = [
  { id: 1, image: "/tourist1.svg", title: "Tourist 1" },
  { id: 2, image: "/tourist2.svg", title: "Tourist 2" },
  { id: 3, image: "/tourist3.svg", title: "Tourist 5" },
  { id: 4, image: "/tourist1.svg", title: "Tourist 6" },
  { id: 5, image: "/tourist1.svg", title: "Tourist 7" },
  { id: 6, image: "/tourist1.svg", title: "Tourist 8" },
];
const HomePage = () => {
  return (
    <div className="home-page-container uni_container">
      {/* <section className="home-welcome">
        <h1 className="home-welcome__heading">Welcome to Gobordanga Municipality</h1>
        <div className="home-welcome__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <button className="home-welcome__btn">Read More</button>
      </section> */}
      <ChairpersonMessage />
      <WhatsNewNotices />
      <OurServicesSection />

      <MunicipalityGlance />

      {/* <HomeServiceSlider services={HOME_SERVICES} /> */}

      {/* <ExploreSlider events={HOME_EVENTS} /> */}
      <ExploreEvents/>
      {/* <Publications
        title="Publications & Updates"
        buttonText="View all"
        data={publicationsData}
      /> */}

      <PublicationsUpdates/>
      {/* <Achievements
        title="Our Achievements"
        buttonText="View all"
        data={achievementsData}
      /> */}
      <AchievementsSection/>
      {/* <Tourist
        title="Tourist Attractions"
        buttonText="View all"
        data={touristData}
        events={touristData}
      /> */}
      <TouristSection/>
    </div>
  )
}

export default HomePage
