import { useRef } from "react";
import { useStackedCardsScrollAnimation2 } from "../hooks/useStackedCardsScrollAnimation2";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";

function ProjectInfoCenterCardSection2({ cardsImages }) {
  // isHover logic start here
  const isHover = useIsHoverDevice();
  // isHover logic ends here

  const { images, text } = cardsImages;

  const wrapper = useRef(null);

  // stacked cards animation start here

  useStackedCardsScrollAnimation2(
    wrapper,
    ".center_card_animate",
    wrapper,
    100,
    0,
  );
  // stacked cards animation ends here

  const renderMedia = (media, cards_image_1 = "") => {
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
          className={`cards_image_1  w-full h-full  lg:object-cover rounded-[3.0625rem]   lg:rounded-[3.28125rem] ${cards_image_1}`}
        />
      );
    }

    return (
      <picture>
        <source
          srcSet={media?.small}
          type="image/webp"
          media="(max-width: 1023px)"
        />
        <img
          src={media?.large}
          alt="cardsimage"
          className={`cards_image_1  w-full h-full   lg:object-cover rounded-[3.0625rem]   lg:rounded-[3.28125rem] ${cards_image_1}`}
          loading="lazy"
          style={{
            backgroundImage: `url(${media?.placeholder})`,
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
        ref={wrapper}
        style={{ opacity: 0 }}
        className="c-section main_content_hide_gsap my-[4.375rem] 2xl:my-[15rem] center-card-my 3xl:my-[18.75rem]"
      >
        <div
          className="layered-punchline is-inview relative overflow-hidden"
          id="layered-punchline-637e89924bad6"
        >
          <div
            className={`layered-punchline_text ${!isHover ? "block" : "hidden"} is-inview uppercase  flex flex-col justify-center text-black font-[Lausanne2] font-medium leading-[1] md:[direction:ltr] `}
          >
            <div>
              <span>{text}</span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className={`layered-punchline_text ${isHover ? "block" : "hidden"} is-inview flex flex-col justify-center uppercase  text-black font-[Lausanne2] font-medium leading-[1] md:[direction:ltr] absolute top-0 left-0 w-screen h-screen `}
          >
            <div>
              <span>{text}</span>
            </div>
          </div>

          <div
            className={`layered-punchline_images w-[70vw]   relative z-10 ${!isHover ? "h-full " : "h-screen"}   mx-auto rounded-bl-[3.0625rem] rounded-br-[3.0625rem] overflow-hidden`}
          >
            <div
              className={`layered-punchline_images_item  ${!isHover ? "relative " : "absolute inset-0 "}   h-full w-full`}
            >
              <div
                className={`center_card_animate  ${!isHover ? "relative " : "absolute  "}   top-0 left-0 h-full w-full flex items-center justify-center`}
              >
                <figure
                  className={`layered-punchline_image  ${!isHover ? "w-[70vw] h-[105vw] mb-[2.1875rem]" : "h-screen w-[66.6666666667vh] "} is-inview    z-10 overflow-hidden transition-[border-radius] duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)]`}
                >
                  {renderMedia(images?.[0], "cards_image_1")}
                </figure>
              </div>
            </div>

            <div
              className={`layered-punchline_images_item relative ${!isHover ? "relative " : "absolute inset-0 "}  h-full w-full `}
            >
              <div
                className={`center_card_animate relative ${!isHover ? "relative " : "absolute "}  top-0 left-0 w-full flex items-center justify-center`}
              >
                <figure
                  className={`layered-punchline_image  ${!isHover ? "w-[70vw] h-[105vw] mb-[2.1875rem]" : "h-screen w-[66.6666666667vh]"} is-inview  z-10 overflow-hidden transition-[border-radius] duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)]`}
                >
                  {renderMedia(images?.[1])}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfoCenterCardSection2;
