import { HiOutlineX, HiSearch } from "react-icons/hi";
import { FiltersIcon } from "../../assets/sidebarIcons";
import { useRef, useState } from "react";

import {
  ViewsDirective,
  ViewDirective,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import * as dataSource from "../../../datasource.json";
import { extend } from "@syncfusion/ej2-base";

export default function ProcurementCalendar() {
  const [searchValue, setSearchValue] = useState("");

  const scheduleObj = useRef(null);
  const data = extend([], dataSource.zooEventsData, null, true);

  const onEventRendered = (args) => {
    let categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
      return;
    }
    if (scheduleObj.current.currentView === "Agenda") {
      args.element.firstChild.style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  };

  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Procurement Calendar</h2>
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
      <section>
        <ScheduleComponent
          ref={scheduleObj}
          currentView="Week"
          height="650px"
          eventSettings={{ dataSource: data }}
          eventRendered={onEventRendered}
        >
          <ViewsDirective>
            <ViewDirective option="Day"></ViewDirective>
            <ViewDirective option="Week"></ViewDirective>
            <ViewDirective option="Month"></ViewDirective>
            <ViewDirective option="Agenda"></ViewDirective>
          </ViewsDirective>
          <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </section>
    </>
  );
}
