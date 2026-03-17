import { useCardInfoAnimation } from "./hooks/useCardInfoAnimation";
import { useLockedHoverCardInfo } from "./hooks/useLockedHoverCardInfo";

function WorkCardinfo({ hoveredIndex, data, hoveredImage }) {
  // card info animation start here
  const { projectcard, border } = useCardInfoAnimation({ hoveredIndex });
  // card info animation ends here

  // cards info logic start here
  const lockedInfo = useLockedHoverCardInfo({
    hoveredIndex,
    hoveredImage,
    data,
  });
  // cards info logic ends here

  return (
    <>
      <div
        className="project_card_info_container fixed h-[19%]  w-full   z-30 left-0 top-0    transform translate-y-[-248%]  "
        ref={projectcard}
      >
        <div className="fixed project-info-overlay  w-full h-[50px] bg-white"></div>
        <div className="project_card_info   fixed z-10 left-0 top-12 project-info-card-top w-full  border-b-2 border-black bg-white  lg:px-2.5 lg:py-4">
          <span
            ref={border}
            className="absolute top-0 right-0 h-[2px] project-info-span-height bg-black w-[80%]"
          ></span>
          <div className="project_info_content w-full  grid grid-cols-8 items-center justify-center  gap-6">
            <div className="col-span-4">
              <span className="project_title text-[1.8rem] project-info-span leading-6 font-medium text-black font-[Lausanne2]  ">
                <span className="bg"></span>
                {lockedInfo?.title}
              </span>
            </div>

            <div className="col-span-3">
              <span className="project_para text-[1.8rem] project-info-span leading-6 font-medium text-black font-[Lausanne2]  ">
                <span className="bg"></span>
                {lockedInfo?.para}
              </span>
            </div>

            <div className="col-span-1">
              <span className="project_year text-[1.8rem] project-info-span leading-6 font-medium text-black font-[Lausanne2]   flex justify-end">
                <span className="bg"></span>
                {lockedInfo?.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCardinfo;
