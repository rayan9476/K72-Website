// useAboutSectionAnimation.js
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGsapNative } from "./useGsapNative";
gsap.defaults({ overwrite: "auto" });
const useAboutSectionAnimation = () => {
  const location = useLocation().pathname;

  const scopeRef = useRef(null);

  useGsapNative({
    scopeRef: scopeRef,
    deps: [location],
    setup: () => {
      gsap.to(".animate_links", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about_details_links",
          start: "top 95%",
          once: true,
        },
      });

      gsap.to(".animate_about_text", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about_text_container",
          start: "top 95%",
          once: true,
        },
      });
    },
  });

  return { scopeRef };
};

export default useAboutSectionAnimation;
