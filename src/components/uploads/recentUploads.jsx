import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  // you can use different aproach here
  columnHelper.accessor((row) => row.email, {
    id: "email",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.renderValue(),
  }),
];

export default function RecentUploads() {
  const uploadsData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      phone: "555-123-4567",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emilywilson@example.com",
      phone: "999-888-7777",
    },
    {
      id: 5,
      name: "Daniel Lee",
      email: "daniellee@example.com",
      phone: "444-555-6666",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "oliviamartinez@example.com",
      phone: "777-999-1111",
    },
    {
      id: 7,
      name: "William Thompson",
      email: "williamthompson@example.com",
      phone: "222-333-4444",
    },
  ];

  const table = useReactTable({
    data: uploadsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h2 className="mb-8 text-[1.5rem]">Recent Uploads</h2>
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
    </div>
  );
}
