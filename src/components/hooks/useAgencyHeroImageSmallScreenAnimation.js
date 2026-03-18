// useAgencyHeroImageSmallScreen.js
import { useRef } from "react";
import gsap from "gsap";
import { images } from "../../Data/AgencyHeroSectionData";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyHeroImageSmallScreenAnimation = () => {
  const imageRef3 = useRef(null);
  const imageSmallRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth > 767) return;

    let ctx;

    const initScrollTriggers = () => {
      ctx = gsap.context(() => {
        //  animation for sm or md start here

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
        });

        images.forEach((img) => {
          tl.to(
            {},
            {
              duration: 1,
              ease: "power2.out",
              onUpdate: () => {
                if (!imageRef3.current) return;
                imageRef3?.current?.setAttribute("src", img.small);
                imageSmallRef?.current?.setAttribute("srcset", img.small);
              },
            },
          );
        });

        //  animation for sm or md ends here
      });
    };

    //resize

    const handleResize = () => {
      initScrollTriggers();
      ScrollTrigger.refresh();
    };
    // init
    initScrollTriggers();

    // resize listener
    window.addEventListener("resize", handleResize);

    // cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      ctx?.revert();
    };
  });

  return { imageRef3, imageSmallRef };
};

export default useAgencyHeroImageSmallScreenAnimation;
