import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Publications.css";

export default function Publications({ title, buttonText, data = [] }) {
  return (
    <section className="publications-section">

      {/* Header */}
      <div className="publications-header">
        <h2>{title}</h2>
        <button className="view-btn">{buttonText}</button>
      </div>

      {/* Slider */}
      <div className="publications-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          loop={data.length >= 3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="publication-card">
                <img src={item.image} alt="publication" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}