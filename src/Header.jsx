import React, { useState, useEffect } from 'react';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">
          MiAMOR
        </a>

        <div className={`nav_menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={closeMenu}>About</a>
            </li>
            <li className="nav_item">
              <a href="#discover" className="nav_link" onClick={closeMenu}>Contact Us</a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link" onClick={closeMenu}>Features</a>
            </li>
          </ul>

          <i className="ri-close-fill nav_close" id="nav-close" onClick={closeMenu}></i>
        </div>

        <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
