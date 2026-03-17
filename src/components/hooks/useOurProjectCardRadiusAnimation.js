import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export function useOurProjectCardRadiusAnimation() {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;
    const scrollHandler = () => {
      const wrapper = document.querySelector(".our_project_wrapper");
      const wrapper2 = document.querySelector(".our_project_wrapper_2");
      const wrapper3 = document.querySelector(".our_project_wrapper_3");
      let borderRadius = "37.5px"; // lg default
      if (window.innerWidth >= 2560)
        borderRadius = "50px"; // 3xl
      else if (window.innerWidth >= 2000)
        borderRadius = "45px"; // custom
      else if (window.innerWidth >= 1600)
        borderRadius = "42.2px"; // 2xl
      else if (window.innerWidth >= 1280)
        borderRadius = "40px"; // xl
      else if (window.innerWidth >= 1024) borderRadius = "37.5px"; // lg
      // Wrapper 1
      if (wrapper) {
        if (!wrapper2) return;
        const top1 = wrapper2.getBoundingClientRect().top;

        if (top1 <= window.innerHeight * 0.8) {
          gsap.to(".our_projects_outer", {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(".our_projects_outer", {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }
      // Wrapper 2
      if (wrapper2) {
        if (!wrapper3) return;
        const top2 = wrapper3.getBoundingClientRect().top;

        if (top2 <= window.innerHeight * 0.8) {
          gsap.to(".our_projects_outer_2", {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(".our_projects_outer_2", {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }

      const footer = document.querySelector(".site_footer");
      // Wrapper 3
      if (wrapper3 || footer) {
        const top3 = footer.getBoundingClientRect().top;
        if (!top3) return;
        if (top3 <= window.innerHeight * 0.8) {
          gsap.to(".our_projects_outer_3", {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(".our_projects_outer_3", {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isHover]);
}
