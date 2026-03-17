import useStairsAnimation from "../hooks/useStairsAnimation";
import { useEffect } from "react";

function Stairsanimation({ children }) {
  //  stairanimation start here
  const { stairsContainerRef, appRef } = useStairsAnimation();
  //  stairanimation ends here

  useEffect(() => {
    if (!appRef.current) return;
  }, [children, appRef]);
  return (
    <>
      <div
        ref={stairsContainerRef}
        className="stairs_container opacity-0  transform-gpu  h-screen w-full pointer-events-none  fixed left-0 top-0 z-30  overflow-hidden"
      >
        <div className="stairs_content is-stairs-open pointer-events-none  w-full text-[0px] h-full flex gap-0 ">
          <div className="stairs flex-1 mr-[-1px]   bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
        </div>
      </div>

      <div>
        <div ref={appRef}>{children}</div>
      </div>
    </>
  );
}

export default Stairsanimation;
