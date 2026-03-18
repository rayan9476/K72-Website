import { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
const useStairsAnimation = () => {
  const stairsContainerRef = useRef(null);
  const appRef = useRef(null);
  const currentPath = useLocation();
  const isFirstRender = useRef(true);

  // run only on initally load animation start here
  useLayoutEffect(() => {
    // if (currentPath === "/contact") return;
    if (!stairsContainerRef.current || !isFirstRender.current) return;

    const stairs = stairsContainerRef.current.querySelectorAll(".stairs");
    if (!stairs.length) return;

    const ctx = gsap.context(() => {
      gsap.set(stairs, { y: "0%", overwrite: "auto" });

      const tl = gsap.timeline({ delay: 0.7 });

      tl.set(stairsContainerRef.current, {
        opacity: 1,
        overwrite: "auto",
      });

      tl.to(stairs, {
        y: "100%",
        stagger: {
          amount: -0.2,
        },
        overwrite: "auto",
      })

        .set(stairsContainerRef.current, {
          opacity: 0,
          overwrite: "auto",
        })

        .set(stairs, {
          y: "0%",
          overwrite: "auto",
        });

      tl.call(() => {
        isFirstRender.current = false;
      });
    });

    return () => ctx.revert();
  }, []);
  // run only on initally load animation ends here

  // run only on route change animation start here

  useLayoutEffect(() => {
    if (!stairsContainerRef.current || isFirstRender.current) return;

    const stairs = stairsContainerRef.current.querySelectorAll(".stairs");
    if (!stairs.length) return;

    const ctx = gsap.context(() => {
      gsap.set(stairs, { y: "0%", overwrite: "auto" });

      const tl = gsap.timeline({ delay: 0.7 });

      tl.set(stairsContainerRef.current, {
        opacity: 1,
        overwrite: "auto",
      });

      tl.to(stairs, {
        y: "100%",
        stagger: {
          amount: -0.2,
        },
        overwrite: "auto",
      })

        .set(stairsContainerRef.current, {
          opacity: 0,
          overwrite: "auto",
        })

        .set(stairs, {
          y: "0%",
          overwrite: "auto",
        });
    });

    return () => ctx.revert();
  }, [currentPath.pathname]);
  // run only on route change animation ends here

  return { stairsContainerRef, appRef };
};

export default useStairsAnimation;
