import React, { useEffect } from 'react'
import './Tourism.css'
import { usePageContext } from '../../context/context'

const Tourism = () => {
    const { updatePageTitle, updateHeaderBackground } = usePageContext()

    useEffect(() => {
        updatePageTitle('Tourism')
        updateHeaderBackground('/others-bg.svg')
    }, [updatePageTitle, updateHeaderBackground])
    const places = [
        {
            title: "Gobardanga Rajbari",
            description:
                "A historic royal palace showcasing Bengal's architectural heritage with intricate terracotta work and cultural significance spanning several centuries.",
            location: "Central Gobardanga",
        },
        {
            title: "Jamuna River Ghat",
            description:
                "A scenic riverbank along the Jamuna river, popular for morning walks, cultural gatherings, and traditional boat rides during festivals.",
            location: "Eastern Gobardanga",
        },
        {
            title: "Shiva Temple Complex",
            description:
                "Ancient temple complex dedicated to Lord Shiva, featuring traditional Bengali temple architecture and hosting major festivals throughout the year.",
            location: "Old Town Area",
        },
        {
            title: "Municipal Park & Garden",
            description:
                "Well-maintained public park with walking trails, children's play area, and a small botanical garden maintained by the municipality.",
            location: "Ward 7, Near Town Center",
        },
        {
            title: "Heritage Market Area",
            description:
                "The old market area of Gobardanga, known for traditional handicrafts, local sweets, and a vibrant atmosphere reflecting the town's commercial history.",
            location: "Main Bazaar Road",
        },
    ];
    return (
        <>
            <section className="trvzx81_tourism_page_shell uni_container">
                <div className="trvzx81_tourism_inner_wrap">
                    <p className="trvzx81_tourism_intro_text">
                        Discover the cultural heritage and scenic beauty of Gobardanga.
                        Explore historical landmarks, natural spots, and local attractions.
                    </p>

                    <div className="trvzx81_tourism_cards_grid">
                        {places.map((place, index) => (
                            <div className="trvzx81_tourism_card_unit" key={index}>
                                <div className="trvzx81_tourism_card_image_mock">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div className="trvzx81_tourism_card_body">
                                    <h3 className="trvzx81_tourism_card_title">{place.title}</h3>
                                    <p className="trvzx81_tourism_card_desc">
                                        {place.description}
                                    </p>

                                    <div className="trvzx81_tourism_card_location_row">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tourism
