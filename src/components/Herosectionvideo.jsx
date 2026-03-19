import { useRef, useEffect, useState } from "react";

function Herosectionvideo({ type, syncRef }) {
  const [videoReady, setVideoReady] = useState(false);

  const classes =
    type === "inline"
      ? "w-[21.4vw] xl:w-[15.7vw] h-[9.6vw] xl:h-[6.9vw] object-cover rounded-full"
      : "w-full  h-full object-cover";
  const localRef = useRef(null);
  const videoRef = type === "background" ? syncRef : localRef;
  // insure both video play same time logic start here
  useEffect(() => {
    if (type === "inline" && syncRef?.current && videoRef.current) {
      const syncEl = syncRef.current;
      const sync = () => {
        videoRef.current.currentTime = syncEl.currentTime;
      };
      syncEl.addEventListener("timeupdate", sync);
      return () => syncEl.removeEventListener("timeupdate", sync);
    }
  }, [type, syncRef, videoRef]);
  // insure both video play same time logic ends here

  return (
    <div className="video-wrapper flex items-center justify-center  w-full h-full ">
      {type === "background" && (
        <div
          className="absolute inset-0  z-10 transition-opacity duration-700 ease-in-out pointer-events-none"
          style={{
            opacity: videoReady ? 0 : 1,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      )}

      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dd0fyuait/video/upload/v1773775714/69496b2d_eishdv.mp4"
        className={classes}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)}
      />
    </div>
  );
}

export default Herosectionvideo;
