import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogInfopageContent from "../../Data/blogInfopageContent";
import blogInfopageContent2 from "../../Data/Bloginfopagecontent2";
import blogInfopageContent3 from "../../Data/blogInfopageContent3";
import blogInfopageContent4 from "../../Data/blogInfopageContent4";

export function useBlogInfoPageContent() {
  const { blogId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!blogId) return;

    const normalize = (str) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/’/g, "")
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    const allContents = [
      blogInfopageContent,
      blogInfopageContent2,
      blogInfopageContent3,
      blogInfopageContent4,
    ];

    const matchedContent = allContents.find(
      (item) => normalize(item.title) === blogId,
    );

    setContent(matchedContent || blogInfopageContent);
  }, [blogId]);

  return content;
}
