import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ResourceCard from "./resourceCard";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ResourceStats() {
  return (
    <div className="grid grid-cols-3 gap-11">
      {/* Resources By Usage */}
      <div className="col-span-2 flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Resources By Usage</h3>
        <div className="h-full rounded-2xl bg-t02-blue1 p-5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                right: 30,
              }}
            >
              <CartesianGrid
                stroke="#0044FF"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "#fff", fontSize: 10 }}
                stroke="#0044FF"
              />
              <YAxis tick={{ fill: "#fff", fontSize: 10 }} stroke="#0044FF" />
              <Bar dataKey="pv" stackId="a" fill="#56CCF2" barSize={10} />
              <Bar dataKey="uv" stackId="a" fill="#FFA600" barSize={10} />
              <Bar dataKey="amt" stackId="a" fill="#FF5630" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Environmental Protection */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Available Resources</h3>
        <div className="flex flex-col gap-2 rounded-2xl bg-t02-blue1 p-5">
          {/* resource cards */}
          {Array.from({ length: 4 }, (_, i) => (
            <ResourceCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
