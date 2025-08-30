import React from "react";
import Image from "next/image";
import CheckCircle from "../../public/assets/Vector.png"
import Ellipse from "../../public/assets/Ellipse 1168.png"

interface Step {
  name: string;
  completed: boolean;
}

const stepsCompleted: Step[] = [
  { name: "Profile Setup", completed: true },
  { name: "Initial Training", completed: true },
  { name: "Legal Documents", completed: true },
];

const stepsRemaining: Step[] = [
  { name: "Financial Integration", completed: false },
  { name: "Final Review", completed: false },
];

const FinancialTarget: React.FC = () => {
  const progress = 85;

  return (
    <div className="h-[538px] w-[380px] bg-white rounded-2xl shadow p-6 ">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="54"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="54"
              stroke="#3B82F6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 54}`}
              strokeDashoffset={`${
                2 * Math.PI * 54 - (progress / 100) * (2 * Math.PI * 54)
              }`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold  text-black">
            {progress}%
          </span>
        </div>
        <p className="mt-3 text-lg  text-black font-medium">Account Progress</p>
      </div>

      
      <div className="mt-6 bg-[#F6F7FB] rounded-1 p-4 h-[162px] w-full">
        <h3 className="text-[14px] font-semibold text-black mb-2">
          Steps Completed
        </h3>
        <div className="p-3 rounded-xl space-y-2 text-[14px]">
            
          {stepsCompleted.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-black"
            >
              <span className=" flex items-center justify-between"><Image src={Ellipse} alt="ellipse" />{step.name}</span>
              {step.completed && (
                <Image alt="greencircle" src={CheckCircle} />
              )}
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-4">
        <h3 className="text-[14px] font-semibold text-black mb-2">
          Steps Remaining
        </h3>
        <div className="bg-[#F6F7FB] p-3 rounded-xl space-y-2 text-[14px]">
          {stepsRemaining.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-black"
            >
              <span>{step.name}</span>
               <Image alt="greencircle" src={CheckCircle} />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default FinancialTarget;
