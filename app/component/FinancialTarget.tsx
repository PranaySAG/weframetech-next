import React from "react";
import Image from "next/image";
import CheckCircle from "../../public/assets/Vector.png";
import Ellipse from "../../public/assets/Ellipse 1168.png";

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

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow p-6 flex flex-col">
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          <svg
            className="w-full h-full -rotate-90"
            viewBox="0 0 140 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#3B82F6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-semibold text-black">
            {progress}%
          </span>
        </div>
        <p className="mt-3 text-base sm:text-lg text-black font-medium">
          Account Progress
        </p>
      </div>

      <div className="mt-6 bg-[#F6F7FB] rounded-xl p-4 w-full">
        <h3 className="text-sm font-semibold text-black mb-2">
          Steps Completed
        </h3>
        <div className="space-y-2 text-sm">
          {stepsCompleted.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-black"
            >
              <span className="flex items-center gap-2">
                <Image src={Ellipse} alt="ellipse" className="w-4 h-4" />
                {step.name}
              </span>
              {step.completed && (
                <Image alt="greencircle" src={CheckCircle} className="w-4 h-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-black mb-2">
          Steps Remaining
        </h3>
        <div className="bg-[#F6F7FB] p-3 rounded-xl space-y-2 text-sm">
          {stepsRemaining.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-black"
            >
              <span>{step.name}</span>
              <Image alt="greencircle" src={CheckCircle} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialTarget;
