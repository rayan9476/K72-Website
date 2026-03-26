import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyProjectWrapperAnimation3 = () => {
  const wrapper3 = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!wrapper3.current || !isHover) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper3.current,
        start: "top top",
        endTrigger: "#our_project_sticky_area_3",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        overwrite: "auto",
      });
    });

    return () => ctx.revert();
  }, [isHover, wrapper3]);

  return { wrapper3 };
};

export default useAgencyProjectWrapperAnimation3;
