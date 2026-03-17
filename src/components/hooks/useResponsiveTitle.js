import { useEffect, useState } from "react";

export function useResponsiveTitle(blogData) {
  const getState = () => {
    const w = window.innerWidth;
    return {
      isUltraWide: w >= 2560,
      isDesktop: w > 1584,
      isMobile: w < 767,
    };
  };

  const [{ isUltraWide, isDesktop, isMobile }, setState] = useState(getState);

  useEffect(() => {
    const onResize = () => setState(getState());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const lines = isUltraWide
    ? blogData.title5
    : isDesktop
    ? blogData.title4
    : isMobile
    ? blogData.title2
    : blogData.title3;

  return lines;
}
