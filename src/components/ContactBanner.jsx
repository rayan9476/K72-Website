function ContactBanner() {
  return (
    <>
      <div className="contact_banner_wrapper relative z-0 w-full  ">
        <a
          href="mailto:hello@k72.ca"
          className="contact_banner will-change-transform transform-gpu relative group -ml-[10vw]  transform  transition-transform duration-[600ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] rotate-[5deg] flex items-center justify-start w-[120vw] my-[2.19rem] md:my-[4.375rem]  overflow-hidden text-[11vw] font-[Lausanne2] uppercase font-medium  text-black bg-[#D3FD50]"
        >
          <span className="absolute bottom-0 left-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></span>
          <div className="contact_email_container flex items-center relative z-20">
            <span className="contact_banner_inner flex  items-center shrink-0 leading-[0.75] pt-2 md:pt-4 lg:pt-[1.3rem] xl:pt-[1.8rem]  2xl:pt-8 3xl:pt-16 whitespace-nowrap transform-gpu will-change-transform">
              hello@k72.ca{" "}
              <svg
                className="h-8 w-12 md:w-20 lg:w-24 md:h-20 lg:h-24 xl:w-28 xl:h-28 2xl:w-34 2xl:h-34 3xl:w-52 3xl:h-52 block text-black -mt-2 shrink-0"
                width="160"
                height="140"
                viewBox="0 0 160 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 130
                               L20 70
                                          L20 40
                                   L55 10
                                L80 35
                             L105 10
                        L140 40
                          L140 70
                           Z
                              "
                  fill="black"
                />
              </svg>
            </span>
            <span
              className="contact_banner_inner flex  items-center shrink-0 leading-[0.75] pt-2 md:pt-4 lg:pt-[1.3rem] xl:pt-[1.8rem]  2xl:pt-8 3xl:pt-16 whitespace-nowrap transform-gpu will-change-transform"
              aria-hidden="true"
            >
              hello@k72.ca{" "}
              <svg
                className="h-8 w-12 md:w-20 lg:w-24 md:h-20 lg:h-24 xl:w-28 xl:h-28 2xl:w-34 2xl:h-34 3xl:w-52 3xl:h-52 block text-black -mt-2 shrink-0"
                width="160"
                height="140"
                viewBox="0 0 160 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 130
                               L20 70
                                          L20 40
                                   L55 10
                                L80 35
                             L105 10
                        L140 40
                          L140 70
                           Z
                              "
                  fill="black"
                />
              </svg>
            </span>
            <span
              className="contact_banner_inner flex items-center shrink-0 leading-[0.75] pt-2 md:pt-4 lg:pt-[1.3rem] xl:pt-[1.8rem] 2xl:pt-8 3xl:pt-16 whitespace-nowrap  transform-gpu will-change-transform"
              aria-hidden="true"
            >
              hello@k72.ca{" "}
              <svg
                className="h-8 w-12 md:w-20 lg:w-24 md:h-20 lg:h-24 xl:w-28 xl:h-28 2xl:w-34 2xl:h-34 3xl:w-52 3xl:h-52 block text-black -mt-2 shrink-0"
                width="160"
                height="140"
                viewBox="0 0 160 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 130
                               L20 70
                                          L20 40
                                   L55 10
                                L80 35
                             L105 10
                        L140 40
                          L140 70
                           Z
                              "
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}

export default ContactBanner;
