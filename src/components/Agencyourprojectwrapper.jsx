import useAgencyProjectWrapperAnimation from "./hooks/useAgencyProjectWrapperAnimation";
import { useIsHoverDevice } from "./hooks/useIsHoverDevice";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Agencyourprojectwrapper({ images }) {
  // our project aniamtion start here
  const { wrapper } = useAgencyProjectWrapperAnimation();
  // our project aniamtion ends here
  // isHover logic start here
  const isHover = useIsHoverDevice();
  // isHover logic ends here

  return (
    <>
      <Link to={images?.image1?.href}>
        <article>
          <div className="our_project_wrapper relative h-screen block cursor-pointer">
            <div
              className={`our_project_sticky_area pointer-events-none  hidden absolute top-0 left-0 right-0 h-[200vh]`}
              id="our_project_sticky_area"
            ></div>
            <div ref={wrapper} className="main_conatiner relative w-full  ">
              <div className="our_projects_header_text absolute bg-transparent flex items-center justify-center top-0 left-0 w-full z-10">
                <span className="text-[17.5px] lg:text-[18.75px] xl:text-[20px] 3xl:text-[25px] font-medium font-[Lausanne2] text-white uppercase p-[8.75px] xl:p-2.5 3xl:p-[12.5px] lg:hover:text-[#D3FD50] lg:hover:underline transition-all duration-[600ms]  ease-[cubic-bezier(0.215,0.61,0.355,1)] ">
                  View all projects
                </span>
              </div>
              <div className="our_projects_info">
                <div className="our_projects_outer group relative block cursor-pointer rounded-tl-[35px] rounded-tr-[35px]  lg:rounded-tl-[37.5px]  lg:rounded-tr-[37.5px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 3xl:rounded-tl-[50px] 3xl:rounded-tr-[50px]   w-[100vw] h-[100vh]  overflow-hidden ">
                  <div
                    className="our_projects_inner will-change-transform transform-gpu absolute bg-[rgba(0,0,0,0.1)] block  bg-cover  top-0 left-0  w-full h-full z-0 "
                    style={{
                      backgroundImage: isHover
                        ? ` url(${images.image1.src})`
                        : `url(${images.image1.small})`,
                    }}
                  ></div>
                  <div className="our_projects_content absolute [width:calc(100%-1.25rem)] top-1/2 left-1/2 [transform:translate(-50%,-50%)]  z-10 text-center">
                    <span className="our_projects_content_subtitle text-[21px] md:text-[26.25px]  lg:text-[28.125px] xl:text-[30px] 3xl:text-[37.5px] text-white font-medium font-[Lausanne2]">
                      {images.image1.subtitle}
                    </span>
                    <h2 className="our_projects_content_title text-[43.5px] md:text-[70px] lg:text-[75px] xl:text-[80px] 3xl:text-[100px]  underline lg:no-underline lg:group-hover:underline   text-white font-medium font-[Lausanne2] transition-all duration-[600ms]  ease-[cubic-bezier(0.215,0.61,0.355,1)]">
                      {images.image1.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default Agencyourprojectwrapper;
