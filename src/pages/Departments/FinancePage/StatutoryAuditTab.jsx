import React from "react";

const StatutoryAuditTab = () => {
    const records = ["2024–2025", "2023–2024", "2022–2023", "2021–2022"];

    return (
        <div className="fncxr54_finance_section_wrap">
            <h2 className="fncxr54_finance_section_title">Statutory Audit Reports</h2>

            <div className="fncxr54_finance_cards_grid">
                {records.map((item, index) => (
                    <div className="fncxr54_finance_file_card" key={index}>
                        <div className="fncxr54_finance_file_left">
                            <i className="fa-regular fa-file-lines"></i>
                            <span>{item}</span>
                        </div>

                        <button className="fncxr54_finance_pdf_btn">
                            <i className="fa-solid fa-download"></i>
                            <span>PDF</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatutoryAuditTab;