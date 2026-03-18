import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbarmenufooter = lazy(() => import("./Navbarmenufooter"));
const Navbarmenustairs = lazy(() => import("./Navbarmenustairs"));
import useMenuAnimation from "../hooks/useMenuAnimation";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";
import { menuItems } from "../../Data/MenuItemsData";
function Navbarmenu({ ismenuOpen, setIsAnimating }) {
  const isHover = useIsHoverDevice();

  //  animation for navmenu start here
  useMenuAnimation(ismenuOpen, setIsAnimating);
  // animation for navmenu ends here

  return (
    <>
      <nav
        className={`nav_stairs_container  ${
          ismenuOpen
            ? "pointer-events-auto  is-menu-open "
            : "pointer-events-none "
        }   h-screen w-[100%]   fixed left-0 top-0 z-40  overflow-hidden`}
      >
        <div
          className={`nav_stairs_content  ${ismenuOpen ? "is-menu-open" : ""} w-full  h-full flex relative `}
        >
          <Suspense fallback={null}>
            <Navbarmenustairs ismenuOpen={ismenuOpen} />
          </Suspense>
          <div
            className={`menu_nav_links opacity-0   fixed top-0 h-full w-full  flex flex-col items-center justify-center z-50  `}
          >
            <div className="w-full overflow-hidden ">
              {menuItems?.map((item, idx) => {
                return (
                  <ul>
                    <Link key={idx} to={item.path}>
                      <li
                        id="animate_navmenu_links"
                        className={`animate_menu_item_1 overflow-hidden transform-gpu will-change-transform relative cursor-pointer pt-[11.5px] md:pt-[18px] xl:pt-5 2xl:pt-7 3xl:pt-12 pb-[1.5px] w-full text-center ${!isHover ? `${item.border}` : `${item.border2}`}  border-[#FFFFFF4D]`}
                      >
                        <h1 className="text-[15vw] md:text-[11vw] lg:text-[8vw] uppercase leading-[9.6vw] md:leading-[7.6vw] lg:leading-[5.6vw] --line_height font-[Lausanne2] font-medium text-white">
                          {item.title}
                        </h1>

                        <div
                          className={`${!isHover ? "hidden" : "block"}  nav_menu_hover_text_container_1 overflow-hidden transform-gpu will-change-[transform,opacity] bg-[#d3fd50] absolute top-0 h-full w-max flex items-center cursor-pointer transition-all ease-in`}
                        >
                          <div className="con flex w-full nav_animate_inner">
                            <div className="flex w-full">
                              {item.hoverContents.map((hc, i) => (
                                <div
                                  key={i}
                                  className="nav_menu_hover_text  h-full top-0 w-max pr-6"
                                >
                                  <div className="nav_menu_hover_text_content flex items-center justify-between w-full h-full gap-6">
                                    {hc.isSvg ? (
                                      <>
                                        <svg
                                          className="h-8 w-12 md:w-20 lg:w-24 md:h-20 lg:h-24 xl:w-28 xl:h-28 2xl:w-34 2xl:h-34 3xl:w-52 3xl:h-52 block text-black -mt-2 shrink-0"
                                          width="160"
                                          height="140"
                                          viewBox="0 0 160 140"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M80 130 L20 70 L20 40 L55 10 L80 35 L105 10 L140 40 L140 70 Z"
                                            fill="black"
                                          />
                                        </svg>
                                        <h1 className="text-[8vw] pt-4 leading-20 uppercase font-[Lausanne2] font-medium text-black">
                                          {hc.text}
                                        </h1>
                                        <svg
                                          className="h-8 w-12 md:w-20 lg:w-24 md:h-20 lg:h-24 xl:w-28 xl:h-28 2xl:w-34 2xl:h-34 3xl:w-52 3xl:h-52 block text-black -mt-2 shrink-0"
                                          width="160"
                                          height="140"
                                          viewBox="0 0 160 140"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M80 130 L20 70 L20 40 L55 10 L80 35 L105 10 L140 40 L140 70 Z"
                                            fill="black"
                                          />
                                        </svg>
                                        <h1 className="text-[8vw] pt-4 leading-20 uppercase font-[Lausanne2] font-medium text-black">
                                          {hc.text}
                                        </h1>
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          className="flex w-[17.2vw] h-[5.5vw] rounded-[60px] 3xl:rounded-[80px] object-cover"
                                          src={hc.img}
                                          alt="nav_menu_img"
                                          loading="lazy"
                                        />
                                        <h1 className="text-[8vw] pt-4 leading-20 uppercase font-[Lausanne2] font-medium text-black">
                                          {hc.text}
                                        </h1>
                                        <img
                                          className="flex w-[17.2vw] h-[5.5vw] object-cover rounded-[60px] 3xl:rounded-[80px]"
                                          src={hc.img2}
                                          alt="nav_menu_img"
                                          loading="lazy"
                                        />
                                        <h1 className="text-[8vw] pt-4 leading-20 uppercase font-[Lausanne2] font-medium text-black">
                                          {hc.text}
                                        </h1>
                                      </>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>

            <Suspense fallback={null}>
              <Navbarmenufooter ismenuOpen={ismenuOpen} />
            </Suspense>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbarmenu;
