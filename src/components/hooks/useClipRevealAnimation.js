import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
export default function useClipRevealAnimation(hoveredIndex, containerHover) {
  useGSAP(() => {
    const wrapper = document.querySelectorAll(".A_team_members_image_wrapper");
    if (!wrapper) return;

    wrapper.forEach((wrapper) => {
      if (!wrapper) return;

      if (containerHover) {
        // forward animation on hover
        gsap.fromTo(
          wrapper,
          { clipPath: "inset(0 300% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power2.out" },
        );
      } else {
        // reverse animation for non-hovered wrappers
        gsap.to(wrapper, {
          clipPath: "inset(0 300% 0 0)",
          duration: 0.7,
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    });
  }, [containerHover]);

  //  animation for img  start here

  useGSAP(() => {
    if (!containerHover) return;
    const images = document.querySelectorAll("#team_members_image");
    images.forEach((img, index) => {
      if (!img) return;

      if (hoveredIndex === index) {
        // forward animation on hover
        gsap.fromTo(
          img,
          { clipPath: "inset(0 300% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power2.out" },
        );
      }
    });
  }, [hoveredIndex]);

  //  animation for img  ends here
}
