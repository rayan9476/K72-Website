import { useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useFakeScrollbar(thumbRef, options = {}) {
  const { bgColor = null, thumbRatio = 0.12, fadeDelay = 100 } = options;
  const location = useLocation();
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;

    let lenis;
    let rafId;
    let fadeTimeout;
    let fadeTween;

    let isVisible = false;
    let lastScroll = -1;

    const showThumb = () => {
      if (isVisible) return;
      gsap.killTweensOf(thumbRef.current, "opacity");
      gsap.set(thumbRef.current, { opacity: 1 });
      isVisible = true;
    };

    const hideThumb = () => {
      gsap.killTweensOf(thumbRef.current, "opacity");
      gsap.to(thumbRef.current, {
        opacity: 0,
        duration: 0.2,
        overwrite: true,
        onComplete: () => (isVisible = false),
      });
    };

    const updateThumb = ({ scroll, limit }) => {
      if (!limit || !thumbRef.current) return;

      // ignore inertial micro-updates
      if (Math.abs(scroll - lastScroll) < 0.1) return;
      lastScroll = scroll;

      const thumbHeight = window.innerHeight * thumbRatio;
      const progress = scroll / limit;

      gsap.set(thumbRef.current, {
        height: thumbHeight,
        y: progress * (window.innerHeight - thumbHeight),
      });

      showThumb();

      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(hideThumb, fadeDelay);
    };

    let tries = 0;

    const init = () => {
      lenis = window.__lenis;

      if (!lenis || !thumbRef.current) {
        if (tries < 60) {
          tries++;
          rafId = requestAnimationFrame(init);
        }
        return;
      }

      lenis.on("scroll", updateThumb);

      if (bgColor) {
        thumbRef.current.style.background = bgColor;
      }
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fadeTimeout);

      if (lenis) {
        lenis.off("scroll", updateThumb);
      }

      if (fadeTween) fadeTween.kill();
    };
  }, [bgColor, thumbRatio, fadeDelay, location.pathname, isHover]);
}
