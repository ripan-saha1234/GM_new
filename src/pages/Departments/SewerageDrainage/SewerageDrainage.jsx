import React from "react";
import "./SewerageDrainage.css";

const SewerageDrainage = () => {
    return (
        <section className="sewdx99_page_shell">
            <div className="sewdx99_inner_wrap">
                <div className="sewdx99_title_row">
                    <h1 className="sewdx99_title">Sewerage & Drainage Department</h1>
                    <i className="fa-solid fa-water"></i>
                </div>

                <div className="sewdx99_info_panel">
                    <p className="sewdx99_intro">
                        This department manages storm water drainage, sewer connectivity,
                        desilting works, and mitigation planning against waterlogging in
                        municipal areas.
                    </p>

                    <div className="sewdx99_badges_wrap">
                        <span>Drain Cleaning</span>
                        <span>Desilting</span>
                        <span>Sewer Maintenance</span>
                        <span>Waterlogging Control</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SewerageDrainage;