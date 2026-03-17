import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useHideTeamMemberTextContentOnScroll() {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;

    const ctx = gsap.context(() => {
      const section = document.querySelector(".team_list_section");
      if (!section) return;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        onEnter: hideContent,
        onLeaveBack: showContent,
      });

      return () => st.kill();
    });

    return () => ctx.revert();
  }, [isHover]);
}

// animation funtion
function hideContent() {
  gsap.to(".A_team_member_2_content", {
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
    pointerEvents: "none",
  });
}

function showContent() {
  gsap.to(".A_team_member_2_content", {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
    pointerEvents: "auto",
  });
}
