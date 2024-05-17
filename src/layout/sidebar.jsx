import { NavLink, useLocation } from "react-router-dom";
import {
  ComplianceChecklistIcon,
  DashIcon,
  GenerateProposalIcon,
  PastProposalsIcon,
  ProcurementCalendarIcon,
  ResourceLibraryIcon,
  UploadIcon,
} from "../assets/sidebarIcons";
import { HiOutlineX } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { pathname } = useLocation();

  return (
    <aside
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-[300px] flex-col overflow-y-hidden bg-t02-blue1 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="m-8">
        {/* sidebar header */}
        <div className="relative flex flex-col items-center">
          <img
            className="aspect-square w-[66px]"
            src="/iv-logo.png"
            alt="logo"
          />
          <h2 className="font-[#b3c6cd] text-t02 font-bold">IronVision</h2>
          <div className="absolute right-0 top-0 lg:hidden">
            <HiOutlineX
              className="cursor-pointer text-[#80B0FF] duration-300 hover:text-white"
              size={20}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            />
          </div>
        </div>
        {/* sidebar header */}
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* sidebar menu */}
        <nav className="m-6">
          <ul className="flex flex-col gap-[6px]">
            {/* dashboard */}
            <li>
              <NavLink
                to="/"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname === "/" ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <DashIcon />
                Dashboard
              </NavLink>
            </li>
            {/* Uploads */}
            <li>
              <NavLink
                to="/uploads"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("uploads") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <UploadIcon />
                Uploads
              </NavLink>
            </li>
            {/* past proposals */}
            <li>
              <NavLink
                to="/past-proposals"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("past-proposals") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <PastProposalsIcon />
                Past Proposals
              </NavLink>
            </li>
            {/* generate proposal */}
            <li>
              <NavLink
                to="/generate-proposal"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("generate-proposal") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <GenerateProposalIcon />
                Generate Proposal
              </NavLink>
            </li>
            {/* compliance checklist */}
            <li>
              <NavLink
                to="/compliance-checklist"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("compliance-checklist") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <ComplianceChecklistIcon />
                Compliance Checklist
              </NavLink>
            </li>
            {/* procurement calendar */}
            <li>
              <NavLink
                to="/procurement-calendar"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("procurement-calendar") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <ProcurementCalendarIcon />
                Procurement Calendar
              </NavLink>
            </li>
            {/* resource library */}
            <li>
              <NavLink
                to="/resource-library"
                className={`flex items-center gap-[10px] rounded-[10px] px-4 py-2 ${pathname.includes("resource-library") ? "bg-t02-blue2 font-bold text-white" : "text-[#80B0FF]"} `}
              >
                <ResourceLibraryIcon />
                Resource Library
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
