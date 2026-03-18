import { useRef } from "react";
import { useHoverCursorFlip } from "../hooks/useHoverCursorFlip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Autoplay } from "swiper/modules";
import useSwiper from "../hooks/useSwiper";

function ProjectInfoOneCardSection({ slides }) {
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
        <div className="relative   md:[direction:ltr]">
          <div className="caption-gallery " data-module-caption-gallery="m9">
            <div
              ref={containerRef}
              className="swiper-wrapper relative h-full w-full z-10 flex "
            >
              <Swiper
                modules={[A11y, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                loopedSlides={slides.length}
                watchSlidesProgress={true}
                spaceBetween={0}
                speed={900}
                allowTouchMove={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="caption-gallery "
              >
                {slides.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="caption-gallery_slide   flex-shrink-0  md:[width:calc((100vw-13.125rem)*10/20+6.25rem)] h-full relative transition-transform block"
                  >
                    <figure className="caption-gallery_slide_inner relative pl-[8.75px] md:pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px]">
                      <picture>
                        <source
                          srcSet={item?.small}
                          type="image/webp"
                          media="(max-width: 1023px)"
                        />
                        <img
                          src={item?.large}
                          alt={item?.title}
                          className="swiper-lazy  w-full mb-[8.75px] xl:mb-2.5 2xl:mb-[10.625px] 3xl:mb-[12.5px]"
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
                    </figure>
                  </SwiperSlide>
                ))}
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

export default ProjectInfoOneCardSection;
