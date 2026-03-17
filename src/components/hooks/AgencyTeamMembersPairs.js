import { TEAM_MEMBERS } from "../../Data/AgencyTeamMembersData";
export default function useAgencyTeamMembersPairs() {
  const PAIRS = Array.from(
    { length: Math.floor(TEAM_MEMBERS.length / 2) },
    (_, i) => [TEAM_MEMBERS[i * 2], TEAM_MEMBERS[i * 2 + 1]],
  );

  return PAIRS;
}
