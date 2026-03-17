import { useEffect } from "react";
import { gsap } from "gsap";
import Player from "@vimeo/player";
gsap.defaults({ overwrite: "auto" });
export default function useVideoModalAnimation({
  isActiveVideo,
  setIsActiveVideo,
  modalRef,
  videoRef,
  iframeRef,
  setActiveVideo,
}) {
  const closeModal = () => {
    const tl = gsap.timeline({ duration: 0.6, ease: "power2.out" });
    tl.to(
      modalRef.current.querySelector(".c-video-modal_bg"),
      {
        scaleY: 0,
        onComplete: () => {
          (setIsActiveVideo(false), setActiveVideo(null));
        },
      },
      "<",
    );
    tl.to(
      modalRef.current.querySelector(".c-video-modal_content"),
      {
        opacity: 0,
      },
      "<",
    )

      .to(
        modalRef.current.querySelector(".c-video-modal_close"),
        {
          top: "0",
        },
        "<",
      );

    if (videoRef.current) {
      videoRef.current?.pause();
    }

    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.pause();
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ duration: 0.6, ease: "power2.out" });

    if (isActiveVideo) {
      tl.to(
        modalRef.current.querySelector(".c-video-modal_bg"),

        {
          scaleY: 1,
          transformOrigin: "top",
        },
        "<",
      )
        .to(
          modalRef.current.querySelector(".c-video-modal_content"),

          {
            opacity: 1,
          },
          // "<",
        )
        .to(
          modalRef.current.querySelector(".c-video-modal_close"),
          {
            top: "67.2",
          },
          "<",
        );

      if (videoRef.current) {
        videoRef.current?.play();
      }

      if (iframeRef.current) {
        const player = new Player(iframeRef.current);
        player.play().catch((err) => {
          console.log("Vimeo autoplay blocked", err);
        });
      }
    }
  }, [isActiveVideo]);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    if (isActiveVideo) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isActiveVideo]);

  return { closeModal };
}
