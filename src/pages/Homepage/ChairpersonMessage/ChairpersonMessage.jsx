import React from "react";
import "./ChairpersonMessage.css";
import img from '../../../../public/about_pic3.svg'
const ChairpersonMessage = () => {
    return (
        <section className="chrmx42_message_section_shell">
            <div className="chrmx42_message_inner_wrap">
                <div className="chrmx42_message_card_box">
                    <div className="chrmx42_message_left_content">
                        <h2 className="chrmx42_message_title">
                            Message from our Chairperson
                        </h2>

                        <p className="chrmx42_message_text">
                            Dear citizens, it is my privilege to serve as the Chairperson of
                            Gobardanga Municipality. Our administration is committed to
                            sustainable development, transparent governance, and improving the
                            quality of life for every resident. We are investing in modern
                            infrastructure, clean water supply, and digital services to make
                            our municipality a model township. I invite all citizens to
                            actively participate in our development journey.
                        </p>

                        <button className="chrmx42_message_btn">Read More</button>
                    </div>

                    <div className="chrmx42_message_right_profile">
                        <div className="chrmx42_message_avatar_wrap">
                            <img
                                src={img}
                                alt="Chairperson"
                                className="chrmx42_message_avatar_img"
                            />
                        </div>

                        <h3 className="chrmx42_message_profile_name">Sankar Dutta</h3>
                        <p className="chrmx42_message_profile_role">Chairperson</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairpersonMessage;