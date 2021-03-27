import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const LoginAnimation = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./login.json"), // the path to the animation json
    });
  },[]);
  return (
    <center>
      <div
        ref={container}
        className="container my-5"
        style={{width:"250px",}}
      ></div>
    </center>
  );
};

export default LoginAnimation;
