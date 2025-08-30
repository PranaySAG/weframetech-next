"use client";

import { useState } from "react";
import Image from "next/image";
import img4 from "./../../public/assets/Button.png";
import PDf from "./../../public/assets/File type icon.png";
import DOC from "./../../public/assets/File type icon (1).png";

type Stage = "Full" | "Onboarding" | "Franchisee" | "Prospect";

interface DocumentItem {
  id: number;
  name: string;
  size: string;
  type: "PDF" | "DOC" | "IMG" | "MP3" | "MP4";
  category: string;
  aiApp: boolean;
  dashboard: boolean;
  stage: Stage;
}

const initialDocuments: DocumentItem[] = [
  { id: 1, name: "Tech requirements.pdf", size: "200 KB", type: "PDF", category: "Legal", aiApp: true, dashboard: true, stage: "Full" },
  { id: 2, name: "Dashboard screenshot.jpg", size: "720 KB", type: "PDF", category: "Vendors & Assets", aiApp: true, dashboard: true, stage: "Onboarding" },
  { id: 3, name: "Dashboard prototype recording.mp4", size: "16 MB", type: "DOC", category: "Technology", aiApp: false, dashboard: true, stage: "Franchisee" },
  { id: 4, name: "Financial Overview", size: "4.2 MB", type: "DOC", category: "Financial", aiApp: true, dashboard: false, stage: "Prospect" },
];

export default function DocumentTable() {
  const [documents, setDocuments] = useState<DocumentItem[]>(initialDocuments);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelectAll = () => {
    if (selectedAll) {
      setSelectedAll(false);
      setSelectedIds([]);
    } else {
      setSelectedAll(true);
      setSelectedIds(documents.map(d => d.id));
    }
  };

  const toggleSelect = (id: number) =>
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  const toggleSwitch = (id: number, field: "aiApp" | "dashboard") =>
    setDocuments(prev => prev.map(d => (d.id === id ? { ...d, [field]: !d[field] } : d)));

  const updateStage = (id: number, stage: Stage) =>
    setDocuments(prev => prev.map(d => (d.id === id ? { ...d, stage } : d)));

  const handleDelete = (id: number) => setDocuments(prev => prev.filter(d => d.id !== id));

  const categoryClass = (cat: string) => {
    if (cat === "Legal") return "bg-blue-100 text-blue-700";
    if (cat === "Technology") return "bg-orange-100 text-orange-700";
    if (cat === "Financial") return "bg-pink-100 text-pink-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="p-3 sm:p-6 bg-white rounded-xl shadow-sm w-full border border-[#999999]">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between mb-4">
        <div className="relative w-full sm:w-[320px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border border-[#999999] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <svg className="absolute left-2 top-2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            <circle cx="11" cy="11" r="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <button className="flex items-center justify-center sm:justify-start gap-2 border border-[#999999] rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm h-[36px] sm:h-[40px] hover:bg-gray-50">
          <Image src={img4} className="h-4 w-4 sm:h-6 sm:w-6" alt="Filter" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="p-2 sm:p-3 w-8 sm:w-12">
                <input type="checkbox" checked={selectedAll} onChange={toggleSelectAll} />
              </th>
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3 hidden sm:table-cell">Type</th>
              <th className="p-2 sm:p-3">AI</th>
              <th className="p-2 sm:p-3">Dash</th>
              <th className="p-2 sm:p-3">Stage</th>
              <th className="p-2 sm:p-3 text-right hidden sm:table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id} className="border-t border-[#ddd] hover:bg-gray-50">
                <td className="p-2 sm:p-3">
                  <input type="checkbox" checked={selectedIds.includes(doc.id)} onChange={() => toggleSelect(doc.id)} />
                </td>

                <td className="p-2 sm:p-3 flex items-center gap-2 sm:gap-3 min-w-[120px]">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-gray-100">
                    {doc.type == "PDF" ? <Image src={PDf} alt="pdf" className="w-4 sm:w-6" /> : <Image src={DOC} alt="doc" className="w-4 sm:w-6" />}
                  </div>
                  <div>
                    <div className="text-gray-800 font-medium truncate max-w-[100px] sm:max-w-[160px]">{doc.name}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">{doc.size}</div>
                  </div>
                </td>

                <td className="p-2 sm:p-3 hidden sm:table-cell">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${categoryClass(doc.category)}`}>{doc.category}</span>
                </td>

                <td className="p-2 sm:p-3">
                  <button
                    onClick={() => toggleSwitch(doc.id, "aiApp")}
                    className={`w-8 sm:w-10 h-4 sm:h-5 rounded-full p-0.5 ${doc.aiApp ? "bg-sky-500" : "bg-gray-300"} transition`}
                  >
                    <span className={`block w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transform transition ${doc.aiApp ? "translate-x-4 sm:translate-x-5" : "translate-x-0"}`} />
                  </button>
                </td>

                <td className="p-2 sm:p-3">
                  <button
                    onClick={() => toggleSwitch(doc.id, "dashboard")}
                    className={`w-8 sm:w-10 h-4 sm:h-5 rounded-full p-0.5 ${doc.dashboard ? "bg-sky-500" : "bg-gray-300"} transition`}
                  >
                    <span className={`block w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transform transition ${doc.dashboard ? "translate-x-4 sm:translate-x-5" : "translate-x-0"}`} />
                  </button>
                </td>

                <td className="p-2 sm:p-3 min-w-[80px] sm:min-w-[140px]">
                  <select
                    value={doc.stage}
                    onChange={(e) => updateStage(doc.id, e.target.value as Stage)}
                    className="border border-[#999999] rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-sm w-full"
                  >
                    <option value="Full">Full</option>
                    <option value="Onboarding">Onboarding</option>
                    <option value="Franchisee">Franchisee</option>
                    <option value="Prospect">Prospect</option>
                  </select>
                </td>

                <td className="p-2 sm:p-3 text-right hidden sm:table-cell">
                  <div className="flex justify-end gap-2 sm:gap-3">
                    <button onClick={() => handleDelete(doc.id)} className="text-red-500 hover:underline text-xs sm:text-sm">Delete</button>
                    <button className="text-sky-600 hover:underline text-xs sm:text-sm">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
