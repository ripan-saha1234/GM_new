import React from "react";

const SubmitGrievanceTab = () => {
    return (
        <div className="psupx81_support_tab_panel_wrap">
            <p className="psupx81_support_intro_text">
                Submit your complaint or grievance online. Our team will review and
                respond within the stipulated timeline.
            </p>

            <form className="psupx81_support_form_wrap">
                <div className="psupx81_support_form_two_col">
                    <div className="psupx81_support_field_group">
                        <label className="psupx81_support_label">Full Name *</label>
                        <input
                            type="text"
                            className="psupx81_support_input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="psupx81_support_field_group">
                        <label className="psupx81_support_label">Contact Number *</label>
                        <input
                            type="text"
                            className="psupx81_support_input"
                            placeholder="+91 XXXXX-XXXXX"
                        />
                    </div>
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Address *</label>
                    <input
                        type="text"
                        className="psupx81_support_input"
                        placeholder="Your address"
                    />
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Type of Complaint *</label>
                    <select className="psupx81_support_input psupx81_support_select">
                        <option>Select complaint type</option>
                        <option>Water Supply</option>
                        <option>Road Damage</option>
                        <option>Drainage Issue</option>
                        <option>Garbage Collection</option>
                        <option>Street Light Problem</option>
                        <option>Tax Related</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Description *</label>
                    <textarea
                        className="psupx81_support_textarea"
                        placeholder="Describe your issue in detail..."
                    ></textarea>
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Attach File (optional)</label>
                    <input type="file" className="psupx81_support_file_input" />
                </div>

                <button type="submit" className="psupx81_support_submit_btn">
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>Submit Grievance</span>
                </button>
            </form>
        </div>
    );
};

export default SubmitGrievanceTab;