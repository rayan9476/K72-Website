import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";

function BlogFilters({ filtersData }) {
  const { activeFilter, setActiveFilter } = useContext(FilterContext);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const matchingFilter = filtersData.find((f) =>
        f.href.includes(`category=${category}`),
      );
      if (matchingFilter) setActiveFilter(matchingFilter.label);
    } else {
      setActiveFilter("All");
    }
  }, [category, filtersData, setActiveFilter]);

  return (
    <>
      {filtersData?.map((item) => {
        const isActive = activeFilter === item.label;
        return (
          <Link
            to={item.href}
            className="group  relative top-0 left-0 flex  overflow-hidden"
            onClick={() => {
              setActiveFilter(item.label);
            }}
            key={item.label}
          >
            <span
              className={`main_filters_tag group/span  cursor-pointer  font-[Lausanne2] text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] leading-[1.25] text-black font-medium bg-[rgb(237,237,237)]  inline-flex whitespace-nowrap pt-[0.2734375rem] px-[0.41015625rem] pb-0  overflow-hidden transition-[color,background-color] duration-[150ms,300ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]
             ${
               isActive
                 ? "bg-black text-white"
                 : "bg-[rgb(237,237,237)] text-black"
             }`}
            >
              {item.label}
            </span>
            <span
              className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%]  group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.215,0.61,0.355,1)] z-10
    "
            ></span>
            <span className="filters_content absolute flex top-0 left-0 cursor-pointer pointer-events-none z-30 opacity-0 group-hover:opacity-100  group-hover:pointer-events-auto transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)]  ">
              <span className="filters_silder   font-[Lausanne2] text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] leading-[1.25] text-black font-medium   inline-flex whitespace-nowrap pt-[0.2734375rem]  px-[0.41015625rem]  pb-0  overflow-hidden  ">
                {item.label}
              </span>
              <span className="filters_silder   font-[Lausanne2] text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] leading-[1.25] text-black font-medium   inline-flex whitespace-nowrap pt-[0.2734375rem]  px-[0.41015625rem]  pb-0  overflow-hidden ">
                {item.label}
              </span>
              <span className="filters_silder  font-[Lausanne2] text-[1.09375rem] lg:text-[1.171875rem] xl:text-[1.25rem] 2xl:text-[1.328125rem] -font_size 3xl:text-[1.5625rem] leading-[1.25] text-black font-medium   inline-flex whitespace-nowrap pt-[0.2734375rem]  px-[0.41015625rem]  pb-0  overflow-hidden ">
                {item.label}
              </span>
            </span>
          </Link>
        );
      })}
    </>
  );
}

export default BlogFilters;
