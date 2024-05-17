/* eslint-disable react/prop-types */
import { ClipboardCopyIcon } from "../../assets/sidebarIcons";

export default function SolicitationComponent({ title, info }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="leading-5">{title}:</p>
        <div className="flex items-start justify-between rounded-lg bg-t02-blue1 p-5">
          <div className="w-[85%]">{info}</div>
          <ClipboardCopyIcon />
        </div>
      </div>
    </>
  );
}
