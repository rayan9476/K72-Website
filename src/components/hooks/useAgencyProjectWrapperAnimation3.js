import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyProjectWrapperAnimation3 = () => {
  const wrapper3 = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  const location = useLocation();

  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapper3.current || !isHover) return;

    const createPin = () => {
      return gsap.context(() => {
        return ScrollTrigger.create({
          trigger: wrapper3.current,
          start: "top top",
          endTrigger: "#our_project_sticky_area_3",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
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

      // refresh scrollTrigger
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    };

    setupPin();

    // handle chrome back/forward cache
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
  }, [isHover, wrapper3, location.pathname]);

  return { wrapper3 };
};

export default useAgencyProjectWrapperAnimation3;
