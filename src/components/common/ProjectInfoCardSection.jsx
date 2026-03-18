import { useState, useRef } from "react";
import useVideoHoverExpandAnimation from "../hooks/useVideoHoverExpandAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoModel from "./VideoModel";

gsap.registerPlugin(ScrollTrigger);

function ProjectInfoCardSection({
  img,
  smallimg,
  title,
  year,
  buttonText,
  video,
  videoThumbnail,
  smallVideoThumbnail,
}) {
  const [IsHover, setisHover] = useState(false);
  const figureRef = useRef(null);
  const ImgRef = useRef(null);
  const VideoRef = useRef(null);

  // video expand animation start here
  useVideoHoverExpandAnimation({ IsHover, figureRef, ImgRef, VideoRef });
  // video expand animation ends here
  const [isActiveVideo, setIsActiveVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (video) => {
    setActiveVideo(video);
    setIsActiveVideo(true);
  };

  return (
    <>
      <article className="video-featured relative  border-t-1 border-b-1 pb-16 xl:pb-0 border-black   ">
        <header className="video-featured_head absolute left-0 top-0 flex items-center justify-between w-full px-[8.75px] md:[direction:ltr] py-[0.5rem]">
          <h2 className="c-video-featured_title text-[1.09375rem] md:text-[1.640625rem] lg:text-[1.7578125rem] xl:text-[1.875rem] 2xl:text-[1.9921875rem] --projectinfo-text 3xl:text-[2.34375rem] font-[Lausanne2] text-black  leading-[1.5] uppercase ">
            {title}
          </h2>
          <span className="c-video-featured_subtitle text-[1.09375rem] md:text-[1.640625rem] lg:text-[1.7578125rem]  xl:text-[1.875rem] 2xl:text-[1.9921875rem] --projectinfo-text 3xl:text-[2.34375rem] font-[Lausanne2] text-black  leading-[1.5] uppercase">
            _{year}
          </span>
        </header>
        <main
          className="c-video-featured_content  block"
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
        >
          <figure
            ref={figureRef}
            className="video_featured_visual absolute  [transform:translate3d(-50%,-50%,0px)] md:[transform:translate3d(50%,-50%,0px)] will-change-[transform,border-radius] animate_figure   w-[56.25vw] h-[56.25vw]  inset-1/2  
            "
          >
            <picture>
              <source
                srcSet={smallimg}
                type="image/webp"
                media="(max-width: 1023px)"
              />
              <img
                src={img}
                ref={ImgRef}
                className="absolute w-[56.25vw] h-[56.25vw] object-cover  rounded-[50%] "
                width={1200}
                height={1920}
                style={{
                  backgroundImage: `url(${img?.placeholder})`,
                  backgroundSize: "cover",
                  transition: "background-image 300ms ease",
                }}
                onLoad={(e) => {
                  e.target.style.backgroundImage = "none";
                }}
              />
            </picture>

            <video
              ref={VideoRef}
              data-video-thumb="video-preview"
              muted
              loop
              playsInline
              src={video}
              poster={
                window.innerWidth <= 1023 ? smallVideoThumbnail : videoThumbnail
              }
              width={1200}
              height={1920}
              className="absolute   w-[56.25vw] h-[56.25vw] rounded-[50%] object-cover   cursor-pointer"
            >
              <p className="u-screen-reader-text ">
                Your browser does not support the video tag.
              </p>
            </video>
          </figure>
          <button
            type="button"
            onClick={() => openModal(video)}
            className="c-video-featured_play absolute   hover:underline hover:underline-offset-3 transition-[underline] ease-in duration-100 cursor-pointer top-1/2 left-1/2 w-[56.25vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 transform rounded-[50%] overflow-hidden   text-white    text-[8vw] font-medium font-[Lausanne2]  uppercase "
          >
            {buttonText}
          </button>
        </main>
      </article>

      <VideoModel
        isActiveVideo={isActiveVideo}
        setIsActiveVideo={setIsActiveVideo}
        video={activeVideo}
        setActiveVideo={setActiveVideo}
      />
    </>
  );
}

export default ProjectInfoCardSection;
