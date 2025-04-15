import React from "react";

function ParallaxStars() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 radial-gradient">
        <div className="stars-sm"></div>
        <div className="stars-md"></div>
        <div className="stars-lg"></div>
      </div>
    </div>
  );
}

export default ParallaxStars;
