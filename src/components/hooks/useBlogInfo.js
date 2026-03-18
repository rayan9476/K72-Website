// useBlogInfo.js
import { useEffect, useState } from "react";
import { blogData, blogData2 } from "../../Data/blogData";
import { useParams } from "react-router-dom";
const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/’/g, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
const useBlogInfo = () => {
  const { blogId } = useParams();

  const [BlogInfo, setBlogInfo] = useState(null);

  useEffect(() => {
    if (!blogId) return null;

    const blogInfo =
      blogData.find((item) => normalize(item.title) === blogId) ||
      blogData2.find((item) => normalize(item.title) === blogId);

    setBlogInfo(blogInfo);
  }, [blogId]);

  return BlogInfo;
};
export default useBlogInfo;
