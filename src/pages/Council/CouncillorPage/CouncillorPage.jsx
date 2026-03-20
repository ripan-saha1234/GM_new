import React from 'react';
import './CouncillorPage.css';
import img from '../../../../public/about_pic3.svg'
const councillorsData = [
    {
        id: 1,
        name: "Rajesh Kumar Singh",
        wardNumber: 1,
        phone: "+91 98765 43210",
        image: img,
    },
    {
        id: 2,
        name: "Sunita Devi Sharma",
        wardNumber: 2,
        phone: "+91 98765 43211",
        image: img,
    },
    {
        id: 3,
        name: "Amit Kumar Verma",
        wardNumber: 3,
        phone: null,
        image: img,
    },
    {
        id: 4,
        name: "Priya Kumari Gupta",
        wardNumber: 4,
        phone: "+91 98765 43213",
        image: img,
    },
    {
        id: 5,
        name: "Manoj Kumar Yadav",
        wardNumber: 5,
        phone: null,
        image: img,
    },
    {
        id: 6,
        name: "Kavita Devi Pandey",
        wardNumber: 6,
        phone: "+91 98765 43215",
        image: img,
    },
];

const CouncillorCard = ({ person }) => {
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


                <div className="govkx91_person_info_block">
                    <div className="govkx91_person_info_row">
                        <div className="govkx91_person_info_label_wrap">
                            <i className="fa-solid fa-id-badge govkx91_person_info_icon"></i>
                            <span className="govkx91_person_info_label">Ward / Ref.</span>
                        </div>
                        <span className="govkx91_person_info_value">
                            {person.wardNumber}
                        </span>
                    </div>

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

const CouncillorPage = () => {
    const totalCouncillors = councillorsData.length;
    const totalWithPhone = councillorsData.filter((c) => c.phone).length;

    return (
        <section className="govkx91_directory_page_shell">
            <div className="govkx91_directory_inner_wrap uni_container">
                <div className="govkx91_directory_heading_block">
                    <span className="govkx91_directory_kicker">Municipal Directory</span>
                    <h2 className="govkx91_directory_main_title">Board of Councillors</h2>
                    <p className="govkx91_directory_subtitle">
                        Important administrative officials  serving
                        Gobardanga Municipality.
                    </p>
                </div>

                <div className="govkx91_directory_cards_grid">
                    {councillorsData.map((person) => (
                        <CouncillorCard key={person.id} person={person} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CouncillorPage;