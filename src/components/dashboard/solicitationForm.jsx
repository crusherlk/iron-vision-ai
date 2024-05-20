import { Select } from "antd";
import { useState } from "react";

const form_sections = [
  {
    id: 1,
    name: "Basic Information",
    desc: "Here's the basic information",
  },
  {
    id: 2,
    name: "Solicitation Details",
    desc: "Enter the profile info",
  },
  {
    id: 3,
    name: "Contract Requirements",
    desc: "Select the app database type",
  },
  {
    id: 4,
    name: "Technical Specifications",
    desc: "Looking for more information",
  },
  {
    id: 5,
    name: "Additional Criteria",
    desc: "Review and Submit",
  },
  {
    id: 6,
    name: "Budget Information",
    desc: "Review and Submit",
  },
  {
    id: 7,
    name: "Submission Instructions",
    desc: "Review and Submit",
  },
  {
    id: 8,
    name: "Budget Information",
    desc: "Review and Submit",
  },
];

export default function SolicitationForm() {
  const [selectedSection, setSelectedSection] = useState(1);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[1.5rem] leading-10">Solicitation Form</h3>
      <div className="flex rounded-2xl bg-t02-blue1">
        {/* form-sections */}
        <section className="my-6 flex w-1/3 flex-col border-r-[0.5px] border-white/50 px-6">
          {form_sections.map((section) => (
            <div
              key={section.id}
              className={`flex cursor-pointer items-center gap-4 rounded-md px-1 py-3 ${selectedSection === section.id ? "bg-t02-blue2" : null}`}
              onClick={() => {
                setSelectedSection(section.id);
              }}
            >
              <p
                className={`flex size-8 items-center justify-center rounded-full text-[13px] font-semibold leading-4 text-white ${selectedSection === section.id ? "bg-t02-blue1" : "bg-t02-blue2"}`}
              >
                {section.id}
              </p>
              <div className="flex flex-col">
                <p className="text-[0.875rem] font-bold leading-6">
                  {section.name}
                </p>
                <p className="text-[0.75rem] leading-5 text-[#A2A2A2]">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
        {/* form-sections-end */}
        <div className="my-6 flex-1 px-6">
          <h3 className="mb-6 text-[1.25rem] font-medium leading-6">
            Basic Details
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
          >
            <div className="form-item mb-4 flex flex-col gap-2">
              <label className="text-[0.875rem] font-medium leading-6">
                Company Name
              </label>
              <Select
                variant="outlined"
                defaultValue="all"
                style={{ width: "100%" }}
                options={[{ value: "all", label: "all" }]}
              />
            </div>
            <div className="form-item mb-4 flex flex-col gap-2">
              <label className="text-[0.875rem] font-medium leading-6">
                Contact Person
              </label>
              <input
                className="form-textbox !rounded !px-4 !py-2 text-[0.875rem]"
                type="text"
                placeholder="Shaun Micheals"
              />
            </div>
            <div className="form-item mb-4 flex flex-col gap-2">
              <label className="text-[0.875rem] font-medium leading-6">
                Email Address
              </label>
              <input
                className="form-textbox !rounded !px-4 !py-2 text-[0.875rem]"
                type="text"
                placeholder="shaun.michs@aimviztech.co"
              />
            </div>
            <div className="form-item mb-4 flex flex-col gap-2">
              <label className="text-[0.875rem] font-medium leading-6">
                Phone Number
              </label>
              <input
                className="form-textbox !rounded !px-4 !py-2 text-[0.875rem]"
                type="text"
                placeholder="+01 2412 7485 0014"
              />
            </div>
            <div className="mt-6">
              <button className="rounded-3xl bg-t02-blue2 px-4 py-2 text-[13px] font-bold leading-5 text-white">
                Save
              </button>
            </div>
            <div className="mt-12 flex gap-4">
              <button
                className="rounded-3xl bg-white px-4 py-2 text-[13px] font-bold leading-5 text-[#002743] disabled:opacity-50"
                disabled={selectedSection <= 1}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSection((prev) => prev - 1);
                }}
              >
                Prev
              </button>
              <button
                className="rounded-3xl bg-t02-blue2 px-4 py-2 text-[13px] font-bold leading-5 text-white disabled:opacity-50"
                disabled={selectedSection >= 8}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSection((prev) => prev + 1);
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
