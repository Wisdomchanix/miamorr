import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPlus = () => {
  const navigate = useNavigate()

  return (
    <section className="section about container" id="about">
      <div className="about_container grid">
        <div className="about_data">
          <h2 className="section_title-center">Earning Framework</h2>

           <img
          src="/Images/IMG_1144.jpeg"
          alt="Earning Framework In MiAmor"
          className="services_img"
          loading="lazy"
        />
        
          <p className="about_description earn">
            <b>MiAmor Plus Package</b> <br />
            Access free/unique code: N10,000 <br />
            Welcome Gift: N8000 <br />
            Daily commission: N9,100 <br />
            1st Level Spillover: N200 <br />
            2nd Level Spillover: N100 <br />
            Game Modules: N3000 daily <br />
            Matching ads-on: N2000 daily <br />
            Tiktok/fb lovers share: N1500 per 1,000 views
          </p>
          <div>
          <a onClick={() => navigate("/signup")} className="reg_btn button button_link">
            Get Started →
          </a>
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutPlus;
