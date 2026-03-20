import React from "react";
import "./Lighting.css";

const Lighting = () => {
    return (
        <section className="lgtmx66_page_shell">
            <div className="lgtmx66_inner_wrap">
                <h1 className="lgtmx66_title">Lighting Department</h1>

                <div className="lgtmx66_row_wrap">
                    <div className="lgtmx66_feature_box">
                        <i className="fa-solid fa-lightbulb"></i>
                        <h3>Streetlight Installation</h3>
                        <p>Planning and installation of public lighting infrastructure.</p>
                    </div>

                    <div className="lgtmx66_feature_box">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <h3>Maintenance</h3>
                        <p>Repair of faulty streetlights and replacement of damaged units.</p>
                    </div>

                    <div className="lgtmx66_feature_box">
                        <i className="fa-solid fa-bolt"></i>
                        <h3>Energy Efficiency</h3>
                        <p>Promotion of LED lighting and power-saving public systems.</p>
                    </div>

                    <div className="lgtmx66_feature_box">
                        <i className="fa-solid fa-road"></i>
                        <h3>Coverage Expansion</h3>
                        <p>Extending illumination to underserved roads and localities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lighting;