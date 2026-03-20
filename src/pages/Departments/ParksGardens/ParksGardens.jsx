import React from "react";
import "./ParksGardens.css";

const ParksGardens = () => {
    const items = [
        "Park maintenance and beautification",
        "Seasonal plantation and landscaping",
        "Public green space upkeep",
        "Civic recreation environment support",
    ];

    return (
        <section className="prkgx33_page_shell">
            <div className="prkgx33_inner_wrap">
                <div className="prkgx33_header_box">
                    <div>
                        <span className="prkgx33_kicker">Urban Green Spaces</span>
                        <h1 className="prkgx33_title">Parks & Gardens Department</h1>
                    </div>
                </div>

                <div className="prkgx33_grid_layout">
                    <div className="prkgx33_image_mock">
                        <i className="fa-solid fa-tree"></i>
                    </div>

                    <div className="prkgx33_text_panel">
                        <p className="prkgx33_intro">
                            This department maintains public parks, gardens, landscaped open
                            spaces, and green development initiatives for environmental and
                            recreational benefit.
                        </p>

                        <div className="prkgx33_item_list">
                            {items.map((item, index) => (
                                <div className="prkgx33_item_row" key={index}>
                                    <i className="fa-solid fa-leaf"></i>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParksGardens;