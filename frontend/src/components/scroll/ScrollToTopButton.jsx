import React, { useState, useEffect } from "react";
import BackToTop from "react-easy-back-to-top";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return isVisible ? (
    <BackToTop
      // text="Go Up"
      icon="fas fa-arrow-up"
      backgroundColor="#FF7518"
      position={{ right: "1%", bottom: "10%" }}
      hover={{ backgroundColor: "#373A3C", color: "white" ,border:"1px solid gray" }}
      transition="all 0.5s"
      showOnDistance={0}
      borderRadius={16}
      opacity="1"
      color="white"
      fontSize="24px"
    />
  ) : null;
}
