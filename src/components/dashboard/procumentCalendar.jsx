import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

export default function ProcumentCalendar() {
  function onRenderDayCell(args) {
    const highlightDate = new Date("2024-05-15");

    if (highlightDate.getDate() === args.date.getDate()) {
      args.element.classList.add("marked-procurements");
    }
  }

  return (
    <div>
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-[1.5rem] leading-10">Procurement Calendar</h3>
        <p className="text-[0.875rem] font-bold text-[#71ACFF]">View All</p>
      </header>
      <section className="rounded-2xl bg-t02-blue1 p-4">
        <ul className="mb-4 flex flex-col gap-2">
          <li className="flex items-center gap-2.5">
            <div className="size-4 rounded-full bg-[#F2C94C]"></div>
            <p className="text-[0.75rem] font-bold leading-5 text-[#F2C94C]">
              federal government procurement opportunities
            </p>
          </li>
          <li className="flex items-center gap-2.5">
            <div className="size-4 rounded-full bg-[#EB5757]"></div>
            <p className="text-[0.75rem] font-bold leading-5 text-[#EB5757]">
              proposal submission deadlines
            </p>
          </li>
          <li className="flex items-center gap-2.5">
            <div className="size-4 rounded-full bg-[#219653]"></div>
            <p className="text-[0.75rem] font-bold leading-5 text-[#219653]">
              solicitation release dates
            </p>
          </li>
        </ul>
        <div>
          <CalendarComponent
            id="calendar"
            className="dashboard_calendar"
            showTodayButton={false}
            renderDayCell={onRenderDayCell}
          ></CalendarComponent>
        </div>
      </section>
    </div>
  );
}
