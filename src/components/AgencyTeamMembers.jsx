import { useRef } from "react";
import { useMemo } from "react";
import { useTeamMemberFadeOnScroll } from "./hooks/useTeamMemberFadeOnScroll";
import AgencyTeamMembersContainer from "./common/AgencyTeamMembersContainer";
import AgencyTeamMembersContainer2 from "./common/AgencyTeamMembersContainer2";
import useAgencyTeamMembersPairs from "./hooks/AgencyTeamMembersPairs";

function AgencyTeamMembers() {
  // pairs
  const scopeRef = useRef(null);
  const PAIRS = useAgencyTeamMembersPairs();

  // fade on animation start here
  useTeamMemberFadeOnScroll();
  // fade on animation ends here

  const pairIndex = useMemo(() => {
    if (!PAIRS.length) return 0;
    return Math.floor(Math.random() * PAIRS?.length);
  }, [PAIRS.length]);

  const selectedPair = PAIRS[pairIndex] || [];
  const [FirstComp, SecondComp] = selectedPair;
  if (!FirstComp || !SecondComp) return null;

  return (
    <>
      <div
        ref={scopeRef}
        className="team-section   lg:relative lg:top-0  mb-40  lg:pt-48  "
      >
        <h2 className="team_section_screen_reader_text text-sm text-black opacity-0 absolute top-0 left-0">
          Our Team
        </h2>

        <section className="team_member">
          <AgencyTeamMembersContainer data={FirstComp} />
        </section>

        <section className="team_member ">
          <AgencyTeamMembersContainer2 data={SecondComp} />
        </section>
      </div>
    </>
  );
}

export default AgencyTeamMembers;
