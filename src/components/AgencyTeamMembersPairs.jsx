import useTeamMembersData from "./hooks/useTeamMembersData";

export default function AgencyTeamMembersPairs() {
  const [TEAM_MEMBERS] = useTeamMembersData();
  const PAIRS = Array.from(
    { length: Math.floor(TEAM_MEMBERS.length / 2) },
    (_, i) => [TEAM_MEMBERS[i * 2], TEAM_MEMBERS[i * 2 + 1]],
  );
  return PAIRS;
}
