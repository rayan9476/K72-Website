import Herosectionvideo from "./Herosectionvideo";
import { Link } from "react-router-dom";
import useHeroSectionAnimation from "./hooks/useHeroSectionAnimation";

function Herosection({ bgVideoRef }) {
  // hero section animation start here
  useHeroSectionAnimation();
  // hero section animation ends here

  return (
    <>
      <section className="hero-section relative flex  items-end justify-center w-full h-screen ">
        <div className="text-header pb-64 md:pb-[19rem] lg:absolute lg:top-0 lg:mb-0 flex flex-col items-center justify-center  2xl:mb-[6.3rem] --hero-mb 3xl:mb-0">
          <span className="text-[12vw] lg:text-[9.5vw]  overflow-hidden text-white font-[Lausanne] uppercase  leading-[11.8vw] lg:leading-[9.5vw] xl:leading-[9vw] ">
            <div className="animationtext flex transform translate-y-[-400px] opacity-0 ">
              {" "}
              The spark for
            </div>
          </span>
          <span className=" flex items-start justify-center overflow-hidden text-[12vw] lg:text-[9.5vw] text-white font-[Lausanne] uppercase  leading-[11.8vw] lg:leading-[9.5vw]  xl:leading-[9vw]  ">
            <div className="animationtext  flex items-start justify-center transform translate-y-[-200px] opacity-0">
              all
              <div>
                <Herosectionvideo type="inline" syncRef={bgVideoRef} />
              </div>
              things
            </div>
          </span>

          <span className="relative flex items-center justify-center  w-full text-[12vw] lg:text-[9.5vw] text-white font-[Lausanne] uppercase  leading-[11.8vw] lg:leading-[9.5vw] xl:leading-[7vw] ">
            <div className="animationtext   transform translate-y-[-200px] opacity-0">
              <div className="overflow-hidden block pt-[0.05em]">
                <span className="animationtext transform translate-y-[-200px] opacity-0 inline-block">
                  creative
                </span>
              </div>
              <div
                className="c-circle  absolute w-[58.4vw]  xl:w-[47vw] -top-[0.3rem] md:-top-2 xl:-top-[1.7rem] 2xl:-top-8 3xl:-top-[3.3rem]"
                data-module-circle="home"
              >
                <svg
                  className="h-full w-full"
                  viewBox="0 0 573.46875 105.38542175292969"
                >
                  <ellipse
                    cx="286.734375"
                    cy="52.692710876464844"
                    rx="284.734375"
                    ry="50.692710876464844"
                  />
                </svg>
              </div>
            </div>
          </span>
        </div>

        <div
          className={`hero-content absolute   px-3 xl:px-3 pt-2  w-full flex flex-col items-center   justify-center gap-8 xl:gap-0  pb-2 `}
        >
          <div className="text-body --hero-para-container relative ml-auto   w-65 xl:w-60 2xl:w-[306px] 3xl:w-[369px]  xl:mb-10 3xl:mb-14">
            {" "}
            <p className="animationtextpara --hero-para  text-[12.25px] xl:text-[14px] 3xl:text-[17.5px] font-medium text-white font-[Lausanne2]  ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              K72 is an agency that builds brands from every angle. Today,
              tomorrow and years from now. We think the best sparks fly when
              comfort zones get left behind and friction infuses our strategies,
              brands and communications with real feeling. We’re transparent,
              honest and say what we mean, and when we believe in something,
              we’re all in.
            </p>
          </div>

          <div className="buttons flex  items-center justify-center gap-5">
            <Link to={"/en/work"}>
              <button className="btn animationbuttons cursor-pointer hover:border-[#d3fd50]  --border-hero-btn hover:text-[#d3fd50] transition-all duration-100 ease-in text-[10.5vw] xl:text-[7vw] font-medium font-[Lausanne2]  px-[3.2vw] xl:px-[2.1vw] pt-[2.6vw] xl:pt-[1.5vw]   pb-[1px] leading-[7.5vw] xl:leading-[4.7vw]  uppercase  border-3 text-white rounded-full border-white ">
                work
              </button>
            </Link>

            <Link to={"/en/about"}>
              <button className="btn animationbuttons cursor-pointer hover:border-[#d3fd50] --border-hero-btn hover:text-[#d3fd50] transition-all duration-100 ease-in text-[10.5vw] xl:text-[7vw] font-medium font-[Lausanne2]  px-[3.2vw] xl:px-[2.1vw]  pt-[2.6vw] xl:pt-[1.5vw]  pb-[1px] leading-[7.5vw] xl:leading-[4.7vw]  uppercase  border-3 text-white rounded-full border-white ">
                agency
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
