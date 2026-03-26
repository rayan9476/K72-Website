import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      const lenis = window.__lenis;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Wait for next paint + Lenis ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();

        // Refresh after  scroll is applied
        setTimeout(() => {
          ScrollTrigger.clearScrollMemory();
          ScrollTrigger.refresh();
        }, 100);
      });
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [location.pathname]);
}
