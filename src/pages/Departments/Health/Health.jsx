import React from "react";
import "./Health.css";

const Health = () => {
    const points = [
        "Public health camps and awareness programs",
        "Sanitation and hygiene monitoring support",
        "Vector control and seasonal prevention campaigns",
        "Urban health coordination and citizen outreach",
    ];

    return (
        <section className="hlthx55_page_shell">
            <div className="hlthx55_inner_wrap">
                <div className="hlthx55_split_layout">
                    <div className="hlthx55_visual_box">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>

                    <div className="hlthx55_text_box">
                        <span className="hlthx55_kicker">Public Welfare</span>
                        <h1 className="hlthx55_title">Health Department</h1>
                        <p className="hlthx55_intro">
                            The Health Department promotes preventive care, public hygiene,
                            awareness, and support systems for healthier urban living across
                            Gobardanga Municipality.
                        </p>

                        <div className="hlthx55_points_grid">
                            {points.map((item, index) => (
                                <div className="hlthx55_point_item" key={index}>
                                    <i className="fa-solid fa-check"></i>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Health;