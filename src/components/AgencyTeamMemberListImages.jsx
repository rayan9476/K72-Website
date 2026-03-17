import useClipRevealAnimation from "./hooks/useClipRevealAnimation.js";
import useZIndexStack from "./hooks/useZIndexStack.js";
import { agencyTeamMembersListImages } from "../Data/AgencyTeamMembersData.js";

function AgencyTeamMemberListImages({ hoveredIndex, containerHover }) {
  // z-index or opacity control by hover logic start here
  const { zOrder } = useZIndexStack(hoveredIndex);
  // z-index or opacity control by hover logic ends here

  //  animation for img  start here
  useClipRevealAnimation(hoveredIndex, containerHover);
  //  animation for img  ends here

  return (
    <>
      {agencyTeamMembersListImages?.map((member, index) => {
        const zIndex = zOrder.indexOf(index) + 1;
        const isVisible = zOrder.includes(index); // visible if hovered once
        const opacity =
          hoveredIndex === index
            ? 1
            : isVisible
              ? 1 // keep old images visible
              : 0; // hidden before hover
        return (
          <figure
            key={member.id}
            className="A_team_members_image_wrapper w-full h-full overflow-hidden    rounded-[20px] absolute  top-0 left-0  p-0 m-0  origin-left   "
            style={{
              zIndex,
              opacity,
              transition: "opacity 0.4s ease",
            }}
          >
            <img
              id="team_members_image"
              className="rounded-[20px]  w-full h-full object-contain  "
              src={member.image}
              alt={member.alt}
              loading="lazy"
            />
          </figure>
        );
      })}
    </>
  );
}

export default AgencyTeamMemberListImages;
