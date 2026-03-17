import { Link } from "react-router-dom";
import useClickBlock from "./hooks/useClickBlock";

function NavbarLinks({ ismenuOpen, setismenuOpen }) {
  const handleClick = useClickBlock(setismenuOpen);

  return (
    <>
      <ul className="flex">
        <li>
          <Link to={"/en/work"}>
            <div
              id="nav_right_animate_work"
              className={`navbar-right-3 ${
                ismenuOpen ? "pointer-events-none" : "pointer-events-auto"
              }  group lg:-mr-[1px]  hidden  cursor-pointer transform-gpu transform translate-y-[-100%] relative top-0   w-[187.68px] h-11  md:w-64 lg:w-[19.8vw] lg:h-[51.56px] xl:h-[55px] 3xl:h-[68.75px] bg-black   `}
            >
              <div className="navbar_menu_text hidden  absolute left-2 bottom-[0.2rem] 2xl:bottom-[0.3rem] 3xl:bottom-[0.4rem] z-10 3xl:pl-1">
                <h1
                  className={`animate_work_text text-[1.8vw] xl:text-[20px] 3xl:text-[25px] leading-5 xl:leading-[22px]  3xl:leading-[28px]  text-white font-medium font-[Lausanne2] uppercase transition-colors ease-in group-hover:text-black`}
                >
                  work (17)
                </h1>
              </div>

              <div className="navbar-right-overlay absolute h-full w-full bg-[#d3fd50]  transform translate-y-[-101%] transition-transform duration-200 group-hover:translate-y-0 z-0"></div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/en/about"}>
            <div
              id="nav_right_animate_agency"
              className={`navbar-right-2 ${
                ismenuOpen ? "pointer-events-none" : "pointer-events-auto"
              } group lg:-mr-[1px]  hidden  cursor-pointer transform-gpu  transform translate-y-[-100%] relative top-0   w-[187.68px] h-11  md:w-64 lg:w-[29.8vw] lg:h-[84.38px] xl:h-[90px] 3xl:h-[112.5px]  bg-black   `}
            >
              <div className="navbar_menu_text  hidden  absolute left-2 bottom-[0.2rem] 2xl:bottom-[0.3rem] 3xl:bottom-[0.4rem] z-10 3xl:pl-1">
                <h1
                  className={`animate_agency_text  text-[1.8vw] xl:text-[20px] 3xl:text-[25px] leading-5 xl:leading-[22px] 3xl:leading-[28px]  text-white font-medium font-[Lausanne2] uppercase transition-colors ease-in group-hover:text-black`}
                >
                  agency
                </h1>
              </div>

              <div className="navbar-right-overlay absolute h-full w-full bg-[#d3fd50]  transform translate-y-[-101%] transition-transform duration-200 group-hover:translate-y-0 z-0"></div>
            </div>
          </Link>
        </li>
      </ul>

      <button
        type="button"
        id="nav_right_animate_1"
        className={`navbar-right --nav-right-2 group cursor-pointer transform-gpu fixed lg:relative right-0 top-0 flex flex-col gap-1 items-end justify-center 
  w-[187.68px] md:w-64 h-11 lg:w-[15.8vw] lg:h-[121.88px] xl:h-[130px] 3xl:h-[162.5px]
  transition-colors duration-200
  ${ismenuOpen ? "bg-[#d3fd50]" : "bg-black"}
  `}
        onClick={handleClick}
      >
        <div className="lines_container flex flex-col items-end justify-center gap-1 lg:absolute lg:top-[1.3rem] lg:right-[0.3rem] 3xl:top-7 3xl:right-2 ">
          <div className="lines lines_1 h-[1.5px] w-[46px] 2xl:h-0.5  3xl:h-[1.7px] 3xl:w-[58px] mr-6 bg-white transition-colors duration-200 group-hover:bg-black z-10"></div>
          <div className="lines lines_2 h-[1.3px]  w-[24px]  2xl:h-0.5 3xl:h-[1.9px] 3xl:w-[28px]  mr-6 bg-white transition-colors duration-200 group-hover:bg-black z-10"></div>
        </div>

        <div className="navbar_menu_text_1   hidden  absolute left-2 bottom-[0.2rem] 2xl:bottom-[0.3rem] 3xl:bottom-[0.4rem] z-10 3xl:pl-1">
          <h1 className="text-[1.8vw] xl:text-[20px] 3xl:text-[25px] leading-5 xl:leading-[22px] 3xl:leading-[28px] text-white font-medium font-[Lausanne2] uppercase transition-colors ease-in group-hover:text-black">
            menu
          </h1>
        </div>

        <div className="navbar-right-overlay absolute h-full w-full bg-[#d3fd50]  transform translate-y-[-101%] transition-transform duration-200 group-hover:translate-y-0 z-0"></div>
      </button>
    </>
  );
}

export default NavbarLinks;
