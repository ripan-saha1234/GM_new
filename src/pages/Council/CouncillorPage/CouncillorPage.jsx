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
    {
        id: 7,
        name: "Suresh Prasad Mishra",
        wardNumber: 7,
        phone: "+91 98765 43216",
        image: img,
    },
    {
        id: 8,
        name: "Anita Kumari Jha",
        wardNumber: 8,
        phone: "+91 98765 43217",
        image: img,
    },
    {
        id: 9,
        name: "Deepak Kumar Thakur",
        wardNumber: 9,
        phone: null,
        image: img,
    },
    {
        id: 10,
        name: "Rekha Devi Chaudhary",
        wardNumber: 10,
        phone: "+91 98765 43219",
        image: img,
    },
    {
        id: 11,
        name: "Vikram Singh Rajput",
        wardNumber: 11,
        phone: "+91 98765 43220",
        image: img,
    },
    {
        id: 12,
        name: "Meena Kumari Sahu",
        wardNumber: 12,
        phone: null,
        image: img,
    },
];

const CouncillorCard = ({ councillor }) => {
    return (
        <div className="councillor-card">
            <div className="councillor-ward-badge">
                <i className="fas fa-map-marker-alt"></i>
                Ward {councillor.wardNumber}
            </div>

            <div className="councillor-image-container">
                <img
                    src={councillor.image}
                    alt={councillor.name}
                    className="councillor-image"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150x150?text=No+Image";
                    }}
                />
            </div>

            <div className="councillor-card-body">
                <h3 className="councillor-name">
                    <i className="fas fa-user councillor-name-icon"></i>
                    {councillor.name}
                </h3>

                <div className="councillor-divider"></div>

                <div className="councillor-info-section">
                    <div className="councillor-info-row">
                        <i className="fas fa-landmark councillor-info-icon"></i>
                        <span className="councillor-info-label">Ward Number:</span>
                        <span className="councillor-info-value">{councillor.wardNumber}</span>
                    </div>

                    {councillor.phone ? (
                        <div className="councillor-info-row">
                            <i className="fas fa-phone-alt councillor-info-icon"></i>
                            <span className="councillor-info-label">Phone:</span>
                            <a href={`tel:${councillor.phone}`} className="councillor-phone-link">
                                {councillor.phone}
                            </a>
                        </div>
                    ) : (
                        <div className="councillor-info-row">
                            <i className="fas fa-phone-slash councillor-info-icon-muted"></i>
                            <span className="councillor-no-phone">Phone not available</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CouncillorPage = () => {
    const totalCouncillors = councillorsData.length;
    const totalWithPhone = councillorsData.filter((c) => c.phone).length;

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            />

            <div className="councillor-page-wrapper">

        
               

                {/* Cards Grid */}
                <div className="councillor-container uni_container">
                    <div className="councillor-cards-grid">
                        {councillorsData.map((councillor) => (
                            <CouncillorCard key={councillor.id} councillor={councillor} />
                        ))}
                    </div>
                </div>

        
            </div>
        </>
    );
};

export default CouncillorPage;