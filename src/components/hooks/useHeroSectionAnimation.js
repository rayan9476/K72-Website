import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
const useHeroSectionAnimation = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.to(".animationtext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
      .fromTo(
        ".animationtextpara",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 1.2,
          ease: "power2.out",
        },
        "<",
      )
      .fromTo(
        ".animationbuttons",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 1.2,
          ease: "power2.out",
        },
        "<",
      );
  }, []);
};

export default useHeroSectionAnimation;
