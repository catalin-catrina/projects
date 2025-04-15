import React from "react";

function GradientShiftsDark() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-radial-[at_25%_25%] from-zinc-700 to-stone-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[15%] left-[15%] w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[12vw] lg:h-[12vw] rounded-full bg-gray-300 blur-2xl mix-blend-overlay animate-overlay"></div>
          <div className="absolute bottom-[15%] right-[15%] w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[12vw] lg:h-[12vw] rounded-full bg-neutral-500 blur-2xl mix-blend-overlay animate-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default GradientShiftsDark;
