import React from "react";

const SendMessageTab = () => {
    return (
        <div className="psupx81_support_tab_panel_wrap">
            <p className="psupx81_support_intro_text">
                Send us a general message for queries, suggestions, or communication.
                Our team will get back to you as soon as possible.
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
                    <label className="psupx81_support_label">Subject *</label>
                    <input
                        type="text"
                        className="psupx81_support_input"
                        placeholder="Enter subject"
                    />
                </div>

                <div className="psupx81_support_field_group">
                    <label className="psupx81_support_label">Message *</label>
                    <textarea
                        className="psupx81_support_textarea"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <button type="submit" className="psupx81_support_submit_btn">
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    );
};

export default SendMessageTab;