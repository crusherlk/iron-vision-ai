import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const rechart_data = [
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

export default function ResourceCharts() {
  return (
    <div className="grid grid-cols-6 gap-8">
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Active Users
        </p>
        <p className="font-semibold leading-5 text-white/70">
          <span className="text-[1.5rem] font-bold leading-6 text-white">
            27
          </span>
          /80
        </p>
        <ResponsiveContainer width="100%" height={60}>
          <AreaChart width={180} height={60} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Questions Query
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">3,298</p>
        <ResponsiveContainer width="100%" height={"100%"}>
          <AreaChart width={300} height={90} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Av. Session Length
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">2m 34s</p>
        <ResponsiveContainer width="100%" height={"100%"}>
          <AreaChart width={300} height={90} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Starting Knowledge
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">64%</p>
        <ResponsiveContainer width="100%" height={"100%"}>
          <AreaChart width={300} height={90} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Current Knowledge
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">86%</p>
        <ResponsiveContainer width="100%" height={"100%"}>
          <AreaChart width={300} height={90} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="flex flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Knowledge Gain
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">+34%</p>
        <ResponsiveContainer width="100%" height={"100%"}>
          <AreaChart width={300} height={90} data={rechart_data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0062FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1B59F8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
