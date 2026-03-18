import { useIsHoverDevice } from "./hooks/useIsHoverDevice";
import useAgencyProjectWrapperAnimation3 from "./hooks/useAgencyProjectWrapperAnimation3";
import { Link } from "react-router-dom";

function Agencyourprojectwrapper3({ images }) {
  // our project aniamtion start here
  const { wrapper3 } = useAgencyProjectWrapperAnimation3();
  // our project aniamtion ends here
  // isHover logic start here
  const isHover = useIsHoverDevice();
  // isHover logic ends here

  return (
    <Link to={images?.image3?.href}>
      <article>
        <div className="our_project_wrapper_3 relative h-screen block ">
          <div
            className={`our_project_sticky_area pointer-events-none hidden absolute top-0 left-0 right-0 h-[200vh]`}
            id="our_project_sticky_area_3"
          ></div>
          <div
            className="main_conatiner_3 relative w-full -mt-20  "
            ref={wrapper3}
          >
            <div className="our_projects_info">
              <div className="our_projects_outer_3 group relative block cursor-pointer   w-[100vw] h-[100vh] overflow-hidden rounded-tl-[35px] rounded-tr-[35px] lg:rounded-tl-[37.5px]  lg:rounded-tr-[37.5px] xl:rounded-tl-[40px] xl:rounded-tr-[40px] 3xl:rounded-tl-[50px] 3xl:rounded-tr-[50px] ">
                <div
                  className="our_projects_inner absolute block bg-[rgba(0,0,0,0.1)] bg-cover  top-0 left-0  w-full h-full z-0 "
                  style={{
                    backgroundImage: isHover
                      ? ` url(${images.image3.src})`
                      : `url(${images.image3.small})`,
                  }}
                ></div>
                <div className="our_projects_content absolute [width:calc(100%-1.25rem)] top-1/2 left-1/2 [transform:translate(-50%,-50%)]  z-10 text-center">
                  <span className="our_projects_content_subtitle text-[21px] md:text-[26.25px]  lg:text-[28.125px] xl:text-[30px] 3xl:text-[37.5px] text-white font-medium font-[Lausanne2]">
                    {images.image3.subtitle}
                  </span>
                  <h2 className="our_projects_content_title text-[43.5px] md:text-[70px] lg:text-[75px] xl:text-[80px] 3xl:text-[100px]  underline lg:no-underline lg:group-hover:underline   text-white font-medium font-[Lausanne2] transition-all duration-[600ms]  ease-[cubic-bezier(0.215,0.61,0.355,1)]">
                    {images.image3.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Agencyourprojectwrapper3;
