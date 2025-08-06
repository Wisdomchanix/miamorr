import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer_container container grid">
        <div className="footer_content grid">
          
          {/* Brand Info */}
          <div className="footer_data">
            <h3 className="footer_title">MiAMOR</h3>
            <p className="footer_description">
              Mi Amor is a Spanish phrase that directly translates to "My Love" in English.
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer_social">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div className="footer_data">
            <h3 className="footer_subtitle">About</h3>
            <ul>
              <li className="footer_items"><a href="#about" className="footer_link">About Us</a></li>
              <li className="footer_items"><a href="#services" className="footer_link">Features</a></li>
              <li className="footer_items"><a href="#" className="footer_link">News & Blog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer_data">
            <h3 className="footer_subtitle">Company</h3>
            <ul>
              <li className="footer_items"><a href="#" className="footer_link">Team</a></li>
              <li className="footer_items"><a href="#" className="footer_link">Plans & Pricing</a></li>
              <li className="footer_items"><a href="#" className="footer_link">Become a Member</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer_data">
            <h3 className="footer_subtitle">Support</h3>
            <ul>
              <li className="footer_items"><a href="#faq" className="footer_link">FAQs</a></li>
              <li className="footer_items"><a href="#" className="footer_link">Support Center</a></li>
              <li className="footer_items"><a href="#" className="footer_link">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer_rights">
          <p className="footer_copy">&#169; 2025 MiAmor. All rights reserved.</p>
          <div className="footer_terms">
            <a href="#" className="footer_terms-link">Terms & Agreements</a>
            <a href="#" className="footer_terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
