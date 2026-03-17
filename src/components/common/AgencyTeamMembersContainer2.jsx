import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
function AgencyTeamMembersContainer2({ data }) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here
  const section2 = useRef(null);

  useLayoutEffect(() => {
    if (!isHover) return;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const st = ScrollTrigger.create({
      trigger: section2.current,
      start: "top top",
      end: aspectRatio <= 1 ? "+=100%" : "+=150%",
      pin: true,
      pinSpacing: false,
    });

    return () => st.kill();
  }, [isHover]);

  return (
    <>
      <div className="team_wrapper_2 relative  top-0 w-full h-full mb-0 lg:block lg:h-[90vh]  xl:h-screen lg:w-[100vw]">
        <div className="team_2_img_wrapper pointer-events-none" ref={section2}>
          <figure className="A_team_member_2_img z-0 relative top-1/2   left-1/2 -translate-x-1/2 h-[75vw] w-[50vw]">
            <img
              className="rounded-[17.5px] h-full w-full object-cover"
              src={data?.image}
              alt={data?.name}
            />
          </figure>
        </div>
        <div className="A_team_member_2_content   ">
          <div className="A_team_member_1_name_container z-20 flex absolute top-[30%]  lg:top-1/4 xl:top-1/12 left-1/2">
            <span className="A_team_member_1_name_content min-w-[100vw] pr-[25vw] relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.name}
              </span>
            </span>
            <span className="A_team_member_1_name_content min-w-[100vw]  pr-[25vw] lg:pr-0 relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.name}
              </span>
            </span>
            <span className="A_team_member_1_name_content min-w-[100vw]  pr-[25vw] lg:pr-0 relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.name}
              </span>
            </span>
            <span className="A_team_member_1_name_content min-w-[100vw]  pr-[25vw] lg:pr-0 relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.name}
              </span>
            </span>
          </div>

          <div className="A_team_member_1_name_position_container z-20 flex items-center text-center absolute top-1/2 lg:top-[40%]  w-full whitespace-nowrap">
            <span className="A_team_member_1_name_position_content flex items-center min-w-[200%] md:min-w-[140%] xl:min-w-[120vw] 3xl:min-w-[95vw] pr-[25vw] relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.lastName}
              </span>
              <span className="A_team_member_1_position mx-[78.75px] text-[26.5px] lg:text-[28.125px] text-white uppercase font-[Lausanne2]">
                {data.role}
              </span>
            </span>

            <span className="A_team_member_1_name_position_content flex items-center min-w-[200%] md:min-w-[140%] xl:min-w-[120vw] 3xl:min-w-[95vw] pr-[50vw] relative">
              <span className="A_team_member_1_name text-[10vw] text-[#D3FD50] uppercase font-[Lausanne2]">
                {data.lastName}
              </span>
              <span className="A_team_member_1_position mx-[78.75px] text-[26.5px] lg:text-[28.125px] text-white uppercase font-[Lausanne2]">
                {data.role}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgencyTeamMembersContainer2;
