import { Sections } from "../Data/ContactHeroSectionData";
import ContactHeroSectionFooter from "./ContactHeroSectionFooter";
import { useRef } from "react";
import { useInfiniteWheelRotate } from "./hooks/useInfiniteWheelRotate";
import ContactBanner from "./ContactBanner";
import { usePunchlineAnimation } from "./hooks/usePunchlineAnimation";
function ContactHeroSection() {
  const containerRef = useRef(null);

  //  infinte scroll or rotaate animation start here
  useInfiniteWheelRotate({
    containerRef,
  });
  //  infinte scroll or rotaate animation ends here

  //  punchline animation start here
  usePunchlineAnimation();

  //  punchline animation ends here

  return (
    <>
      <div
        ref={containerRef}
        className="w-full min-h-screen overflow-hidden bg-black --container "
      >
        <div className="flex flex-col transform-gpu will-change-transform pt-[87.5px] lg:pt-0">
          {Sections.map((section, index) => {
            return (
              <section
                key={index}
                data-id={index}
                className="main_container animate-section will-change-transform transform-gpu mb-40 flex flex-col items-center justify-start w-full h-full bg-black  "
              >
                <div className="contact_hero_section flex flex-col items-center justify-start w-full h-full ">
                  <div className="text_container flex flex-col  items-center justify-start text-center w-full px-[8.75px] lg:pt-[9.375px] ">
                    <h2 className="contact_punchline   text-[12vw] md:text-[10vw] font-[Lausanne] font-light text-white uppercase leading-[0.7]">
                      <div className="contact-text-lines_items  overflow-hidden pt-[0.2em] lg:pt-[0.1em]  ">
                        <span className="c-text-lines_item_inner      block  animate_punchline  opacity-0  ">
                          {section.contactPunchlines[0]}
                        </span>
                      </div>
                      <div className="contact-text-lines_item   overflow-hidden pt-[0.2em]    ">
                        <span className="c-text-lines_item_inner  block  animate_punchline opacity-0   ">
                          {section.contactPunchlines[1]}
                        </span>
                      </div>
                      {section.contactPunchlines[2] && (
                        <div className="contact-text-lines_item  overflow-hidden pt-[0.2em]     ">
                          <span className="c-text-lines_item_inner     block  animate_punchline opacity-0   ">
                            {section.contactPunchlines[2]}
                          </span>
                        </div>
                      )}
                      {section.contactPunchlines[3] && (
                        <div className="contact-text-lines_item  overflow-hidden  pt-[0.2em]      ">
                          <span className="c-text-lines_item_inner    block  animate_punchline opacity-0   ">
                            {section.contactPunchlines[3]}
                          </span>
                        </div>
                      )}
                      {section.contactPunchlines[4] && (
                        <div className="contact-text-lines_item  overflow-hidden  pt-[0.2em]      ">
                          <span className="c-text-lines_item_inner    block  animate_punchline opacity-0   ">
                            {section.contactPunchlines[4]}
                          </span>
                        </div>
                      )}
                    </h2>

                    <div className="contact_info_container  w-full text-center flex flex-col md:flex-row items-center md:items-end justify-start  md:justify-between   md:transfrom md:translate-y-[-110%] mt-[0.3rem] xl:mt-0">
                      <div className="contact_infos_col md:w-[calc((100vw-13.125rem)*5/20+3.125rem)] text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[20px] text-white my-[35px] md:my-0 font-[Lausanne2] font-medium">
                        Onscreen or in an office.
                        <br />
                        Here. There.
                        <br />
                        Anywhere.
                      </div>

                      <address className="contact_infos_col md:w-[calc((100vw-13.125rem)*5/20+3.125rem)] text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[20px] text-white underline decoration-transparent underline-offset-2 hover:text-[#D3FD50] hover:decoration-[#697E28] transition-colors duration-100 ease-in cursor-pointer not-italic  font-[Lausanne2] font-medium">
                        <a
                          href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          525 Av. Viger O - Suite 400
                          <br />
                          Montréal, QC H2Z 1G6 →
                        </a>
                      </address>
                    </div>
                  </div>

                  <ContactBanner />
                  <ContactHeroSectionFooter />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ContactHeroSection;
