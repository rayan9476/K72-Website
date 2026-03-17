import { useEffect } from "react";
export default function useSwiper(cursorRef, swiperRef) {
  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const handleClick = (e) => {
      const swiper = swiperRef.current;
      if (!swiper) return;
      const rect = cursor.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const isRightSide = x > rect.width / 2;

      if (isRightSide) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    };

    cursor.addEventListener("click", handleClick);

    return () => {
      cursor.removeEventListener("click", handleClick);
    };
  }, [cursorRef, swiperRef]);
}
