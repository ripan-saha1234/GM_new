import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './ExploreSlider.css'

const ExploreSlider = ({ events = [] }) => {
  return (
    <section className="explore-events-section">
      <div className="explore-events-header">
        <h2 className="explore-events-heading">Explore our Events</h2>
        <Link to="/events" className="explore-events-view-all">
          View all
        </Link>
      </div>
      <div className="explore-events-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={events.length >= 3}
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
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <article className="explore-event-card">
                <div className="explore-event-card-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <h3 className="explore-event-card-title">{event.title}</h3>
                <p className="explore-event-card-desc">{event.description}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExploreSlider
