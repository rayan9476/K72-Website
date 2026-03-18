import { images } from "../Data/AgencyHeroSectionData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AgencyHeroSectionAbout from "./AgencyHeroSectionAbout";
import AgencyHeroSectionImageForSmallScreen from "./AgencyHeroSectionImageForSmallScreen";
import useAgencyHeroSectionAnimation from "./hooks/useAgencyHeroSectionAnimation";

gsap.registerPlugin(ScrollTrigger);
function Agencyherosection() {
  // Agency hero section animation start here
  const {
    containerRef,
    imgeConatinerRef2,
    imageRef2,
    imgeConatinerRef,
    imageRef,
  } = useAgencyHeroSectionAnimation();

  // Agency hero section animation ends here

  return (
    <>
      <figure className="image_container_for_sm  absolute top-[30vw]   left-[26.2%] md:left-[25.6%] w-[19.99vw]  lg:hidden">
        <AgencyHeroSectionImageForSmallScreen />
      </figure>

      <div className="xl:relative xl:h-full  xl:w-full">
        <figure className="image_container_for_xl    hidden xl:block xl:absolute  h-screen w-full  -z-1  left-0">
          <div
            className="absolute h-full w-full  left-0 "
            ref={imgeConatinerRef}
          >
            <div className="image_content will-change-transform backface-hidden absolute xl:bottom-[35vh]   overflow-hidden  rounded-[20px] 3xl:rounded-[25px] -z-1 lg:[left:calc((100%-11.875rem)*6/20+3.75rem)] lg:[width:calc((100%-11.875rem)*3/20+1.875rem)] ">
              <img
                ref={imageRef}
                src={images[0]?.src}
                alt="SophieA_girl_jpg"
                className="animate_hero_image  w-full object-cover rounded-[20px] "
                loading="lazy"
                width={400}
                height={400}
                style={{
                  backgroundImage: `url(${images[0].placeholder})`,
                  backgroundSize: "cover",
                }}
                onLoad={(e) => (e.target.style.backgroundImage = "none")}
              />
            </div>
          </div>
        </figure>
      </div>

      <div className="main_content_1 w-full  relative flex items-center justify-center mb-24  md:mb-36   ">
        <div
          ref={containerRef}
          className="text_container h-full relative z-10  flex flex-col gap-[6.4rem] items-center justify-center xl:pt-[0.3rem] "
        >
          <div className="text_header  overflow-hidden">
            <div className="animate_hero_section_text transfrom opacity-0  translate-y-[-200px] ">
              <h1 className=" text-[18vw] z-10 md:text-[20vw]  leading-[16vw] md:leading-[17vw] lg:leading-[17.5vw] text-center text-black font-[Lausanne2] font-medium ">
                {" "}
                SEVEN7Y{" "}
              </h1>
            </div>
            <div className="animate_hero_section_text transfrom opacity-0 translate-y-[-250px]">
              <h1 className=" text-[18vw] z-10 md:text-[20vw]  leading-[16vw] md:leading-[17vw] lg:leading-[17.5vw] text-center text-black font-[Lausanne2] font-medium ">
                {" "}
                TWO
              </h1>
            </div>

            <figure
              className="image_container_for_lg absolute hidden lg:block xl:hidden  -z-10  h-full w-full top-0"
              ref={imgeConatinerRef2}
            >
              <div className="image_container  absolute -z-10  lg:[left:calc((100%-11.875rem)*6/20+0.50rem)]  w-[calc((100%-11.875rem)*3/20+1.875rem)] h-auto lg:-top-[32vh] ">
                <img
                  ref={imageRef2}
                  src={images[0]?.src}
                  alt="SophieA_girl_jpg"
                  className="w-full  object-cover rounded-[18.75px]"
                  loading="lazy"
                  width={400}
                  height={400}
                  style={{
                    backgroundImage: `url(${images[0].placeholder})`,
                    backgroundSize: "cover",
                  }}
                  onLoad={(e) => (e.target.style.backgroundImage = "none")}
                />
              </div>
            </figure>
          </div>
          <div className="text_body lg:w-[60%] lg:ml-auto">
            <p className=" text-[21px] md:text-[39.375px] lg:text-[42.1875px] 2xl:text-[clamp(1rem,3.53vw,70px)] leading-[5.5vw]   lg:leading-[4.25vw] 2xl:leading-[3.47vw] text-left text-black font-[Lausanne2] font-medium ">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; We’re inquisitive and open-minded, and we make sure
              creativity crowds out ego from every corner. A brand is a living
              thing, with values, a personality and a story. If we ignore that,
              we can achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <AgencyHeroSectionAbout />
    </>
  );
}

export default Agencyherosection;
