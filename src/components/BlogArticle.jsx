import BlogFilters from "./BlogFilters";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext.js";

function BlogArticle({ blogData }) {
  const { activeFilter, setActiveFilter } = useContext(FilterContext);
  const normalize = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/’/g, "")
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <>
      {blogData?.map((item, index) => (
        <article
          key={item.id}
          className="c-blog-list_el  flex flex-col gap-[0.73828125rem] mb-[2.734375rem] lg:mb-[4.6875rem] xl:mb-20 3xl:mb-[6.25rem] h-full w-full"
        >
          <Link
            to={`/en/blog/${normalize(item?.title)}`}
            className={`c-blog-list_el_inner ${item.hover ? "group/card" : ""}`}
          >
            <figure className="c-blog-list_el_image   w-full  md:aspect-[705/476] relative  ">
              <div
                className={`c-blog-list_el_image_inner rounded-[50px]  overflow-hidden object-cover  h-full w-full  ${
                  item.hover ? "group/image" : ""
                }`}
              >
                <picture>
                  <source
                    srcSet={item.small}
                    type="image/webp"
                    media="(max-width: 1023px)"
                  />
                  <img
                    className={
                      item.hover
                        ? "w-full h-full object-cover  [transform:scale3d(1,1,1)] transition-[transform] duration-[500ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]  group-hover/image:[transform:scale3d(1.05,1.05,1)]"
                        : "w-full h-full object-cover  "
                    }
                    src={item.image}
                    alt={item.imageAlt}
                    width={500}
                    height={500}
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "auto"}
                    style={{
                      backgroundImage: `url(${item.placeholder}?tr=f-auto,w-20,q-10,bl-6)`,
                      backgroundSize: "cover",
                    }}
                    onLoad={(e) => (e.target.style.backgroundImage = "none")}
                  />
                </picture>
              </div>
            </figure>

            <div className="blog-list_details  flex flex-col   mt-[0.95703125rem]  gap-[0.73828125rem]">
              <time className="blog-list_details_date flex items-start justify-start gap-[8.75px]">
                <span className=" inline-block bg-black rounded-[50%] w-[0.765625rem] h-[0.765625rem]"></span>
                <p className="text-[1.09375rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] font-[Lausanne2] leading-[0.75] text-black font-medium">
                  {item.date}
                </p>
              </time>

              <h2
                className={`text-[1.203125rem] md:text-[1.9140625rem] xl:text-[2.1875rem] 2xl:text-[2.32421875rem] -fontsize_2 3xl:text-[2.734375rem] font-[Lausanne2] leading-[1] text-black font-bold w-full max-w-[80%] uppercase ${
                  item.hover ? "group-hover/card:underline" : ""
                } text-decoration-[2px] decoration-black transition-[text-decoration-color] duration-[500ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]`}
              >
                {item.title}
              </h2>
            </div>
          </Link>

          <div className="c-blog-list_details_tags flex items-center justify-start gap-[1px]  flex-wrap">
            <BlogFilters
              filtersData={item.tags.map((tag) => ({
                label: tag.label,
                href: `/en/blog?category=${tag.slug}`,
              }))}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </article>
      ))}
    </>
  );
}

export default BlogArticle;
