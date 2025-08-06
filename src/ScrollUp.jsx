import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#top"
          className="scrollup"
          id="scroll-up"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <i className="scrollup_icon">▲</i>
        </a>
      )}
    </>
  );
};

export default ScrollUp;
