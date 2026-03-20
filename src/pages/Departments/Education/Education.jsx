import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <section className="eduxr22_page_shell">
            <div className="eduxr22_inner_wrap">
                <div className="eduxr22_header_row">
                    <div>
                        <span className="eduxr22_kicker">Citizen Welfare</span>
                        <h1 className="eduxr22_title">Education Department</h1>
                    </div>
                    <div className="eduxr22_header_icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>

                <div className="eduxr22_intro_box">
                    <p>
                        The Education Department supports municipal schools, awareness
                        initiatives, literacy promotion, and educational outreach programs
                        for children and communities.
                    </p>
                </div>

                <div className="eduxr22_cards_row">
                    <div className="eduxr22_info_card">
                        <h3>School Support</h3>
                        <p>
                            Assistance for primary educational institutions under municipal
                            administration.
                        </p>
                    </div>
                    <div className="eduxr22_info_card">
                        <h3>Literacy Programs</h3>
                        <p>
                            Community learning initiatives, awareness camps, and inclusive
                            education support.
                        </p>
                    </div>
                    <div className="eduxr22_info_card">
                        <h3>Student Welfare</h3>
                        <p>
                            Sanitation, mid-day coordination support, and civic education
                            exposure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;