import { MdDownload } from "react-icons/md";
import Proposals from "../../components/pastProposals/proposals";

export default function PastProposals() {
  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Solicitation Form</h2>
        <button className="transparent-button">
          <MdDownload size={20} />
          <span>Download</span>
        </button>
      </div>
      {/* header */}
      <Proposals />
    </>
  );
}
