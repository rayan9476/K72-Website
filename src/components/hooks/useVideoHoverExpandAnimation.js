import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useIsHoverDevice } from "./useIsHoverDevice";
gsap.defaults({ overwrite: "auto" });
export default function useVideoHoverExpandAnimation({
  IsHover,
  figureRef,
  ImgRef,
  VideoRef,
}) {
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  useLayoutEffect(() => {
    if (!isHover || !figureRef.current || !ImgRef.current || !VideoRef.current)
      return;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power3.out",
      },
    });

    if (IsHover) {
      VideoRef.current.play();

      tl.to(figureRef.current, {
        width: "100%",
        height: "100%",
        borderRadius: "0%",
      })
        .to(
          ImgRef.current,
          { width: "100%", height: "100%", borderRadius: "0%" },
          "<",
        )
        .to(
          VideoRef.current,
          {
            width: "100%",
            height: "100%",
            borderRadius: "0%",
            zIndex: 20,
          },
          "<",
        );
    } else {
      tl.to(figureRef.current, {
        width: "56.25vw",
        height: "56.25vw",
        borderRadius: "50%",
      })
        .to(
          ImgRef.current,
          { width: "56.25vw", height: "56.25vw", borderRadius: "50%" },
          "<",
        )
        .to(
          VideoRef.current,
          {
            width: "56.25vw",
            height: "56.25vw",
            borderRadius: "50%",
          },
          "<",
        );

      VideoRef.current.pause();
    }

    return () => tl.kill();
  }, [IsHover, ImgRef, VideoRef, isHover, figureRef]);
}
