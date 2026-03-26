import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useFooterImageScrollAnimation(
  data,
  footerRef,
  imageRef,
  VideoRef,
) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!isHover || !data || !footerRef.current) return;

    const ctx = gsap.context(() => {
      const target = imageRef.current || VideoRef.current;
      if (!target) return;
      gsap.to(target, {
        y: 140,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 30%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [data, footerRef, imageRef, isHover, VideoRef]);
}
