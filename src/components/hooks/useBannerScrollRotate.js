import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function useBannerScrollRotate(bannerRef) {
  let lastScroll = 0;
  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;
    const st = ScrollTrigger.create({
      trigger: banner,
      start: "top top",
      end: "bottom bottom",
      overwrite: "auto",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        const direction = currentScroll > lastScroll ? -5 : 5;
        gsap.to(".contact_banner", {
          rotate: direction,
          duration: 0.3,
          ease: "power1.out",
        });
        lastScroll = currentScroll;
      },
    });
    return () => st.kill();
  }, [bannerRef]);
}
