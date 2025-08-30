import Image from "next/image";
import logo from "../public/assets/Group (2).png";
import img2 from "../public/assets/Group (3).png";
import TabButton from "./component/button";
import Navbar from "./component/Navbar";
import FinancialTarget from "./component/FinancialTarget";
import DashboardCards from "./component/DashboardCard";
import InsightsAndLeads from "./component/InsightAndLead";
import DocumentTable from "./component/DocumentTable";
import img1 from '../public/assets/Content.png'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#11455D] w-[248px] py-4 px-2 flex flex-col">
        <div>
          <div className="h-[72px] w-[146px] flex flex-col justify-center">
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={40}
              className="ml-[62px]"
            />
            <Image
              src={img2}
              alt="logos"
              width={146}
              height={15}
              className="ml-[25px]"
            />
          </div>
          <nav className="pt-10 flex flex-col gap-8">
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
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="p-6 flex bg-[#EAECF0] w-[1192px] h-[586px] gap-5">
          <FinancialTarget />
          <DashboardCards />
          <InsightsAndLeads/>
        </div>
        <div className="h-[709px] w-[1192px] px-[32px] max-w-[1280px] gap-[24px] bg-white text-black">
          <div className="w-[1128px] h-[709px] bg-white/20">
            <div className="w-[1128px] h-[93px]  flex flex-col justify-between  bg-[#FFFFFF] ">
              <div className="px-[24px] pt-[20px] h-[72px] w-[1128px] "><Image src={img1} alt="img" className="h-[72px] mb-[7px]  "/> </div>
              <div className="border-b-[1px] border-[#fcfcfd] mt-[5px]"></div>
            </div>
            <DocumentTable />
          </div>
        </div>
      </div>
    </div>
  );
}
