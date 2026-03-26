import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyProjectWrapperAnimation = () => {
  const wrapper = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here
  useLayoutEffect(() => {
    if (!wrapper.current || !isHover) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper.current,
        start: "top top",
        endTrigger: "#our_project_sticky_area",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        overwrite: "auto",
      });
    });
    return () => ctx.revert();
  }, [isHover]);

  return { wrapper };
};

export default useAgencyProjectWrapperAnimation;
