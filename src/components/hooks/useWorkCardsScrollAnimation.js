import { useLayoutEffect } from "react";
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

    let ctx = gsap.context(() => {}); // initialize properly
    let resizeTimer;

    const init = () => {
      ctx.revert(); // kill old ScrollTriggers before making new ones

      ctx = gsap.context(() => {
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

            scrub: 0.5,
          },
        });

        cards.forEach((card) => {
          tl.fromTo(
            card,
            { height: 100 },
            { height: cardHeight, ease: "none" },
          );
        });
      });
    };

    //  resize handler with debounce
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };

    init();
    window.addEventListener("resize", handleResize);

    // clean up on unmount
    return () => {
      ctx.revert(); // kill all ScrollTriggers
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [images, isHover]);

  // 1600px start never end

  useLayoutEffect(() => {
    if (!isHover || !images?.length || window.innerWidth < 1599) return;

    gsap.set(".card_container", { clearProps: "height" });

    let ctx = gsap.context(() => {}); // initialize properly
    let resizeTimer;

    const init = () => {
      ctx.revert(); // kill old ScrollTriggers before making new ones

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".card_container");
        const lol = document.querySelector(".lol");

        if (!cards.length || !lol) return;

        const isDesktop = window.innerWidth < 2559;

        // card height
        let cardHeight;
        if (window.innerWidth >= 2560) cardHeight = "946px";
        else cardHeight = "583px";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: lol,
            start: () => (window.innerWidth < 1279 ? "top 50%" : "top 70%"),
            end: () =>
              isDesktop ? `+=${cards.length * 583}` : `+=${cards.length * 946}`,
            scrub: 0.5,
          },
        });

        cards.forEach((card) => {
          tl.fromTo(
            card,
            { height: 189 },
            { height: cardHeight, ease: "none" },
          );
        });
      });
    };

    //  resize handler with debounce
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };

    init();
    window.addEventListener("resize", handleResize);

    // clean up on unmount
    return () => {
      ctx.revert(); // kill all ScrollTriggers
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [images, isHover]);
}
