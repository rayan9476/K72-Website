import { useBlogInfoPageContent } from "./hooks/useBlogInfoPageContent";

function BlogInfopageContent() {
  // page contect logic start here
  const content = useBlogInfoPageContent();
  // page contect logic ends here

  if (!content) return null;
  return (
    <>
      <div className="blog_details_intro_author_container flex flex-col gap-2.5  ">
        {content.header}
      </div>

      <div className="c_blog_details_excerpt mt-[4.375rem]">
        {content.excerpt}
      </div>

      <div className="blog_details_container mt-[4.375rem]  lg:mt-24 xl:mt-32 3xl:mt-52">
        <div className="article_info_container lg:mx-auto w-full lg:[max-width:calc((100vw-13.125rem)*10/20+6.25rem)]">
          {content.body}
        </div>
      </div>

      <div className="blog_details__author_intro_footer flex flex-col items-start justify-start  my-[6.5625rem]">
        {content.footer}
      </div>
    </>
  );
}

export default BlogInfopageContent;
