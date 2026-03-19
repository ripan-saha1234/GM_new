import React from "react";
import "./AllEventsPage.css";

const AllEventsPage = () => {
    const events = [
        {
            title: "Cultural Festival 2026",
            subtitle: "Held on January 26, 2026",
            description:
                "A grand cultural gathering celebrating local traditions, music, dance, and community spirit across Gobardanga.",
            image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Infrastructure Drive",
            subtitle: "Ongoing development project",
            description:
                "Major civic infrastructure improvements including roads, drainage, and public transport connectivity upgrades.",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Green Gobardanga",
            subtitle: "Tree plantation on March 1",
            description:
                "Tree plantation campaign focused on environmental sustainability and urban green development.",
            image:
                "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Free Health Camp",
            subtitle: "Health camp on Feb 15, 2026",
            description:
                "Community health camp offering consultations, health checkups, and awareness support for local residents.",
            image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Women Empowerment Workshop",
            subtitle: "Held on March 12, 2026",
            description:
                "Workshop focused on self-help groups, skills development, and financial awareness for women.",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Youth Sports Meet",
            subtitle: "Held on April 4, 2026",
            description:
                "Municipal sports event encouraging youth participation in athletics, football, and community games.",
            image:
                "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Clean City Campaign",
            subtitle: "Held on February 20, 2026",
            description:
                "City-wide awareness and participation campaign promoting sanitation and cleaner public spaces.",
            image:
                "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Digital Services Awareness Camp",
            subtitle: "Held on May 2, 2026",
            description:
                "A public awareness initiative to educate citizens on online municipal services and e-governance tools.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        },
    ];

    return (
        <section className="aevntx19_page_shell uni_container">
            <div className="aevntx19_inner_wrap">
                <div className="aevntx19_heading_block">
                    <h1 className="aevntx19_page_title">Photo Gallery</h1>
                    <p className="aevntx19_page_subtitle">
                        Explore all municipal events, campaigns, development drives, and
                        public programs organized in Gobardanga.
                    </p>
                </div>

                <div className="aevntx19_events_grid">
                    {events.map((item, index) => (
                        <div className="aevntx19_event_card_box" key={index}>
                            <div className="aevntx19_event_image_wrap">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="aevntx19_event_image"
                                />
                            </div>

                            <div className="aevntx19_event_content_box">
                                <h3 className="aevntx19_event_title">{item.title}</h3>
                                <p className="aevntx19_event_subtitle">{item.subtitle}</p>
                                <p className="aevntx19_event_desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllEventsPage;