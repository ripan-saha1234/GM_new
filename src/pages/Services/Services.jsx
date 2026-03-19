import React, { useEffect, useState } from "react";
import CitizenCharterTab from "./CitizenCharterTab";
import ComplaintTimelineTab from "./ComplaintTimelineTab";
import ServiceRatesTab from "./ServiceRatesTab";
import './Services.css'
import { usePageContext } from "../../context/context";

const SERVICES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Service ${i + 1}`,
  icon: <img src="/eye.svg" alt="Service Icon" />,
}))

const Services = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()
  const [activeTab, setActiveTab] = useState("charter");

  useEffect(() => {
    updatePageTitle('Services')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  return (
    // <div className="services-page">
    //   <div className="services-grid">
    //     {SERVICES.map((service) => (
    //       <ServiceCard
    //         key={service.id}
    //         title={service.title}
    //         icon={service.icon}
    //       />
    //     ))}
    //   </div>
    // </div>

    <section className="srvqx71_service_page_shell uni_container">
      <div className="srvqx71_service_inner_wrap">
        <div className="srvqx71_service_tabs_row">
          <button
            className={`srvqx71_service_tab_btn ${activeTab === "charter" ? "srvqx71_service_tab_btn_active" : ""
              }`}
            onClick={() => setActiveTab("charter")}
          >
            Citizen's Charter
          </button>

          <button
            className={`srvqx71_service_tab_btn ${activeTab === "complaint" ? "srvqx71_service_tab_btn_active" : ""
              }`}
            onClick={() => setActiveTab("complaint")}
          >
            Complaint Timeline
          </button>

          <button
            className={`srvqx71_service_tab_btn ${activeTab === "rates" ? "srvqx71_service_tab_btn_active" : ""
              }`}
            onClick={() => setActiveTab("rates")}
          >
            Service Rates
          </button>
        </div>

        <div className="srvqx71_service_tab_content_area">
          {activeTab === "charter" && <CitizenCharterTab />}
          {activeTab === "complaint" && <ComplaintTimelineTab />}
          {activeTab === "rates" && <ServiceRatesTab />}
        </div>
      </div>
    </section>
  )
}

export default Services
