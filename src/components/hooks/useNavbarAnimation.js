import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationType } from "react-router-dom";
import gsap from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
import { RouteChangeStairsContext } from "../../context/RouteChangeStairsContext";
import { useContext } from "react";
gsap.defaults({ overwrite: "auto" });
const useNavbarAnimation = (hoveredIndex) => {
  const navType = useNavigationType();
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  // navbar right animation start here
  const hoveredIndexRef = useRef(false);

  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex; // always keep latest value
  }, [hoveredIndex]);

  let lastScrollY = window.scrollY;

  let isHidden = false;
  const threshold = window.innerHeight * 0.1;

  // breakpoint height data
  const breakpointHeights = {
    lg: 130,
    xl: 130,
    "3xl": 162.5,
    "2xl": 174,
    default: 130,
  };

  const getBreakpointHeight = () => {
    const w = window.innerWidth;
    // height change based on screen size help of tailwind breakpoint some custom
    if (w >= 2000) return breakpointHeights["2xl"];
    if (w >= 2560) return breakpointHeights["3xl"];
    if (w >= 1280) return breakpointHeights.xl;
    return breakpointHeights.default;
  };

  const breakpointHeights2 = {
    "2xl": 68,
    default: 48,
  };

  const getBreakpointHeight2 = () => {
    const w = window.innerWidth;
    // height change based on screen size help of tailwind breakpoint some custom
    if (w >= 2000) return breakpointHeights2["2xl"];
    return breakpointHeights2.default;
  };
  // height based on screen size logic  ends here
  const { isRouteChanging, setIsRouteChanging } = useContext(
    RouteChangeStairsContext,
  );

  const tlRef = useRef(null);
  const [isComplete, setisComplete] = useState(false);

  //  this is only run on mount means on refresh to handle the element
  const applyNavbarState = () => {
    if (tlRef.current) {
      tlRef.current.kill();
    }

    gsap.killTweensOf([
      "#nav_right_animate_1",
      "#nav_right_animate_agency",
      "#nav_right_animate_work",
    ]);

    const currentY = window.scrollY;
    const atTop = currentY <= threshold;

    if (!atTop) {
      isHidden = true;
      const targetHeight2 = getBreakpointHeight2();

      gsap.set("#nav_right_animate_1", {
        height: targetHeight2,
        overwrite: "auto",
      });
      gsap.set(
        ".navbar_menu_text_1 , .animate_work_text, .animate_agency_text",
        { opacity: 0, overwrite: "auto" },
      );
      gsap.set("#nav_right_animate_agency, #nav_right_animate_work", {
        y: "-110%",
        overwrite: "auto",
      });

      return;
    }

    isHidden = false;
    const targetHeight2 = getBreakpointHeight2();
    const targetHeight = getBreakpointHeight();

    gsap.set("#nav_right_animate_1", {
      height: targetHeight2,
      overwrite: "auto",
    });
    gsap.set("#nav_right_animate_agency, #nav_right_animate_work", {
      y: "-110%",
      overwrite: "auto",
    });

    gsap.set(".navbar_menu_text_1 , .animate_work_text, .animate_agency_text", {
      opacity: 0,
      overwrite: "auto",
    });

    const tl = gsap.timeline({
      delay: 0.9,
      onComplete: () => setisComplete(true),
    });
    tlRef.current = tl;

    tlRef.current
      .to(
        "#nav_right_animate_1",
        {
          height: targetHeight,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3",
      )

      .to(
        "#nav_right_animate_agency",
        {
          y: "0%",
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      ) // starts slightly before previous ends

      .to(
        "#nav_right_animate_work",
        {
          y: "0%",
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      )

      .to(
        ".navbar_menu_text_1",
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.8",
      )

      .to(
        ".animate_work_text, .animate_agency_text",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6",
      );
  };

  const location = useLocation();

  // hover animation start here

  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];

    const isBackForward = navigation?.type === "back_forward";

    if (isBackForward) {
      if (!isRouteChanging) return;
    }

    if (!isHover) return;
    setIsRouteChanging(false);

    const syncNavbar = () => {
      applyNavbarState();

      lastScrollY = window.scrollY;
    };

    if (navType === "POP") {
      // wait for browser to restore scroll
      requestAnimationFrame(() => {
        requestAnimationFrame(syncNavbar);
      });
    } else {
      syncNavbar();
    }

    const handleResize = () => applyNavbarState();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, isHover, isRouteChanging]);

  const prevHoveredIndexRef = useRef(null);

  const prevHoveredIndex = prevHoveredIndexRef.current;
  const tlRef3 = useRef(null);

  useEffect(() => {
    // hovered index logic
    if (!isHover || !isComplete) return;

    if (tlRef3.current) {
      tlRef3.current.kill();
    }

    const tl = gsap.timeline({});
    tlRef3.current = tl;

    tlRef3.current.clear();
    if (hoveredIndex) {
      isHidden = true;

      if (window.scrollY > threshold) return; // only active in top 10%
      gsap.killTweensOf([
        "#nav_right_animate_1",
        ".navbar_menu_text_1",
        "#nav_right_animate",
      ]);

      const target2 = getBreakpointHeight2();

      tlRef3.current
        .to(
          "#nav_right_animate_1",
          {
            height: target2,
            duration: 0.6,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          "-=0.3",
        )

        .to(
          "#nav_right_animate_agency",
          {
            y: "-100%",
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: "auto",
          },

          "-=0.7",
        )
        .to(
          "#nav_right_animate_work",
          {
            y: "-100%",
            duration: 0.4,
            ease: "power2.inOut",
            overwrite: "auto",
          },

          "-=0.7",
        )
        .to(
          ".navbar_menu_text_1",
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          "-=0.5",
        )
        .to(
          ".animate_work_text, .animate_agency_text",
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          "-=0.6",
        );
    } else {
      if (window.scrollY > threshold) return;
      gsap.killTweensOf([
        "#nav_right_animate_1",
        ".navbar_menu_text_1",
        "#nav_right_animate",
      ]);

      const target = getBreakpointHeight();
      const target2 = getBreakpointHeight2();

      if (prevHoveredIndex === true) {
        gsap.set("#nav_right_animate_agency, #nav_right_animate_work", {
          y: "-100%",
          overwrite: "auto",
        });
        gsap.set("#nav_right_animate_1", {
          height: target2,
          overwrite: "auto",
        });
      }

      tlRef3.current
        .to(
          "#nav_right_animate_1",
          {
            height: target,
            duration: 0.9,
            transformOrigin: "top",
            ease: "power3.inOut",
            overwrite: "auto",
          },
          "-=0.3",
        )

        // nav 2 3
        .to(
          " #nav_right_animate_agency",
          {
            y: "0%",
            duration: 0.5,

            transformOrigin: "top",
            overwrite: "auto",
            ease: "power3.inOut",
          },
          "-=0.5",
        )

        .to(
          "#nav_right_animate_work",
          {
            y: "0%",
            duration: 0.5,

            transformOrigin: "top",
            overwrite: "auto",
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        .to(
          ".navbar_menu_text_1",
          {
            opacity: 1,
            duration: 0.3,

            transformOrigin: "top",
            overwrite: "auto",
            ease: "power3.inOut",
          },
          "-=0.7",
        )
        .to(
          ".animate_work_text, .animate_agency_text",
          {
            opacity: 1,
            duration: 0.3,

            overwrite: "auto",
            ease: "power2.inOut",
          },
          "-=0.7",
        );
    }

    prevHoveredIndexRef.current = hoveredIndex; // store the latest value

    lastScrollY = 0;
  }, [hoveredIndex, isHover]);
  // hover animation ends here

  // GSAP navbar scroll animation start here
  const tlRef2 = useRef(null);

  useEffect(() => {
    if (!isHover || !isComplete) return;

    if (tlRef2.current) {
      tlRef2.current.kill();
      return;
    }

    let initialized = false;
    const tl = gsap.timeline({
      defaults: { immediateRender: false, invalidateOnRefresh: true },
    });
    if (tlRef2.current) {
      tlRef2.current.kill();
    }
    tlRef2.current = tl;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (hoveredIndexRef.current === true) {
        lastScrollY = currentY;
        return; // block ALL scroll animations
      }

      // Prevent scroll logic from firing on initial page load
      if (!initialized) {
        initialized = true;
        lastScrollY = currentY;
        return;
      }

      // scroll down when the user in top  10%  hide

      if (currentY > lastScrollY && currentY > threshold && !isHidden) {
        // tl.clear();
        tlRef2.current.clear();

        const target2 = getBreakpointHeight2();

        tlRef2.current
          .to(
            "#nav_right_animate_1",
            {
              height: target2,
              duration: 0.7,
              ease: "power2.inOut",
              overwrite: "auto",
            },
            "-=0.3",
          )

          // nav 2 3
          .to(
            "#nav_right_animate_agency",
            {
              y: "-110%",
              duration: 0.5,
              overwrite: "auto",
              ease: "power2.inOut",
            },
            "-=0.7",
          )
          .to(
            "#nav_right_animate_work",
            {
              y: "-110%",

              duration: 0.4,
              overwrite: "auto",
              ease: "power2.inOut",
            },
            "-=0.7",
          )
          .to(
            ".navbar_menu_text_1",
            {
              opacity: 0,
              duration: 0.3,
              overwrite: "auto",
              ease: "power2.inOut",
            },
            "-=0.5",
          )
          .to(
            ".animate_work_text, .animate_agency_text",
            {
              opacity: 0,
              duration: 0.3,
              overwrite: "auto",
              ease: "power2.inOut",
            },
            "-=0.6",
          );

        isHidden = true;
      }
      // scroll up  show when the user back tu top above 20%
      else if (currentY < lastScrollY && currentY < threshold * 2 && isHidden) {
        gsap.killTweensOf([
          "#nav_right_animate_1",
          ".navbar_menu_text_1",
          "#nav_right_animate",
        ]);

        const target = getBreakpointHeight();

        tlRef2.current
          .to(
            "#nav_right_animate_1",
            {
              height: target,
              duration: 0.7,
              transformOrigin: "top",
              ease: "power3.inOut",
              overwrite: "auto",
            },
            "-=0.3",
          )

          // nav 2 3
          .to(
            " #nav_right_animate_agency",
            {
              y: "0%",
              duration: 0.5,

              transformOrigin: "top",
              overwrite: "auto",
              ease: "power3.inOut",
            },
            "-=0.5",
          )

          .to(
            "#nav_right_animate_work",
            {
              y: "0%",
              duration: 0.5,

              transformOrigin: "top",
              overwrite: "auto",
              ease: "power3.inOut",
            },
            "-=0.4",
          )
          .to(
            ".navbar_menu_text_1",
            {
              opacity: 1,
              duration: 0.3,

              transformOrigin: "top",
              overwrite: "auto",
              ease: "power3.inOut",
            },
            "-=0.7",
          )
          .to(
            ".animate_work_text, .animate_agency_text",
            {
              opacity: 1,
              duration: 0.3,

              overwrite: "auto",
              ease: "power2.inOut",
            },
            "-=0.7",
          );

        isHidden = false;
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHover, isComplete]);
};

export default useNavbarAnimation;
