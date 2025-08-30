import React from "react";
import Image from "next/image";
import avatar from "../../public/assets/Avatar.png";
import Gear from "../../public/assets/Gear.png";

function Navbar() {
  return (
    <div className="hidden sm:flex w-full h-14 sm:h-16 bg-white items-center justify-end px-3 sm:px-6 md:px-8 shadow">
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          alt="gear"
          src={Gear}
          width={20}
          height={20}
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
        <Image
          alt="avatar"
          src={avatar}
          width={40}
          height={40}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
