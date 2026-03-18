import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export default function useTeamSectionBodyColor(agencyMainRef) {
  useEffect(() => {
    if (!agencyMainRef?.current) return;
    const teamSection = agencyMainRef.current.querySelector(".team_section");
    if (!teamSection) return;

    if (window.innerWidth < 1023) {
      const st = ScrollTrigger.create({
        trigger: teamSection,
        start: window.innerWidth <= 767 ? "top 60%" : "top 40%",
        onEnter: darkMode,
        onLeaveBack: lightMode,
      });

      return () => st.kill();
    }

    // lg and above start here
    if (window.innerWidth > 1023) {
      const aspectRatio = window.innerWidth / window.innerHeight;

      const st = ScrollTrigger.create({
        trigger: teamSection,
        start: aspectRatio <= 1 ? "top 58%" : "top 50%",
        onEnter: darkMode,
        onLeaveBack: lightMode,
      });

      return () => {
        st?.kill();
      };
    }
  }, [agencyMainRef]);
}

// aniamtion funtion
function darkMode() {
  gsap.to(".agency_animate_body", {
    backgroundColor: "#000000",
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.to(
    ".main_content_2_about, .main_content_2_about *",

    {
      color: "#ffffff",
      duration: 0.4,
    },
  );

  gsap.to("#site_logo_svg path", {
    fill: "#ffffff",
    duration: 0.4,
    ease: "power2.out",
  });
}

function lightMode() {
  gsap.to(".agency_animate_body", {
    backgroundColor: "#ffffff",
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.to(
    ".main_content_2_about, .main_content_2_about *",

    {
      color: "#000000",
      duration: 0.4,
    },
  );

  gsap.to("#site_logo_svg path", {
    fill: "#000000",
    duration: 0.4,
    ease: "power2.out",
  });
}
