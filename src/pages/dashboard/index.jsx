import { Select } from "antd";
import { MdDownload } from "react-icons/md";
import ResourceCharts from "../../components/resourceLibrary/resourceCharts";
import SolicitationForm from "../../components/dashboard/solicitationForm";
import Faqs from "../../components/dashboard/faqs";
import ComplianceChecklist from "../../components/dashboard/complianceChecklist";
import ProposalTips from "../../components/dashboard/proposalTips";
import ProcumentCalendar from "../../components/dashboard/procumentCalendar";
import ResourceLibrary from "../../components/dashboard/resourceLibrary";

function Dashboard() {
  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Dashboard</h2>
        <button className="transparent-button">
          <MdDownload size={20} />
          <span>Download</span>
        </button>
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
        <SolicitationForm />
        {/*  */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7">
            <Faqs />
          </div>
          <div className="col-span-5 flex flex-col gap-6">
            <ComplianceChecklist />
            <ProposalTips />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <ProcumentCalendar />
          </div>
          <div className="col-span-7">
            <ResourceLibrary />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
