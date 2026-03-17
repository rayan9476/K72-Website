import { useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    if (!data) return;

    let killed = false;

    const run = async () => {
      // wait for images
      await waitForImages(document);

      // wait for fonts
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      if (killed) return;

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    };

    run();

    return () => {
      killed = true;
    };
  }, [data, location.pathname]);
}
