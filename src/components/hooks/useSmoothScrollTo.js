import { useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.defaults({ overwrite: "auto" });
export function useSmoothScrollTo() {
  const summaryRef = useRef(null);

  const handleReadClick = () => {
    if (summaryRef.current) {
      gsap.killTweensOf(window);

      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: summaryRef.current,
          offsetY: 0,
        },
        overwrite: "auto",
        ease: "power2.out",
      });
    }
  };

  return [summaryRef, handleReadClick];
}
