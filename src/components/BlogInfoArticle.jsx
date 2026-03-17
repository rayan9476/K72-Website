import BlogFilters from "./BlogFilters";
import { usePunchlineAnimation } from "./hooks/usePunchlineAnimation";
import { useResponsiveTitle } from "./hooks/useResponsiveTitle";
function BlogInfoArticle({ blogData }) {
  if (!blogData) return null;
  // punchline animation start here
  usePunchlineAnimation();
  // punchline animation ends here

  const lines = useResponsiveTitle(blogData);

  return (
    <>
      <article
        key={blogData.id}
        className="c-blog-list_el  flex flex-col-reverse gap-[0.73828125rem] mb-[2.734375rem] lg:mb-[4.6875rem] xl:mb-20 3xl:mb-[6.25rem] h-full w-full"
      >
        <div
          className={`c-blog-list_el_inner flex flex-col-reverse ${
            blogData.hover ? "group/card" : ""
          }`}
        >
          <figure className="c-blog-list_el_image   w-full  md:aspect-[705/476] relative cursor-pointer overflow-hidden">
            <div
              className={`c-blog-list_el_image_inner rounded-[50px]  overflow-hidden object-cover  h-full w-full  ${
                blogData.hover ? "group/image" : ""
              }`}
            >
              <picture>
                <source
                  srcSet={blogData.small}
                  type="image/webp"
                  media="(max-width: 1023px)"
                />
                <img
                  className={
                    blogData.hover
                      ? "w-full h-full object-cover  [transform:scale3d(1,1,1)] transition-[transform] duration-[500ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]  group-hover/image:[transform:scale3d(1.05,1.05,1)]"
                      : "w-full h-full object-cover  "
                  }
                  src={blogData.image}
                  alt={blogData.imageAlt}
                  width={500}
                  height={500}
                />
              </picture>
            </div>
          </figure>

          <div className="blog_list_details_2  flex flex-col  text-center items-center justify-center  mt-[2.957031rem] lg:mt-[5.859375rem]  gap-[0.73828125rem] xl:ml-[calc((100vw-13.125rem)*1/20+0.625rem)]  xl:mr-[calc((100vw-13.125rem)*1/20+0.625rem)]">
            <h2 className="flex flex-col  text-[1.96875rem] md:text-[5vw] 2xl:text-[6.25rem] 3xl:text-[7.8125rem] font-[Lausanne2] md:mb-[0.2734375rem] leading-[0.8] text-black font-bold uppercase  w-full ">
              {lines.map((line, index) => (
                <div
                  className="overflow-hidden flex items-center justify-center"
                  key={index}
                >
                  <span className="animate_punchline pt-[0.1em]  inline-block  overflow-hidden">
                    {line}
                  </span>
                </div>
              ))}
            </h2>
          </div>
        </div>

        <div className="blog-list_details_tags flex items-center justify-start gap-1  flex-wrap">
          <BlogFilters
            filtersData={blogData.tags.map((tag) => ({
              label: tag.label,
              href: `/en/blog?category=${tag.slug}`,
            }))}
          />
        </div>
      </article>
    </>
  );
}

export default BlogInfoArticle;
