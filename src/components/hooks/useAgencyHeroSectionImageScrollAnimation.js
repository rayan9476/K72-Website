// useAgencyHeroImageScroll.js
import { useRef, useLayoutEffect } from "react";
import { images } from "../Data/AgencyHeroSectionData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
const useAgencyHeroSectionImageScrollAnimation = (containerRef) => {
  const imgeConatinerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    let ctx;

    const initScrollTriggers = () => {
      ctx?.revert(); // clean previous animations

      ctx = gsap.context(() => {
        //  xl  All screens above  >= 1280px
        if (window.innerWidth >= 1280) {
          gsap.to(imgeConatinerRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 54%",
              end: "bottom 54%",
              scrub: true,
              pin: imgeConatinerRef.current,
              overwrite: "auto",
            },
          });

          gsap.to(imageRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 54%",
              end: "bottom 54%",
              scrub: true,
              overwrite: "auto",
              onUpdate: (self) => {
                const progress = self.progress;
                const index = Math.floor(progress * (images.length - 1));

                if (imageRef.current) {
                  imageRef.current.src = images[index];
                }
              },
            },
          });
          // animation for xl screen ends here
        }
      }, containerRef); // scope to container
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
  }, [containerRef]);
  return { imgeConatinerRef, imageRef };
};

export default useAgencyHeroSectionImageScrollAnimation;
