import { useEffect } from "react";
import gsap from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useHoverCursorFlip(containerRef, cursorRef, isRightSides) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;
    const container = containerRef.current;
    const cursor = cursorRef.current;

    if (!container && !cursor) return;

    const moveCursor = (e) => {
      const rect = container.getBoundingClientRect();
      // mouse position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isRightSide = x > rect.width / 2;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.3,
        ease: "power3.out",
      });

      if (isRightSides) {
        gsap.to(cursor.querySelector("svg"), {
          scaleX: isRightSide ? 1 : -1,
          duration: 0.25,
          ease: "power3.out",
        });
      }
    };

    const showCursor = () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
    };

    container.addEventListener("mousemove", moveCursor);
    container.addEventListener("mouseenter", showCursor);
    // clean up
    return () => {
      container.removeEventListener("mousemove", moveCursor);
      container.removeEventListener("mouseenter", showCursor);
    };
  }, [containerRef, cursorRef, isHover, isRightSides]);
}
