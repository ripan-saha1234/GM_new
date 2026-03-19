import React, { useMemo, useState } from 'react'
import './Projects.css'
const Projects = () => {
    const [activeTab, setActiveTab] = useState("all");

    const projects = [
        {
            title: "Road Construction Phase II — Wards 5, 8, 12",
            description:
                "Widening and resurfacing of major arterial roads with proper drainage systems, footpaths, and LED street lighting across three wards.",
            status: "In Progress",
            type: "popular",
            icon: "fa-road",
        },
        {
            title: "Community Hall Construction — Ward 3",
            description:
                "Construction of a multi-purpose community hall with 500-person capacity, modern amenities, and parking facilities for public events and cultural programs.",
            status: "In Progress",
            type: "popular",
            icon: "fa-building",
        },
        {
            title: "Water Treatment Plant Upgrade",
            description:
                "Modernization of the central water treatment plant to increase capacity and improve water quality standards for the entire municipality.",
            status: "Planned",
            type: "all",
            icon: "fa-droplet",
        },
        {
            title: "LED Streetlight Installation — All Wards",
            description:
                "Installation of 200+ energy-efficient LED streetlights replacing old sodium vapor lamps, reducing energy consumption and improving visibility.",
            status: "Completed",
            type: "popular",
            icon: "fa-lightbulb",
        },
        {
            title: "Solid Waste Management System",
            description:
                "Implementation of door-to-door waste collection, segregation at source, and modern waste processing facility for a cleaner municipality.",
            status: "In Progress",
            type: "all",
            icon: "fa-trash-can",
        },
        {
            title: "Digital Governance Portal",
            description:
                "Launch of citizen-facing online portal for service applications, tax payments, grievance submission, and certificate downloads.",
            status: "Completed",
            type: "popular",
            icon: "fa-globe",
        },
        {
            title: "Urban Green Space Development",
            description:
                "Development of landscaped parks, tree plantation drives, and open recreational zones to improve environmental quality and public wellness.",
            status: "Planned",
            type: "all",
            icon: "fa-tree",
        },
        {
            title: "Drainage Improvement Initiative",
            description:
                "Upgradation of storm water drainage infrastructure in flood-prone areas to reduce waterlogging during monsoon seasons.",
            status: "In Progress",
            type: "popular",
            icon: "fa-water",
        },
    ];

    const filteredProjects = useMemo(() => {
        if (activeTab === "all") return projects;
        if (activeTab === "completed") {
            return projects.filter((item) => item.status === "Completed");
        }
        if (activeTab === "ongoing") {
            return projects.filter((item) => item.status === "In Progress");
        }
        if (activeTab === "planned") {
            return projects.filter((item) => item.status === "Planned");
        }
        if (activeTab === "popular") {
            return projects.filter((item) => item.type === "popular");
        }
        return projects;
    }, [activeTab]);

    const getStatusClass = (status) => {
        if (status === "Completed") return "prjmx47_status_badge_completed";
        if (status === "In Progress") return "prjmx47_status_badge_progress";
        if (status === "Planned") return "prjmx47_status_badge_planned";
        return "";
    };

    const getStatusIcon = (status) => {
        if (status === "Completed") return "fa-circle-check";
        if (status === "In Progress") return "fa-clock";
        if (status === "Planned") return "fa-circle-dot";
        return "fa-circle-info";
    };
    return (
        <>
            <section className="prjmx47_projects_page_shell uni_container">
                <div className="prjmx47_projects_inner_wrap">
                    <p className="prjmx47_projects_intro_text">
                        Important schemes, development projects, and initiatives undertaken by
                        Gobardanga Municipality for the benefit of citizens.
                    </p>

                    <div className="prjmx47_projects_tabs_row">
                        <button
                            className={`prjmx47_projects_tab_btn ${activeTab === "all" ? "prjmx47_projects_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("all")}
                        >
                            All Projects
                        </button>

                        <button
                            className={`prjmx47_projects_tab_btn ${activeTab === "completed"
                                ? "prjmx47_projects_tab_btn_active"
                                : ""
                                }`}
                            onClick={() => setActiveTab("completed")}
                        >
                            Completed Projects
                        </button>

                        <button
                            className={`prjmx47_projects_tab_btn ${activeTab === "popular" ? "prjmx47_projects_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("popular")}
                        >
                            Popular Projects
                        </button>

                        <button
                            className={`prjmx47_projects_tab_btn ${activeTab === "ongoing" ? "prjmx47_projects_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("ongoing")}
                        >
                            Ongoing Projects
                        </button>

                        <button
                            className={`prjmx47_projects_tab_btn ${activeTab === "planned" ? "prjmx47_projects_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("planned")}
                        >
                            Planned Projects
                        </button>
                    </div>

                    <div className="prjmx47_projects_cards_grid">
                        {filteredProjects.map((project, index) => (
                            <div className="prjmx47_project_card_unit" key={index}>
                                <div className="prjmx47_project_card_top">
                                    <div className="prjmx47_project_heading_group">
                                       
                                        <h3 className="prjmx47_project_card_title">{project.title}</h3>
                                    </div>

                                    <div
                                        className={`prjmx47_project_status_badge ${getStatusClass(
                                            project.status
                                        )}`}
                                    >
                                        <i className={`fa-regular ${getStatusIcon(project.status)}`}></i>
                                        <span>{project.status}</span>
                                    </div>
                                </div>

                                <p className="prjmx47_project_card_desc">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
