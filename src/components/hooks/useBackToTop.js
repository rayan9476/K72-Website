import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function useBackToTop(buttonSelector = ".back_to_top_btn") {
  useEffect(() => {
    const scrollToTop = () => {
      gsap.to(window, {
        scrollTo: 0,
        duration: 1.5,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    };
    const btn = document.querySelector(buttonSelector);
    if (btn) btn.addEventListener("click", scrollToTop);
    return () => btn?.removeEventListener("click", scrollToTop);
  }, [buttonSelector]);
}
