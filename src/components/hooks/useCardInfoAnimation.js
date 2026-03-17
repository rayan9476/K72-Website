import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useCardInfoAnimation({ hoveredIndex }) {
  const projectcard = useRef(null);
  const border = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useGSAP(() => {
    if (!isHover) return;

    if (!projectcard.current || !border.current) return;

    const tl = gsap.timeline();
    if (hoveredIndex) {
      tl.to(projectcard.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(
        border.current,
        {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        },
        "<",
      );
    } else {
      tl.to(projectcard.current, {
        y: "-248%",
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.set(border.current, {
        width: "80%",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [hoveredIndex, isHover]);

  return { projectcard, border };
}
