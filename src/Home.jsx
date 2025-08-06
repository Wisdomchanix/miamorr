import React from 'react';
import Header from './Header';
import About from "./About"
import AboutPlus from "./AboutPlus"
import AboutInfo from "./AboutInfo"
import AboutConvert from "./AboutConvert"
import Services from "./Services"
import FAQ from "./FAQ"
import Footer from "./Footer"
import ScrollUp from "./ScrollUp"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <section className="home section" id="home">
        <img
          src="/Images/Background img.jpeg"
          alt="Home Background"
          className="bg_img"
        />

        <div className="home_container container grid">
          <div className="home_data">
            <h1 className="home_data-title">
              Mi Amor Where <br /> Love Meets Opportunity
            </h1>
            <span className="home_data-subtitle">
              An Online space where <span className="yellow_bg">love and income meet.</span> Whether you're
              finding the One or building with your partner, Mi Amor helps you connect, grow, and earn all
              from home.
            </span>
            <a onClick={() => navigate("/signup")} className="button home_btn">Get Started</a>
          </div>

          <img
            src="/Images/de87a1bf-e9db-407e-907f-e553a332cd96.jpeg"
            alt="MIamor image"
            className="home_img"
            loading="lazy"
          />
        </div>
      </section>
      <About />
      <AboutPlus />
      <AboutInfo />
      < AboutConvert />
      <Services />
      <FAQ />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
