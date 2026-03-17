import { useEffect } from "react";
import { gsap } from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useHoverFlexVideoAnimation({
  selector = ".animate-two-cards",
  activeSize = 380,
  inactiveSize = 200,
  baseSize = 400,
} = {}) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;

    let cards = gsap.utils.toArray(selector);
    if (!cards.length) return;

    const handleEnter = (card) => {
      cards.forEach((c) => {
        const v = c.querySelector("video");

        gsap.to(c, {
          flexBasis: c === card ? activeSize : inactiveSize,
          duration: 0.9,
          ease: "power4.out",
        });

        if (v) {
          c === card ? v.play() : v.pause();
        }
      });
    };

    const handleLeave = () => {
      cards.forEach((c) => {
        const v = c.querySelector("video");

        gsap.to(c, {
          flexBasis: baseSize,
          duration: 0.8,
          ease: "power4.out",
        });

        if (v) v.pause();
      });
    };

    cards.forEach((card) => {
      card.__enter = () => handleEnter(card);
      card.__leave = handleLeave;

      card.addEventListener("mouseenter", card.__enter);
      card.addEventListener("mouseleave", card.__leave);
    });

    //  Resize handler
    const handleResize = () => {
      cards = gsap.utils.toArray(selector);

      gsap.set(cards, {
        flexBasis: baseSize,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", card.__enter);
        card.removeEventListener("mouseleave", card.__leave);
      });

      window.removeEventListener("resize", handleResize);
    };
  }, [isHover]);
}
