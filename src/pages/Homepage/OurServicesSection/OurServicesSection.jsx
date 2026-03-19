import React from "react";
import "./OurServiceSection.css";
import { Link } from "react-router-dom";

const OurServicesSection = () => {
    const services = [
        {
            title: "Birth & Death Certificate",
            icon: "fa-file-lines",
        },
        {
            title: "Building Plan Approval",
            icon: "fa-building",
        },
        {
            title: "Property Mutation",
            icon: "fa-house",
        },
        {
            title: "Trade License",
            icon: "fa-registered",
        },
        {
            title: "Citizen's Charter",
            icon: "fa-solid fa-users",
        },
        {
            title: "Submit Grievance",
            icon: " fa-solid fa-circle-exclamation",
        },
    ];

    return (
        <section className="srvcrd58_services_section_shell">
            <div className="srvcrd58_services_inner_wrap">
                <div className="srvcrd58_services_header_row">
                    <h2 className="srvcrd58_services_title">Our Services</h2>

                    <Link to="/services" className="srvcrd58_services_view_link">
                        View All <span>→</span>
                    </Link>
                </div>

                <div className="srvcrd58_services_grid">
                    {services.map((item, index) => (
                        <Link to="/services" className="srvcrd58_service_card_item" key={index}>
                            <div className="srvcrd58_service_icon_box">
                                <i className={`fa-regular ${item.icon}`}></i>
                            </div>

                            <h3 className="srvcrd58_service_card_title">{item.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServicesSection;