import { useRef } from "react";
import { useHoverCursorFlip } from "../hooks/useHoverCursorFlip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y } from "swiper/modules";
import useSwiper from "../hooks/useSwiper";
function ProjectInfoTwoCardSection({ slides }) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const swiperRef = useRef(null);

  // hover flip animation start here
  useHoverCursorFlip(containerRef, cursorRef, true);
  // hover flip animation ends here

  //  swiper logic start here
  useSwiper(cursorRef, swiperRef);
  //  swiper logic ends here

  return (
    <>
      <div className=" pt-[8.75px] xl:pt-2.5  pr-[8.75px]  3xl:pt-[12.5px] bg-white cursor-pointer">
        {/* mb-[4.375rem] */}
        <div className="relative mb-[0.675rem]   md:[direction:ltr]">
          <div className="caption-gallery " data-module-caption-gallery="m9">
            <div
              ref={containerRef}
              className="swiper-wrapper relative h-full w-full z-10 flex "
            >
              <Swiper
                modules={[A11y]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={2}
                slidesPerGroup={2}
                loop={true}
                loopedSlides={slides.length}
                watchSlidesProgress={true}
                spaceBetween={0}
                speed={900}
                allowTouchMove={true}
                className="caption-gallery "
              >
                {slides.map((item, index) => {
                  const file = item.img;
                  const isVideo =
                    typeof file === "string" &&
                    (file.includes(".mp4") || file.includes(".webm"));

                  return (
                    <SwiperSlide
                      key={index}
                      className="caption-gallery_slide   flex-shrink-0  md:[width:calc((100vw-13.125rem)*10/20+6.25rem)] h-full relative transition-transform block"
                    >
                      <figure className="caption-gallery_slide_inner relative pl-[8.75px] md:pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px]">
                        {isVideo ? (
                          <>
                            <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={file}
                              className="swiper-lazy  w-full mb-[8.75px] xl:mb-2.5 2xl:mb-[10.625px] 3xl:mb-[12.5px]"
                            >
                              <p className="u-screen-reader-text">
                                Your browser does not support the video tag.
                              </p>
                            </video>

                            <figcaption className="caption-gallery_content flex -ml-[8.75px] xl:-ml-2.5 2xl:-ml-[10.625px] 3xl:-ml-[12.5px]">
                              <span className="caption-gallery_index text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] --projectinfo-two-card-text 3xl:text-[1.5625rem] text-black font-medium font-[Lausanne2] pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px] leading-[1.25] w-[25%] md:w-[40%]">
                                <span data-caption-gallery="counter">
                                  {" "}
                                  _{String(index + 1).padStart(2, "0")}
                                </span>
                              </span>
                              <p className="caption-gallery_text text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] --projectinfo-two-card-text 3xl:text-[1.5625rem] text-black font-medium font-[Lausanne2] pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px] leading-[1.25] w-[75%] md:w-[60%] [padding-right:calc((100vw-13.125rem)*1/20+1.625rem)] ">
                                {item.title}
                              </p>
                            </figcaption>
                          </>
                        ) : (
                          <>
                            <picture>
                              <img
                                src={item.img}
                                alt={item.title}
                                className="swiper-lazy  w-full mb-[8.75px] xl:mb-2.5 2xl:mb-[10.625px] 3xl:mb-[12.5px]"
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
                            <figcaption className="caption-gallery_content flex -ml-[8.75px] xl:-ml-2.5 2xl:-ml-[10.625px] 3xl:-ml-[12.5px]">
                              <span className="caption-gallery_index text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] --projectinfo-two-card-text 3xl:text-[1.5625rem] text-black font-medium font-[Lausanne2] pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px] leading-[1.25] w-[25%] md:w-[40%]">
                                <span data-caption-gallery="counter">
                                  {" "}
                                  _{String(index + 1).padStart(2, "0")}
                                </span>
                              </span>
                              <p className="caption-gallery_text text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] --projectinfo-two-card-text 3xl:text-[1.5625rem] text-black font-medium font-[Lausanne2] pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px] leading-[1.25] w-[75%] md:w-[60%] [padding-right:calc((100vw-13.125rem)*1/20+1.625rem)] ">
                                {item.title}
                              </p>
                            </figcaption>
                          </>
                        )}
                      </figure>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div
              ref={cursorRef}
              className="caption-gallery_cursor absolute top-0 left-0  w-[15vw] h-[15vw]  z-50  opacity-0  "
              data-caption-gallery="cursor"
            >
              <svg
                className="two_cards_arrow h-full w-full   origin-center [transform:translate(-50%,-50%)]"
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <image
                  className="h-full w-full object-cover"
                  href="https://ik.imagekit.io/rayan8422/converted.svg"
                />
              </svg>

              <span className="u-screen-reader-text opacity-0">
                Next/Previous
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfoTwoCardSection;
