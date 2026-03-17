// import Navbarmenu from "./Navbarmenu";
import { lazy, useState, Suspense } from "react";
const Navbarmenu = lazy(() => import("./Navbarmenu"));
import NavbarLogo from "../NavbarLogo";
import NavbarLinks from "../NavbarLinks";
// import NavbarCloseIcon from "../NavbarCloseIcon";
const NavbarCloseIcon = lazy(() => import("../NavbarCloseIcon"));
import useNavbarAnimation from "../hooks/useNavbarAnimation";

function Navbar({ hoveredIndex, cardcontainerHover }) {
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  // navbar animation start here
  useNavbarAnimation(hoveredIndex);
  // navbar animation ends here
  const toggleMenu = (value) => {
    if (isAnimating) return; //  block clicks
    setismenuOpen(value);
  };
  return (
    <>
      <nav className="Navbar fixed  flex items-start justify-between p-2 lg:p-2  xl:p-2.5 w-full z-40  ">
        <NavbarLogo
          hoveredIndex={hoveredIndex}
          cardcontainerHover={cardcontainerHover}
          ismenuOpen={ismenuOpen}
        />

        <div className="absolute -z-10 top-0 h-full w-full  flex  items-start justify-end ">
          <NavbarLinks ismenuOpen={ismenuOpen} setismenuOpen={setismenuOpen} />
        </div>
      </nav>

      <nav
        className={`fixed ${
          ismenuOpen ? " pointer-events-auto" : " pointer-events-none"
        }  w-full flex items-start justify-between p-2 lg:p-2  xl:p-2.5  z-50  `}
        //
      >
        <div className="">
          <NavbarLogo
            hoveredIndex={hoveredIndex}
            cardcontainerHover={cardcontainerHover}
            ismenuOpen={ismenuOpen}
          />
        </div>

        <Suspense fallback={null}>
          <NavbarCloseIcon ismenuOpen={ismenuOpen} setismenuOpen={toggleMenu} />
        </Suspense>
      </nav>
      <Suspense fallback={null}>
        {<Navbarmenu ismenuOpen={ismenuOpen} setIsAnimating={setIsAnimating} />}
      </Suspense>
    </>
  );
}

export default Navbar;
