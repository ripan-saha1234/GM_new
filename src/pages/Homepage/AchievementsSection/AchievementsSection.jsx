import React from "react";
import "./AchievementsSection.css";

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Smart City Initiative",
            year: "2025",
            description: "Digital infrastructure upgrade across all wards",
            icon: "fa-solid fa-medal",
        },
        {
            title: "Swachh Bharat Award",
            year: "2024",
            description: "Recognized for excellence in sanitation",
            icon: "fa-solid fa-medal",
        },
        {
            title: "Green Municipality",
            year: "2024",
            description: "50,000+ trees planted under green drive",
            icon: "fa-solid fa-medal",
        },
        {
            title: "Digital Governance",
            year: "2023",
            description: "100% online service delivery achieved",
            icon: " fa-solid fa-medal",
        },
        {
            title: "Road Development",
            year: "2023",
            description: "120 km roads constructed/repaired",
            icon: "fa-solid fa-medal",
        },
        {
            title: "Water for All",
            year: "2022",
            description: "Clean water to 98% households",
            icon: "fa-solid fa-medal",
        },
    ];

    return (
        <section className="achvmx62_section_shell">
            <div className="achvmx62_inner_wrap">
                <div className="achvmx62_header_row">
                    <div className="achvmx62_heading_block">
                        <span className="achvmx62_heading_kicker">MILESTONES</span>
                        <h2 className="achvmx62_main_title">Our Achievements</h2>
                    </div>

                    <a href="#!" className="achvmx62_view_all_link">
                        View All
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="achvmx62_cards_grid">
                    {achievements.map((item, index) => (
                        <div className="achvmx62_card_item" key={index}>
                            <div className="achvmx62_icon_box">
                                <i className={`fa-regular ${item.icon}`}></i>
                            </div>

                            <div className="achvmx62_card_content">
                                <div className="achvmx62_title_row">
                                    <h3 className="achvmx62_card_title">{item.title}</h3>
                                    <span className="achvmx62_card_year">{item.year}</span>
                                </div>

                                <p className="achvmx62_card_desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;