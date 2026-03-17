import { useRef } from "react";
import { TbWorld } from "react-icons/tb";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import { privacyLinks } from "../../Data/PrivacyLinksData";
import { socialsLinks } from "../../Data/SocialsLinksData";
import useTorontoClock from "../hooks/useTorontoClock";
import { useBackToTop } from "../hooks/useBackToTop";
import { ReadyContext } from "../../context/ReadyContext";
import { useContext } from "react";
import { useActiveOnClickOutside } from "../hooks/useActiveOnClickOutside";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);

function Footer() {
  const navigate = useNavigate();

  // logic for clock start here
  const time = useTorontoClock();
  // logic for clock ends here

  // back to top animation start here
  useBackToTop();
  // back to top animation end here
  const { setReady } = useContext(ReadyContext);

  const backToTopRef = useRef(null);
  const contentRef = useRef(null);

  // logic for onclick start here
  const { active, setActive } = useActiveOnClickOutside(backToTopRef);
  const { active: contentActive, setActive: setContentActive } =
    useActiveOnClickOutside(contentRef);

  // logic for onclick ends here

  return (
    <div className="menu_nav_links_container  relative left-0 bottom-0 h-[41.4rem] md:h-[53.8rem] lg:h-[64.4rem] xl:h-[25.7rem] 2xl:h-[33rem]  3xl:h-[42.9rem] w-full  flex flex-col items-start justify-start p-[8.75px] lg:p-[9.375px] 2xl:p-2.5 3xl:p-3 z-20 bg-black ">
      <div className="buttons  flex  items-start justify-center  gap-1.5  ">
        {socialsLinks.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <button className="text-[8vw] md:text-[4vw] lg:text-[3.2vw] xl:text-[5vw] uppercase  --border font-[Lausanne2] font-medium text-white px-[0.6rem] xl:px-[1.2rem] 2xl:px-6 3xl:px-10  pt-[0.4rem] xl:pt-4 2xl:pt-5 3xl:pt-8  pb-0 border-2 border-white rounded-[20px] xl:rounded-[28px] 2xl:rounded-[48px] 3xl:rounded-[72px]  leading-[6vw] md:leading-[3vw] lg:leading-[2.5vw] xl:leading-[3.52vw] 2xl:leading-[3.5vw]   transition-all ease-in  hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
              {label}
            </button>
          </a>
        ))}
      </div>
      <div className="contact hidden lg:block ml-auto mr-auto mt-auto relative  bottom-16 xl:absolute  xl:mt-0 xl:top-2 right-4 xl:mr-0 xl:bottom-0">
        <Link to={"/en/contact"} onClick={() => setReady(false)}>
          <button
            type="button"
            className="flex items-center justify-center --contact group text-[14vw] md:text-[10vw] xl:text-[5vw] uppercase font-[Lausanne2] --border --radius font-medium text-white px-4 md:px-[1.2rem] lg:px-6 pt-[0.6rem] md:pt-[0.8rem] lg:pt-4 2xl:pt-5 3xl:pt-8 pb-0 border-2 border-white rounded-[28px] md:rounded-[40px] 3xl:rounded-[72px]  lg:leading-[7.5vw] xl:leading-[3.75vw] 2xl:leading-[3.5vw] transition-all ease-in  hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer   "
          >
            contact
            <svg
              className="fill-white group-hover:fill-[#d3fd50] transition-all ease-in  lg:w-[6.125rem] xl:w-[4.125rem]   2xl:w-[5.125rem] 3xl:w-[7.125rem] inline-block text-black -mt-2 2xl:-mt-[19px] 3xl:-mt-5 shrink-0"
              viewBox="0 0 160 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 130 L20 70  L20 40 L55 10 L80 35 L105 10 L140 40 L140 70 Z "
                fill=""
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="menu_footer_legals_policy_links_container absolute p-[8.75px] lg:p-[9.375px] 2xl:p-2.5 3xl:p-3 bottom-0 left-0 flex flex-col lg:flex-row items-start md:items-center justify-center lg:grid  lg:grid-cols-4    md:px-2 xl:px-2.5 gap-2 lg:gap-0  w-full   ">
        <div className="contact m-auto mb-[0.8rem] lg:hidden">
          <button
            type="button"
            onClick={() => {
              navigate("/en/contact");
              setReady(false);
            }}
            className="flex items-center justify-center text-[14vw] md:text-[10vw]  group uppercase font-[Lausanne2]   font-medium text-white px-4 md:px-[1.2rem] pt-[0.6rem] md:pt-[0.8rem] xl:pt-2 pb-0 border-2 border-white rounded-[28px] md:rounded-[40px] leading-[10.7vw] md:leading-[7.6vw]   transition-all ease-in  hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer "
          >
            contact
            <svg
              className="w-[3.125rem] h-[2.75rem]  group-hover:fill-[#d3fd50] transition-all ease-in md:h-16 md:w-[5.125rem]   2xl:h-34 3xl:h-48 inline-block text-black -mt-2 shrink-0"
              width="160"
              height="140"
              viewBox="0 0 160 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 130 L20 70  L20 40 L55 10 L80 35 L105 10 L140 40 L140 70 Z "
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
        <div className="clock_time  justify-self-start   m-auto lg:m-0 lg:col-span-1">
          <span className="outer_span flex items-center justify-center gap-3 text-[15px] xl:text-[16px] 2xl:text-[20px] --outer_span 3xl:text-[25px]  uppercase font-[Lausanne2] font-medium text-white">
            {" "}
            <span className=" text-[26px] 2xl:text-[40px] --tb-world mb-1">
              <TbWorld />
            </span>
            MONTREAL_
            {time}
          </span>
        </div>
        <div className="menu_nav_links  flex flex-col md:flex-row items-start lg:items-center justify-center pb-2 md:pb-0  md:gap-8 lg:gap-5 lg:justify-self-center  xl:gap-7 --menu_nav_gap 3xl:gap-12 lg:col-span-2 lg:ml-auto lg:mr-auto">
          {privacyLinks.map(({ label, href, onclick }) => (
            <Link
              ref={contentRef}
              to={href || "#"}
              key={label}
              onClick={(e) => {
                if (!onclick) return;
                e.preventDefault();
                setContentActive(true);
              }}
            >
              <span
                className={`
        text-[10.5px] md:text-[12.25px] lg:text-[13.125px] xl:text-[14px] --menu_nav_span 3xl:text-[17.25px]
        uppercase font-[Lausanne2] font-medium transition-colors ease-in cursor-pointer
          ${onclick ? (contentActive ? "text-[#d3fd50]" : "text-white") : "text-white"}
        hover:text-[#d3fd50]
      `}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        <div className="  m-auto lg:m-0 lg:justify-self-end lg:col-span-1 ">
          <span ref={backToTopRef}>
            <button
              type="button"
              onClick={() => setActive(true)}
              className={`
      back_to_top_btn --back_btn
      text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[25px]
      uppercase font-[Lausanne2] font-medium
      transition-colors ease-in cursor-pointer
      ${active ? "text-[#d3fd50]" : "text-white"}
      hover:text-[#d3fd50]
      bg-transparent border-none outline-none
    `}
            >
              back to top
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
