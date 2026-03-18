// useMenuAnimation.js
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.defaults({ overwrite: "auto" });
const useMenuAnimation = (ismenuOpen, setIsAnimating) => {
  //  animation for navmenu start here

  useGSAP(
    function () {
      const tl = gsap.timeline({
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
      });

      gsap.set(".menu_nav_links ", { clearProps: "all" });

      const timeout = setTimeout(() => {
        if (ismenuOpen) {
          tl.to(".menu_nav_links ", {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      }, 200);

      // Cleanup
      return () => {
        clearTimeout(timeout);
        tl.kill();
      };
    },
    [ismenuOpen],
  );

  // // animation for animate_navmenu_links start here

  useGSAP(() => {
    const items = gsap.utils.toArray("#animate_navmenu_links");
    items.forEach((item) => {
      gsap.set(item, {
        transformOrigin: "top center",
        rotateX: 90,
        transformPerspective: 800,
      });
    });

    const timeout = setTimeout(() => {
      if (ismenuOpen) {
        items.forEach((item) => {
          gsap.to(item, {
            rotateX: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        });
      }
    }, 200);

    // Cleanup
    return () => {
      clearTimeout(timeout);
    };
  }, [ismenuOpen]);

  // animation for animate_navmenu_links ends here

  function getEntryDirection(e, element) {
    const { width, height, top, left } = element.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    return Math.abs(x) > Math.abs(y)
      ? x > 0
        ? "right"
        : "left"
      : y > 0
        ? "bottom"
        : "top";
  }

  useEffect(() => {
    const items = gsap.utils.toArray(".animate_menu_item_1");

    items.forEach((item) => {
      gsap.set(item.querySelectorAll(".nav_menu_hover_text_container_1"), {
        autoAlpha: 0,
        yPercent: 100,
      });

      gsap.set(item.querySelectorAll(".nav_animate_inner"), {
        yPercent: -100,
      });

      gsap.set(item.querySelectorAll(".nav_menu_hover_text_content"), {
        opacity: 0,
      });
    });

    items.forEach((item) => {
      const target = item.querySelectorAll(".nav_menu_hover_text_container_1");
      const target2 = item.querySelectorAll(".nav_animate_inner");
      const target3 = item.querySelectorAll(".nav_menu_hover_text_content");

      const onEnter = (e) => {
        const dir = getEntryDirection(e, item);
        let fromY = dir === "top" ? "-100%" : "100%";
        gsap.set(
          target,
          {
            yPercent: fromY === "-100%" ? -100 : 100,
          },
          ">",
        );

        gsap.to(
          target,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<",
        );

        gsap.to(
          target2,
          {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<",
        );

        gsap.to(
          target3,
          {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        );
      };

      const onLeave = (e) => {
        gsap.killTweensOf([target, target2, target3]);

        const dir = getEntryDirection(e, item);

        // exit in opposite direction
        let toY = dir === "top" ? "-100%" : "100%";
        gsap.to(
          target,
          {
            yPercent: toY === "-100%" ? -100 : 100,
            autoAlpha: 0,

            duration: 0.35,
            ease: "power2.inOut",
          },
          "<",
        );

        gsap.to(
          target2,
          {
            yPercent: -100,
            duration: 0.2,
            ease: "power2.inOut",
          },
          "<",
        );
        gsap.to(
          target3,
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        );
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);

      item._cleanup = () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => {
      items.forEach((item) => item._cleanup && item._cleanup());
    };
  }, []);
};

export default useMenuAnimation;
