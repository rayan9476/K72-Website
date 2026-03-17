import { lazy, Suspense } from "react";
const Footer = lazy(() => import("../components/common/Footer"));
import Navbar from "../components/common/Navbar2";
import BlogArticle from "../components/BlogArticle";
import BlogFilters from "../components/BlogFilters";
import { useBlogFilterByQuery } from "../components/hooks/useBlogFilterByQuery";
import { useRef, useContext, useLayoutEffect } from "react";
import { useFakeScrollbar } from "../components/hooks/useFakeScrollbar";
import { FilterContext } from "../context/FiterContext";
import useScrollToTop from "../components/hooks/useScrollToTop";
import { filters } from "../Data/blogData";
import "../styles/Blogpage.css";

function Blog() {
  // filtering  logic start here
  const { activeFilter } = useContext(FilterContext);
  const { filteredData1, filteredData2 } = useBlogFilterByQuery(activeFilter);
  // filtering  logic ends here
  const thumbRef = useRef(null);

  useFakeScrollbar(thumbRef, {
    bgColor: "#7F7F7F",
  });

  useScrollToTop();

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    document.title = "Blog — K72 Agency";
  }, []);
  //  dynamic page name change  logic ends here

  return (
    <>
      <div className="site_fake_scrollbar group fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0  group-hover:opacity-100 w-full bg-[#7F7F7F] rounded-[10px] origin-top"
        />
      </div>

      <header>
        <Navbar />
      </header>

      <main className="Blog_page min-h-screen w-full bg-white">
        <section className="blog_main_content  w-full">
          <div className="blog_page_heading   pt-[8.75rem] px-[8.75px] lg:px-[9.375px] 2xl:px-[10.625px] 3xl:px-[12.5px] pb-[5.46875rem] lg:py-[11.71875rem] xl:py-[12.5rem] 2xl:py-[13.28125rem] flex  items-start justify-start gap-[8.75px]">
            <span className="inline-block bg-black rounded-[50%] w-[0.765625rem] h-[0.765625rem]"></span>
            <h1 className="text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem]  font-[Lausanne2] leading-[0.75] text-black font-medium">
              Blog
            </h1>
          </div>

          <div class="blog_page_filters_container  px-[8.75px] lg:px-[9.375px] 2xl:px-[10.625px]  3xl:px-[12.5px]">
            <div class="blog_list_container ">
              <div class="blog_list_filters flex flex-col lg:flex-row lg:justify-end items-center gap-[0.2734375rem]">
                <p className="text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] font-[Lausanne2] leading-[1.25] text-black font-medium">
                  Categories:
                </p>

                <div class="blog-list_filters_container   flex items-center justify-start gap-[1px]  flex-wrap">
                  <BlogFilters filtersData={filters} />
                </div>
              </div>
            </div>
          </div>

          <div className="blog_container py-[0.546875rem]  px-[8.75px]  lg:px-[9.375px] 2xl:px-[10.625px]  3xl:px-[12.5px]">
            <div className="line border-t-1  border-black w-full mb-[0.546875rem] lg:mb-[0.5859375rem] xl:mb-2.5 3xl:mb-[0.78125rem]"></div>
            <div className="blog_container  flex flex-col md:flex-row   gap-[8.75px] xl:gap-2.5    w-full">
              <BlogArticle blogData={filteredData1} />
            </div>

            <div className="blog_container  flex flex-col  gap-[8.75px] md:flex-row ">
              <BlogArticle blogData={filteredData2} />
            </div>
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

export default Blog;
