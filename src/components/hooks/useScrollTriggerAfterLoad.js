import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollTriggerAfterLoad(data) {
  const location = useLocation();

  function waitForImages(container = document) {
    const images = container.querySelectorAll("img");
    if (!images.length) return Promise.resolve();

    return Promise.all(
      [...images].map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            }),
      ),
    );
  }

  useEffect(() => {
    if (!data) return;

    let killed = false;

    const run = async () => {
      await waitForImages(document);

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (killed) return;

      // wait for paint + layout settle
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      );

      if (killed) return;

      // increase buffer for production
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (killed) return;

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);


      //  second refresh after extra delay for safety
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (killed) return;
      ScrollTrigger.refresh(true);
    };

    run();

    return () => {
      killed = true;
    };
  }, [data, location.pathname]);
}
