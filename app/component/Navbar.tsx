import React from 'react'
import Image from 'next/image';
import avatar from "../../public/assets/Avatar.png";
import Gear from "../../public/assets/Gear.png";

function Navbar() {
  return (
    <div className="h-[80px] w-[1192px] bg-white flex items-center justify-end pr-[32px]">
        <div className='h-[40px] w-[96px] flex justify-between items-center gap-xl'>
          <Image alt="gear" src={Gear} width={20} height={20} className="h-[20px] w-[20px] radius-sm spacing-md" />
          <Image alt="avatar" src={avatar} width={40} height={40} className="h-[40px] w-[40px] radius-full" />
        </div>
    </div>
  )
}

export default Navbar
