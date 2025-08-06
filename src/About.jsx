import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()

  return (
    <section className="section about container" id="about">
      <div className="about_container grid">
        <div className="about_data">
          <h2 className="section_title-center">Earnings Framework</h2>
          <img
            src="/Images/IMG_1143.jpeg"
            alt=" MIamor Earnings Info"
            className="services_img"
            loading="lazy"
          />
          <p className="about_description earn">
            <b>MiAMOR Ultra Package</b> <br />
            Access fee/unique code: N14000 <br />
            Daily commission: N12500 <br />
            1st level spillover: N400 <br />
            2nd level spillover: N150 <br />
            Game modules: N5000 daily <br />
            Matching Ads-on: N2500 daily <br />
            Tiktok/Fb lovers share: N2500 per 1,000 views <br />
            Lover Hamper: N10,000 on every love hamper/box opened
          </p>
        </div>

        <div>
          <a onClick={() => navigate("/signup")} className="reg_btn button button_link">
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
