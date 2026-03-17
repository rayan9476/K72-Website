import { Link } from "react-router-dom";

export default function NavbarRightItem({ id, text, customClasses }) {
  return (
    <Link to={`/${text.toLowerCase()}`}>
      <div
        id={id}
        className={`${customClasses} group hidden lg:block cursor-pointer transition-all ease-in relative`}
      >
        <div className="navbar_menu_text hidden lg:block absolute left-2 bottom-[0.2rem] z-10">
          <h1 className="text-[1.8vw] xl:text-[20px] 3xl:text-[25px] leading-5 text-white font-medium font-[Lausanne2] uppercase transition-colors ease-in group-hover:text-black">
            {text}
          </h1>
        </div>
        <div className="navbar-right-overlay absolute h-full w-full bg-[#d3fd50] transform translate-y-[-101%] transition-transform duration-200 group-hover:translate-y-0 z-0"></div>
      </div>
    </Link>
  );
}
