import React, { useState, Suspense, useRef, useEffect } from "react";
import "../styles/work.css";
import Navbar from "../components/common/Navbar2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWorkCardsScrollAnimation from "../components/hooks/useWorkCardsScrollAnimation";
import { useHoverBlink } from "../components/hooks/useHoverBlink";
gsap.registerPlugin(ScrollTrigger);
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
const WorkCardinfo = React.lazy(() => import("../components/WorkCardinfo"));
const Footer = React.lazy(() => import("../components/common/Footer"));
import WorkCards from "../components/WorkCards";
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import useScrollToTop from "../components/hooks/useScrollToTop";
import { images } from "../Data/WorkCardsSectionData";

function Work() {
  useScrollToTop();

  //  dynamic page name change  logic start here
  useEffect(() => {
    document.title = "Work — K72 Agency";
  }, []);
  //  dynamic page name change  logic ends here

  // project card scroll animation start here
  useWorkCardsScrollAnimation({ images });

  // project card scroll animation ends here

  const [hoveredIndex, setHoveredIndex] = useState(false); // numeric for aimation true/fasle
  const [hoveredImage, setHoveredImage] = useState(null); // store index for change info based on index
  const [cardcontainerHover, setcardcontainerHover] = useState(false);
  // card info blink animation start here
  useHoverBlink(hoveredIndex, hoveredImage, images);
  // card info blink animation ends here

  const thumbRef = useRef(null);

  useFakeScrollbar(thumbRef, {
    bgColor: "#d3fd50",
  });

  return (
    <>
      <div className="site_fake_scrollbar  fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0 w-full bg-[#d3fd50] rounded-[10px] origin-top"
        />
      </div>

      <header>
        <Navbar
          hoveredIndex={hoveredIndex}
          cardcontainerHover={cardcontainerHover}
        />
      </header>
      <main className="work_page_container bg-white">
        <Suspense fallback={null}>
          <WorkCardinfo
            hoveredIndex={hoveredIndex}
            data={images}
            hoveredImage={hoveredImage}
          />
        </Suspense>
        <section className="main_content_container  relative flex items-center justify-start  pt-[50vh]    md:px-[8.75px] lg:px-[9.375px] xl:px-2.5 3xl:px-[12.25px] w-full  ">
          <div className="main_content w-full">
            <div className="section_heading flex items-start  px-[8.75px] md:px-0 ">
              <h1 className="text-[78.75px] md:text-[131.25px] lg:text-[13.7vw] xl:text-[15.7vw]  relative font-medium text-black font-[Lausanne2] uppercase leading-14 md:leading-[9.6vw] xl:leading-[10.8vw] 2xl:leading-[8.8vw]  2xl:text-[12.7vw]">
                Work
                <sup className="text-[15.75px] lg:text-[28.125px] xl:text-[40px]  absolute top-0">
                  17
                </sup>
              </h1>
            </div>

            <div
              className={`lol mb-4  relative    `}
              onMouseEnter={() => setcardcontainerHover(true)}
              onMouseLeave={() => setcardcontainerHover(false)}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`card_container contain-layout-paint h-full lg:h-[359px]  relative    xl:h-[469px]  2xl:h-[583px] 3xl:h-[946px]   flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-2 lg:gap-2.5 3xl:gap-3 mb-4 w-full md:mt-2   origin-top`}
                >
                  {(i === 2 && (
                    <WorkCards
                      index={i}
                      image1={img.image1}
                      image2={img.image2}
                      onHoverStart1={() => {
                        setHoveredIndex(true);
                        setHoveredImage({ index: i, side: 1 });
                      }}
                      onHoverStart2={() => {
                        setHoveredIndex(true);
                        setHoveredImage({ index: i, side: 2 });
                      }}
                      onHoverEnd={() => {
                        setHoveredIndex(false);
                        setHoveredImage(null);
                      }}
                    />
                  )) || (
                    <WorkCards
                      index={i}
                      image1={img.image1}
                      image2={img.image2}
                      onHoverStart1={() => {
                        setHoveredIndex(true);
                        setHoveredImage({ index: i, side: 1 });
                      }}
                      onHoverStart2={() => {
                        setHoveredIndex(true);
                        setHoveredImage({ index: i, side: 2 });
                      }}
                      onHoverEnd={() => {
                        setHoveredIndex(false);
                        setHoveredImage(null);
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Suspense fallback={null}>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </>
  );
}

export default Work;
