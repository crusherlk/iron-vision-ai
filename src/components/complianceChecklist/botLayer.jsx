import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { CheckboxIcon } from "../../assets/sidebarIcons";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { useRef } from "react";

const pie_data1 = [
  { x: "Chrome", y: 61.3, text: "Chrome: 61.3%" },
  { x: "Safari", y: 24.6, text: "Safari: 24.6%" },
  { x: "Edge", y: 5.0, text: "Edge: 5.0%" },
  { x: "Samsung Internet", y: 2.7, text: "Samsung Internet: 2.7%" },
  { x: "Firefox", y: 2.6, text: "Firefox: 2.6%" },
  { x: "Others", y: 3.6, text: "Others: 3.6%" },
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
        <div className="flex aspect-square flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
          <AccumulationChartComponent id="pie_chart1">
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                dataSource={pie_data1}
                xName="x"
                yName="y"
                innerRadius="40%"
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
      {/* Environmental Protection */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Environmental Protection</h3>
        <div className="flex aspect-square flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
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
              id="ethical_conduct"
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
              id="qa"
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
              id="subcontracting_plans"
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
              id="contact_changes"
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
        <div className="flex aspect-square flex-col gap-3 rounded-2xl bg-t02-blue1 p-5">
          <p>area chart</p>
        </div>
      </div>
    </div>
  );
}
