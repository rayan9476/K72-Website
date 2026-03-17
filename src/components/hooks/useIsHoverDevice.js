import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function useIsHoverDevice() {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    const update = () => {
      const canHover = window.matchMedia("(hover: hover)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isDesktopLike = canHover && hasFinePointer;

      setHover(isDesktopLike);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [isHover]);

  return isHover;
}
