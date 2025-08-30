import React from "react";
import Image from "next/image";
import avatar from "../../public/assets/Avatar.png";
import Gear from "../../public/assets/Gear.png";

function Navbar() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-end px-4 md:px-8 shadow">
      <div className="flex items-center gap-4">
        <Image
          alt="gear"
          src={Gear}
          width={20}
          height={20}
          className="h-5 w-5"
        />
        <Image
          alt="avatar"
          src={avatar}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
