import { FiArrowDownLeft } from "react-icons/fi";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export default function LaborStandards() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[1.5rem] leading-10">Labor Standards</h3>
      <div className="flex gap-4 rounded-2xl bg-t02-blue1 p-5">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart width={730} height={300} data={data}>
              <CartesianGrid stroke="#0044FF"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis dataKey="name" tick={{ fill: "#fff", fontSize: 10 }} stroke="#0044FF" />
              <YAxis tick={{ fill: "#fff", fontSize: 10 }}  stroke="#0044FF" />
              <Bar dataKey="pv" fill="#FFFFFF" />
              <Bar dataKey="uv" fill="#005ED8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* stats */}
        <div className="flex w-[280px] flex-col gap-6">
          <div className="rounded border-2 border-[#0062FF] bg-white px-4 py-5">
            <p className="text-[1.5rem] leading-10 text-[#0062FF]">
              <span className="font-bold">12,954.63</span> USD
            </p>
            <p className="text-[0.75rem] leading-5 text-[#8091A7]">
              Last month{" "}
              <span className="font-medium text-[#364A63]">39,485 USD</span>
            </p>
            <div className="mt-1 flex gap-3">
              {/* icon */}
              <div className="flex size-6 items-center justify-center rounded-full bg-[#F5F6FA]">
                <FiArrowDownLeft size={16} color="#0062FF" />
              </div>
              <p className="text-[0.875rem] font-medium leading-5 text-[#8091A7]">
                Buy Orders
              </p>
            </div>
          </div>
          <div className="rounded border-2 border-[#121D73] bg-white px-4 py-5">
            <p className="text-[1.5rem] leading-10 text-[#121D73]">
              <span className="font-bold">12,954.63</span> USD
            </p>
            <p className="text-[0.75rem] leading-5 text-[#8091A7]">
              Last month{" "}
              <span className="font-medium text-[#364A63]">39,485 USD</span>
            </p>
            <div className="mt-1 flex gap-3">
              {/* icon */}
              <div className="flex size-6 items-center justify-center rounded-full bg-[#F5F6FA]">
                <FiArrowDownLeft size={16} color="#121D73" />
              </div>
              <p className="text-[0.875rem] font-medium leading-5 text-[#8091A7]">
                Sell Orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
