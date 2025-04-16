import ColorCycling from "@/components/ColorCycling";
import GradientShiftsDark from "@/components/GradientShiftsDark";
import GradientShiftsLight from "@/components/GradientShiftsLight";
import ShootingStars from "@/components/ShootingStars";
import Stars from "@/components/Stars";
import ParallaxStars from "@/components/ParallaxStars";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <>
      <GradientShiftsLight />
      <GradientShiftsDark />
      <ColorCycling />
      <Stars />
      <ShootingStars />
      <ParallaxStars />
      <Typewriter />
    </>
  );
}
