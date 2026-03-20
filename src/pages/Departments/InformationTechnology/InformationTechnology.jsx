import React from "react";
import "./InformationTechnology.css";

const InformationTechnology = () => {
    return (
        <section className="itdx22_page_shell">
            <div className="itdx22_inner_wrap">
                <div className="itdx22_top_box">
                    <div className="itdx22_top_text">
                        <h1 className="itdx22_title">Information Technology Department</h1>
                        <p className="itdx22_intro">
                            The IT Department drives digital governance, online service
                            delivery, municipal software systems, digital records, and citizen
                            access platforms.
                        </p>
                    </div>
                    <div className="itdx22_top_icon">
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                </div>

                <div className="itdx22_feature_strip">
                    <div>e-Governance</div>
                    <div>Online Portals</div>
                    <div>Digital Records</div>
                    <div>System Support</div>
                    <div>Citizen Access</div>
                </div>
            </div>
        </section>
    );
};

export default InformationTechnology;