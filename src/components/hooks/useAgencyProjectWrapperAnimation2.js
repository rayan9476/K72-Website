import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyProjectWrapperAnimation2 = () => {
  const wrapper2 = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!wrapper2.current || !isHover) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper2.current,
        start: "top top",
        endTrigger: "#our_project_sticky_area_2",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        overwrite: "auto",
      });
    });

    return () => ctx.revert();
  }, [isHover]);

  return { wrapper2 };
};

export default useAgencyProjectWrapperAnimation2;
