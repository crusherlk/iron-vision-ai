import { useState } from "react";
import { HiDotsHorizontal, HiOutlineX, HiSearch } from "react-icons/hi";
import { FiltersIcon } from "../../assets/sidebarIcons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dropdown, Select } from "antd";
import Pagination from "../shared/pagination";

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

const columnHelper = createColumnHelper();

function Proposals() {
  const [selectedSection, setSelectedSection] = useState(1);

  const items = [
    {
      key: "edit",
      label: "Edit",
    },
    {
      key: "delete",
      danger: true,
      label: "Delete",
    },
  ];

  const onDropdownClick = ({ key }) => {
    if (key === "edit") console.log("edit");
    if (key === "delete") console.log("delete");
  };

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: () => "Proposal ID",
    }),
    columnHelper.accessor("title", {
      cell: (info) => info.getValue(),
      header: () => "Proposal Title",
    }),
    columnHelper.accessor("client", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => info.getValue(),
      header: () => "Date Created",
    }),
    columnHelper.accessor("status", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      cell: () => (
        <>
          <Dropdown
            trigger={"click"}
            placement="bottom"
            menu={{
              items,
              onClick: onDropdownClick,
            }}
          >
            <div>
              <HiDotsHorizontal size={20} className="cursor-pointer" />
            </div>
          </Dropdown>
        </>
      ),
    }),
  ];

  const [searchValue, setSearchValue] = useState("");
  const proposalsData = [
    {
      id: "1234",
      title: "Accountant",
      client: "Lucas",
      createdAt: "2008/11/28",
      status: "Approved",
    },
    {
      id: "9101",
      title: "Software Engineer",
      client: "Pat Reichel",
      createdAt: "2012/10/13",
      status: "Rejected",
    },
    {
      id: "5678",
      title: "CEO",
      client: "Henrietta Mosciski",
      createdAt: "2009/10/09",
      status: "Pending",
    },
    {
      id: "9765",
      title: "Technical Author",
      client: "Nixon",
      createdAt: "2009/01/12",
      status: "Pending",
    },
    {
      id: "8976",
      title: "Integration Specialist",
      client: "Goodwin",
      createdAt: "2012/12/02",
      status: "Approved",
    },
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data: proposalsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    pageCount: 4,
  });

  return (
    <div>
      {/* header */}
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

      {/* solicitation form */}
      <section className="mb-8">
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
      </section>

      {/* table */}
      <section className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Past Proposals</h3>
        <table className="r-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination table={table} />
      </section>
    </div>
  );
}

export default Proposals;
