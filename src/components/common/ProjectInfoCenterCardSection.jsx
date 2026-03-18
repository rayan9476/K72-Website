import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";
import { useStackedCardsScroll } from "../hooks/useStackedCardsScroll";
import useCenterCardAnimation from "../hooks/useCenterCardAnimation";
gsap.registerPlugin(ScrollTrigger);

function ProjectInfoCenterCardSection({ cardsImages }) {
  const sectionRef = useRef(null);
  const ImageRef = useRef(null);
  const imageContainerRef = useRef(null);

  const card = cardsImages?.[0];
  const yPercent = card?.yPercent;
  // stacked cards animation start here

  useStackedCardsScroll(sectionRef, ".card", imageContainerRef, 70, yPercent);
  // stacked cards animation ends here

  // isHover logic start here
  const isHover = useIsHoverDevice();
  // isHover logic ends here

  // image aniamtion start here

  useCenterCardAnimation(sectionRef, ImageRef);
  // image aniamtion ends here

  const file = cardsImages?.[0];

  const renderMedia = (media, ref, scrollImage = "") => {
    const url = media?.large;

    if (
      typeof url === "string" &&
      (url.endsWith(".mp4") || url.endsWith(".webm"))
    ) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          src={url}
          className="h-full w-full object-cover"
        />
      );
    }

    return (
      <picture>
        <source srcSet={media?.small} type="image/webp" />
        <img
          ref={ref}
          src={url}
          className={`is-inview -lazy-loaded  w-full h-full ${
            !isHover ? "object-cover" : media?.objectFit || "object-cover"
          } ${scrollImage}`}
          style={{
            backgroundImage: `url(${ref?.placeholder})`,
            backgroundSize: "cover",
            transition: "background-image 300ms ease",
          }}
          onLoad={(e) => {
            e.target.style.backgroundImage = "none";
          }}
        />
      </picture>
    );
  };

  return (
    <>
      <div
        className="c-section "
        ref={sectionRef}
        style={{ backgroundColor: card?.backgroundColor }}
      >
        <div className="c-fancy-gallery md:[direction:ltr] ">
          <div className="c-fancy-gallery_head relative flex mt-48 md:mt-[28rem] lg:mt-[34rem] xl:mt-[36rem] 2xl:mt-[30rem] ">
            <figure className="c-fancy-gallery_head_small   is-inview w-[40vw] pl-0 relative z-10 -mt-[8%] lg:-mt-[10%] xl:-mt-[14%] 2xl:-mt-[16%] 3xl:-mt-[18%] shrink-0 lg:w-[calc((100vw-13.125rem)*9/20+7.5rem)] lg:pl-[calc((100vw-13.125rem)*1/20+1.25rem)]">
              {renderMedia(file?.images?.[0], ImageRef, "scroll-image")}
            </figure>

            <figure className="c-fancy-gallery_head_large hidden  overflow-hidden grow ml-[calc((100vw-13.125rem)*-3/20+-1.875rem)] rounded-[3.5rem]">
              <img
                src={card?.images?.[0]?.src}
                alt="cardsImage"
                className="is-inview -lazy-loaded  w-full h-full object-cover "
              />
            </figure>
          </div>

          <div className="c-fancy-gallery_container  -mt-[4.375rem] md:-mt-[8.75rem] lg:-mt-[9.375rem] xl:-mt-40 pt-[6.5625rem] md:pt-[17.5rem] lg:pt-[18.75rem] xl:pt-80 pb-[2.1875rem] md:pb-[8.75rem] lg:pb-0 xl:pb-0">
            <div
              ref={imageContainerRef}
              className={`c-fancy-gallery_inner  relative ${!isHover ? "h-full" : "h-screen"}   [width:calc(100%-5rem)] md:w-[80%] lg:w-[calc((100vw-13.125rem)*12/20+7.5rem)]  mx-auto `}
            >
              {card?.images?.[1] && (
                <figure
                  className={`c-fancy-gallery_intro card  ${!isHover ? "" : "absolute h-full top-0 left-0"}  card_image pb-[2.1875rem] md:pb-[6.5625rem] lg:mb-[7.03125rem] xl:mb-8`}
                >
                  <picture>
                    <source
                      srcSet={card?.images?.[1]?.small}
                      type="image/webp"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src={card?.images?.[1]?.large}
                      alt="cardsImage"
                      className={`is-inview -lazy-loaded  w-full h-full ${
                        !isHover
                          ? "object-cover"
                          : card?.images?.[1]?.objectFit || "object-cover"
                      }`}
                    />
                  </picture>
                </figure>
              )}
              {card?.images?.[2] && (
                <figure
                  className={`c-fancy-gallery_intro card  ${!isHover ? "" : "absolute h-full top-0 left-0"}  card_image pb-[2.1875rem] md:pb-[6.5625rem] lg:mb-[7.03125rem] xl:mb-8`}
                >
                  {renderMedia(file?.images?.[2])}
                </figure>
              )}
              {card?.images?.[3] && (
                <figure
                  className={`c-fancy-gallery_intro card  ${!isHover ? "" : "absolute h-full  top-0 left-0"}  card_image pb-[2.1875rem] md:pb-[6.5625rem] lg:mb-[7.03125rem] xl:mb-8`}
                >
                  <picture>
                    <source
                      srcSet={card?.images?.[3]?.small}
                      type="image/webp"
                      media="(max-width: 1023px)"
                    />
                    <img
                      src={card?.images?.[3]?.large}
                      alt="cardsImage"
                      className={`is-inview -lazy-loaded  w-full h-full ${
                        !isHover
                          ? "object-cover"
                          : card?.images?.[3]?.objectFit || "object-cover"
                      }`}
                    />
                  </picture>
                </figure>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfoCenterCardSection;
