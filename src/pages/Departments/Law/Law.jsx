import React from "react";
import "./Law.css";

const Law = () => {
    const matters = [
        "Municipal legal notices and advisory",
        "Case coordination and document support",
        "Regulatory compliance and by-law interpretation",
        "Contract vetting and legal review",
    ];

    return (
        <section className="lawqx33_page_shell">
            <div className="lawqx33_inner_wrap">
                <h1 className="lawqx33_title">Law Department</h1>

                <div className="lawqx33_main_panel">
                    <div className="lawqx33_left_col">
                        <p className="lawqx33_intro">
                            The Law Department provides legal guidance to the municipality in
                            matters of administration, regulation, litigation support, and
                            statutory compliance.
                        </p>

                        <div className="lawqx33_list_box">
                            {matters.map((item, index) => (
                                <div className="lawqx33_list_item" key={index}>
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lawqx33_right_col">
                        <div className="lawqx33_icon_box">
                            <i className="fa-solid fa-gavel"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Law;