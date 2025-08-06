import React from 'react';

const AboutInfo = () => {
  return (
    <section className="section about container" id="about">
      <div className="about_container grid">
        <div className="about_data">
          <h2 className="section_title-center">
            Find Out A Little More <br /> About Us
          </h2>
          <p className="about_description">
            MiAmor is a dynamic platform operating across multiple African and foreign countries, designed
            to help users find love, earn income, and gain valuable skills. It fosters meaningful connections,
            financial opportunities, and personal growth.
          </p>
        </div>

        <img
          src="/Images/miamor img 2.jpeg"
          alt="About Miamor"
          className="services_img"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutInfo;
