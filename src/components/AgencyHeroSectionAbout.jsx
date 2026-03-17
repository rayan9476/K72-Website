import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useAboutSectionAnimation from "./hooks/useAboutSectionAnimation";
const aboutLinks = ["Strategy", "Advertising", "Branding", "Design", "Content"];
gsap.registerPlugin(ScrollTrigger);
function AgencyHeroSectionAbout() {
  // about links animation start here
  const { scopeRef } = useAboutSectionAnimation();
  // about links animation ends here

  return (
    <>
      <div
        ref={scopeRef}
        className="main_content_2_about   flex flex-col items-start justify-start w-full md:px-[1.6rem] lg:px-24 xl:pl-[calc((100vw-13.125rem)*2/20+1.875rem)] xl:pr-[calc((100vw-13.125rem)*2/20+1.875rem)]"
      >
        <div className="about_details_links  grid grid-cols-4  xl:flex xl:w-full gap-[24vw] md:gap-[15.5vw] lg:gap-[14vw]   xl:gap-0   mb-16 md:mb-32 ">
          <div className="left_side_text overflow-hidden col-span-2 xl:w-[37.7%]  flex justify-start items-start">
            <h2 className="animate_links opacity-0 transform translate-y-[-50px]   text-[17.5px] lg:text-[18.75px] xl:text-[20px] text-black font-[Lausanne2] font-medium">
              Expertise
            </h2>
          </div>

          <div className="right_side_text overflow-hidden col-span-2 xl:w-[37.7%]  flex justify-center xl:justify-start items-center">
            <ul className="animate_links about_links  overflow-hidden  opacity-0 transform translate-y-[-50px]">
              {aboutLinks.map((link, index) => (
                <li
                  key={index}
                  className="  text-[17.5px] lg:text-[18.75px] xl:text-[20px]  leading-[22px] text-black font-[Lausanne2] font-medium"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about_text_container overflow-hidden grid grid-cols-1 md:grid-cols-3   gap-9 md:gap-14 lg:gap-28 xl:gap-[10vw]  w-full">
          <div className="Our_Work animate_about_text opacity-0 transform translate-y-[-100px] pr-[35px] md:pr-0 md:flex md:justify-start   ">
            <p className="text-[17.5px] lg:text-[18.75px] xl:text-[20px]  leading-[5.5vw] xl:leading-[26px] md:leading-[2.5vw] text-black  font-[Lausanne2] font-medium ">
              Our Work_ Born in curiosity, raised by dedication and fed with a
              steady diet of creativity.
            </p>
          </div>
          <div className="Our_Creative animate_about_text opacity-0 transform translate-y-[-100px] pr-[35px] md:pr-0  md:flex md:justify-center    ">
            <p className="text-[17.5px] lg:text-[18.75px] xl:text-[20px]  leading-[5.5vw] xl:leading-[26px]  md:leading-[2.5vw] text-black  font-[Lausanne2] font-medium ">
              Our Creative_ Simmering in an environment where talent can come to
              a full boil. Encouraged to become the best versions of ourselves.
            </p>
          </div>
          <div className="Our_Culture  animate_about_text opacity-0 transform translate-y-[-100px]  md:flex md:justify-end    ">
            <p className="text-[17.5px] lg:text-[18.75px] xl:text-[20px]  leading-[5.5vw] xl:leading-[26px]  md:leading-[2.5vw] text-black font-[Lausanne2] font-medium ">
              Our Culture_ We’re open to each other. Period. The team works
              together to create a space that makes us proud.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgencyHeroSectionAbout;
