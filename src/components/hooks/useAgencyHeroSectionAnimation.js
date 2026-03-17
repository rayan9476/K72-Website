// useHeroScrollAnimation.js
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { images } from "../../Data/AgencyHeroSectionData";
import { useGsapNative } from "./useGsapNative";
import { useIsHoverDevice } from "./useIsHoverDevice";

gsap.defaults({ overwrite: "auto" });
const useAgencyHeroSectionAnimation = () => {
  const containerRef = useRef(null);
  const imgeConatinerRef2 = useRef(null);
  const imageRef2 = useRef(null);
  const imgeConatinerRef = useRef(null);
  const imageRef = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useGsapNative({
    scopeRef: containerRef,
    deps: [isHover],
    setup: () => {
      const aspectRatio = window.innerWidth / window.innerHeight;

      // lg screens

      if (!isHover && window.innerWidth <= 1279) {
        if (aspectRatio <= 1) {
          gsap.to(imgeConatinerRef2.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 54%",
              end: "bottom 75%",
              scrub: true,
              pin: imgeConatinerRef2.current,
              anticipatePin: 1,
            },
          });

          gsap.to(imageRef2.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 40%",
              end: "bottom 75%",
              scrub: true,
              onUpdate: (self) => {
                if (!imageRef2.current) return;
                const index = Math.floor(self.progress * (images.length - 1));
                imageRef2.current.src = images[index].src;
              },
            },
          });
        } else {
          gsap.to(imgeConatinerRef2.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "bottom 54%",
              scrub: true,
              pin: imgeConatinerRef2.current,
              anticipatePin: 1,
            },
          });
          gsap.to(imageRef2.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 54%",
              end: "bottom 54%",
              scrub: true,
              onUpdate: (self) => {
                if (!imageRef2.current) return;
                const index = Math.floor(self.progress * (images.length - 1));
                imageRef2.current.src = images[index].src;
              },
            },
          });
        }
      }

      // xl and above
      if (window.innerWidth > 1279) {
        gsap.to(imgeConatinerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: aspectRatio < 1 ? "top 54%" : "top 56%",
            end: "bottom 50%",
            scrub: true,
            pin: imgeConatinerRef.current,
            pinSpacing: false,
            anticipatePin: 1,
          },
        });

        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 54%",
            scrub: true,
            pinSpacing: false,
            onUpdate: (self) => {
              if (!imageRef.current) return;
              const index = Math.floor(self.progress * (images.length - 1));
              imageRef.current.src = images[index].src;
            },
          },
        });
      }
    },
  });

  useEffect(() => {
    // Animate immediately (NO delayedCall)
    gsap.to(".animate_hero_section_text", {
      y: 0,
      // opacity: 1,
      autoAlpha: 1,
      duration: 1.8,
    });

    gsap.fromTo(
      ".animate_hero_image",
      { clipPath: "inset(0 300% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.8 },
    );
  }, []);
  return {
    containerRef,
    imgeConatinerRef2,
    imageRef2,
    imgeConatinerRef,
    imageRef,
  };
};

export default useAgencyHeroSectionAnimation;
