import React from "react";
import "./WhatsNewNotices.css";
import { Link } from "react-router-dom";

const WhatsNewNotices = () => {
  const notices = [
    {
      title: "Property tax payment deadline extended",
      date: "March 15, 2026",
    },
    {
      title: "Tender for road construction in Ward 8",
      date: "March 12, 2026",
    },
    {
      title: "Recruitment for junior clerk positions",
      date: "March 10, 2026",
    },
    {
      title: "Public hearing on water supply project",
      date: "March 8, 2026",
    },
    {
      title: "New sanitation drive in all 16 wards",
      date: "March 5, 2026",
    },
  ];

  const quickLinks = [
    "Citizen's Charter",
    "Complaint Timeline",
    "Service Rates",
    "Projects",
    "Notice Board",
    "Contact",
  ];

  return (
    <section className="wnxq81_notice_page_shell">
      <div className="wnxq81_notice_inner_wrap">
        <div className="wnxq81_notice_main_grid">
          <div className="wnxq81_notice_left_panel">
            <div className="wnxq81_notice_header_row">
              <h2 className="wnxq81_notice_section_title">What's New / Notices</h2>
              <Link to="/notice-board" className="wnxq81_notice_view_all_link">
                View All
              </Link>
            </div>

            <div className="wnxq81_notice_list_wrap">
              {notices.map((item, index) => (
                <div className="wnxq81_notice_item_row" key={index}>
                  <div className="wnxq81_notice_item_left">
                    <div className="wnxq81_notice_doc_icon">
                      <i className="fa-regular fa-file-lines"></i>
                    </div>

                    <div className="wnxq81_notice_text_group">
                      <h3 className="wnxq81_notice_item_title">{item.title}</h3>
                      <p className="wnxq81_notice_item_date">{item.date}</p>
                    </div>
                  </div>

                  <div className="wnxq81_notice_arrow_icon">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wnxq81_notice_right_panel">
            <div className="wnxq81_newsletter_card_box">
              <div className="wnxq81_newsletter_heading_row">
                <i className="fa-regular fa-newspaper"></i>
                <h3 className="wnxq81_newsletter_title">e-Newsletter</h3>
              </div>

              <p className="wnxq81_newsletter_text">
                Subscribe to get latest municipal updates
              </p>

              <button className="wnxq81_newsletter_btn">
                Subscribe Now
              </button>
            </div>

            <div className="wnxq81_quick_links_box">
              <h3 className="wnxq81_quick_links_title">Quick Links</h3>

              <div className="wnxq81_quick_links_grid">
                {quickLinks.map((link, index) => (
                  <a href="#!" className="wnxq81_quick_link_item" key={index}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewNotices;