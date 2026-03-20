import React from "react";

import img1 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.33 PM (1).jpeg";
import img2 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.33 PM.jpeg";
import img3 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.32 PM (2).jpeg";
import img4 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.32 PM (1).jpeg";
import img5 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.32 PM.jpeg";
import img6 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.31 PM (1).jpeg";
import img7 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.31 PM.jpeg";
import img8 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.30 PM (2).jpeg";
import img9 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.30 PM (1).jpeg";
import img10 from "../../../Assets/WhatsApp Image 2026-03-11 at 2.06.30 PM.jpeg";

const historicalPersons = [
    {
        id: 1,
        name: "Phanibhushan Bhattacharya",
        role: "Former Chairman",
        born: "23.08.1901",
        died: "22.06.2003",
        image: img1,
    },
    {
        id: 2,
        name: "Basudeb Chattopadhyay",
        role: "Former Chairman",
        born: "05.08.1942",
        died: "11.06.2004",
        image: img2,
    },
    {
        id: 3,
        name: "Birendranath Sarkar",
        role: "Former Chairman",
        born: "2nd Baisakh, 1331 (Bengali Era)",
        died: "14.06.1989",
        image: img3,
    },
    {
        id: 3,
        name: "Pramthanath Basu",
        role: "Former Chairman",
        born: "2nd Baisakh, 1331 (Bengali Era)",
        died: "1934",
        image: img4,
    },
    {
        id: 4,
        name: "Satindranath Ghosh",
        role: "Former Chairman",
        born: "12.10.1917",
        died: "19.02.1979",
        image: img5,
    },
    {
        id: 5,
        name: "Ishwarchandra Das",
        role: "Historical Personality",
        born: "1855",
        died: "1934",
        image: img6,
    },
    {
        id: 6,
        name: "Srichandra Vidyaratna",
        role: "Historical Personality",
        born: "1831",
        died: "1893",
        image: '',
    },
    {
        id: 7,
        name: "Prabhabati Devi Saraswati",
        role: "Historical Personality",
        born: "1896",
        died: "1972",
        image: img7,
    },
    {
        id: 8,
        name: "Atul Chandra Das",
        role: "Former Chairman",
        born: "05.04.1931",
        died: "25.07.2021",
        image: img8,
    },
    {
        id: 9,
        name: "Muralidhar Bandyopadhyay",
        role: "Historical Personality",
        born: "1865",
        died: "1933",
        image: img9,
    },
    {
        id: 10,
        name: "Saradaprasanna Mukhopadhyay",
        role: "Historical Personality",
        born: "1835",
        died: "1868",
        image: img10,
    },
];

const HistoricalArchive = () => {
    return (
        <section className="exclx71_page_shell uni_container">
            <div className="exclx71_inner_wrap">
                <div className="exclx71_heading_block">
                    <span className="exclx71_heading_kicker">Historical Archive</span>
                    <h1 className="exclx71_main_title">
                        Former Chairpersons & Distinguished Personalities
                    </h1>
                    <p className="exclx71_main_subtitle">
                        A respectful remembrance of former municipal leaders and notable
                        personalities associated with the civic and social legacy of
                        Gobardanga.
                    </p>
                </div>

                <div className="exclx71_cards_grid">
                    {historicalPersons.map((person) => (
                        <div className="exclx71_person_card" key={person.id}>
                            <div className="exclx71_person_image_wrap">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="exclx71_person_image"
                                />
                            </div>

                            <div className="exclx71_person_content">
                                <div className="exclx71_role_badge">{person.role}</div>

                                <h3 className="exclx71_person_name">{person.name}</h3>

                                <div className="exclx71_life_dates">
                                    <div className="exclx71_date_row">
                                        <span className="exclx71_date_label">Born</span>
                                        <span className="exclx71_date_value">{person.born}</span>
                                    </div>

                                    <div className="exclx71_date_row">
                                        <span className="exclx71_date_label">Died</span>
                                        <span className="exclx71_date_value">{person.died}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="exclx71_note_box">
                    <i className="fa-solid fa-circle-info"></i>
                    <p>
                        Historical names and dates have been transcribed from archival image
                        sources. Some records may require further verification from original
                        municipal documents for exact spellings and date formats.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HistoricalArchive;