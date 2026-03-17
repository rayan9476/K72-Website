import { socialsLinks } from "../Data/SocialsLinksData";
function ContactHeroSectionFooter() {
  return (
    <>
      <div className="contact_footer w-full px-[8.75px] text-center  md:mt-14 lg:mt-[4.7rem] xl:mt-[5.5rem] 2xl:mt-[5.8rem]">
        <h2 className="contact_socials_title text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[20px] text-white uppercase font-[Lausanne2] font-medium mb-[17.5px]">
          Follow us
        </h2>

        <div className="buttons  flex  items-start justify-center  gap-1.5  ">
          {socialsLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[10vw] --border  uppercase font-[Lausanne2] font-medium text-white px-[0.7rem] md:px-[0.94rem] lg:px-[1.1rem] 2xl:px-6  3xl:px-10  pt-[0.5rem] md:pt-[0.8rem] lg:pt-[0.8rem]  xl:pt-[0.9rem]   2xl:pt-[1.3rem]  pb-0 border-2 border-white rounded-[20px] md:rounded-[52447.5px]  3xl:rounded-[72px]  leading-[0.7]     transition-all ease-in  hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
                {label}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactHeroSectionFooter;
