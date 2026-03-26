import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export function useStackedCardsScrollAnimation2(
  wrapper,
  card,
  pin,
  end,
  yPercent,
) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!isHover || !wrapper || !card || !pin) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(card);
      gsap.set(cards, {
        yPercent: 100,
        force3D: true,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: `+=${cards.length * end}%`,
          scrub: true,
          pin: pin.current,
          pinSpacing: true,
        },
      });

      cards.forEach((card) => {
        tl.to(card, {
          yPercent: yPercent,
          ease: "none",
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, [wrapper, card, pin, isHover, end, yPercent]);
}
