import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useCenterCardAnimation(sectionRef, ImageRef, VideoRef) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here
  useLayoutEffect(() => {
    if (!isHover || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const target = ImageRef.current || VideoRef.current;
      if (!target) return;

      gsap.to(target, {
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
