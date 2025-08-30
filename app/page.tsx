"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/Group (2).png";
import img2 from "../public/assets/Group (3).png";
import TabButton from "./component/button";
import Navbar from "./component/Navbar";
import FinancialTarget from "./component/FinancialTarget";
import DashboardCards from "./component/DashboardCard";
import InsightsAndLeads from "./component/InsightAndLead";
import DocumentTable from "./component/DocumentTable";
import img1 from "../public/assets/Content.png";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <div
        className={`bg-[#11455D] min-h-screen py-4 px-2 flex-col z-50 transition-transform duration-300 fixed md:static 
          ${open ? "flex w-64 translate-x-0" : "hidden md:flex md:w-64 -translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between px-4">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={70} height={40} />
            <Image src={img2} alt="logos" width={146} height={15} />
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-white">
            <X size={28} />
          </button>
        </div>
        <nav className="pt-10 flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-3 px-4">
            <TabButton label="Home" current={true} />
            <TabButton label="Stage&checklist" />
            <TabButton label="Upload Docs" />
            <TabButton label="Preferred Vendors" />
            <TabButton label="Tech Stack" />
            <TabButton label="Targets" />
            <TabButton label="Zee Sales Targets" />
            <TabButton label="MAI Settings" />
            <TabButton label="Pending Questions" badgeCount={3} />
          </div>
        </nav>
      </div>

      <div className="flex flex-col flex-1 min-h-screen">
        <div className="h-14 sm:h-16 bg-white flex items-center justify-between px-4 sm:px-6 shadow md:justify-end">
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Navbar />
        </div>

        <div className="p-4 sm:p-6 grid bg-[#EAECF0] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1">
          <FinancialTarget />
          <DashboardCards />
          <InsightsAndLeads />
        </div>

        <div className="px-4 sm:px-6 py-4 bg-white text-black">
          <div className="w-full bg-white/20">
            <div className="flex flex-col justify-between bg-[#FFFFFF]">
              <div className="px-4 sm:px-6 pt-5">
                <Image src={img1} alt="img" className="max-h-20 w-auto mb-2" />
              </div>
              <div className="border-b border-[#fcfcfd]" />
            </div>
            <DocumentTable />
          </div>
        </div>
      </div>
    </div>
  );
}
