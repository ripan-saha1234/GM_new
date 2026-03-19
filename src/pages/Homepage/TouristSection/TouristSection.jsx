import React from "react";
import "./TouristSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const TouristSection = () => {
    const places = [
        {
            title: "Gobardanga Rajbari",
            description:
                "A historic royal palace reflecting Bengal’s architectural heritage and cultural legacy.",
            location: "Central Gobardanga",
            image:
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Jamuna River Ghat",
            description:
                "A peaceful riverside destination popular for scenic views, walks, and local gatherings.",
            location: "Eastern Gobardanga",
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Shiva Temple Complex",
            description:
                "An ancient temple site known for spiritual significance and traditional Bengali architecture.",
            location: "Old Town Area",
            image:
                "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Municipal Park & Garden",
            description:
                "A family-friendly green space with walking trails, open lawns, and landscaped gardens.",
            location: "Near Town Center",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Heritage Market Area",
            description:
                "Traditional market streets offering local flavors, handicrafts, and cultural vibrancy.",
            location: "Main Bazaar Road",
            image:
                "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
        },
    ];

    return (
        <section className="trvplx66_section_shell">
            <div className="trvplx66_inner_wrap">
                <div className="trvplx66_header_row">
                    <div className="trvplx66_heading_block">
                        <span className="trvplx66_heading_kicker">Tourism</span>
                        <h2 className="trvplx66_main_title">Tourist Places to Visit</h2>
                        <p className="trvplx66_main_subtitle">
                            Explore the cultural landmarks, scenic attractions, and heritage
                            destinations that make Gobardanga special.
                        </p>
                    </div>

                    <Link to="/tourism" className="trvplx66_view_all_btn">
                        View All
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

                <Swiper
                    spaceBetween={22}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 14,
                        },
                        576: {
                            slidesPerView: 1.15,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 22,
                        },
                    }}
                    className="trvplx66_swiper_main"
                >
                    {places.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="trvplx66_place_card_item">
                                <div className="trvzx81_tourism_card_image_mock">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div className="trvplx66_place_content_box">
                                    <h3 className="trvplx66_place_title">{item.title}</h3>
                                    <p className="trvplx66_place_desc">{item.description}</p>

                                    <div className="trvplx66_place_location_row">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TouristSection;