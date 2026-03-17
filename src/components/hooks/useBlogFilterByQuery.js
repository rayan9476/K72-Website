import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { blogData, blogData2 } from "../../Data/blogData";

export function useBlogFilterByQuery() {
  const [FilterBlogData1, setFilterBlogData1] = useState(blogData);
  const [FilterBlogData2, setFilterBlogData2] = useState(blogData2);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  useEffect(() => {
    if (!category) {
      setFilterBlogData1(blogData);
      setFilterBlogData2(blogData2);
    }

    const filteredData1 = blogData.filter((item) =>
      !category ? true : item.tags.some((tag) => tag.slug === category),
    );

    const filteredData2 = blogData2.filter((item) =>
      !category ? true : item.tags.some((tag) => tag.slug === category),
    );
    setFilterBlogData1(filteredData1);
    setFilterBlogData2(filteredData2);
  }, [category]);

  return {
    filteredData1: FilterBlogData1,
    filteredData2: FilterBlogData2,
  };
}
