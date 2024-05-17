import { Checkbox } from "antd";
import { HiDotsHorizontal } from "react-icons/hi";

const resources = [
  {
    id: 1,
    name: "Guidelines for compliance with government regulations",
  },
  {
    id: 2,
    name: "Tech Proposal 2024",
  },
  {
    id: 3,
    name: "Proposal writing tips 2024",
  },
  {
    id: 4,
    name: "Best practices for proposal writing",
  },
  {
    id: 5,
    name: "Proposal Template 2023",
  },
  {
    id: 6,
    name: "Government Regulations Updates",
  },
  {
    id: 7,
    name: "Website Development",
  },
];

export default function ResourceLibrary() {
  return (
    <div>
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-[1.5rem] leading-10">Resource Library</h3>
        <p className="text-[0.875rem] font-bold text-[#71ACFF]">View All</p>
      </header>
      <section className="rounded-2xl bg-t02-blue1 p-4">
        <ul className="flex flex-col">
          {resources.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between border-b border-white/10 p-4"
            >
              <div className="flex items-center gap-4">
                <Checkbox />
                <div className="size-10 rounded bg-blue-500"></div>
                <p>{r.name}</p>
              </div>
              <HiDotsHorizontal />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
