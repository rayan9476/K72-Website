import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" }); 
export default function useWorkCardsScrollAnimation({ images }) {
  // 1024px start 1599px  end

  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!isHover || !images?.length || window.innerWidth > 1599) return;

    gsap.set(".card_container", { clearProps: "height" });

    let ctx;

    const cleanup = () => {
      ctx?.revert();
      ScrollTrigger.refresh();
    };

    cleanup();

    const init = () => {
      const cards = gsap.utils.toArray(".card_container");
      const lol = document.querySelector(".lol");

      if (!cards.length || !lol) return;
      const isDestop = window.innerWidth < 1279;

      // crad height
      let cardHeight;
      if (window.innerWidth >= 1280) cardHeight = "469px";
      else cardHeight = "343px";

      // timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: lol,
          start: () => (window.innerWidth < 1279 ? "top 65%" : "top 70%"),
          end: () =>
            isDestop ? `+=${cards.length * 340}` : `+=${cards.length * 469}`,
          // scrub: true,
          scrub: 0.2,
        },
      });

      cards.forEach((card) => {
        tl.fromTo(
          card,
          { height: 100 },
          { height: cardHeight, ease: "none" },
        );
      });
    };

    // resize handler
    init();
    window.addEventListener("resize", init);
    // clean up
    return () => {
      window.removeEventListener("resize", init);
    };
  }, [images, isHover]);

  // 1600px start never end

  useLayoutEffect(() => {
    if (!isHover || !images?.length || window.innerWidth < 1599) return;

    gsap.set(".card_container", { clearProps: "height" });

    let ctx;

    const cleanup = () => {
      ctx?.revert();
    };

    cleanup();

    const init = () => {
      const cards = gsap.utils.toArray(".card_container");
      const lol = document.querySelector(".lol");

      if (!cards.length || !lol) return;

      const isDestop = window.innerWidth < 2559;

      // crad height
      let cardHeight;
      if (window.innerWidth >= 2560) cardHeight = "946px";
      else if (window.innerWidth >= 1600) cardHeight = "583px";
      else cardHeight = "583px";
      // timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: lol,
          start: () => (window.innerWidth < 1279 ? "top 50%" : "top 70%"),
          end: () =>
            isDestop ? `+=${cards.length * 583}` : `+=${cards.length * 946}`,
          // scrub: true,
          scrub: 0.2,
        },
      });

      cards.forEach((card) => {
        tl.fromTo(
          card,
          { height: 189 },
          { height: cardHeight, ease: "none" },
        );
      });
    };

    // resize handler
    init();
    window.addEventListener("resize", init);
    // clean up
    return () => {
      window.removeEventListener("resize", init);
    };
  }, [images, isHover]);
}
