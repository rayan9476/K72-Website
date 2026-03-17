import { useEffect } from "react";

export default function useScrollStopAndStart(isActiveVideo) {
  useEffect(() => {
    if (isActiveVideo) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isActiveVideo]);
}
