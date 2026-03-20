import React from "react";
import "./Roads.css";

const Roads = () => {
    return (
        <section className="roadx88_page_shell">
            <div className="roadx88_inner_wrap">
                <h1 className="roadx88_title">Roads Department</h1>

                <div className="roadx88_content_box">
                    <div className="roadx88_side_card">
                        <i className="fa-solid fa-road"></i>
                        <span>Urban Mobility</span>
                    </div>

                    <div className="roadx88_main_text">
                        <p>
                            The Roads Department oversees construction, repair, resurfacing,
                            and maintenance of municipal roads, lanes, and related
                            connectivity infrastructure.
                        </p>
                        <p>
                            It also coordinates with drainage and engineering divisions to
                            improve transport safety and long-term road durability.
                        </p>
                    </div>
                </div>

                <div className="roadx88_bottom_grid">
                    <div>Road widening and repair works</div>
                    <div>Pavement and lane maintenance</div>
                    <div>Ward-level connectivity improvement</div>
                </div>
            </div>
        </section>
    );
};

export default Roads;