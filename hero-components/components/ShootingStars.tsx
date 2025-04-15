import React from "react";

function ShootingStars() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-radial-[at_0%_0%] from-sky-1 via-sky-2 to-sky-3">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
    </div>
  );
}

export default ShootingStars;
