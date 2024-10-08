"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useState, createContext } from "react";

export const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen fixed z-10">
      <nav className="h-full flex flex-col bg-[#1F1E30] shadow-lg">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="Laboratory.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-20" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
      </nav>
    </aside>
  );
}
