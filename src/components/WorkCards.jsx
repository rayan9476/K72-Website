import { Link } from "react-router-dom";

function WorkCards({
  index,
  image1,
  image2,
  onHoverStart1,
  onHoverStart2,
  onHoverEnd,
}) {
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/'/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }

  return (
    <>
      <Link
        to={`/en/work/${slugify(image1.id)}`}
        className="card   mb-10  xl:mb-0 group w-full h-full relative cursor-pointer overflow-hidden transition-all duration-200 ease-in   hover:rounded-[50px] md:w-1/2"
        onMouseEnter={onHoverStart1}
        onMouseLeave={onHoverEnd}
      >
        <article>
          <figure className="card_figure  xl:absolute xl:top-0 xl:inset-0  overflow-hidden bg-[rgba(0,0,0,0.1)]">
            <picture>
              <source
                srcSet={image1.small}
                type="image/webp"
                media="(max-width: 1023px)"
              />

              <img
                src={image1.src}
                className={`card_image xl:absolute xl:top-0 object-cover   inset-0 w-full  h-full transition-all duration-200 ease-in   group-hover:scale-110`}
                alt="card_img"
                width={1280}
                height={960}
                loading={index < 2 ? "eager" : "lazy"}
                fetchpriority={index < 2 ? "high" : "auto"}
              />
            </picture>
          </figure>

          <div className="card_overlay absolute   flex items-center justify-center top-0 w-full h-full  bg-black/20   transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 group-hover:rounded-[50px] ">
            <button className="text-6xl border-2 cursor-pointer border-white rounded-full pt-[0.8rem] px-4 leading-[42px] font-medium text-white font-[Lausanne2] uppercase">
              view project
            </button>
          </div>
          <div className="card_info  flex flex-col  items-start justify-center  h-full w-full px-[8.75px] mt-2 3xl:mt-3">
            <div className="text_header flex   items-start justify-between w-full ">
              <h1 className="text-[1.51rem] font-medium text-black font-[Lausanne2] ">
                {image1.title}{" "}
              </h1>
              <span className="text-[16px] font-medium text-black font-[Lausanne2]">
                {image1.year}
              </span>
            </div>
            <div className="text_body">
              <span className="text-[16px] font-medium text-black font-[Lausanne2] ">
                {image1.para}
              </span>
            </div>
          </div>
        </article>
      </Link>

      <Link
        to={`/en/work/${slugify(image2.id)}`}
        className="card  mb-10 xl:mb-0 group w-full h-full relative cursor-pointer overflow-hidden transition-all duration-200 ease-in   hover:rounded-[50px] md:w-1/2"
        onMouseEnter={onHoverStart2}
        onMouseLeave={onHoverEnd}
      >
        <article>
          <figure className="card_figure  xl:absolute xl:top-0 xl:inset-0  w-full h-full bg-[rgba(0,0,0,0.1)]">
            <picture>
              <source
                srcSet={image2.small}
                type="image/webp"
                media="(max-width: 1023px)"
              />

              <img
                className={`card_image xl:absolute xl:top-0 object-cover     w-full h-full transition-all duration-200 ease-in   group-hover:scale-110 `}
                src={image2.src}
                alt="card_img"
                width={1280}
                height={960}
                loading={index < 2 ? "eager" : "lazy"}
                fetchpriority={index < 2 ? "high" : "auto"}
              />
            </picture>
          </figure>
          <div className="card_overlay absolute flex items-center justify-center top-0 w-full h-full  bg-black/20   transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 group-hover:rounded-[50px] ">
            <button className="text-6xl border-2 cursor-pointer border-white rounded-full pt-[0.8rem] px-4 leading-[42px] font-medium text-white font-[Lausanne2] uppercase">
              view project
            </button>
          </div>
          <div className="card_info   flex flex-col  items-start justify-center  h-full w-full px-[8.75px] mt-2 3xl:mt-3">
            <div className="text_header flex   items-start justify-between w-full ">
              <h1 className="text-[1.51rem] font-medium text-black font-[Lausanne2] ">
                {image2.title}{" "}
              </h1>
              <span className="text-[16px] font-medium text-black font-[Lausanne2]">
                {image2.year}
              </span>
            </div>
            <div className="text_body">
              <span className="text-[16px] font-medium text-black font-[Lausanne2] ">
                {image2.para}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default WorkCards;
