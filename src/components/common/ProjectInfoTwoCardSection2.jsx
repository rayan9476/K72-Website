import { useState, useRef } from "react";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";
import { useHoverFlexVideoAnimation } from "../hooks/useHoverFlexVideoAnimation";
import VideoModel from "./VideoModel";

function ProjectInfoTwoCardSection2({ slides }) {
  const containerRef = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  //   flex video animation start here
  useHoverFlexVideoAnimation();
  //   flex video animation ends here

  const [isActiveVideo, setIsActiveVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (video) => {
    setActiveVideo(video);
    setIsActiveVideo(true);
  };
  return (
    <>
      <div className="  bg-white cursor-pointer">
        <div className="relative mb-[4.375rem]  md:[direction:ltr]">
          <div className="caption-gallery xl:flex xl:py-[10px] xl:px-[5px] ">
            <div
              ref={containerRef}
              className={`relative z-10 w-full flex ${!isHover ? "flex-col" : ""}  items-center justify-between`}
            >
              {slides.map((item, index) => (
                <article
                  key={index}
                  className={`animate-two-cards flex  ${!isHover ? "flex-0" : "flex-1 min-w-0 w-full overflow-hidden"}   group cursor-pointer    h-[62.5vw] xl:h-[80vh]  mt-8 lg:mt-12  xl:mx-[5px] 2xl:mx-[5.3125px] 3xl:mx-[6.25px] m-[8.75px] lg:m-[9.375px]  relative transition-transform `}
                >
                  <figure className=" relative  w-full">
                    <video
                      muted
                      loop
                      playsInline
                      src={item?.video}
                      poster={item?.VideoThumbnail}
                      className={` h-full w-full object-cover mb-[8.75px]  xl:mb-2.5 2xl:mb-[10.625px] 3xl:mb-[12.5px]  rounded-[1.640625rem] ${!isHover ? "lg:rounded-[3.28125rem]" : "lg:rounded-[0]"} lg:rounded-[0] xl:rounded-[0] 2xl:rounded-[0] 3xl:rounded-[0] lg:group-hover:rounded-[3.28125rem]
                     xl:group-hover:rounded-[3.5rem]
                       2xl:group-hover:rounded-[3.71875rem] 3xl:group-hover:rounded-[4.375rem] transition-[rounded] duration-100 ease-in`}
                    >
                      <p className="u-screen-reader-text ">
                        Your browser does not support the video tag.
                      </p>
                    </video>

                    <figcaption className="caption_gallery_content border-b-1 xl:border-0 border-black flex ">
                      <p className="caption-gallery_text uppercase text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] --projectinfo-two-card-text 3xl:text-[1.5625rem] text-black font-medium font-[Lausanne2] pl-[8.75px] xl:pl-2.5 2xl:pl-[10.625px] 3xl:pl-[12.5px] leading-[1.25] w-[75%] md:w-[60%] [padding-right:calc((100vw-13.125rem)*1/20+1.625rem)] ">
                        _{item.title}
                      </p>
                    </figcaption>
                    <button
                      type="button"
                      onClick={() => openModal(item?.video)}
                      className="video_gallery_play absolute group inset-0 z-10 flex items-center justify-center cursor-pointer"
                    >
                      <span
                        className={` ${!isHover ? "opacity-100 text-white" : "opacity-0 scale-75"} group-hover:opacity-100   group-hover:scale-100  duration-100 ease-in transition-all text-[10vw] xl:text-[1rem]  2xl:text-[1.0625rem] 3xl:text-[1.25rem] text-black font-medium font-[Lausanne2] uppercase xl:absolute xl:bottom-[2.5rem] xl:left-[2.5rem] xl:flex xl:items-center xl:justify-center xl:bg-white xl:rounded-full xl:w-[12.5rem] xl:h-[12.5rem]`}
                      >
                        Watch
                      </span>
                    </button>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModel
        isActiveVideo={isActiveVideo}
        setIsActiveVideo={setIsActiveVideo}
        video={activeVideo}
        setActiveVideo={setActiveVideo}
      />
    </>
  );
}

export default ProjectInfoTwoCardSection2;
