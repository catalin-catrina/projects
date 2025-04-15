import React from "react";

function GradientShifts() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-fuchsia-500 bg-size-[300%_300%] animate-light-gradient">
        {/* overlays container*/}
        <div className="absolute inset-0 opacity-30">
          {/* white overlay */}
          <div className="absolute top-[10%] left-[10%] w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-white mix-blend-overlay blur-2xl animate-overlay"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-yellow-200 mix-blend-overlay blur-2xl animate-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default GradientShifts;
