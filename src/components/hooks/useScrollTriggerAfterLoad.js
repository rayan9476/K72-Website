import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollTriggerAfterLoad(data) {
  const location = useLocation();

  useEffect(() => {
    if (!data) return;

    let killed = false;

    const waitForMedia = (container = document) => {
      const images = [...container.querySelectorAll("img")];
      const videos = [...container.querySelectorAll("video")];

      const imgPromises = images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
            }),
      );

      const videoPromises = videos.map((video) =>
        video.readyState >= 3
          ? Promise.resolve()
          : new Promise((res) => {
              video.addEventListener("loadeddata", res, { once: true });
              video.addEventListener("error", res, { once: true });
            }),
      );

      return Promise.all([...imgPromises, ...videoPromises]);
    };

    const run = async () => {
      await waitForMedia();

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (killed) return;

      // Wait for 2 frames (layout + paint)
      await new Promise((res) =>
        requestAnimationFrame(() => requestAnimationFrame(res)),
      );

      if (killed) return;

      // Ensure Lenis finished
      window.__lenis?.resize?.();

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);

      // Final safety refresh AFTER Lenis + layout
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    };

    run();

    return () => {
      killed = true;
    };
  }, [data, location.pathname]);
}
