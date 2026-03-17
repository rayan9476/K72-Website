import useNavbarMenuStairs from "../hooks/useNavbarMenuStairs";

function Navbarmenustairs({ ismenuOpen }) {
  // animation for navbarmenu stairs start here
  useNavbarMenuStairs(ismenuOpen);
  // animation for navbarmenu stairs ends here
  return (
    <>
      <div className="nav_stairs opacity-0 flex-1 mr-[-1px]   h-full     bg-black "></div>
      <div className="nav_stairs opacity-0 flex-1 mr-[-1px]   h-full    bg-black "></div>
      <div className="nav_stairs opacity-0 flex-1 mr-[-1px]   h-full     bg-black "></div>
      <div className="nav_stairs  opacity-0 flex-1 mr-[-1px]   h-full    bg-black "></div>
      <div className="nav_stairs opacity-0 flex-1 mr-[-1px]  h-full    bg-black "></div>
    </>
  );
}

export default Navbarmenustairs;
