import { useEffect, useRef } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const Agency = lazy(() => import("./pages/Agency"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const PrivacyNotice = lazy(() => import("./pages/PrivacyNotice"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogInfo = lazy(() => import("./Routes/BlogInfo"));
const WorkInfo = lazy(() => import("./Routes/WorkInfo"));
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";
import NotFound from "./components/common/NotFound";
import { useIsHoverDevice } from "./components/hooks/useIsHoverDevice";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);
  // is hover logic start here
  const isHover = useIsHoverDevice();
  // is hover logic ends here

  const rafRef = useRef(null);
  useEffect(() => {
    if (!isHover) return;
    if (location.pathname === "/en/contact") {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      return;
    }

    const lenis = new Lenis({
      lerp: 0.04,
      smoothWheel: true,
      smoothTouch: false,
      keyboard: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      lenisRef.current = null;
      delete window.__lenis;
    };
  }, [location.pathname, isHover]);

  useEffect(() => {
    let raf1, raf2, timer;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        // fallback after images settle
        timer = setTimeout(() => ScrollTrigger.refresh(), 500);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [location.pathname]);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      resetKeys={[location.pathname]}
    >
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en/work" element={<Work />} />
          <Route path="/en/about" element={<Agency />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/en/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/blog/:blogId" element={<BlogInfo />} />
          <Route path="/en/work/:projectId" element={<WorkInfo />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
