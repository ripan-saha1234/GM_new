import React from "react";

const CitizenCharterTab = () => {
    const charterData = [
        {
            service: "Mutation",
            normal: "15 Working Days",
            emergency: "7 Working Days",
        },
        {
            service: "Water Line Connection",
            normal: "15 Working Days",
            emergency: "7 Working Days",
        },
        {
            service: "Site Plan",
            normal: "15 Working Days",
            emergency: "7 Working Days",
        },
        {
            service: "Site Plan (Multistoried Building)",
            normal: "30 Working Days",
            emergency: "20 Working Days",
        },
        {
            service: "Building Plan",
            normal: "15 Working Days",
            emergency: "7 Working Days",
        },
        {
            service: "Multistoried Building Plan",
            normal: "40 Working Days",
            emergency: "20 Working Days",
        },
        {
            service: "Birth & Death Certificate",
            normal: "3 Working Days",
            emergency: "Instant",
        },
        {
            service: "Enlistment Certificate",
            normal: "7 Working Days",
            emergency: "Instant",
        },
        {
            service: "Permission for Sale or Gift of Landed Property",
            normal: "15 Working Days",
            emergency: "7 Working Days",
        },
    ];

    return (
        <div className="srvqx71_tab_panel_wrap">
            <div className="srvqx71_section_heading_row">
                <i className="fa-regular fa-clock"></i>
                <h2 className="srvqx71_section_heading_title">
                    Service Delivery Timeline
                </h2>
            </div>

            <div className="srvqx71_table_shell">
                <div className="srvqx71_table_head srvqx71_table_head_three">
                    <div>Service</div>
                    <div>Normal Time</div>
                    <div>Emergency Time</div>
                </div>

                <div className="srvqx71_table_body">
                    {charterData.map((item, index) => (
                        <div className="srvqx71_table_row srvqx71_table_row_three" key={index}>
                            <div className="srvqx71_table_primary_text">{item.service}</div>
                            <div className="srvqx71_table_secondary_text">{item.normal}</div>
                            <div className="srvqx71_table_secondary_text">{item.emergency}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="srvqx71_note_box">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <p>
                    <strong>Note:</strong> An additional charge of ₹200 is required for
                    emergency processing in all cases except multistoried buildings. For
                    multistoried buildings: Building Plan — ₹10,000; Site Plan — ₹5,000.
                </p>
            </div>
        </div>
    );
};

export default CitizenCharterTab;