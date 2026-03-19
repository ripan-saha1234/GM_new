import React, { useState } from "react";
import "./ContactUs.css";
import SubmitGrievanceTab from "./SubmitGrievanceTab";
import FeedbackTab from "./FeedbackTab";
import SendMessageTab from "./SendMessageTab";

const PublicSupportPage = () => {
    const [activeTab, setActiveTab] = useState("grievance");

    return (
        <section className="psupx81_support_page_shell uni_container">
            <div className="psupx81_support_inner_wrap">
                <div className="psupx81_support_main_grid">
                    <div className="psupx81_support_left_panel">
                        <div className="psupx81_support_tabs_row">
                            <button
                                className={`psupx81_support_tab_btn ${activeTab === "grievance"
                                        ? "psupx81_support_tab_btn_active"
                                        : ""
                                    }`}
                                onClick={() => setActiveTab("grievance")}
                            >
                                <i class="fa-solid fa-circle-info"></i>
                                <span>Submit Grievance</span>
                            </button>

                            <button
                                className={`psupx81_support_tab_btn ${activeTab === "feedback"
                                        ? "psupx81_support_tab_btn_active"
                                        : ""
                                    }`}
                                onClick={() => setActiveTab("feedback")}
                            >
                                <i className="fa-regular fa-message"></i>
                                <span>Feedback</span>
                            </button>

                            <button
                                className={`psupx81_support_tab_btn ${activeTab === "message"
                                        ? "psupx81_support_tab_btn_active"
                                        : ""
                                    }`}
                                onClick={() => setActiveTab("message")}
                            >
                                <i className="fa-regular fa-paper-plane"></i>
                                <span>Send Us a Message</span>
                            </button>
                        </div>

                        <div className="psupx81_support_content_area">
                            {activeTab === "grievance" && <SubmitGrievanceTab />}
                            {activeTab === "feedback" && <FeedbackTab />}
                            {activeTab === "message" && <SendMessageTab />}
                        </div>
                    </div>

                    <div className="psupx81_support_right_panel">
                        <div className="psupx81_support_map_card">
                            <h3 className="psupx81_support_map_title">Gobardanga Location Map</h3>

                            <div className="psupx81_support_map_frame_wrap">
                                <iframe
                                    title="Gobardanga Map"
                                    src="https://www.google.com/maps?q=Gobardanga,West%20Bengal&z=13&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicSupportPage;