import { useRef } from "react";
import useVideoModalAnimation from "../hooks/useVideoModalAnimation";
import { useIsHoverDevice } from "../hooks/useIsHoverDevice";
import useScrollStopAndStart from "../hooks/useScrollStopAndStart";
function VideoModel({
  isActiveVideo,
  setIsActiveVideo,
  video,
  setActiveVideo,
}) {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);
  const videoRef = useRef(null);

  // video model animation start here
  const { closeModal } = useVideoModalAnimation({
    isActiveVideo,
    setIsActiveVideo,
    modalRef,
    videoRef,
    iframeRef,
    setActiveVideo,
  });
  // video model animation ends here

  // checking is mp4 or not logic start here
  const videoUrl = typeof video === "string" ? video : video?.video || "";

  const isMp4 = videoUrl.includes(".mp4");

  const isVimeoIframe = videoUrl.includes("player.vimeo.com/video");
  // checking is mp4 or not logic ends here

  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  // scroll stop when model open and start when close logic start here
  useScrollStopAndStart(isActiveVideo);
  // scroll stop when model open and start when close logic ends here

  return (
    <>
      <div
        ref={modalRef}
        onClick={() => closeModal()}
        className={`c-video-modal ${isActiveVideo ? "pointer-events-auto" : "pointer-events-none"} fixed top-0 left-0 w-full h-full  z-[10000] flex items-center justify-center`}
        data-module-video-modal="m8"
      >
        <div
          className="c-video-modal_bg absolute top-0 left-0 w-full h-full origin-top scale-y-0  bg-[#1d1d1d] opacity-[0.95] "
          data-video-modal="close"
        ></div>

        <button
          type="button"
          className={`c-button  c-video-modal_close top-0  absolute z-[99999] uppercase text-[1.9140625rem] xl:text-[2.1875rem] 2xl:text-[2.3242rem] 3xl:text-[2.7344rem]    cursor-pointer font-medium  font-[Lausanne2] leading-[0.7] border-2 border-solid  pt-[0.3em] pb-0 px-[0.3em]  rounded-[1912.15rem]  right-[0.3125rem]  -translate-y-[4.0625rem] transition-[opacity,colors] duration-[300ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]
             ${
               isHover
                 ? "text-white border-white"
                 : isActiveVideo
                   ? " text-[#d3fd50] border-[#d3fd50] "
                   : "text-white border-white "
             }
                   
 hover:text-[#d3fd50] hover:border-[#d3fd50]
            `}
          data-video-modal="close"
          onClick={() => closeModal()}
        >
          <span>Close</span>
        </button>

        <div className="c-video-modal_content w-[80%] opacity-0  ">
          <div
            className="c-video-modal_inner relative pb-[56%] bg-black  "
            data-video-modal="inner"
            onClick={(e) => e.stopPropagation()}
          >
            {isMp4 && (
              <video
                ref={videoRef}
                src={videoUrl}
                loop
                playsInline
                controls
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video Modal"
                className="absolute top-0 left-0 w-full h-full z-[9999]"
              />
            )}
            {isVimeoIframe && (
              <iframe
                ref={iframeRef}
                src={videoUrl}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video Modal"
                className="absolute top-0 left-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoModel;
