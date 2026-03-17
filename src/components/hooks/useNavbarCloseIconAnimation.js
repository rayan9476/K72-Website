import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);
gsap.defaults({ overwrite: "auto" });
const useNavbarCloseIconAnimation = (ismenuOpen) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // when closing animation ends, show lines again
        if (!ismenuOpen) {
          gsap.set(".lines", { opacity: 1 });
        }
      },
    });

    if (ismenuOpen) {
      gsap.set(".lines", { opacity: 0 });

      tl.to(".animate_close_icon", {
        opacity: 1,
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      tl.to(".animate_close_icon ", {
        x: "150%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [ismenuOpen]);
};

export default useNavbarCloseIconAnimation;
