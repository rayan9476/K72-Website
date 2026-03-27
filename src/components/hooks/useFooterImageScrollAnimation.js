import { useLayoutEffect, useRef } from "react";
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

  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    if (!isHover || !data || !footerRef.current) return;

    const createPin = () => {
      return gsap.context(() => {
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
            invalidateOnRefresh: true,
          },
        });
      });
    };

    // async helper for wait tu stable layout
    const setupPin = async () => {
      // wait for images/videos/fonts + two frames
      await new Promise((res) =>
        requestAnimationFrame(() => requestAnimationFrame(res)),
      );

      // ensure lenis scroll is ready
      window.__lenis?.resize?.();

      // create the pin
      ctxRef.current = createPin();

      // Refresh ScrollTrigger after all
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    };

    setupPin();

    const handlePageShow = (e) => {
      if (e.persisted) {
        setupPin();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      ctxRef.current?.revert();
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [data, footerRef, imageRef, isHover, VideoRef]);
}
