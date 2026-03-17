import { useRef } from "react";
import useThumbnailScrollAnimation from "../hooks/useThumbnailScrollAnimation";

function ProjectHeroSection({ data, summaryRef }) {
  const thumbnailRef = useRef(null);

  // thumbnail scroll animation start here
  useThumbnailScrollAnimation(thumbnailRef, data);
  // thumbnail scroll animation ends here
  return (
    <>
      <div className="flex flex-col  md:flex-row ">
        <div className="o-layout_item c-project-summary_visual-wrapper w-full md:[width:calc((100vw-13.125rem)*1/20+0.625rem)]">
          <figure className="c-project-summary_visual   md:[margin-left:calc((100vw-13.125rem)*-12/20+-7.5rem)]  md:pr-[0.1rem]">
            <div className="c-project-summary_visual_outer ">
              <div className="c-project-summary_visual_inner  is-inview animate_banner overflow-hidden rounded-[1.640625rem] md:rounded-[3.0625rem] lg:rounded-[3.28125rem] xl:rounded-[3.5rem] --border-radius-1 3xl:rounded-[4.375rem]  ">
                <picture>
                  <source
                    srcSet={data?.smallThumbnailImage}
                    type="image/webp"
                    media="(max-width: 1023px)"
                  />
                  <img
                    ref={thumbnailRef}
                    src={data?.ThumbnailImage}
                    className="w-full relative object-cover animate_thumbnail_image   h-full   "
                    width={1200}
                    height={1920}
                    loading={"eager"}
                    fetchpriority={"high"}
                    style={{
                      backgroundImage: `url(${data?.placeholder})`,
                      backgroundSize: "cover",
                      transition: "background-image 300ms ease",
                    }}
                    onLoad={(e) => {
                      e.target.style.backgroundImage = "none";
                    }}
                  />
                </picture>
              </div>
            </div>
          </figure>
        </div>

        <div className="o-layout_item c-project-summary_content relative  pt-[2.1875rem] md:pt-[6.1875rem] --pt-3 pl-[8.75px] mb-[4.375rem] md:[direction:ltr] md:w-full md:mr-auto  md:px-[8.75px]">
          <div className="c-project-summary_punchline    is-inview c-text-lines pb-[2.1875rem]">
            {data.summaryTitle?.[0] && (
              <div className="c-text-lines_item  image-mask  ">
                <span className="c-text-lines_item_inner  text-white   mix-blend-difference  text-left text-[2.734375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] --text-3 3xl:text-[10.9375rem] font-medium font-[Lausanne2]  pt-[0.7875em] leading-[0.8857142857] uppercase">
                  {data?.summaryTitle[0]}
                </span>
              </div>
            )}

            {data.summaryTitle?.[1] && (
              <div className="c-text-lines_item">
                <span className="c-text-lines_item_inner text-white   mix-blend-difference text-left text-[2.734375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] --text-3 3xl:text-[10.9375rem] font-medium font-[Lausanne2]  pt-[0.7875em] leading-[0.8857142857] uppercase">
                  {data?.summaryTitle[1]}
                </span>
              </div>
            )}

            {data.summaryTitle?.[2] && (
              <div className="c-text-lines_item">
                <span className="c-text-lines_item_inner text-white   mix-blend-difference text-left text-[2.734375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] --text-3 3xl:text-[10.9375rem] font-medium font-[Lausanne2]  pt-[0.7875em] leading-[0.8857142857] uppercase">
                  {data?.summaryTitle[2]}
                </span>
              </div>
            )}

            {data.summaryTitle?.[3] && (
              <div className="c-text-lines_item">
                <span className="c-text-lines_item_inner text-white   mix-blend-difference text-left text-[2.734375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] --text-3 3xl:text-[10.9375rem] font-medium font-[Lausanne2]  pt-[0.7875em] leading-[0.8857142857] uppercase">
                  {data?.summaryTitle[3]}
                </span>
              </div>
            )}

            {data.summaryTitle?.[4] && (
              <div className="c-text-lines_item">
                <span className="c-text-lines_item_inner text-white   mix-blend-difference text-left text-[2.734375rem] md:text-[5.46875rem] lg:text-[5.859375rem] xl:text-[7.5rem] 2xl:text-[8.75rem] --text-3 3xl:text-[10.9375rem] font-medium font-[Lausanne2]  pt-[0.7875em] leading-[0.8857142857] uppercase">
                  {data?.summaryTitle[4]}
                </span>
              </div>
            )}
          </div>

          {data?.summaryList && (
            <ol className="project-summary_list">
              {data?.summaryList.map((item, i) => (
                <li
                  key={i}
                  className="text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 3xl:text-[1.5625rem] font-medium font-[Lausanne2] text-black leading-[1.25]"
                >
                  {item}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
      <div
        ref={summaryRef}
        className="o-layout_item c-project-summary_text  text-left [direction:ltr] align-top pt-[8.75px] pl-[8.75px]  w-full  mb-[4.375rem] md:mb-[8.75rem] xl:mb-40"
      >
        <p className="  text-[1.3125rem] md:text-[2.4609375rem] lg:text-[2.63671875rem] xl:text-[3.5rem] --p-1 --mb-1 3xl:text-[4.375rem] font-medium font-[Lausanne2] text-black  leading-[1] md:px-[calc((100vw-13.125rem)*2/20+1.25rem)] [text-indent:5rem]  md:[text-indent:calc((100vw-13.125rem)*5/20+3.125rem)]">
          {data?.summaryText}
        </p>
      </div>
    </>
  );
}

export default ProjectHeroSection;
