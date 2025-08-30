import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/Icon.png";
import UserImg from "../../public/assets/Avatar (9).png";
import UserImg2 from "../../public/assets/Avatar (10).png";
import UserImg3 from "../../public/assets/Avatar (11).png";
import UserImg4 from "../../public/assets/Avatar (12).png";
import UserImg5 from "../../public/assets/Avatar (13).png";

const DashboardCards: React.FC = () => {
  const users = [UserImg, UserImg2, UserImg3, UserImg4, UserImg5];

  return (
    <div className="max-w-md mx-auto space-y-4 h-[284px] w-[386px]">
      <div className="bg-white rounded-2xl shadow p-5 border">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">
            Total Franchisees Onboard
          </h2>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="text-3xl font-bold">14</div>
          <div className="flex items-center text-green-600 text-sm bg-green-50 px-2 py-1 rounded-full">
            <Image src={arrow} alt="arrow" />
            +7.4%
          </div>
          <div className="flex mt-3 -space-x-2">
          {users.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`user-${i}`}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
            +7
          </div>
        </div>
        </div>

        

        <div className="flex mt-4 gap-2">
          <div className="h-2 bg-blue-600 rounded-full w-1/6"></div>
          <div className="h-2 bg-blue-400 rounded-full w-2/6"></div>
          <div className="h-2 bg-sky-400 rounded-full w-1/3"></div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-[#475467]">
              <span className="w-2 h-2 rounded-full bg-[#1F7EAA]"></span>
              Stage 1 (Initial Inquiry)
            </span>
            <span className="font-bold text-black">02</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-[#475467]">
              <span className="w-2 h-2 rounded-full bg-[#2FBDFF]"></span>
              Stage 2 (Document Submission)
            </span>
            <span className="font-bold text-black">07</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-[#475467]">
              <span className="w-2 h-2 rounded-full bg-[#97DEFF]"></span>
              Stage 3 (Training)
            </span>
            <span className="font-bold text-black">05</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5 h-[284px] w-[386px] border">
        <h2 className="font-semibold text-black">Financial Wellbeing</h2>

        <div className="flex justify-between items-center mt-3">
          <div className="text-3xl font-bold text-black">20</div>
          <div className="flex items-center text-green-600 text-sm border-green-900 px-2 py-1 rounded-full">
            <Image src={arrow} alt="arrow" />
            +2.1%
          </div>
        </div>
        <p className="text-[#455468] text-sm">Total Franchisees</p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-[#455468] text-sm">Target</p>
            <p className="text-lg font-bold text-black">$500,000</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-[#455468] text-sm">Current</p>
            <p className="text-lg font-bold text-black">$450,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
