import { HiArrowLeft, HiArrowRight, HiOutlineClock } from "react-icons/hi";
import { CheckboxIcon } from "../../assets/sidebarIcons";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { useRef } from "react";

const progressbar_animation = {
  enable: true,
  duration: 2000,
  delay: 0,
};

export default function ProposalTips() {
  const linearOne = useRef(null);

  return (
    <div>
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-[1.5rem] leading-10">Proposal Writing Tips</h3>
        <div className="flex items-center gap-5 text-[#71ACFF]">
          <HiArrowLeft size={24} />
          <HiArrowRight size={24} />
        </div>
      </header>
      <section className="relative rounded-2xl bg-t02-blue1 py-5">
        {/* info */}
        <div className="mb-1.5 flex gap-4 px-5">
          <div className="size-10 bg-orange-400"></div>
          <div>
            <p className="text-[1rem] font-bold leading-5">
              Sample Sub Heading
            </p>
            <p className="text-[13px] leading-5 text-white/50">Fitness Next</p>
          </div>
        </div>
        {/* info-end */}
        <p className="px-5 text-[0.875rem] leading-6">
          Develop the website using WordPree for the Fitness Next client.
        </p>
        {/* bottom row */}
        <div className="mt-3 w-3/4">
          {/* progressbar */}
          <div className="px-3">
            <div className="mx-2 flex justify-between">
              <p className="flex gap-1.5 text-[0.875rem] leading-6 text-[#8091A7]">
                <CheckboxIcon />
                <span>Proposal Tasks</span>
              </p>
              <p className="text-[0.875rem] font-medium leading-6 text-[#56759e]">
                65.5%
              </p>
            </div>
            <ProgressBarComponent
              id="proposal_tasks"
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
          {/* progressbar-end */}
          {/*  */}
          <div className="flex items-center justify-between px-5">
            <div className="flex gap-1.5">
              <div className="size-8 rounded-full bg-blue-500"></div>
              <div className="size-8 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white px-1.5 py-1 text-[11px] font-medium text-[#002743]">
              <HiOutlineClock size={16} />
              <span>16 Days Left</span>
            </div>
          </div>
          {/*  */}
        </div>
        {/* bottom row-end */}
        <div className="absolute bottom-0 right-0">
          <img className="h-full w-[124px]" src="./quick_tips_icon.png" />
        </div>
      </section>
    </div>
  );
}
