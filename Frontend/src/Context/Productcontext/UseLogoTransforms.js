import { useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const UseLogoTransforms = () => {
  const isDesktop = useMediaQuery({ minWidth: 1028 });
  const { scrollY } = useScroll();

  // Font size: larger on mobile
  const logoSize = useTransform(
    scrollY,
    [0, 200],
    isDesktop ? ["10vw", "5vw"] : ["20vw", "12vw"] // <-- increased mobile size
  );

  // Y position: scroll effect
  const logoY = useTransform(
    scrollY,
    [0, 200],
    isDesktop ? ["0vh", "-8vh"] : ["0vh", "-4vh"]
  );

  // X position: Desktop = center, Phone = slightly left
  const logoX = isDesktop ? "0vw" : "-5vw";

  return { logoSize, logoY, logoX, isDesktop };
};