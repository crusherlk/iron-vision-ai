import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "../shared/pagination";
import { useState } from "react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
    header: () => <span>File name</span>,
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue(),
    header: () => "Date Uploaded",
  }),
  columnHelper.accessor((row) => row.createdAt, {
    id: "modifiedAt",
    cell: (info) => info.getValue(),
    header: () => "Date Modified",
  }),
];

export default function RecentUploads() {
  const uploadsData = [
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
    data: uploadsData,
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
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.5rem]">Recent Uploads</h2>
        <table className="r-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="">
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
