import React from "react";
import "./CouncillorPage.css";
import img from "../../../../public/about_pic1.svg";

const councillorsData = [
    {
        id: 1,
        name: "Rajesh Kumar Singh",
        phone: "+91 98765 43210",
        image: img,
        position: "Executive Officer",
    },
    {
        id: 2,
        name: "Sunita Devi Sharma",
        phone: "+91 98765 43211",
        image: img,
        position: "Finance Officer",
    },
    {
        id: 3,
        name: "Amit Kumar Verma",
        phone: null,
        image: img,
        position: "Health Officer",
    },
    {
        id: 4,
        name: "Priya Kumari Gupta",
        phone: "+91 98765 43213",
        image: img,
        position: "Accountant",
    },
    {
        id: 5,
        name: "Manoj Kumar Yadav",
        phone: null,
        image: img,
        position: "Sanitary Inspector",
    },
    {
        id: 6,
        name: "Kavita Devi Pandey",
        phone: "+91 98765 43215",
        image: img,
        position: "Engineer - AMRUT",
    },
];

const KeyPersonCard = ({ person }) => {
    return (
        <div className="govkx91_person_card_box">
            <div className="govkx91_person_image_outer">
                <img
                    src={person.image}
                    alt={person.name}
                    className="govkx91_person_image_tag"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/160x160?text=No+Image";
                    }}
                />
            </div>

            <div className="govkx91_person_content_area">
                <h3 className="govkx91_person_name_text">{person.name}</h3>

                <div className="govkx91_person_position_badge">{person.position}</div>

                <div className="govkx91_person_info_block">
                

                    <div className="govkx91_person_info_row">
                        <div className="govkx91_person_info_label_wrap">
                            <i className="fa-solid fa-phone govkx91_person_info_icon"></i>
                            <span className="govkx91_person_info_label">Contact</span>
                        </div>

                        {person.phone ? (
                            <a
                                href={`tel:${person.phone}`}
                                className="govkx91_person_phone_link"
                            >
                                {person.phone}
                            </a>
                        ) : (
                            <span className="govkx91_person_no_phone_text">
                                Not Available
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const OtherKeyPersons = () => {
    return (
        <section className="govkx91_directory_page_shell">
            <div className="govkx91_directory_inner_wrap uni_container">
                <div className="govkx91_directory_heading_block">
                    <span className="govkx91_directory_kicker">Municipal Directory</span>
                    <h2 className="govkx91_directory_main_title">Other Key Persons</h2>
                    <p className="govkx91_directory_subtitle">
                        Important administrative officials and responsible officers serving
                        Gobardanga Municipality.
                    </p>
                </div>

                <div className="govkx91_directory_cards_grid">
                    {councillorsData.map((person) => (
                        <KeyPersonCard key={person.id} person={person} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherKeyPersons;