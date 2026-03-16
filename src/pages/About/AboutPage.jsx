import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import './AboutPage.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutPage = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('About Us')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  const chairmanData = [
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Moumita Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic4.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "about_pic4.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic4.svg",
    },
  ];
  return (
    <div className="about-page">
      {/* Section 1: About Gobordanga Municipality - image left, text right */}
      <section className="about-section about-section--heading-right">
        <div className="about-content">

          <div className="about-image-wrapper">
          <img src="/about_pic1.svg" alt="..." className="about-image" /> when ready
            <div className="about-image-placeholder" aria-hidden />
          </div>
          <div className="about-text">
          <h2 className="about-heading">About Gobordanga Municipality</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      {/* Section 2: History - text left, image right */}
      <section className="about-section about-section--heading-right">
        <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">History of Gobordanga Municipality</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="about-image-wrapper">
          <img src="/about_pic2.svg" alt="..." className="about-image" /> when ready
            <div className="about-image-placeholder" aria-hidden />
          </div>
          
        </div>
      </section>

      {/* Section 3: Chairman - image left, text right */}
      <section className="about-section about-section--heading-right">
        <div className="about-content">

          <div className="about-image-wrapper">
          <img src="/about_pic3.svg" alt="..." className="about-image" /> when ready
            <div className="about-image-placeholder" aria-hidden />
          </div>
          <div className="about-text">
          <h2 className="about-heading">Sankar Dutta- Chairman</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Vice-chairman - text left, image right */}
      <section className="about-section about-section--heading-right">
        <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">Sankar Dutta- Vice-chairman</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="about-image-wrapper">
          <img src="/about_pic4.svg" alt="..." className="about-image" /> when ready
            <div className="about-image-placeholder" aria-hidden />
          </div>
          
        </div>
      </section>
      <div className="chairman-slider">
  <Swiper
    modules={[Autoplay]}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    speed={800}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {chairmanData.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="chairman-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.designation}</p>
          <span>{item.phone}</span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </div>
  )
}

export default AboutPage
