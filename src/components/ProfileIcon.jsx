import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/gglogo.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-500">
        <TbGridDots size={20} color="blue" />
      </span>
      <span className="h-10 w-10 relative flex jus items-center">
        <img className="absolute" src={ProfileRing} />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={Profile} />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
