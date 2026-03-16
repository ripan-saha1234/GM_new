import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import ServiceCard from '../ServiceCard/ServiceCard'
import 'swiper/css'
import './HomeServiceSlider.css'

const HomeServiceSlider = ({ services = [] }) => {
  return (
    <section className="home-services-section">
      <div className="home-services-header">
        <h2 className="home-services-heading">Services.</h2>
        <Link to="/services" className="home-services-view-all">
          View all
        </Link>
      </div>
      <div className="home-services-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={services.length > 4}
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
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard
                title={service.title}
                icon={service.icon ?? null}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeServiceSlider
