import { useRef } from "react";
import { lazy, Suspense } from "react";
const Agencyourprojectwrapper = lazy(() => import("./Agencyourprojectwrapper"));
const Agencyourprojectwrapper2 = lazy(
  () => import("./Agencyourprojectwrapper2"),
);
const Agencyourprojectwrapper3 = lazy(
  () => import("./Agencyourprojectwrapper3"),
);

function AgencyOurProject({ projectImages }) {
  const scopeRef = useRef(null);

  return (
    <>
      <div
        ref={scopeRef}
        style={{ opacity: 0 }}
        className="our_project_section_wrapper main_content_hide_gsap relative"
      >
        <Suspense fallback={null}>
          <Agencyourprojectwrapper images={projectImages} />
        </Suspense>
        <Suspense fallback={null}>
          <Agencyourprojectwrapper2 images={projectImages} />
        </Suspense>
        <Suspense fallback={null}>
          <Agencyourprojectwrapper3 images={projectImages} />
        </Suspense>
      </div>
    </>
  );
}

export default AgencyOurProject;
