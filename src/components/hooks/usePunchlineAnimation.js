import { useEffect } from "react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
export function usePunchlineAnimation(Punchline = ".animate_punchline") {
  useEffect(() => {
    const lines = document.querySelectorAll(Punchline);

    if (!lines.length) return;
    gsap.fromTo(
      lines,
      {
        y: -600,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.15,
      },
    );
  }, []);
}
