import { SparklineComponent } from "@syncfusion/ej2-react-charts";
import { useRef } from "react";

const data = [
  { x: 1900, y: 3.0 },
  { x: 1920, y: 4.0 },
  { x: 1940, y: 2.5 },
  { x: 1960, y: 4.8 },
  { x: 1980, y: 4.4 },
  { x: 2000, y: 3.2 },
  { x: 2005, y: 3.5 },
  { x: 2010, y: 2.3 },
  { x: 2012, y: 1.1 },
];

export default function ResourceCharts() {
  const sc1 = useRef();
  const sc2 = useRef();
  const sc3 = useRef();
  const sc4 = useRef();
  const sc5 = useRef();
  const sc6 = useRef();

  return (
    <div className="grid grid-cols-6 gap-8">
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Active Users
        </p>
        <p className="font-semibold leading-5 text-white/70">
          <span className="text-[1.5rem] font-bold leading-6 text-white">
            27
          </span>
          /80
        </p>
        <SparklineComponent
          id="sc1"
          ref={sc1}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Questions Query
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">3,298</p>
        <SparklineComponent
          id="sc2"
          ref={sc2}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Av. Session Length
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">2m 34s</p>
        <SparklineComponent
          id="sc3"
          ref={sc3}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Starting Knowledge
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">64%</p>
        <SparklineComponent
          id="sc4"
          ref={sc4}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Current Knowledge
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">86%</p>
        <SparklineComponent
          id="sc5"
          ref={sc5}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
      {/*  */}
      <div className="flex aspect-square flex-col gap-5 rounded-2xl bg-t02-blue1 p-4">
        <p className="text-[0.75rem] font-medium leading-4 text-white/70">
          Knowledge Gain
        </p>
        <p className="text-[1.5rem] font-bold leading-6 text-white">+34%</p>
        <SparklineComponent
          id="sc6"
          ref={sc6}
          dataSource={data}
          xName="x"
          yName="y"
          valueType="Category"
          type="Area"
          fill="rgba(0, 98, 255, 0.5)"
          border={{
            color: "#1B59F8",
            width: 1.85,
          }}
          height="30px"
        ></SparklineComponent>
      </div>
    </div>
  );
}
