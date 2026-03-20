import { lazy, Suspense } from "react";
const Footer = lazy(() => import("../components/common/Footer"));
import Navbar from "../components/common/Navbar2";
import { useContext, useRef, useLayoutEffect } from "react";
import BlogInfoArticle from "../components/BlogInfoArticle";
import BlogInfopageContent from "../components/BlogInfopageContent";
import { FilterContext } from "../context/FilterContext";
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import "../styles/Blogpage.css";
import useBlogInfo from "../components/hooks/useBlogInfo";

function BlogInfo() {
  // blog info start here
  const BlogInfo = useBlogInfo();
  // blog info ends here
  const { activeFilter, setActiveFilter } = useContext(FilterContext);

  const thumbRef = useRef(null);
  useFakeScrollbar(thumbRef, {
    bgColor: "#7F7F7F",
  });

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    document.title = `${BlogInfo?.title} — K72 Agency`;
  }, [BlogInfo]);
  //  dynamic page name change  logic ends here
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="site_fake_scrollbar group fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0  group-hover:opacity-100 w-full bg-[#7F7F7F] rounded-[10px] origin-top"
        />
      </div>
      <main className="Blog_page min-h-screen w-full bg-white">
        <section className="blog_main_content  w-full">
          <div className="blog_page_heading_2   pt-[8.75rem] 3xl:pt-80 px-[8.75px] lg:px-[9.375px] 2xl:px-[10.625px] 3xl:px-[12.5px] pb-[0.2rem] lg:pt-[14.0625rem]  xl:pt-[15.5rem]  flex  items-start justify-start gap-[8.75px]">
            <span className="inline-block bg-black rounded-[50%] w-[0.765625rem] h-[0.765625rem]"></span>
            <h1 className="text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem]  font-[Lausanne2] leading-[0.75] text-black font-medium">
              October 3 2025
            </h1>
          </div>

          <div className="blog_container flex flex-col gap-[2.1875rem] py-[0.546875rem]  px-[8.75px]  lg:px-[9.375px] 2xl:px-[10.625px]  3xl:px-[12.5px]">
            <div className="blog_container  flex flex-col md:flex-row   gap-[8.75px] xl:gap-2.5    w-full">
              <BlogInfoArticle
                blogData={BlogInfo}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            </div>
            <BlogInfopageContent />
          </div>
        </section>
      </main>

      <footer>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}

export default BlogInfo;
