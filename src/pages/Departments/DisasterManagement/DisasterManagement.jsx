import React from "react";
import "./DisasterManagement.css";

const DisasterManagement = () => {
    const steps = [
        "Emergency preparedness and coordination",
        "Flood and storm response planning",
        "Relief distribution support",
        "Rapid civic communication during emergencies",
    ];

    return (
        <section className="dstmx77_page_shell">
            <div className="dstmx77_inner_wrap">
                <div className="dstmx77_banner_box">
                    <div className="dstmx77_banner_text">
                        <span className="dstmx77_kicker">Emergency Response</span>
                        <h1 className="dstmx77_title">Disaster Management Department</h1>
                        <p className="dstmx77_intro">
                            This department coordinates municipal preparedness, response, and
                            resilience efforts during floods, storms, civic emergencies, and
                            other crisis situations.
                        </p>
                    </div>
                    <div className="dstmx77_banner_icon">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                </div>

                <div className="dstmx77_steps_wrap">
                    {steps.map((item, index) => (
                        <div className="dstmx77_step_card" key={index}>
                            <span className="dstmx77_step_no">0{index + 1}</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DisasterManagement;