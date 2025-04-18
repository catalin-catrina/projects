import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import Cursor from "./Cursor";

function TextAnimation({
  text,
  duration = 2,
  showCursor = false,
  onComplete,
  className = "",
}) {
  const count = useMotionValue(0);

  const displayedText = useTransform(count, (latestCount) =>
    text.slice(0, Math.round(latestCount))
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: duration,
      ease: "easeInOut",
      onComplete,
    });

    return () => controls.stop();
  });

  return (
    <>
      <motion.h1 className={className}>{displayedText}</motion.h1>
      {showCursor && <Cursor />}
    </>
  );
}

export default TextAnimation;
