import React from "react";
import Image from "next/image";
import User1 from "../../public/assets/Avatar (6).png"
import User2 from "../../public/assets/Avatar (7).png"
import User3 from "../../public/assets/Avatar (8).png"
import TopPerfromer from "../../public/assets/image 14.png"

const InsightsAndLeads: React.FC = () => {
  return (
    <div className="h-[282px] w-[400px] max-w-md mx-auto space-y-4">
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-semibold text-black mb-3">
          Key Insights & Feedback
        </h2>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">10%</p>
            <p className="text-sm text-black -mt-1">Sales Growth</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Image src={TopPerfromer} alt=""/>
            </div>
            <span className="mt-1 text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
              Top Performer
            </span>
          </div>
        </div>

        <div className="mt-4 bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-semibold text-black mb-3">Prospect Leads</h2>

        <div className="space-y-3  text-black">
          {[
            { name: "Wade Warren", stage: "Initial Inquiry", img: User1, type: "image" },
            { name: "Ava Wright", stage: "Initial Inquiry", img: User2, type: "image" },
            { name: "Cody Fisher", stage: "Initial Inquiry", img: User3, type: "image" },
          ].map((lead, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3 h-[40px] w-[400px]">
                {lead.type === "image" && (
                  <Image
                    src={lead.img}
                    alt={lead.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                {lead.type === "icon" && (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">?</span>
                  </div>
                )}
                {lead.type === "none" && (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">?</span>
                  </div>
                )}
                <span className="font-medium">{lead.name}</span>
              </div>
              <span className="text-sm text-black">
                Stage: <span className="font-medium">{lead.stage}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsAndLeads;
