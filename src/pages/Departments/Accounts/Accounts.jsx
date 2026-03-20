import React from "react";
import "./Accounts.css";

const Accounts = () => {
    const services = [
        "Municipal budget preparation and monitoring",
        "Bill processing and payment management",
        "Tax and revenue accounting records",
        "Financial statement compilation",
    ];

    return (
        <section className="accgx11_page_shell">
            <div className="accgx11_inner_wrap">
                <div className="accgx11_hero_box">
                    <div className="accgx11_hero_left">
                        <span className="accgx11_kicker">Finance Department</span>
                        <h1 className="accgx11_title">Accounts Department</h1>
                        <p className="accgx11_intro">
                            The Accounts Department manages budgeting, expenditure tracking,
                            fund utilization, audits, and transparent financial reporting for
                            municipal administration.
                        </p>
                    </div>
                    <div className="accgx11_icon_panel">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                </div>

                <div className="accgx11_body_grid">
                    <div className="accgx11_card_block">
                        <h2 className="accgx11_subtitle">Core Functions</h2>
                        <ul className="accgx11_list">
                            {services.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="accgx11_stat_card">
                        <h3 className="accgx11_stat_title">Department Focus</h3>
                        <p className="accgx11_stat_text">
                            Ensuring accountability, timely disbursement, and accurate record
                            maintenance across all municipal financial activities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accounts;