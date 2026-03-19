import React from 'react'
import './ExploreEvents.css'
import { Link } from 'react-router-dom';
const ExploreEvents = () => {
    const events = [
        {
            title: "Cultural Festival 2026",
            subtitle: "Held on January 26, 2026",
            image:
                "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Infrastructure Drive",
            subtitle: "Ongoing development project",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Green Gobardanga",
            subtitle: "Tree plantation on March 1",
            image:
                "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Free Health Camp",
            subtitle: "Health camp on Feb 15, 2026",
            image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
        },
    ];
    return (
        <>
            <section className="evntsx73_section_shell">
                <div className="evntsx73_inner_wrap">
                    <div className="evntsx73_header_row">
                        <h2 className="evntsx73_main_title">Explore our Events</h2>

                        <Link to="/gallery" className="evntsx73_view_all_btn">
                            View All
                        </Link>
                    </div>

                    <div className="evntsx73_cards_grid">
                        {events.map((item, index) => (
                            <Link to="/gallery" className="evntsx73_event_card_item" key={index}>
                                <div className="evntsx73_event_image_wrap">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="evntsx73_event_image"
                                    />
                                </div>

                                <div className="evntsx73_event_text_box">
                                    <h3 className="evntsx73_event_title">{item.title}</h3>
                                    <p className="evntsx73_event_subtitle">{item.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreEvents
