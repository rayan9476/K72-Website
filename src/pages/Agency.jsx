import "../styles/agency.css";
import Agencyherosection from "../components/AgencyHeroSection";
import { lazy, Suspense, useRef } from "react";
const AgencyTeamMembers = lazy(() => import("../components/AgencyTeamMembers"));
const AgencyTeamMembersLists = lazy(
  () => import("../components/AgencyTeamMembersLists"),
);
const AgencyOurProject = lazy(() => import("../components/AgencyOurProject"));
const Footer = lazy(() => import("../components/common/Footer"));
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/common/Navbar2";
import useTeamSectionBodyColor from "../components/hooks/useTeamSectionBodyColor";
import useHideTeamMemberTextContentOnScroll from "../components/hooks/useHideTeamMemberTextContentOnScroll";
import { useOurProjectCardRadiusAnimation } from "../components/hooks/useOurProjectCardRadiusAnimation";
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import { AgencyourProjectImages } from "../Data/AgencyOurProjectData";
import { useLayoutEffect } from "react";
import useScrollToTop from "../components/hooks/useScrollToTop";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  // reset tu top logic start here
  useScrollToTop();
  // reset tu top logic ends here

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    document.title = "About — K72 Agency";
  }, []);
  //  dynamic page name change  logic ends here

  const agencyMainRef = useRef(null);

  // animation for changing body color start here
  useTeamSectionBodyColor(agencyMainRef);
  // animation for changing body color  screen ends here

  //  animatio for team member text content start here
  useHideTeamMemberTextContentOnScroll();
  //  animatio for team member text content end here

  // card radius animation start here
  useOurProjectCardRadiusAnimation();
  // card radius animation ends here

  // fake scroll bar logic start here
  const thumbRef = useRef(null);
  useFakeScrollbar(thumbRef, {
    bgColor: "#7F7F7F",
  });
  // fake scroll bar logic ends here

  return (
    <>
      <div className="site_fake_scrollbar  fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0  w-full bg-[#7F7F7F] rounded-[10px] origin-top"
        />
      </div>

      <header>
        <Navbar />
      </header>

      <main
        ref={agencyMainRef}
        className="agency_animate_body min-h-screen bg-white"
      >
        <section className="main_continer relative z-0  w-full flex flex-col items-center justify-center  px-[8.75px] lg:px-[9.375px] xl:px-2.5">
          <Agencyherosection />
        </section>

        <section className="team_section relative w-full    mt-20 lg:mt-32    overflow-hidden ">
          <div className="A_team_members relative w-full h-full pt-[13.4rem] md:pt-[28rem]   lg:pt-0">
            <Suspense fallback={null}>
              <AgencyTeamMembers />
            </Suspense>
          </div>
        </section>

        <section className="team_list_section relative  -top-[11.7rem] h-full w-full bg-black mb-8 lg:mb-56 xl:mb-60 3xl:mb-[18.6rem] ">
          <Suspense fallback={null}>
            <AgencyTeamMembersLists />
          </Suspense>
        </section>

        <section className="our_projects   w-full overflow-hidden ">
          <Suspense fallback={null}>
            <AgencyOurProject projectImages={AgencyourProjectImages} />
          </Suspense>
        </section>
      </main>
      <footer className="site_footer bg-black">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}

export default Agency;
