import { lazy, Suspense } from "react";
const Navbarmenu = lazy(() => import("./common/Navbarmenu"));
import { useState } from "react";
const NavbarCloseIcon = lazy(() => import("./NavbarCloseIcon"));
import NavbarLogo1 from "./NavbarLogo1";

function Navbar() {
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = (value) => {
    if (isAnimating) return; //  block clicks
    setismenuOpen(value);
  };
  return (
    <>
      <nav className="fixed flex items-start justify-between p-2 lg:p-2  xl:p-2.5 w-full z-50  ">
        <NavbarLogo1 />

        <div
          className={`navbar-right --nav-right-1 group ${
            ismenuOpen ? "pointer-events-none" : "pointer-events-auto"
          } cursor-pointer transition-all ease-in fixed right-0 top-0 flex flex-col gap-1 items-end justify-center  w-[187.68px] h-11  md:w-64 lg:w-40 xl:w-[15.6vw] xl:h-12 bg-black   `}
          onClick={() => setismenuOpen(true)}
        >
          <div className="lines --lines_1  h-[1.5px] w-[46px]  mr-6 bg-white transition-colors duration-200 group-hover:bg-black z-10"></div>
          <div className="lines --lines_2  h-[1.5px]  w-[24px] mr-6 bg-white transition-colors duration-200 group-hover:bg-black z-10"></div>

          <div className="navbar-right-overlay absolute h-full w-full bg-[#d3fd50]  transform translate-y-[-100%] transition-transform duration-200 group-hover:translate-y-0 z-0"></div>
        </div>

        <Suspense fallback={null}>
          <NavbarCloseIcon ismenuOpen={ismenuOpen} setismenuOpen={toggleMenu} />
        </Suspense>
      </nav>

      <Suspense fallback={null}>
        <Navbarmenu ismenuOpen={ismenuOpen} setIsAnimating={setIsAnimating} />
      </Suspense>
    </>
  );
}

export default Navbar;
