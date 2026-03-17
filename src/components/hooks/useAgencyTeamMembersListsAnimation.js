import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useAgencyTeamMembersListsAnimation(imagesWrapperRef) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!isHover || !imagesWrapperRef.current) return;
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: imagesWrapperRef.current,
        start: "top top",
        endTrigger: "#team-list-sticky-area",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: false,
        overwrite: "auto",
      });

      return () => st.kill();
    });

    return () => ctx.revert();
  }, [isHover, imagesWrapperRef]);
}
