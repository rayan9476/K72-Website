import { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import App from "./App";
import Loader from "./components/common/Loader";
import { ReadyContext } from "./context/ReadyContext";
import { useContext } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  const { ready, setReady } = useContext(ReadyContext);
  const { Id } = useParams();
  // for loader on route change logic start here
  useLayoutEffect(() => {
    if (
      location.pathname === "/en/contact" ||
      location.pathname === "/en/blog/"
    )
      return;

    const navigation = performance.getEntriesByType("navigation")[0];

    const isBackForward = navigation?.type === "back_forward";

    let timeout;

    if (!isBackForward) {
      timeout = setTimeout(() => {
        setReady(false);
      }, 200);
    } else if (location.pathname === `/en/work/${Id}`) {
      timeout = setTimeout(() => {
        setReady(false);
      }, 1200);
    } else {
      setReady(false);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [location.pathname, setReady]);
  // for loader on route change logic start here

  // for loader on initailly load logic start here

  useEffect(() => {
    const htmlLoader = document.getElementById("initial-loader");

    const complete = () => {
      const tl = gsap.timeline({
        delay: 0.7,

        onComplete: () => {
          setReady(true);
        },
      });

      tl.to(htmlLoader, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      });
    };

    if (document.readyState === "complete") {
      complete();
    } else {
      window.addEventListener("load", complete, { once: true });
      return () => window.removeEventListener("load", complete);
    }
  }, [setReady]);
  // for loader on initailly load logic ends here

  const isFirst = useRef(true);

  // first render not works logic start here
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setReady(false); // trigger loader only on route change
  }, [location.pathname, setReady]);
  // first render not works logic ends here

  return (
    <>
      {!ready && !isFirst.current && (
        <Loader onComplete={() => setReady(true)} />
      )}
      <App />
    </>
  );
}
