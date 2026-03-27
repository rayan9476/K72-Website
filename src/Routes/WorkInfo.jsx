import Navbar from "../components/common/Navbar2";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("../components/common/Footer"));
import "../styles/workInfo.css";
import "../styles/agency.css";
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import { useRef, useLayoutEffect } from "react";
import { useSmoothScrollTo } from "../components/hooks/useSmoothScrollTo";
import { useActiveOnClickOutside } from "../components/hooks/useActiveOnClickOutside";
import ProjectInfoCardSection from "../components/common/ProjectInfoCardSection";
import ProjectInfoTwoCardSection from "../components/common/ProjectInfoTwoCardSection";
import ProjectInfoCenterCardSection from "../components/common/ProjectInfoCenterCardSection";
import { gsap } from "gsap";
import ProjectInfoCenterCardSection2 from "../components/common/ProjectInfoCenterCardSection2";
import ProjectInfoOneCardSection from "../components/common/ProjectInfoOneCardSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectInfoCenterCardSection3 from "../components/common/ProjectInfoCenterCardSection3";
import ProjectInfoTwoCardSection2 from "../components/common/ProjectInfoTwoCardSection2";
import AgencyOurProject from "../components/AgencyOurProject";
import ProjectHeroSection from "../components/common/ProjectHeroSection";
import ProjectFooterSection from "../components/common/ProjectFooterSection";
import useScrollTriggerAfterLoad from "../components/hooks/useScrollTriggerAfterLoad";
import useProjectInfo from "../components/hooks/useProjectInfo";
import { useOurProjectCardRadiusAnimation } from "../components/hooks/useOurProjectCardRadiusAnimation";
import { useParams } from "react-router-dom";
import NotFound from "../components/common/NotFound";
import useScrollToTop from "../components/hooks/useScrollToTop";

gsap.registerPlugin(ScrollTrigger);
function WorkInfo() {
  // reset tu top logic start here
  useScrollToTop();
  // reset tu top logic ends here

  const thumbRef = useRef(null);
  const { Id } = useParams();

  useFakeScrollbar(thumbRef, {
    bgColor: "#d3fd50",
  });

  // data logic start here

  const [data, projectId, notFound] = useProjectInfo();
  // data logic ends here

  // summary text animation start here
  const [summaryRef, handleReadClick] = useSmoothScrollTo();
  // summary text animation ends here

  const buttonRef = useRef(null);
  // logic for onclick start here
  const { active, setActive } = useActiveOnClickOutside(buttonRef);
  // logic for onclick ends here

  // after load scrolltrigger refresh logic start here
  useScrollTriggerAfterLoad(data);
  // after load scrolltrigger refresh logic ends here
  // card radius animation start here
  useOurProjectCardRadiusAnimation();
  // card radius animation ends here

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    if (!data?.title) return;
    const t1 = data.title[0] || "";
    const t2 = data.title[1] || "";
    document.title = `${(t1 + " " + t2).trim()} — K72 Agency`;
  }, [data, Id]);
  //  dynamic page name change logic ends here
  if (notFound) {
    return <NotFound />;
  }
  if (!projectId) return null;
  if (!data) return null;

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="site_fake_scrollbar  fixed right-[1px] top-0 h-screen w-[9px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0 w-full bg-[#d3fd50] rounded-[10px] origin-top"
        />
      </div>

      <main className="work_info_page min-h-screen w-full  bg-white">
        <section className="blog_main_content  w-full pt-[10.9375rem] --pt-2">
          <div className="flex flex-col md:flex-row md:items-start md:justify-end  md:mb-[0.5rem]">
            <div className="work_page_heading   px-[8.75px] lg:px-[9.375px] 2xl:px-[10.625px] 3xl:px-[12.5px] pb-20  flex  items-start justify-start gap-[8.75px]  md:mr-auto">
              <span className="inline-block bg-black rounded-[50%] w-[0.765625rem] h-[0.765625rem]"></span>
              <h1 className="text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem]  font-[Lausanne2] leading-[0.75] text-black font-medium">
                {data?.year}
              </h1>
            </div>

            <div className="page_title inline-block w-full align-top pl-[8.75px] pb-[0.6rem]  md:[width:calc((100vw-13.125rem)*13/20+8.8rem)] md:[padding-right:calc((100vw-13.125rem)*2/20+1.25rem)]  lg:px-[9.375px] 2xl:px-2.5 3xl:px-[12.5px]">
              <h1 className="page_heading --mb-3">
                <div className="page_text_lines_item_container">
                  <span className="c-text-lines_item_inner text-[3.9375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] 3xl:text-[10.9375rem]  --text-1 font-medium font-[Lausanne2] text-black pt-[0.7875em] leading-[0.8857142857] uppercase">
                    {data?.title[0]}
                  </span>
                </div>
                <div className="c-text-lines_item">
                  <span className="c-text-lines_item_inner text-[3.9375rem]  md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] 3xl:text-[10.9375rem] --text-1 font-medium font-[Lausanne2] text-black pt-[0.7875em] leading-[0.8857142857] uppercase">
                    {data?.title[1]}
                  </span>
                </div>
                {data?.title?.[2] && (
                  <div className="c-text-lines_item">
                    <span className="c-text-lines_item_inner text-[3.9375rem]  md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] 3xl:text-[10.9375rem] --text-1 font-medium font-[Lausanne2] text-black pt-[0.7875em] leading-[0.8857142857] uppercase">
                      {data?.title[2]}
                    </span>
                  </div>
                )}
                <div class="c-text-lines_item   w-[42%] max-w-[153.812px] md:w-[49%] md:max-w-[205.281px] lg:w-[34%] lg:max-w-[221.375px] xl:max-w-[327.016px] --w-1 3xl:max-w-[408.016px]">
                  <span className="c-text-lines_item_inner">
                    <button
                      ref={buttonRef}
                      type="button"
                      onClick={() => {
                        handleReadClick();
                        setActive(true);
                      }}
                      className={`
    -dark-hover flex items-center justify-center text-center     focus:outline-none
   
    text-[2.75625rem] md:text-[3.828125rem] lg:text-[4.1015625rem] xl:text-[5.25rem]
    2xl:text-[6.125rem] 3xl:text-[7.65625rem] --text-2 py-[0.606375rem] lg:pt-[0.9rem] xl:pt-[1.2rem] xl:px-6 3xl:px-8
    --pt-1 3xl:pt-[1.6rem] px-[0.8269rem] --border-1 group uppercase font-[Lausanne2]
    font-medium pb-0 border-2 border-black rounded-[2753.49375rem] leading-[0.7]
    transition-all ease-in cursor-pointer
    ${active ? "bg-black text-white" : "bg-white text-black"}
    hover:bg-black hover:text-white
  `}
                    >
                      Read
                    </button>
                  </span>
                </div>
              </h1>
            </div>
          </div>
          <div className="c-section bg-white">
            <div className="c-project-summary mx-auto  " id="summary">
              <div className="image-container  ">
                <div className="o-layout -reverse -gutter-small md:[direction:rtl]  ">
                  <ProjectHeroSection data={data} summaryRef={summaryRef} />

                  {data.summaryText2 && (
                    <div className="o-layout_item c-project-summary_text  text-left [direction:ltr] align-top pt-[8.75px] pl-[8.75px]  w-full  mb-[4.375rem] md:mb-[8.75rem] xl:mb-40">
                      <p className="  text-[1.3125rem] md:text-[2.4609375rem] lg:text-[2.63671875rem] xl:text-[3.5rem] --p-1 --mb-1 3xl:text-[4.375rem] font-medium font-[Lausanne2] text-black  leading-[1] md:px-[calc((100vw-13.125rem)*2/20+1.25rem)] ">
                        {data?.summaryText2}
                      </p>
                    </div>
                  )}

                  {data?.sectionImageTeaser?.[0] && (
                    <div className="c-section  mb-[4.375rem] w-full">
                      <figure className="c-block-image">
                        <picture>
                          <img
                            src={data.sectionImageTeaser?.[0]}
                            className="w-full h-full object-cover"
                            width={1200}
                            height={1920}
                          />
                        </picture>
                      </figure>
                    </div>
                  )}
                  {data?.projectInfoCardSection && (
                    <div className="my-4">
                      <ProjectInfoCardSection
                        img={data?.projectInfoCardSection?.sectionImage?.large}
                        smallimg={
                          data?.projectInfoCardSection?.sectionImage?.small
                        }
                        title={data?.projectInfoCardSection.sectionImageTitle}
                        year={data?.projectInfoCardSection.sectionImageYear}
                        buttonText={
                          data?.projectInfoCardSection.sectionImageButtonText
                        }
                        video={data?.projectInfoCardSection.sectionImageVideo}
                        videoThumbnail={
                          data?.projectInfoCardSection
                            .sectionImageVideoThumbnail?.large
                        }
                        smallVideoThumbnail={
                          data?.projectInfoCardSection
                            .sectionImageVideoThumbnail?.small
                        }
                        modalVideo={data?.iframeVideo?.[0]}
                      />
                    </div>
                  )}

                  {data?.sectionImagesSameWay && (
                    <>
                      {data?.sectionImagesSameWay?.map((src, index) => {
                        const file = src.large || src;
                        const isVideo =
                          typeof file === "string" &&
                          (file.includes(".mp4") || file.includes(".webm"));

                        return (
                          <div key={index} className="c-section w-full">
                            <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                              {isVideo ? (
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  src={file}
                                  className="h-full w-full object-cover"
                                >
                                  <p className="u-screen-reader-text">
                                    Your browser does not support the video tag.
                                  </p>
                                </video>
                              ) : (
                                <picture>
                                  <source
                                    srcSet={src.small}
                                    type="image/webp"
                                    media="(max-width: 1023px)"
                                  />
                                  <img
                                    src={src.large}
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={1920}
                                    style={{
                                      backgroundImage: `url(${src?.placeholder})`,
                                      backgroundSize: "cover",
                                      transition: "background-image 300ms ease",
                                    }}
                                    onLoad={(e) => {
                                      e.target.style.backgroundImage = "none";
                                    }}
                                  />
                                </picture>
                              )}
                            </figure>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {data?.sectionImagesTwoCardSlides && (
                    <ProjectInfoTwoCardSection
                      slides={data?.sectionImagesTwoCardSlides}
                    />
                  )}

                  {data?.sectionImagesTwoCardSlides4 && (
                    <ProjectInfoTwoCardSection2
                      slides={data?.sectionImagesTwoCardSlides4}
                      modalVideo={data?.iframeVideo2?.[0]}
                    />
                  )}

                  {data?.sectionImages2 && (
                    <>
                      {data?.sectionImages2?.map((src, index) => {
                        const file = src.large || src.small;
                        const isVideo =
                          typeof file === "string" &&
                          (file.includes(".mp4") || file.includes(".webm"));

                        return (
                          <div key={index} className="c-section w-full">
                            <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                              {isVideo ? (
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  src={file}
                                  className="h-full w-full object-cover"
                                >
                                  <p className="u-screen-reader-text">
                                    Your browser does not support the video tag.
                                  </p>
                                </video>
                              ) : (
                                <picture>
                                  <source
                                    srcSet={src?.small}
                                    type="image/webp"
                                    media="(max-width: 1023px)"
                                  />
                                  <img
                                    src={src?.large}
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={1920}
                                    style={{
                                      backgroundImage: `url(${src?.placeholder})`,
                                      backgroundSize: "cover",
                                      transition: "background-image 300ms ease",
                                    }}
                                    onLoad={(e) => {
                                      e.target.style.backgroundImage = "none";
                                    }}
                                  />
                                </picture>
                              )}
                            </figure>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {data?.sectionImagesTwoCardSlides5 && (
                    <ProjectInfoTwoCardSection2
                      slides={data?.sectionImagesTwoCardSlides5}
                    />
                  )}

                  {data?.sectionImage &&
                    (() => {
                      const file = data.sectionImage;
                      const isVideo =
                        typeof file === "string" &&
                        (file.includes(".mp4") || file.includes(".webm"));

                      return (
                        <div className="c-section mb-[4.375rem] w-full">
                          <figure className="c-block-image">
                            {isVideo ? (
                              <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                src={file}
                                className="h-full w-full object-cover"
                              >
                                <p className="u-screen-reader-text">
                                  Your browser does not support the video tag.
                                </p>
                              </video>
                            ) : (
                              <img
                                src={data?.sectionImage}
                                className=" h-full w-full object-cover"
                                width={1600}
                                height={600}
                              />
                            )}
                          </figure>
                        </div>
                      );
                    })()}

                  {data?.goalText && (
                    <div class="c-section  mb-[4.375rem] px-[8.75px] md:my-[13.125rem] xl:my-[16.25rem] --mb-2 ">
                      <div class="o-container md:mx-auto w-full text-left [direction:ltr] align-top">
                        <p class="c-block-text text-[1.3125rem] text-left md:text-[2.4609375rem] lg:text-[2.63671875rem] xl:text-[3.5rem] --p-1 3xl:text-[4.375rem] font-medium font-[Lausanne2] text-black  leading-[1]  md:px-[calc((100vw-13.125rem)*2/20+1.25rem)] [text-indent:5rem]  md:[text-indent:calc((100vw-13.125rem)*5/20+3.125rem)]">
                          {data?.goalText}
                        </p>
                      </div>
                    </div>
                  )}

                  {data?.summaryTextContainer?.summaryText && (
                    <>
                      <div class="c-section  mb-[4.375rem] px-[8.75px] md:my-[13.125rem] xl:my-[16.25rem] --mb-2 ">
                        <div class="o-container md:mx-auto w-full text-left [direction:ltr] align-top">
                          {data?.summaryTextContainer?.[0].summaryText
                            .split("\n\n")
                            .map((line, i) => (
                              <p
                                key={i}
                                class="c-block-text text-[1.3125rem] text-left md:text-[2.4609375rem] lg:text-[2.63671875rem] xl:text-[3.5rem] --p-1 3xl:text-[4.375rem] font-medium font-[Lausanne2] text-black  leading-[1]  md:px-[calc((100vw-13.125rem)*2/20+1.25rem)] [text-indent:5rem]  md:[text-indent:calc((100vw-13.125rem)*5/20+3.125rem)]"
                              >
                                {line}
                                <br />
                                <br />
                              </p>
                            ))}

                          {data?.summaryTextContainer?.[1].summaryText
                            .split("\n\n")
                            .map((line, i) => (
                              <p
                                key={i}
                                class="c-block-text text-[1.3125rem] text-left md:text-[2.4609375rem] lg:text-[2.63671875rem] xl:text-[3.5rem] --p-1 3xl:text-[4.375rem] font-medium font-[Lausanne2] text-black  leading-[1]  md:px-[calc((100vw-13.125rem)*2/20+1.25rem)] [text-indent:5rem]  md:[text-indent:calc((100vw-13.125rem)*5/20+3.125rem)]"
                              >
                                {line}
                                <br />
                                <br />
                              </p>
                            ))}
                        </div>
                      </div>
                    </>
                  )}

                  {data?.projectInfoCardSection2 && (
                    <div className="my-4">
                      <ProjectInfoCardSection
                        img={data?.projectInfoCardSection2.sectionImage?.large}
                        smallimg={
                          data?.projectInfoCardSection?.sectionImage?.small
                        }
                        title={data?.projectInfoCardSection2.sectionImageTitle}
                        year={data?.projectInfoCardSection2.sectionImageYear}
                        buttonText={
                          data?.projectInfoCardSection2.sectionImageButtonText
                        }
                        video={data?.projectInfoCardSection2.sectionImageVideo}
                        videoThumbnail={
                          data?.projectInfoCardSection2
                            .sectionImageVideoThumbnail?.large
                        }
                        smallVideoThumbnail={
                          data?.projectInfoCardSection
                            .sectionImageVideoThumbnail?.small
                        }
                        modalVideo={data?.iframeVideo?.[1]}
                      />
                    </div>
                  )}

                  {data?.sectionImagesSameWay2 && (
                    <>
                      {data?.sectionImagesSameWay2?.map((src, index) => {
                        const file = src.large || src.small;
                        const isVideo =
                          (typeof file === "string" && file.includes(".mp4")) ||
                          file.includes(".webm");

                        return (
                          <div key={index} className="c-section w-full">
                            <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                              {isVideo ? (
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  src={file}
                                  className="h-full w-full object-cover"
                                >
                                  <p className="u-screen-reader-text">
                                    Your browser does not support the video tag.
                                  </p>
                                </video>
                              ) : (
                                <picture>
                                  <source
                                    srcSet={src?.small}
                                    type="image/webp"
                                    media="(max-width: 1023px)"
                                  />
                                  <img
                                    src={src?.large}
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={1920}
                                    style={{
                                      backgroundImage: `url(${src?.placeholder})`,
                                      backgroundSize: "cover",
                                      transition: "background-image 300ms ease",
                                    }}
                                    onLoad={(e) => {
                                      e.target.style.backgroundImage = "none";
                                    }}
                                  />
                                </picture>
                              )}
                            </figure>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {data?.sectionImagesSameWay2Video?.map(
                    (videoSrc, index) =>
                      videoSrc && (
                        <div key={index} className="c-section w-full">
                          <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={videoSrc}
                              className="h-full w-full object-cover"
                            >
                              <p className="u-screen-reader-text">
                                Your browser does not support the video tag.
                              </p>
                            </video>
                          </figure>
                        </div>
                      ),
                  )}

                  {data?.sectionImagesTwoCardSlides2 && (
                    <ProjectInfoTwoCardSection
                      slides={data?.sectionImagesTwoCardSlides2}
                    />
                  )}

                  {data?.sectionImagesTwoCardSlides3 && (
                    <ProjectInfoOneCardSection
                      slides={data?.sectionImagesTwoCardSlides3}
                    />
                  )}

                  {data?.sectionImagesSameWay3 && (
                    <>
                      {data.sectionImagesSameWay3.map((item, index) => {
                        const file = item.large || item.small;
                        const isVideo =
                          typeof file === "string" &&
                          (file.includes(".mp4") || file.includes(".webm"));

                        return (
                          <div key={index} className="c-section w-full">
                            <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                              {isVideo ? (
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  src={file}
                                  className="h-full w-full object-cover"
                                >
                                  <p className="u-screen-reader-text">
                                    Your browser does not support the video tag.
                                  </p>
                                </video>
                              ) : (
                                <picture>
                                  <source
                                    srcSet={item?.small}
                                    type="image/webp"
                                    media="(max-width: 1023px)"
                                  />
                                  <img
                                    src={item?.large}
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={1920}
                                    style={{
                                      backgroundImage: `url(${item?.placeholder})`,
                                      backgroundSize: "cover",
                                      transition: "background-image 300ms ease",
                                    }}
                                    onLoad={(e) => {
                                      e.target.style.backgroundImage = "none";
                                    }}
                                  />
                                </picture>
                              )}
                            </figure>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {data?.projectInfoCenterCard && (
                    <div id="" className="relative main_content_hide_gsap">
                      <ProjectInfoCenterCardSection
                        cardsImages={data?.projectInfoCenterCard}
                      />
                    </div>
                  )}

                  {data?.projectInfoCenterCard4 && (
                    <>
                      {data?.projectInfoCenterCard4?.map((src, index) => (
                        <div key={index} className="c-section my-[4.375rem]">
                          <ProjectInfoCenterCardSection3 cardsImages={src} />
                        </div>
                      ))}
                    </>
                  )}

                  {data?.sectionImages?.map((src, index) => {
                    const file = src.large || src;
                    const isVideo =
                      typeof file === "string" &&
                      (file.includes(".mp4") || file.includes(".webm"));

                    return (
                      <div key={index} className="c-section w-full">
                        <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                          {isVideo ? (
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={file}
                              className="h-full w-full object-cover"
                            >
                              <p className="u-screen-reader-text">
                                Your browser does not support the video tag.
                              </p>
                            </video>
                          ) : (
                            <picture>
                              <source
                                srcSet={src.small}
                                type="image/webp"
                                media="(max-width: 1023px)"
                              />
                              <img
                                src={src.large}
                                className="w-full h-full object-cover"
                                width={1600}
                                height={600}
                                style={{
                                  backgroundImage: `url(${src?.placeholder})`,
                                  backgroundSize: "cover",
                                  transition: "background-image 300ms ease",
                                }}
                                onLoad={(e) => {
                                  e.target.style.backgroundImage = "none";
                                }}
                              />
                            </picture>
                          )}
                        </figure>
                      </div>
                    );
                  })}

                  {data?.sectionImages3 && (
                    <>
                      {data?.sectionImages3.map((src, index) => (
                        <div key={index} className="c-section  w-full">
                          <figure className="c-block-image bg-[rgba(0,0,0,0.1)]">
                            <picture>
                              <source
                                srcSet={src?.small}
                                type="image/webp"
                                media="(max-width: 1023px)"
                              />
                              <img
                                src={src?.large}
                                className="w-full h-full object-cover"
                                width={1200}
                                height={1920}
                                style={{
                                  backgroundImage: `url(${src?.placeholder})`,
                                  backgroundSize: "cover",
                                  transition: "background-image 300ms ease",
                                }}
                                onLoad={(e) => {
                                  e.target.style.backgroundImage = "none";
                                }}
                              />
                            </picture>
                          </figure>
                        </div>
                      ))}
                    </>
                  )}

                  {data?.projectInfoCenterCard2 && (
                    <>
                      <ProjectInfoCenterCardSection2
                        cardsImages={data?.projectInfoCenterCard2}
                      />
                    </>
                  )}

                  {data?.projectInfoCenterCard3 && (
                    <>
                      {data?.projectInfoCenterCard3?.map((src, index) => (
                        <div key={index} className="c-section my-[4.375rem]">
                          <ProjectInfoCenterCardSection3 cardsImages={src} />
                        </div>
                      ))}
                    </>
                  )}

                  {data?.projectInfoCardSection3 && (
                    <div className="my-[4.375rem] md:my-[13.125rem] lg:my-[14.0625rem] xl:my-60 2xl:my-[15.9375rem] --projectinfo-cardsection-my 3xl:my-[18.75rem]">
                      <ProjectInfoCardSection
                        img={data?.projectInfoCardSection3?.sectionImage?.large}
                        smallimg={
                          data?.projectInfoCardSection3?.sectionImage?.small
                        }
                        title={data?.projectInfoCardSection3.sectionImageTitle}
                        year={data?.projectInfoCardSection3.sectionImageYear}
                        buttonText={
                          data?.projectInfoCardSection3.sectionImageButtonText
                        }
                        video={data?.projectInfoCardSection3.sectionImageVideo}
                        videoThumbnail={
                          data?.projectInfoCardSection3
                            .sectionImageVideoThumbnail?.large
                        }
                        smallVideoThumbnail={
                          data?.projectInfoCardSection3
                            .sectionImageVideoThumbnail?.small
                        }
                        modalVideo={data?.iframeVideo?.[2]}
                      />
                    </div>
                  )}

                  {data?.projectInfoCenterCard5 && (
                    <>
                      {data?.projectInfoCenterCard5?.map((src, index) => (
                        <div key={index} className="c-section my-[4.375rem]">
                          <ProjectInfoCenterCardSection3 cardsImages={src} />
                        </div>
                      ))}
                    </>
                  )}

                  <ProjectFooterSection data={data} />
                </div>
              </div>
            </div>
          </div>
          {data?.AgencyourProjectImages && (
            <Suspense fallback={null}>
              <AgencyOurProject projectImages={data?.AgencyourProjectImages} />
            </Suspense>
          )}
        </section>
      </main>

      <footer className="site_footer">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}

export default WorkInfo;
