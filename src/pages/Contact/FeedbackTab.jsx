import React from "react";

const FeedbackTab = () => {
    return (
        <div className="psupx81_support_tab_panel_wrap">
            <p className="psupx81_support_intro_text">
                We value your feedback. Share your suggestions to help us improve
                municipal services.
            </p>

            <form className="psupx81_support_form_wrap">
                <div className="psupx81_support_form_two_col">
                    <div className="psupx81_support_field_group">
                        <label className="psupx81_support_label">Name *</label>
                        <input
                            type="text"
                            className="psupx81_support_input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="psupx81_support_field_group">
                        <label className="psupx81_support_label">Email / Contact *</label>
                        <input
                            type="text"
                            className="psupx81_support_input"
                            placeholder="Email or phone"
                        />
                    </div>
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Message / Suggestions *</label>
                    <textarea
                        className="psupx81_support_textarea"
                        placeholder="Your feedback..."
                    ></textarea>
                </div>

                <button type="submit" className="psupx81_support_submit_btn">
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>Submit Feedback</span>
                </button>
            </form>
        </div>
    );
};

export default FeedbackTab;