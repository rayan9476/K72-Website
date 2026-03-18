import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useThumbnailScrollAnimation(thumbnailRef, data) {
  useLayoutEffect(() => {
    if (!data) return;

    if (!thumbnailRef.current) return;

    gsap.fromTo(
      thumbnailRef.current,
      { yPercent: -20 },
      {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: thumbnailRef.current.closest(".animate_banner"),
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      },
    );
  }, [data, thumbnailRef]);
}
