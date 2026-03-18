// useBlogInfo.js
import { useEffect, useState } from "react";
import { blogData, blogData2 } from "../../Data/blogData";
import { useParams } from "react-router-dom";

const useBlogInfo = () => {
  const { blogId } = useParams();

  const [BlogInfo, setBlogInfo] = useState(null);
  if (!blogId) return console.log("No blog title found");

  const normalize = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/’/g, "")
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  useEffect(() => {
    const blogInfo =
      blogData.find((item) => normalize(item.title) === blogId) ||
      blogData2.find((item) => normalize(item.title) === blogId);

    setBlogInfo(blogInfo);
  }, [blogId]);

  return BlogInfo;
};

export default useBlogInfo;
