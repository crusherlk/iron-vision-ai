/* eslint-disable react/prop-types */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Pagination({ table }) {
  return (
    <aside className="tex mt-2 flex items-center justify-end gap-3 text-[15px] font-medium">
      <button
        className="flex size-8 items-center justify-center gap-1 rounded-md bg-[#B6DFFF] text-[#18232A] disabled:opacity-30"
        onClick={() => {
          table.previousPage();
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <HiChevronLeft size={18} />
      </button>
      <button
        className="flex size-8 items-center justify-center gap-1 rounded-md bg-[#B6DFFF] text-[#18232A] disabled:opacity-30"
        onClick={() => {
          table.nextPage();
        }}
        disabled={!table.getCanNextPage()}
      >
        <HiChevronRight size={18} />
      </button>
      <p className="flex items-center gap-1">
        <span>Page</span>
        <span className="font-bold">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
      </p>
      <p className="flex items-center gap-1">
        <span>Go to page:</span>
        <input
          type="number"
          value={table.getState().pagination.pageIndex + 1}
          className="w-16 rounded border bg-transparent p-1"
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
        />
      </p>
    </aside>
  );
}
