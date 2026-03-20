import React from "react";
import "./WaterSupply.css";

const WaterSupply = () => {
    const cards = [
        "Water distribution and supply monitoring",
        "New connection coordination",
        "Pipeline maintenance and repair",
        "Water quality support and oversight",
    ];

    return (
        <section className="wtrs11_page_shell">
            <div className="wtrs11_inner_wrap">
                <span className="wtrs11_kicker">Essential Services</span>
                <h1 className="wtrs11_title">Water Supply Department</h1>

                <p className="wtrs11_intro">
                    The Water Supply Department ensures access to safe and regular water
                    supply through planning, maintenance, monitoring, and service
                    coordination across wards.
                </p>

                <div className="wtrs11_cards_grid">
                    {cards.map((item, index) => (
                        <div className="wtrs11_service_card" key={index}>
                            <i className="fa-solid fa-droplet"></i>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaterSupply;