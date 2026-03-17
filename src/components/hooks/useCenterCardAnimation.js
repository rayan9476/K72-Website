import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useCenterCardAnimation(sectionRef, ImageRef) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here
  useLayoutEffect(() => {
    if (!isHover || !sectionRef.current || !ImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ImageRef.current, {
        // y: 140,
        y: 300,

        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [sectionRef, ImageRef, isHover]);
}
