import { useEffect } from "react";
import { gsap } from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useTeamMemberFadeOnScroll() {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;

    const handler = () => {
      const section2 = document.querySelector(".team_wrapper_2");
      if (section2) {
        const section2Top = section2.getBoundingClientRect().top;

        if (section2Top <= window.innerHeight * 0.7) {
          gsap.to(".A_team_member_1_content", {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            pointerEvents: "none",
          });
        } else {
          gsap.to(".A_team_member_1_content", {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            pointerEvents: "auto",
          });
        }
      }
    };

    const scrollHandler = () => handler();

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isHover]);
}
