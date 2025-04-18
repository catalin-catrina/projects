"use client";

import { useState } from "react";
import TextAnimation from "./TextAnimation";

function Typewriter() {
  const [currentLine, setCurrentLine] = useState(0);

  const textArray = [
    {
      text: "Hi there, ",
      duration: 4,
      className: "inline-block text-6xl text-gray-300",
    },
    {
      text: "I'm Catalin.",
      duration: 4,
      className: "inline-block text-8xl text-gray-300",
    },
  ];

  function handleComplete() {
    if (currentLine < textArray.length - 1) {
      setCurrentLine(currentLine + 1);
    }
  }

  return (
    <div className="relative h-screen">
      <div className="flex justify-center items-center absolute inset-0 bg-linear-to-br from-slate-950 to-gray-950">
        <div className="absolute right-[10%] top-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="absolute left-[10%] bottom-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="flex flex-col gap-10 justify-center items-center">
          {textArray.map((item, index) => {
            if (currentLine < index) return;
            return (
              <div key={index}>
                <TextAnimation
                  text={item.text}
                  onComplete={
                    index === currentLine ? handleComplete : undefined
                  }
                  showCursor={index === currentLine}
                  className={item.className}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Typewriter;
