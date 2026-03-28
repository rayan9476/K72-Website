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

    const lenis = window.__lenis;

    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    // immediate native reset before lenis
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollToTop = () => {
      const lenis = window.__lenis;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Wait for next paint + Lenis ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // immediate native reset just before lenis
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if (lenis) {
          lenis.scrollTo(0, { immediate: true, force: true });
          lenis.start(); // resume lenis after reset
        }
        setTimeout(() => {
          if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
          scrollToTop();
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
