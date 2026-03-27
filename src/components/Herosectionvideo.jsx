import { useRef, useEffect } from "react";

function Herosectionvideo({ type, syncRef }) {
  const classes =
    type === "inline"
      ? "w-[21.4vw] xl:w-[15.7vw] h-[9.6vw] xl:h-[6.9vw] object-cover rounded-full"
      : "w-full  h-full object-cover";

  // insure both video play same time logic start here
  const localRef = useRef(null);
  const videoRef = type === "background" ? syncRef : localRef;

  useEffect(() => {
    if (!syncRef?.current || !videoRef.current) return;

    const master = syncRef.current;
    const slave = videoRef.current;

    const play = () => slave.play();
    const pause = () => slave.pause();

    master.addEventListener("play", play);
    master.addEventListener("pause", pause);

    return () => {
      master.removeEventListener("play", play);
      master.removeEventListener("pause", pause);
    };
  }, [syncRef]);
  // insure both video play same time logic ends here

  return (
    <div className="video-wrapper flex items-center justify-center  w-full h-full ">
      <video
        ref={videoRef}
        poster="https://ik.imagekit.io/rayan8422/Capture_d_ecran_le_2025-09-17_a_18.11.25.jpg?tr=f-auto,w-1200,q-60"
        src="https://res.cloudinary.com/dd0fyuait/video/upload/q_auto,f_auto,vc_auto,w_800/v1773775714/69496b2d_eishdv.mp4"
        className={classes}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}

export default Herosectionvideo;
