import { lazy, Suspense } from "react";
import Navbar from "../components/common/Navbar2";
const Footer = lazy(() => import("../components/common/Footer"));
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import { useRef, useLayoutEffect } from "react";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import useScrollToTop from "../components/hooks/useScrollToTop";

function PrivacyPolicy() {
  // reset tu top logic start here
  useScrollToTop();
  // reset tu top logic ends here

  const thumbRef = useRef(null);

  useFakeScrollbar(thumbRef, {
    bgColor: "#7F7F7F",
  });

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    document.title = "Privacy Policy — K72 Agency";
  }, []);
  //  dynamic page name change  logic ends here
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="site_fake_scrollbar  fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0  w-full bg-[#7F7F7F] rounded-[10px] origin-top"
        />
      </div>

      <main className="c-project  bg-white">
        <div className="main_container_privacy  min-h-screen w-full flex items-start justify-start pb-24 xl:pb-28 3xl:pb-36">
          <PrivacyPolicyContent />
        </div>
      </main>

      <footer>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}

export default PrivacyPolicy;
