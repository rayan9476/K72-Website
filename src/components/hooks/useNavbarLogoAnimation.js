// useNavbarLogoAnimation.js
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
const useNavbarLogoAnimation = ({ hoveredIndex, siteLogoRef }) => {
  const [isFirstRender, setisFirstRender] = useState(true);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useGSAP(() => {
    if (!isHover) return;
    //  Skip animation on initial mount
    if (isFirstRender === true) {
      setisFirstRender(false);
      return;
    }
    if (!siteLogoRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      if (hoveredIndex) {
        tl.to(siteLogoRef.current, {
          height: window.innerWidth < 1999 ? "30px" : "40px",
          duration: 0.3,
          overwrite: "auto",
        });
      } else {
        tl.to(siteLogoRef.current, {
          height: window.innerWidth < 1999 ? "60px" : "68px",
          duration: 0.5,
          overwrite: "auto",
        });
      }
    });

    return () => ctx.revert();
  }, [hoveredIndex, siteLogoRef, isHover]);
};

export default useNavbarLogoAnimation;
