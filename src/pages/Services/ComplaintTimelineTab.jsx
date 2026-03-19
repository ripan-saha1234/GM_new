import React from "react";

const ComplaintTimelineTab = () => {
    const complaintItems = [
        {
            title: "Garbage Removal",
            timeline: "Within 1 Working Day",
        },
        {
            title: "Water Pipeline Leakage",
            timeline: "Within 1 Working Day",
        },
        {
            title: "Street Light / Fused Bulb Replacement",
            timeline: "Within 2 Working Days",
        },
        {
            title: "Drain Cleaning",
            timeline: "Within 2 Working Days",
        },
        {
            title: "Dug Pit Repair",
            timeline: "Within 7 Working Days",
        },
        {
            title: "Broken Culvert Repair",
            timeline: "Within 7 Working Days",
        },
    ];

    return (
        <div className="srvqx71_tab_panel_wrap">
            <div className="srvqx71_section_heading_row">
                <i className="fa-regular fa-circle-question"></i>
                <h2 className="srvqx71_section_heading_title">
                    Service Rendered on Complaint
                </h2>
            </div>

            <div className="srvqx71_complaint_grid_wrap">
                {complaintItems.map((item, index) => (
                    <div className="srvqx71_complaint_card_unit" key={index}>
                        <h3 className="srvqx71_complaint_card_title">{item.title}</h3>
                        <p className="srvqx71_complaint_card_timeline">{item.timeline}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComplaintTimelineTab;