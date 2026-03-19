import React, { useEffect, useMemo, useState } from "react";
import './NoticeBoard.css'
import { usePageContext } from "../../context/context";

const NoticeBoard = () => {
    const [activeTab, setActiveTab] = useState("general");
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('Notice Board')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])
    const noticeData = {
        general: {
            subtitle: "Important general notices and updates from the municipality.",
            items: [
                {
                    title: "Property tax payment deadline extended to March 31, 2026",
                    date: "2026-03-10",
                    downloadable: true,
                },
                {
                    title: "Water supply disruption on March 15–16 due to pipeline maintenance",
                    date: "2026-03-08",
                    downloadable: false,
                },
                {
                    title: "Municipal office to remain closed on March 20 — Public Holiday",
                    date: "2026-03-06",
                    downloadable: false,
                },
                {
                    title: "Revised garbage collection schedule effective April 1",
                    date: "2026-03-01",
                    downloadable: true,
                },
                {
                    title: "Annual general body meeting notice — March 25, 2026",
                    date: "2026-02-28",
                    downloadable: true,
                },
            ],
        },
        citizen: {
            subtitle: "Awareness notices for health, sanitation, safety, and civic life.",
            items: [
                {
                    title: "Awareness drive on mosquito prevention and dengue control",
                    date: "2026-03-12",
                    downloadable: true,
                },
                {
                    title: "Safe drinking water advisory for summer months",
                    date: "2026-03-09",
                    downloadable: false,
                },
                {
                    title: "Citizen awareness camp on waste segregation at source",
                    date: "2026-03-04",
                    downloadable: true,
                },
            ],
        },
        jobs: {
            subtitle: "Employment opportunities and recruitment related notifications.",
            items: [
                {
                    title: "Temporary sanitation worker recruitment notification",
                    date: "2026-03-11",
                    downloadable: true,
                },
                {
                    title: "Walk-in interview for technical support staff",
                    date: "2026-03-05",
                    downloadable: true,
                },
                {
                    title: "Clerical support panel enlistment notice",
                    date: "2026-02-27",
                    downloadable: false,
                },
            ],
        },
        ads: {
            subtitle: "Public advertisements, invitations, and municipality announcements.",
            items: [
                {
                    title: "Public advertisement for lease of municipal market stalls",
                    date: "2026-03-07",
                    downloadable: true,
                },
                {
                    title: "Invitation for participation in cultural fair and exhibition",
                    date: "2026-03-03",
                    downloadable: true,
                },
            ],
        },
        tender: {
            subtitle: "Official e-tender notices and procurement announcements.",
            items: [
                {
                    title: "e-Tender for road resurfacing work in Ward 8",
                    date: "2026-03-13",
                    downloadable: true,
                },
                {
                    title: "e-Tender for supply of municipal cleaning equipment",
                    date: "2026-03-02",
                    downloadable: true,
                },
                {
                    title: "e-Tender for drainage rehabilitation project",
                    date: "2026-02-25",
                    downloadable: true,
                },
            ],
        },
    };

    const activeContent = useMemo(() => {
        return noticeData[activeTab];
    }, [activeTab]);
    return (
        <>
            <section className="ntcbx92_notice_page_shell uni_container">
                <div className="ntcbx92_notice_inner_wrap">
                    <div className="ntcbx92_notice_tabs_row">
                        <button
                            className={`ntcbx92_notice_tab_btn ${activeTab === "general" ? "ntcbx92_notice_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("general")}
                        >
                            General Notices
                        </button>

                        <button
                            className={`ntcbx92_notice_tab_btn ${activeTab === "citizen" ? "ntcbx92_notice_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("citizen")}
                        >
                            Citizen Awareness
                        </button>

                        <button
                            className={`ntcbx92_notice_tab_btn ${activeTab === "jobs" ? "ntcbx92_notice_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("jobs")}
                        >
                            Employment & Job Notifications
                        </button>

                        <button
                            className={`ntcbx92_notice_tab_btn ${activeTab === "ads" ? "ntcbx92_notice_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("ads")}
                        >
                            Advertisements
                        </button>

                        <button
                            className={`ntcbx92_notice_tab_btn ${activeTab === "tender" ? "ntcbx92_notice_tab_btn_active" : ""
                                }`}
                            onClick={() => setActiveTab("tender")}
                        >
                            e-Tender Notices
                        </button>
                    </div>

                    <p className="ntcbx92_notice_tab_subtitle">{activeContent.subtitle}</p>

                    <div className="ntcbx92_notice_list_wrap">
                        {activeContent.items.map((item, index) => (
                            <div className="ntcbx92_notice_item_card" key={index}>
                                <div className="ntcbx92_notice_item_left">
                                    <div className="ntcbx92_notice_file_icon">
                                        <i className="fa-regular fa-file-lines"></i>
                                    </div>

                                    <div className="ntcbx92_notice_text_block">
                                        <h3 className="ntcbx92_notice_item_title">{item.title}</h3>

                                        <div className="ntcbx92_notice_meta_row">
                                            <i className="fa-regular fa-calendar-days"></i>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {item.downloadable && (
                                    <button className="ntcbx92_notice_download_btn">
                                        <i className="fa-solid fa-download"></i>
                                        <span>Download</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoticeBoard
