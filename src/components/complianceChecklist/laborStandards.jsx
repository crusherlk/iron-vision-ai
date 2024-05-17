import { FiArrowDownLeft } from "react-icons/fi";

// const data1 = [
//   { x: "GBR", y: 27, toolTipMappingName: "Great Britain" },
//   { x: "CHN", y: 26, toolTipMappingName: "China" },
//   { x: "AUS", y: 8, toolTipMappingName: "Australia" },
//   { x: "RUS", y: 19, toolTipMappingName: "Russia" },
//   { x: "GER", y: 17, toolTipMappingName: "Germany" },
//   { x: "UA", y: 2, toolTipMappingName: "Ukraine" },
//   { x: "ES", y: 7, toolTipMappingName: "Spain" },
//   { x: "UZB", y: 4, toolTipMappingName: "Uzbekistan" },
//   { x: "JPN", y: 12, toolTipMappingName: "Japan" },
//   { x: "NL", y: 8, toolTipMappingName: "NetherLand" },
//   { x: "USA", y: 46, toolTipMappingName: "United States" },
// ];
// const data2 = [
//   { x: "GBR", y: 23, toolTipMappingName: "Great Britain" },
//   { x: "CHN", y: 18, toolTipMappingName: "China" },
//   { x: "AUS", y: 11, toolTipMappingName: "Australia" },
//   { x: "RUS", y: 17, toolTipMappingName: "Russia" },
//   { x: "GER", y: 10, toolTipMappingName: "Germany" },
//   { x: "UA", y: 5, toolTipMappingName: "Ukraine" },
//   { x: "ES", y: 4, toolTipMappingName: "Spain" },
//   { x: "UZB", y: 2, toolTipMappingName: "Uzbekistan" },
//   { x: "JPN", y: 8, toolTipMappingName: "Japan" },
//   { x: "NL", y: 7, toolTipMappingName: "NetherLand" },
//   { x: "USA", y: 37, toolTipMappingName: "United States" },
// ];

export default function LaborStandards() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[1.5rem] leading-10">Labor Standards</h3>
      <div className="flex aspect-[3/1] gap-4 rounded-2xl bg-t02-blue1 p-5">
        <div className="flex-1">
          {/* <ChartComponent id="labor_bar_chart">
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          </ChartComponent> */} 
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
