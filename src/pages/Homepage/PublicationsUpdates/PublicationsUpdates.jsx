import React from 'react';
import './PublicationsUpdates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PublicationsUpdates = () => {
    const items = [
        {
            type: "Publication",
            title: "Annual Development Report 2025",
            desc: "Comprehensive overview of infrastructure, welfare, and e-governance initiatives undertaken by the municipality.",
            date: "March 18, 2026",
            icon: "fa-book-open",
        },
        {
            type: "Update",
            title: "New Online Property Tax Portal Launched",
            desc: "Citizens can now pay property tax, download receipts, and track dues through the municipal portal.",
            date: "March 14, 2026",
            icon: "fa-globe",
        },
        {
            type: "Publication",
            title: "Citizen Service Handbook",
            desc: "A practical guide covering service timelines, application procedures, and grievance support channels.",
            date: "March 10, 2026",
            icon: "fa-file-lines",
        },
        {
            type: "Update",
            title: "Ward-Level Sanitation Drive Extended",
            desc: "The sanitation initiative has been expanded to additional wards with revised collection schedules.",
            date: "March 06, 2026",
            icon: "fa-bullhorn",
        },
        {
            type: "Publication",
            title: "Municipal Budget Summary 2025",
            desc: "A summarized breakdown of annual expenditure, development funding, and civic administration plans.",
            date: "February 28, 2026",
            icon: "fa-file-invoice-dollar",
        },
    ];

    return (
        <section className="pubux91_section_shell">
            <div className="pubux91_inner_wrap">
                <div className="pubux91_header_row">
                    <div className="pubux91_heading_block">
                        <span className="pubux91_heading_kicker">Resources</span>
                        <h2 className="pubux91_main_title">Publications & Updates</h2>
                        <p className="pubux91_main_subtitle">
                            Stay informed with the latest municipal publications, official
                            reports, and service updates for citizens.
                        </p>
                    </div>

                    {/* <a href="#!" className="pubux91_view_all_btn">
                        View All
                        <i className="fa-solid fa-arrow-right"></i>
                    </a> */}
                </div>

                <Swiper
                    spaceBetween={22}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 14,
                        },
                        576: {
                            slidesPerView: 1.2,
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
                            slidesPerView: 4,
                            spaceBetween: 22,
                        },
                    }}
                    className="pubux91_swiper_main"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <article className="pubux91_card_item">
                                <div className="pubux91_card_top_row">
                                    <span
                                        className={`pubux91_type_badge ${item.type === "Publication"
                                                ? "pubux91_type_badge_publication"
                                                : "pubux91_type_badge_update"
                                            }`}
                                    >
                                        {item.type}
                                    </span>

                                    <div className="pubux91_icon_box">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                </div>

                                <h3 className="pubux91_card_title">{item.title}</h3>
                                <p className="pubux91_card_desc">{item.desc}</p>

                                <div className="pubux91_card_footer">
                                    <div className="pubux91_date_row">
                                        <i className="fa-regular fa-calendar-days"></i>
                                        <span>{item.date}</span>
                                    </div>

                                    {/* <a href="#!" className="pubux91_read_more_link">
                                        Read More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a> */}
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PublicationsUpdates;