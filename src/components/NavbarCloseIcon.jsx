import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
import useNavbarCloseIconAnimation from "./hooks/useNavbarCloseIconAnimation";
import { useRef } from "react";
import { useIsHoverDevice } from "./hooks/useIsHoverDevice";

function NavbarCloseIcon({ ismenuOpen, setismenuOpen }) {
  //  close icon animation start here
  useNavbarCloseIconAnimation(ismenuOpen);
  //  close icon animation ends here
  const closeIconRef = useRef(null);

  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  return (
    <>
      <div
        ref={closeIconRef}
        className={`close_icon --close_icon animate_close_icon  transfrom translate-x-[150%] opacity-0  group cursor-pointer relative top-0 right-0 xl:top-1 xl:right-0 3xl:top-4 3xl:right-2.5 flex items-center justify-center  w-[100px] lg:w-[110px] h-[100px]  z-50`}
        onClick={() => {
          setismenuOpen(false);
        }}
      >
        <div
          className={`h-[1.7px] --close_line absolute w-[130px] lg:w-[140px] xl:w-[150px] 3xl:w-[180px] 3xl:h-[2.4px] transform rotate-45 transition-all ease-in
   ${isHover ? "bg-white" : ismenuOpen ? "bg-[#d3fd50]" : "bg-white"}  group-hover:bg-[#d3fd50]`}
        ></div>

        <div
          className={`h-[1.7px] --close_line absolute w-[130px] lg:w-[140px] xl:w-[150px] 3xl:w-[180px] 3xl:h-[2.4px] transform -rotate-45 transition-all ease-in
  ${isHover ? "bg-white" : ismenuOpen ? "bg-[#d3fd50]" : "bg-white"}  group-hover:bg-[#d3fd50]`}
        ></div>
      </div>
    </>
  );
}

export default NavbarCloseIcon;
