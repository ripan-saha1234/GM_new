import React from "react";
import "./License.css";

const License = () => {
    return (
        <section className="licmx44_page_shell">
            <div className="licmx44_inner_wrap">
                <div className="licmx44_top_band">
                    <h1 className="licmx44_title">License Department</h1>
                    <i className="fa-solid fa-id-card"></i>
                </div>

                <div className="licmx44_content_grid">
                    <div className="licmx44_panel">
                        <h3>Trade License Services</h3>
                        <p>
                            Processing, renewal, verification, and compliance support for
                            trade licenses operating within municipal limits.
                        </p>
                    </div>

                    <div className="licmx44_panel">
                        <h3>Business Regulation</h3>
                        <p>
                            Monitoring lawful operation of establishments according to
                            municipal rules and public safety requirements.
                        </p>
                    </div>

                    <div className="licmx44_panel licmx44_panel_highlight">
                        <h3>Department Objective</h3>
                        <p>
                            Promote systematic commercial activity while maintaining public
                            order, hygiene, and rule-based licensing procedures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;