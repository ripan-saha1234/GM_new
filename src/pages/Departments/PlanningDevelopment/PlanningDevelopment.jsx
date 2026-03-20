import React from "react";
import "./PlanningDevelopment.css";

const PlanningDevelopment = () => {
    return (
        <section className="plndx44_page_shell">
            <div className="plndx44_inner_wrap">
                <h1 className="plndx44_title">Planning & Development Department</h1>

                <div className="plndx44_master_grid">
                    <div className="plndx44_large_card">
                        <p className="plndx44_intro">
                            This department is responsible for long-term urban planning,
                            infrastructure strategy, development schemes, ward-level project
                            coordination, and sustainable growth planning.
                        </p>
                    </div>

                    <div className="plndx44_small_card">
                        <i className="fa-solid fa-compass-drafting"></i>
                        <span>Urban Planning</span>
                    </div>

                    <div className="plndx44_small_card">
                        <i className="fa-solid fa-city"></i>
                        <span>Development Projects</span>
                    </div>

                    <div className="plndx44_small_card">
                        <i className="fa-solid fa-chart-line"></i>
                        <span>Growth Strategy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanningDevelopment;