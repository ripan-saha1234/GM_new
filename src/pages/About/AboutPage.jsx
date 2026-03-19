import React, { useEffect } from 'react'
import { usePageContext } from '../../context/context'
import './AboutPage.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutPage = () => {
  const { updatePageTitle, updateHeaderBackground } = usePageContext()

  useEffect(() => {
    updatePageTitle('About Us')
    updateHeaderBackground('/others-bg.svg')
  }, [updatePageTitle, updateHeaderBackground])

  const chairmanData = [
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Moumita Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic4.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "about_pic4.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic3.svg",
    },
    {
      name: "Subhajit Chatterjee",
      designation: "Councillor",
      phone: "Phone: +91 98765 43210",
      image: "/about_pic4.svg",
    },
  ];

  const stats = [
    {
      icon: "fa-building-columns",
      value: "1870",
      label: "Established",
    },
    {
      icon: "fa-calendar-days",
      value: "155+",
      label: "Years of Service",
    },
    {
      icon: "fa-users",
      value: "1,21,592",
      label: "Population Served",
    },
    {
      icon: "fa-award",
      value: "20.50 sq km",
      label: "Area Covered",
    },
  ];

  const milestones = [
    {
      year: "1870",
      text: "Gobardanga Municipality established, one of the oldest municipalities in Bengal.",
    },
    {
      year: "1947",
      text: "Post-independence reorganization and expansion of civic services.",
    },
    {
      year: "1980s",
      text: "Major infrastructure development — roads, drainage, and water supply systems.",
    },
    {
      year: "2000s",
      text: "Digital initiatives launched for e-governance and citizen services.",
    },
    {
      year: "2020s",
      text: "Smart city features, online services portal, and sustainability projects.",
    },
  ];
  const populationData = [
    { parameter: "Municipal Area", data: "20.50 sq km" },
    { parameter: "Number of Households", data: "30,232" },
    { parameter: "Total Population", data: "1,21,592" },
    { parameter: "Population (Male)", data: "61,236" },
    { parameter: "Population (Female)", data: "60,356" },
    { parameter: "Sex Ratio", data: "986 : 1000" },
    { parameter: "Child Sex Ratio", data: "972 : 1000" },
  ];

  const literacyData = [
    {
      category: "Literates",
      total: "1,03,492",
      male: "53,708",
      female: "49,784",
    },
    {
      category: "Children (0–6 Years)",
      total: "9,091",
      male: "4,611",
      female: "4,480",
    },
    {
      category: "Average Literacy Rate",
      total: "91.99%",
      male: "94.85%",
      female: "89.10%",
    },
  ];
  return (
    // <div className="about-page">
    //   <section className="about-section about-section--heading-right">
    //     <div className="about-content">

    //       <div className="about-image-wrapper">
    //         <img src="/about_pic1.svg" alt="..." className="about-image" /> when ready
    //         <div className="about-image-placeholder" aria-hidden />
    //       </div>
    //       <div className="about-text">
    //         <h2 className="about-heading">About Gobordanga Municipality</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="about-section about-section--heading-right">
    //     <div className="about-content">
    //       <div className="about-text">
    //         <h2 className="about-heading">History of Gobordanga Municipality</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //       </div>
    //       <div className="about-image-wrapper">
    //         <img src="/about_pic2.svg" alt="..." className="about-image" /> when ready
    //         <div className="about-image-placeholder" aria-hidden />
    //       </div>

    //     </div>
    //   </section>

    //   <section className="about-section about-section--heading-right">
    //     <div className="about-content">

    //       <div className="about-image-wrapper">
    //         <img src="/about_pic3.svg" alt="..." className="about-image" /> when ready
    //         <div className="about-image-placeholder" aria-hidden />
    //       </div>
    //       <div className="about-text">
    //         <h2 className="about-heading">Sankar Dutta- Chairman</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="about-section about-section--heading-right">
    //     <div className="about-content">
    //       <div className="about-text">
    //         <h2 className="about-heading">Sankar Dutta- Vice-chairman</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //       </div>
    //       <div className="about-image-wrapper">
    //         <img src="/about_pic4.svg" alt="..." className="about-image" /> when ready
    //         <div className="about-image-placeholder" aria-hidden />
    //       </div>

    //     </div>
    //   </section>
    //   <div className="chairman-slider">
    //     <Swiper
    //       modules={[Autoplay]}
    //       spaceBetween={20}
    //       loop={true}
    //       autoplay={{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       }}
    //       speed={800}
    //       breakpoints={{
    //         0: {
    //           slidesPerView: 1,
    //         },
    //         640: {
    //           slidesPerView: 1,
    //         },
    //         768: {
    //           slidesPerView: 2,
    //         },
    //         1024: {
    //           slidesPerView: 3,
    //         },
    //       }}
    //     >
    //       {chairmanData.map((item, index) => (
    //         <SwiperSlide key={index}>
    //           <div className="chairman-card">
    //             <img src={item.image} alt={item.name} />
    //             <h3>{item.name}</h3>
    //             <p>{item.designation}</p>
    //             <span>{item.phone}</span>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>
    <section className="gmhxp9_about_page_wrap uni_container">
      <div className="gmhxp9_about_container_main">
        <div className="gmhxp9_about_left_content">
          <h1 className="gmhxp9_about_main_title">
            History of Gobardanga Municipality
          </h1>

          <p className="gmhxp9_about_paragraph_text">
            Gobardanga Municipality, established in <strong>1870</strong>, is
            one of the oldest municipalities in the North 24 Parganas district
            of West Bengal. Located along the banks of the Jamuna river, the
            municipality has a rich heritage spanning over 150 years of service
            to the citizens.
          </p>

          <p className="gmhxp9_about_paragraph_text">
            Over the decades, Gobardanga has transformed from a small town into
            a thriving urban center with modern infrastructure, comprehensive
            civic services, and a strong commitment to transparent governance.
            The municipality serves an area of 20.50 sq km with a population of
            over 1.21 lakh residents.
          </p>

          <p className="gmhxp9_about_paragraph_text">
            The municipality is committed to sustainable development, digital
            governance, and ensuring quality of life for all its residents.
            Through various development projects, welfare schemes, and digital
            initiatives, we continue to build a cleaner, greener, and more
            prosperous Gobardanga.
          </p>

          <h2 className="gmhxp9_milestone_section_title">Key Milestones</h2>

          <div className="gmhxp9_milestone_list_wrap">
            {milestones.map((item, index) => (
              <div className="gmhxp9_milestone_single_item" key={index}>
                <div className="gmhxp9_milestone_year_badge">{item.year}</div>
                <div className="gmhxp9_milestone_vertical_line"></div>
                <p className="gmhxp9_milestone_item_text">{item.text}</p>
              </div>
            ))}
          </div>

          
        </div>

        <div className="gmhxp9_about_right_cards">
          {stats.map((item, index) => (
            <div className="gmhxp9_stat_card_box" key={index}>
              <div className="gmhxp9_stat_icon_holder">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="gmhxp9_stat_text_group">
                <h3 className="gmhxp9_stat_main_value">{item.value}</h3>
                <p className="gmhxp9_stat_sub_label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="pcdx71_population_page_shell">
        <div className="pcdx71_population_inner_wrap">
          <div className="pcdx71_population_heading_row">
            <i className="fa-solid fa-users"></i>
            <h2 className="pcdx71_population_heading_title">
              Population & Census Data (2011)
            </h2>
          </div>

          <div className="pcdx71_population_table_shell">
            <div className="pcdx71_population_table_head pcdx71_population_table_head_two">
              <div>Parameter</div>
              <div>Data</div>
            </div>

            <div className="pcdx71_population_table_body">
              {populationData.map((item, index) => (
                <div
                  className="pcdx71_population_table_row pcdx71_population_table_row_two"
                  key={index}
                >
                  <div className="pcdx71_population_primary_text">
                    {item.parameter}
                  </div>
                  <div className="pcdx71_population_secondary_text">
                    {item.data}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pcdx71_population_subsection_gap"></div>

          <div className="pcdx71_population_heading_row">
            <i className="fa-solid fa-chart-column"></i>
            <h2 className="pcdx71_population_heading_title">
              Literacy Statistics
            </h2>
          </div>

          <div className="pcdx71_population_table_shell">
            <div className="pcdx71_population_table_head pcdx71_population_table_head_four">
              <div>Category</div>
              <div>Total</div>
              <div>Male</div>
              <div>Female</div>
            </div>

            <div className="pcdx71_population_table_body">
              {literacyData.map((item, index) => (
                <div
                  className="pcdx71_population_table_row pcdx71_population_table_row_four"
                  key={index}
                >
                  <div className="pcdx71_population_primary_text">
                    {item.category}
                  </div>
                  <div className="pcdx71_population_secondary_text">
                    {item.total}
                  </div>
                  <div className="pcdx71_population_secondary_text">
                    {item.male}
                  </div>
                  <div className="pcdx71_population_secondary_text">
                    {item.female}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>




  )
}

export default AboutPage
