
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // optional icon
import './Scrolltop.scss'

const Scrolltop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scroll is more than 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top-btn">
        <FaArrowUp />
      </button>
    )
  );
};

export default Scrolltop;
