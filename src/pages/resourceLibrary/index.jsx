import { Select } from "antd";
import ResourceCharts from "../../components/resourceLibrary/resourceCharts";
import ResourceStats from "../../components/resourceLibrary/resourceStats";
import ResourceList from "../../components/resourceLibrary/resourceList";

export default function ResourceLibrary() {
  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Resource Library</h2>
      </div>
      {/* search & filters */}
      <section className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full bg-t02-blue1 px-4 py-2">
          <p className="text-[0.875rem] font-medium leading-5 text-white/70">
            Filter By Proposal:
          </p>
          <Select
            variant="borderless"
            defaultValue="all"
            style={{ width: 200 }}
            options={[{ value: "all", label: "all" }]}
          />
        </div>
        <div className="flex items-center rounded-full bg-t02-blue1 px-4 py-2">
          <p className="text-[0.875rem] font-medium leading-5 text-white/70">
            People:
          </p>
          <Select
            variant="borderless"
            defaultValue="all"
            style={{ width: 200 }}
            options={[{ value: "all", label: "all" }]}
          />
        </div>
        <div className="flex items-center rounded-full bg-t02-blue1 px-4 py-2">
          <p className="text-[0.875rem] font-medium leading-5 text-white/70">
            By Proposal Tips:
          </p>
          <Select
            variant="borderless"
            defaultValue="all"
            style={{ width: 200 }}
            options={[{ value: "all", label: "all" }]}
          />
        </div>
      </section>
      {/* header-end */}
      <section className="flex flex-col gap-10">
        <ResourceCharts />
        <ResourceStats />
        <ResourceList />
      </section>
    </>
  );
}
