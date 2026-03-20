import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useScrollToTop() {
  const location = useLocation();

  const navType = useNavigationType(); // push / pop / replace

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceScrollTop = () => {
      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.__lenis?.scrollTo(0, { immediate: true, force: true });
        }, 100);
      }
    };

    if (navType === "POP") {
      requestAnimationFrame(forceScrollTop);
      setTimeout(forceScrollTop, 50);
      setTimeout(forceScrollTop, 150);
    } else {
      forceScrollTop();
    }

    // refresh after scroll reset
    requestAnimationFrame(() => {
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [location.pathname, navType]);
}
