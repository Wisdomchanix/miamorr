import React from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const navigate = useNavigate()

  return (
    <section className="services section container" id="services">
      <h2 className="section_title">
        Some Features <br /> Available
      </h2>

      <div className="services_container grid">

        {/* Service 1 */}
        <div className="services_data">
          <h3 className="services_subtitle">GME</h3>
          <img
            src="/Images/miamor img 4.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            On MiAmor, you earn up to $2.5 every time you match or get matched thereby turning simple swipes into real income.
            Imagine getting rewarded while discovering the love of your life.
            THIS ISN’T JUST ABOUT FINDING YOUR TRUE PARTNER, IT IS CONNECTION THAT ACTUALLY PAYS
          </p>
          <div>
            <a onClick={() => navigate("/signup")}  className="button button_link">Learn More → </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="services_data">
          <h3 className="services_subtitle">Game Modules</h3>
          <img
            src="/Images/miamor  img 5.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            Gaming meets real rewards on MiAmor in 3 easy steps:
          </p>
          <ul>
            <li>Fund your game wallet.</li>
            <li>Choose from a variety of exciting games and start playing instantly.</li>
            <li>Win and withdraw your cash directly to your bank account.</li>
          </ul>
          <p>The best part? You can withdraw your winnings directly to your bank account. Play smart. Win real. Get paid.</p>
          <div>
            <a onClick={() => navigate("/signup")}  className="button button_link">Learn More → </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="services_data">
          <h3 className="services_subtitle">Love Hamper</h3>
          <img
            src="/Images/miamor img 6.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            MiAmor Love Hamper – Where Love Comes with Surprises! Every week, Users stand a chance to win
            exclusive items like Headphones, AirPods, Power Banks, Ring Lights, PES Pads, and much more. It's our way of saying thank you
            for being part of the MiAmor experience.
          </p>
          <div>
            <a onClick={() => navigate("/signup")}  className="button button_link">Learn More → </a>
          </div>
        </div>

        {/* Service 4 */}
        <div className="services_data">
          <h3 className="services_subtitle">
            Tiktok/Facebook <br /> Duet
          </h3>
          <img
            src="/Images/IMG_1140.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            Turn Social Shares into Daily Earnings on MiAmor! Love creating content on TikTok and Facebook?
            With MiAmor, every share is a money-making opportunity!
            Earn up to ₦2,500 daily just for sharing your videos to TikTok or Facebook directly from MiAmor.
            Create. Share. Earn. Go viral and get paid only on MiAmor.
          </p>
          <div>
            <a onClick={() => navigate("/signup")}  className="button button_link">Learn More → </a>
          </div>
        </div>

        {/* Service 5 */}
        <div className="services_data">
          <h3 className="services_subtitle">Love Trip and Tour</h3>
          <img
            src="/Images/IMG_1141.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            Love Beyond the Screen! Experience the MiAmor Love Trip! For lucky couples who find true
            love through our platform, we offer an exclusive, all-expenses-paid 5-day romantic getaway to
            South Africa, Canada, or Dubai.
            Find love. Win a journey. Make it unforgettable.
          </p>
          <div>
            <a onClick={() => navigate("/signup")} className="button button_link">Learn More → </a>
          </div>
        </div>

        {/* Service 6 */}
        <div className="services_data">
          <h3 className="services_subtitle">Couples Challenge</h3>
          <img
            src="/Images/IMG_1142.jpeg"
            alt="miamor services"
            className="services_img"
            loading="lazy"
          />
          <p className="services_description">
            Introducing the MiAmor Couples Challenge: Love, Fun, and ₦300,000 Up for Grabs!
            It’s the season of love, and MiAmor is turning up the excitement!
            The top 3 winning couples will share ₦300,000 in cash prizes!
          </p>
          <ul>
            <li>● Sign up on MiAmor</li>
            <li>● Choose your preferred love partner</li>
            <li>● Join the contest</li>
            <li>● Compete and win!</li>
          </ul>
          <p>Showcase your bond, complete fun tasks, and let your love story shine. Fall in love, rise to the top, and walk away with cash. Only on MiAmor — where love wins big!</p>
          <div>
            <a onClick={() => navigate("/signup")}  className="button button_link">Learn More → </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
