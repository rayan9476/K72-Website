import { useEffect } from "react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
export function useInfiniteWheelRotate({ containerRef }) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.children);
    if (!sections.length) return;

    const sectionHeight = sections[0].offsetHeight;

    // duplicate once
    sections.forEach((section) => {
      container.appendChild(section.cloneNode(true));
    });

    let currentY = 0;
    let targetY = 0;
    let lastDir = 0; // -1 or 1

    const ease = 0.08;
    const ROTATE_ANGLE = 5;

    const setRotate = gsap.quickSetter(".contact_banner", "rotate", "deg");

    const onWheel = (e) => {
      e.preventDefault();

      const dir = e.deltaY > 0 ? -1 : 1;

      if (e.deltaY < 0 && currentY <= 0) {
        targetY = 0;
        return;
      }

      targetY += e.deltaY;

      if (dir !== lastDir) {
        setRotate(dir * ROTATE_ANGLE);
        lastDir = dir;
      }
    };

    //  infinite scroll for mobile
    let touchStartY = 0;

    //  inertia
    let velocity = 0;
    const FRICTION = 0.92;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      e.preventDefault();

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      velocity = deltaY;

      const dir = deltaY > 0 ? -1 : 1;

      if (deltaY < 0 && currentY <= 0) {
        targetY = 0;
        return;
      }

      targetY += deltaY;

      if (dir !== lastDir) {
        setRotate(dir * ROTATE_ANGLE);
        lastDir = dir;
      }
    };

    // keyboard support
    const onKeyDown = (e) => {
      let dir = 0;

      if (e.key === "ArrowDown" || e.key === "PageDown") dir = -1;
      else if (e.key === "ArrowUp" || e.key === "PageUp") dir = 1;
      else return;

      e.preventDefault();
      targetY += dir * 40;
      setRotate(dir * ROTATE_ANGLE);
      lastDir = dir;
    };

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const animate = () => {
      if (isTouch) {
        if (Math.abs(velocity) > 0.1) {
          targetY += velocity;
          velocity *= FRICTION;
        }
      }

      currentY += (targetY - currentY) * ease;
      // infinite downward loop
      if (isTouch) {
        while (currentY >= sectionHeight && Math.abs(velocity) < 0.2) {
          const first = container.children[0];
          container.appendChild(first);
          currentY -= sectionHeight;
          targetY -= sectionHeight;
          velocity = 0;
        }
      } else {
        while (currentY >= sectionHeight && Math.abs(velocity) < 0.2) {
          const first = container.children[0];
          container.appendChild(first);
          currentY -= sectionHeight;
          targetY -= sectionHeight;
          velocity = 0;
        }
      }

      // hard stop at top
      if (currentY < 0) {
        currentY = 0;
        targetY = 0;
        velocity = 0; // safety
      }

      container.style.transform = `translate3d(0, ${-currentY}px, 0)`;
      requestAnimationFrame(animate);
    };

    // add listener for mobile
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });

    requestAnimationFrame(animate);

    return () => {
      // remove listener for clean up
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [containerRef]);
}
