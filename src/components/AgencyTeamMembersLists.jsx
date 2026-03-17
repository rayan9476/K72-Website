import { agencyTeamMembersList } from "../Data/AgencyTeamMembersData.js";
import { useState, useRef, useEffect, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAgencyTeamMembersListsAnimation from "./hooks/useAgencyTeamMembersListsAnimation.js";
import { useIsHoverDevice } from "./hooks/useIsHoverDevice.js";
gsap.registerPlugin(ScrollTrigger);
function AgencyTeamMembersLists() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [containerHover, setcontainerHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const imagesWrapperRef = useRef(null);

  // team member list image animation start here
  useAgencyTeamMembersListsAnimation(imagesWrapperRef);
  // team member list image animation start ends

  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  const [ImagesComponent, setImagesComponent] = useState(null);

  // Lazy load images only on large screens
  useEffect(() => {
    if (isHover) {
      import("./AgencyTeamMemberListImages.jsx").then((module) =>
        setImagesComponent(() => module.default),
      );
    } else {
      setImagesComponent(null);
    }
  }, [isHover]);

  return (
    <>
      <div className="overlay hidden lg:block  relative top-0 left-0 w-full h-8 bg-black z-0 pointer-events-none"></div>

      <div
        className="A_team_members_lists  z-0  relative w-full min-h-[70vh] mt-[11.7rem] px-[8.75px] lg:px-0  "
        onMouseEnter={() => setcontainerHover(true)}
        onMouseLeave={() => setcontainerHover(false)}
      >
        <div
          id="team-list-sticky-area"
          className="scroll absolute pointer-events-none  left-0 right-0 -bottom-[30vh] -top-[30vh]"
        ></div>

        <div
          ref={imagesWrapperRef}
          className={`A_team_members_images  pointer-events-none  py-4  z-30 -top-[30vh]  -bottom-[30vh] absolute  h-screen left-0  flex items-center `}
        >
          <div className="A_team_members_images_cotainer_outer pointer-events-none  fixed  lg:w-[calc((100vw-13.125rem)*5/20+2.5rem)] lg:h-[calc(((100vw-13.125rem)*5/20+2.5rem)*3/2)]   lg:ml-[calc((100vw-13.125rem)*5/20+3.75rem)] transition-transform duration-[300ms] ease-[cubic-bezier(0.215,0.6,0.355,1)]">
            <div
              className={`image_content_inner  overflow-hidden pointer-events-none  absolute  top-0 left-0  rounded-[20px] lg:w-[calc((100vw-13.125rem)*5/20+2.5rem)] lg:h-[calc(((100vw-13.125rem)*5/20+2.5rem)*3/2)]`}
            >
              {ImagesComponent && (
                <Suspense fallback={null}>
                  <ImagesComponent
                    hoveredIndex={hoveredIndex}
                    containerHover={containerHover}
                  />
                </Suspense>
              )}
            </div>
          </div>
        </div>

        <ul class="A-team_list z-0  relative  w-full block ">
          {agencyTeamMembersList.map((member, index) => (
            <li
              key={member.id}
              className="A-team_row group overflow-hidden relative  p-[8.75px] lg:px-[9.375px] lg:py-[7px] xl:px-2.5 3xl:p-[12.5px] flex items-center justify-between border-t-1  border-gray-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              <span
                className={`A-team_row_position ${
                  activeIndex === index ? "active-text" : "not-active-text"
                } relative z-[2] flex self-start text-[10px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] uppercase md:normal-case font-medium font-[Lausanne2] text-[#D3FD50] transition-all duration-150 ease-in lg:group-hover:text-black `}
              >
                {member.position}
              </span>
              <span className="A-team_row_name relative z-[2] flex py-[4px] lg:py-0 items-center justify-center gap-0.5 md:gap-2">
                <span
                  className={`${
                    activeIndex === index ? "active-text" : "not-active-text"
                  }   text-[16px]  md:text-[35px] lg:text-[37.5px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[50px] uppercase font-medium font-[Lausanne2] text-white transition-all duration-150 ease-in lg:group-hover:text-black`}
                >
                  {member.firstName}
                </span>{" "}
                <span
                  className={`${
                    activeIndex === index ? "active-text" : "not-active-text"
                  } text-[16px] md:text-[35px] lg:text-[37.5px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[50px] uppercase font-medium font-[Lausanne2] text-white transition-all duration-150 ease-in lg:group-hover:text-black`}
                >
                  {member.lastName}
                </span>
              </span>
              <div
                className={`A-team_row_overlay ${
                  activeIndex === index ? "active" : "not-active"
                } z-0 absolute top-0 left-0 h-full  w-full xl:transform  xl:translate-y-[-100%] xl:group-hover:translate-y-[0%] transition-all duration-200 ease-in-out bg-[#D3FD50]`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AgencyTeamMembersLists;
