import { useEffect } from "react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
export function useLogoFillAnimation({ logoRef, isMenuOpen, white }) {
  useEffect(() => {
    if (white) return;
    if (!logoRef.current) return;
    gsap.to(logoRef.current.querySelector("path"), {
      fill: isMenuOpen ? "#ffffff" : "#000000",
      duration: 0.8,
      ease: "power2.out",
    });
  }, [isMenuOpen, white, logoRef]);
}
