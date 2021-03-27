import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const FreeAnimation = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./free.json"), // the path to the animation json
    });
  });
  return (
    <center>
      <div
        ref={container}
        className="container"
        style={{width:"190px"}}
      ></div>
    </center>
  );
};

export default FreeAnimation;
