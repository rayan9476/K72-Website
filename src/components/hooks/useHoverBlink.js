import { useEffect } from "react";
import { gsap } from "gsap";
import { useLockedHoverCardInfo } from "./useLockedHoverCardInfo";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export function useHoverBlink(
  hoveredIndex,
  hoveredImage,
  data,
  parentSelector = ".project_info_content span",
) {
  const lockedInfo = useLockedHoverCardInfo({
    hoveredIndex,
    hoveredImage,
    data,
  });
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useEffect(() => {
    if (!isHover) return;
    if (hoveredIndex == null) return;

    const items = document.querySelectorAll(parentSelector);

    items.forEach((item) => {
      const bg = item.querySelector(".bg");
      if (!bg) return;
      gsap.set(bg, { display: "none", scaleY: 0 });
      if (lockedInfo) {
        if (hoveredIndex) {
          gsap.fromTo(
            bg,
            { scaleY: 0.9, display: "block" },
            {
              scaleY: 0,
              duration: 0.2,
              ease: "power2.inOut",
              overwrite: "auto",
            },
          );
        } else {
          gsap.set(bg, { display: "none", scaleY: 0 });
        }
      }
    });
  }, [hoveredIndex, hoveredImage, data, isHover, lockedInfo, parentSelector]);
}
