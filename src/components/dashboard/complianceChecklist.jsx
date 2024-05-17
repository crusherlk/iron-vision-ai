import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { CheckboxIcon } from "../../assets/sidebarIcons";
import { useRef } from "react";

const progressbar_animation = {
  enable: true,
  duration: 2000,
  delay: 0,
};

export default function ComplianceChecklist() {
  const linearOne = useRef(null);
  const linearTwo = useRef(null);
  const linearThree = useRef(null);
  const linearFour = useRef(null);

  return (
    <div>
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-[1.5rem] leading-10">Compliance Checklist</h3>
        <p className="text-[0.875rem] font-bold text-[#71ACFF]">View All</p>
      </header>
      <section className="flex flex-col gap-2.5 rounded-2xl bg-t02-blue1 p-5">
        {/* progressbar-items */}
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
        {/*  progressbar-items-end */}
      </section>
    </div>
  );
}
