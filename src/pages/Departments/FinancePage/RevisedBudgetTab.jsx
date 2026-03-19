import React from "react";

const RevisedBudgetTab = () => {
    const records = [
        "2025–2026",
        "2024–2025",
        "2023–2024",
        "2022–2023",
        "2021–2022",
        "2020–2021",
    ];

    return (
        <div className="fncxr54_finance_section_wrap">
            <h2 className="fncxr54_finance_section_title">
                Revised Budget — Year-wise Records
            </h2>

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

export default RevisedBudgetTab;