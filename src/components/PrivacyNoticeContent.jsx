import privacyNoticeContent from "../Data/privacyNoticeData";

function PrivacyNoticeContent() {
  return (
    <>
      <section className="c-section">
        <div className="main_heading pt-[175px] md:pt-[116px] lg:pt-[11.71875rem] xl:pt-[12.5rem] 3xl:pt-[15.625rem] px-[8.75px] md:px-[35px] lg:px-[calc((100vw-13.125rem)*2/20+1.875rem)]">
          {privacyNoticeContent.header}
        </div>

        <div className="text_content flex items-center justify-center pt-[35px] px-[8.75px] md:px-[35px] lg:px-[calc((100vw-13.125rem)*6/20+4.375rem)] lg:mr-auto">
          {privacyNoticeContent.body}
        </div>
      </section>
    </>
  );
}

export default PrivacyNoticeContent;
