import { HiOutlineX, HiSearch } from "react-icons/hi";
import { FiltersIcon } from "../../assets/sidebarIcons";
import { useState } from "react";
import TopLayer from "../../components/complianceChecklist/topLayer";
import LaborStandards from "../../components/complianceChecklist/laborStandards";
import BotLayer from "../../components/complianceChecklist/botLayer";

export default function ComplianceChecklist() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Compliance Checklist</h2>
      </div>
      {/* search & filters */}
      <section className="mb-8 flex items-center justify-between">
        <div className="relative flex items-center gap-3 rounded-full bg-t02-blue1 px-4 py-3">
          <HiSearch size={24} />
          <input
            className="search-box"
            type="text"
            name="search"
            id="search"
            placeholder="Search Here"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <HiOutlineX
            size={20}
            className={`cursor-pointer ${searchValue === "" && "invisible"}`}
            onClick={() => setSearchValue("")}
          />
        </div>
        <div>
          <button className="filter-button">
            <FiltersIcon />
            <span>Show Filter</span>
          </button>
        </div>
      </section>
      {/* header-end */}
      <section className="flex flex-col gap-10">
        <TopLayer />
        <LaborStandards />
        <BotLayer />
      </section>
    </>
  );
}
