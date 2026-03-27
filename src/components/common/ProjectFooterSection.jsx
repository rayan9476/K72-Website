import { useRef } from "react";
import useFooterImageScrollAnimation from "../hooks/useFooterImageScrollAnimation";

function ProjectFooterSection({ data }) {
  const footerRef = useRef(null);

  const imageRef = useRef(null);
  const VideoRef = useRef(null);

  //  footer wow image scroll animation start here
  useFooterImageScrollAnimation(data, footerRef, imageRef, VideoRef);
  //  footer wow image scroll animation ends here

  const renderMedia = (media, imageRef, VideoRef) => {
    const url = media?.footerImage;

    if (
      typeof url === "string" &&
      (url.includes(".mp4") || url.includes(".webm"))
    ) {
      return (
        <video
          ref={VideoRef}
          autoPlay
          muted
          loop
          playsInline
          src={url}
          className="h-full w-full object-cover  animate_wow  rounded-[1.640625rem] lg:rounded-[1.7578125rem] xl:rounded-[1.875rem] 3xl:rounded-[4.375rem] "
        />
      );
    }
    return (
      <picture>
        <source
          srcSet={data?.footerImageSmall}
          type="image/webp"
          media="(max-width: 1023px)"
        />
        <img
          ref={imageRef}
          className="h-full w-full object-cover  animate_wow  rounded-[1.640625rem] lg:rounded-[1.7578125rem] xl:rounded-[1.875rem] 3xl:rounded-[4.375rem] "
          src={data?.footerImage}
          style={{
            backgroundImage: `url(${data?.footerImagePlaceholder})`,
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
        ref={footerRef}
        style={{ opacity: 0 }}
        className="footer_section footer_wow main_content_hide_gsap  pt-8 lg:pt-12 pb-[4.375rem]  md:pb-[13.125rem] xl:pb-[16.25rem]"
      >
        <div className="c-project_footer ">
          <span className="c-project_footer_text overflow-hidden w-[100vw] block md:[direction:ltr]">
            <span className="text-[40vw] -ml-[13vw] whitespace-nowrap font-medium font-[Lausanne2] text-black  leading-[1] ">
              {data?.footerYear}
            </span>
          </span>
          <figure className="c-project_footer_visual   w-[40vw] md:w-[:calc((100vw-13.125rem)*6/20+3.75rem)] mx-auto -mt-[26vw]   ">
            <div className="">{renderMedia(data, imageRef, VideoRef)}</div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default ProjectFooterSection;
