import "../../styles/Loader.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
gsap.defaults({ overwrite: "auto" });

function Loader({ onComplete }) {
  const location = useLocation();
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete,
    });

    tl.to({}, { duration: 0.3 });
  }, [onComplete, location.pathname]);

  return (
    <>
      <div className="c-loader">
        <div className="c-loader_spinner">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="c-loader_col">
          <div />
        </div>
        <div className="c-loader_col">
          <div />
        </div>
        <div className="c-loader_col">
          <div />
        </div>
        <div className="c-loader_col">
          <div />
        </div>
        <div className="c-loader_col">
          <div />
        </div>
      </div>
    </>
  );
}

export default Loader;
