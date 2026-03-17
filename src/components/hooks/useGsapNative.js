import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });
export function useGsapNative({ scopeRef, setup, deps = [] }) {
  useLayoutEffect(() => {
    if (!scopeRef?.current) return;

    const ctx = gsap.context(() => {
      setup();
    }, scopeRef);

    // refresh ScrollTrigger after Lenis is ready
    setTimeout(() => ScrollTrigger.refresh(true), 3000);

    return () => ctx.revert();
  }, deps);
}
