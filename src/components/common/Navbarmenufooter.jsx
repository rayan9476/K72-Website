import { TbWorld } from "react-icons/tb";
import { socialsLinks } from "../../Data/SocialsLinksData";
import { privacyLinks } from "../../Data/PrivacyLinksData";
import { Link } from "react-router-dom";
import useTorontoClock from "../hooks/useTorontoClock";

function Navbarmenufooter({ ismenuOpen }) {
  // logic for clock start here
  const time = useTorontoClock();
  // logic for clock ends here

  return (
    <>
      <div
        className={`menu_footer_legals_policy_links_container  ${
          ismenuOpen ? "opacity-100" : "opacity-0"
        } absolute bottom-2 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between  lg:grid  lg:grid-cols-4 lg:items-center md:px-2 xl:px-2.5 gap-16 lg:gap-0  w-full   `}
      >
        <div className="clock_time hidden lg:block justify-self-start col-span-1">
          <span className="flex items-center justify-center gap-3 text-[15px] xl:text-[16px] 2xl:text-[20px] --outer_span 3xl:text-[25px]  uppercase font-[Lausanne2] font-medium text-white">
            {" "}
            <span className=" text-[26px] --tb-world 2xl:text-[40px]  mb-1">
              <TbWorld />
            </span>
            MONTREAL_
            {time}
          </span>
        </div>
        <div className="menu_nav_links  flex flex-col lg:flex-row items-start lg:items-center justify-center pb-2 md:pb-0 lg:gap-3 lg:justify-self-center lg:col-span-2">
          {privacyLinks.map(({ label, href }) => (
            <Link to={href} key={label}>
              <span className=" text-[9.6px] lg:text-[10.31px] xl:text-[11px] 3xl:text-[13.75px] --privacy_links uppercase font-[Lausanne2] font-medium text-white transition-colors ease-in cursor-pointer  hover:text-[#d3fd50]">
                {label}
              </span>
            </Link>
          ))}
        </div>

        <div className="buttons  flex  items-start justify-center gap-1.5 lg:justify-self-end lg:col-span-1">
          {socialsLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[8vw] md:text-[4vw] lg:text-[3.2vw] xl:text-[2.8vw] --socials_links --border  2xl:text-4xl 2xl:mb-0.5 3xl:text-[1.7vw] uppercase font-[Lausanne2] font-medium text-white px-[0.6rem] pt-[0.4rem] xl:pt-2 pb-0 border-2 border-white rounded-[20px] leading-[22px] lg:leading-[24px] 3xl:leading-[32px]  transition-all ease-in  hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
                {label}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbarmenufooter;
