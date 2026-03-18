import { useEffect, useState } from "react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
const useNavbarMenuStairs = (ismenuOpen) => {
  const [isFirstRender, setisFirstRender] = useState(true);
  useEffect(() => {
    //  Skip animation on initial mount
    if (isFirstRender === true) {
      setisFirstRender(false);
      return;
    }

    const tl = gsap.timeline();
    const stairs = document.querySelectorAll(".nav_stairs");

    gsap.set(".nav_stairs ", { clearProps: "all" });

    gsap.set(".nav_stairs ", { opacity: 0, overwrite: "auto" });
    if (ismenuOpen) {
      gsap.set(".nav_stairs ", { opacity: 1, overwrite: "auto" });
      tl.from(stairs, {
        height: 0,
        stagger: {
          amount: -0.2,
        },
        duration: 0.4,
        overwrite: "auto",
        ease: "power2.inOut",
      });
    } else {
      gsap.set(".nav_stairs", { opacity: 1, overwrite: "auto" });
      tl.to(stairs, {
        y: "-100%",
        stagger: {
          amount: -0.2,
        },
        duration: 0.5,
        overwrite: "auto",
        ease: "power2.inOut",
      });
    }
  }, [ismenuOpen, isFirstRender, setisFirstRender]);
};

export default useNavbarMenuStairs;
