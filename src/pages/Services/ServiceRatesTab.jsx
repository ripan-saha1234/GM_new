import React from "react";

const ServiceRatesTab = () => {
    const ratesData = [
        {
            service: "Mutation (New)",
            formCharge: "₹15",
            fees: "1.5% of recent deed value + ₹100",
        },
        {
            service: "Mutation (Holding)",
            formCharge: "₹15",
            fees: "1.5% of recent deed value + ₹100",
        },
        {
            service: "Amalgamation",
            formCharge: "₹10",
            fees: "1.5% of recent deed value + ₹100",
        },
        {
            service: "Certified Copy of Assessment Register",
            formCharge: "₹15",
            fees: "₹50",
        },
    ];

    return (
        <div className="srvqx71_tab_panel_wrap">
            <div className="srvqx71_section_heading_row">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <h2 className="srvqx71_section_heading_title">Service Rate Chart</h2>
            </div>

            <div className="srvqx71_table_shell">
                <div className="srvqx71_table_head srvqx71_table_head_three">
                    <div>Service Type</div>
                    <div>Form Charge</div>
                    <div>Fees</div>
                </div>

                <div className="srvqx71_table_body">
                    {ratesData.map((item, index) => (
                        <div className="srvqx71_table_row srvqx71_table_row_three" key={index}>
                            <div className="srvqx71_table_primary_text">{item.service}</div>
                            <div className="srvqx71_table_secondary_text">{item.formCharge}</div>
                            <div className="srvqx71_table_secondary_text">{item.fees}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceRatesTab;