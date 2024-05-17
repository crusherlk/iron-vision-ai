import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dropdown } from "antd";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Pagination from "../shared/pagination";

const columnHelper = createColumnHelper();

export default function ResourceList() {
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
    <section>
      <h2 className="mb-8 text-[1.5rem]">List of Popular Resouces</h2>
      <div>
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
      </div>
    </section>
  );
}
