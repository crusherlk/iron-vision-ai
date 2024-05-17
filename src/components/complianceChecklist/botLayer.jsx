import { CheckboxIcon } from "../../assets/sidebarIcons";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { useRef } from "react";
import { HiArrowUp } from "react-icons/hi";
import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const pie_data1 = [
  { x: "Chrome", y: 61.3, text: "Chrome: 61.3%" },
  { x: "Safari", y: 24.6, text: "Safari: 24.6%" },
  { x: "Edge", y: 5.0, text: "Edge: 5.0%" },
  { x: "Samsung Internet", y: 2.7, text: "Samsung Internet: 2.7%" },
  { x: "Firefox", y: 2.6, text: "Firefox: 2.6%" },
  { x: "Others", y: 3.6, text: "Others: 3.6%" },
];

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

const progressbar_animation = {
  enable: true,
  duration: 2000,
  delay: 0,
};

export default function BotLayer() {
  const linearOne = useRef(null);
  const linearTwo = useRef(null);
  const linearThree = useRef(null);
  const linearFour = useRef(null);

  return (
    <div className="grid grid-cols-3 gap-11">
      {/* Buy American Act */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Buy American Act</h3>
        <div className="flex min-h-[300px] flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart width={400} height={400}>
              <Pie
                data={pie_data1}
                dataKey="y"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Environmental Protection */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Environmental Protection</h3>
        <div className="flex flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
          <div>
            <div className="mx-2 flex justify-between">
              <p className="flex gap-1.5 text-[0.875rem] leading-6 text-[#8091A7]">
                <CheckboxIcon />
                <span>Ethical Conduct</span>
              </p>
              <p className="text-[0.875rem] font-medium leading-6 text-[#56759e]">
                65.5%
              </p>
            </div>
            <ProgressBarComponent
              id="ep1"
              ref={linearOne}
              type="Linear"
              width="100%"
              value={65.5}
              trackThickness={6}
              progressThickness={6}
              animation={progressbar_animation}
              progressColor="#1676FB"
              cornerRadius="Round"
            />
          </div>
          <div>
            <div className="mx-2 flex justify-between">
              <p className="flex gap-1.5 text-[0.875rem] leading-6 text-[#8091A7]">
                <CheckboxIcon />
                <span>Quality Assurance</span>
              </p>
              <p className="text-[0.875rem] font-medium leading-6 text-[#56759e]">
                65.5%
              </p>
            </div>
            <ProgressBarComponent
              id="ep2"
              ref={linearTwo}
              type="Linear"
              width="100%"
              value={65.5}
              trackThickness={6}
              progressThickness={6}
              animation={progressbar_animation}
              progressColor="#E51837"
              cornerRadius="Round"
            />
          </div>
          <div>
            <div className="mx-2 flex justify-between">
              <p className="flex gap-1.5 text-[0.875rem] leading-6 text-[#8091A7]">
                <CheckboxIcon />
                <span>Subcontracting Plans</span>
              </p>
              <p className="text-[0.875rem] font-medium leading-6 text-[#56759e]">
                65.5%
              </p>
            </div>
            <ProgressBarComponent
              id="ep3"
              ref={linearThree}
              type="Linear"
              width="100%"
              value={65.5}
              trackThickness={6}
              progressThickness={6}
              animation={progressbar_animation}
              progressColor="#3199FF"
              cornerRadius="Round"
            />
          </div>
          <div>
            <div className="mx-2 flex justify-between">
              <p className="flex gap-1.5 text-[0.875rem] leading-6 text-[#8091A7]">
                <CheckboxIcon />
                <span>Contract Changes</span>
              </p>
              <p className="text-[0.875rem] font-medium leading-6 text-[#56759e]">
                65.5%
              </p>
            </div>
            <ProgressBarComponent
              id="ep4"
              ref={linearFour}
              type="Linear"
              width="100%"
              value={65.5}
              trackThickness={6}
              progressThickness={6}
              animation={progressbar_animation}
              progressColor="#E59F18"
              cornerRadius="Round"
            />
          </div>
        </div>
      </div>
      {/* Cybersecurity Requirements */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Cybersecurity Requirements</h3>
        <div className="flex flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
          {/* ip search */}
          <div>
            {/* card heading */}
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] font-medium leading-5 text-[#526484]">
                IP Search
              </p>
              <div className="flex gap-10">
                <p className="text-[0.75rem] font-medium leading-5 text-[#526484]">
                  4305
                </p>
                <p className="flex items-center text-[0.875rem] font-normal leading-4 text-[#8091A7]">
                  4.29% <HiArrowUp size={14} />
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart width={180} height={60} data={rechart_data}>
                <defs>
                  <linearGradient id="colorIP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EB5757" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EB5757" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="uv"
                  stroke="#EB5757"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorIP)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Credit Card Checklist */}
          <div>
            {/* card heading */}
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] font-medium leading-5 text-[#526484]">
                Credit Card Checklist
              </p>
              <div className="flex gap-10">
                <p className="text-[0.75rem] font-medium leading-5 text-[#526484]">
                  4305
                </p>
                <p className="flex items-center text-[0.875rem] font-normal leading-4 text-[#8091A7]">
                  4.29% <HiArrowUp size={14} />
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart width={180} height={60} data={rechart_data}>
                <defs>
                  <linearGradient id="colorCC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F4BD0E" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F4BD0E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="uv"
                  stroke="#F4BD0E"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCC)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Organic Search */}
          <div>
            {/* card heading */}
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] font-medium leading-5 text-[#526484]">
              Organic Search
              </p>
              <div className="flex gap-10">
                <p className="text-[0.75rem] font-medium leading-5 text-[#526484]">
                  4305
                </p>
                <p className="flex items-center text-[0.875rem] font-normal leading-4 text-[#8091A7]">
                  4.29% <HiArrowUp size={14} />
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart width={180} height={60} data={rechart_data}>
                <defs>
                  <linearGradient id="colorOS" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15F475" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#15F475" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="uv"
                  stroke="#15F475"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorOS)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
