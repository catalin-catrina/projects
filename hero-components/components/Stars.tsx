import React from "react";

function Stars() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-radial-[at_0%_100%] from-amber-400 to-indigo-950">
        <div className="w-full h-full apply-night-gradient opacity-90"></div>
        <div className="stars"></div>
      </div>
    </div>
  );
}

export default Stars;
