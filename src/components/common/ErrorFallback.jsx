import Navbar from "../Navbar";
import { useRef } from "react";
import { useFakeScrollbar } from "../hooks/useFakeScrollbar";
import { IoReloadCircleOutline } from "react-icons/io5";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./Footer"));
function ErrorFallback() {
  // fake scroll bar logic start here
  const thumbRef = useRef(null);
  useFakeScrollbar(thumbRef, {
    bgColor: "#a7a9d6",
  });
  // fake scroll bar logic ends here

  return (
    <>
      <Navbar />

      <div className="site_fake_scrollbar  fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0 w-full bg-[#d3fd50] rounded-[10px] origin-top"
        />
      </div>

      <main className="Error_Fallback_Con  min-h-screen relative w-full  bg-gradient-to-b from-[#a7a9d6] to-[#e5e5e5] bg-gray-200">
        <div className="w-full relative min-h-screen  xl:-top-40  flex items-center justify-center  ">
          <div className="relative  ">
            <h1 className="absolute inset-0 flex items-center justify-center text-[70vw] lg:text-[60vw] z-[1] -top-16 md:top-0 font-medium font-[Lausanne2] text-white/50 leading-none pointer-events-none select-none">
              500
            </h1>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 ">
              <div className="w-full  flex justify-center items-center">
                <img
                  src="https://ik.imagekit.io/rayan8422/pngtree-the-cutest-furry-pixar-character-with-blue-eyes-isolated-on-solid-png-image_17330780.webp?tr=f-auto,q-60"
                  alt="404 character"
                  className="w-[280px] md:w-[500px] lg:w-[600px] xl:w-[60vw] object-contain"
                />
              </div>

              <div className="w-full  text-center  mt-6 md:mt-12">
                <h2 className="text-2xl md:text-[28px] lg:text-[2.5rem] xl:text-[3rem] 3xl:text-[5rem] font-medium font-[Lausanne2] text-black">
                  !oops we find some erros please reload the page or going
                  another page!
                </h2>

                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 px-6 py-3 bg-white hover:bg-[#a7a9d6] hover:text-white transition-colors duration-100 ease-in cursor-pointer rounded-full md:text-[20px] lg:text-[24px] xl:text-[38px] 3xl:text-[50px] shadow flex items-center gap-2 mx-auto  font-medium font-[Lausanne2]"
                >
                  <IoReloadCircleOutline /> Reload page
                </button>
              </div>
            </div>
          </div>
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

export default ErrorFallback;
