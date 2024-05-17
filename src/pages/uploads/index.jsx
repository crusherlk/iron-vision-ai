import { useState } from "react";
import Dropzone from "react-dropzone";
import { MdDownload } from "react-icons/md";
import RecentUploads from "../../components/uploads/recentUploads";

export default function Uploads() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <>
      {/* header */}
      <div className="mb-12 flex flex-row items-center justify-between gap-3">
        <h2 className="text-page-title font-bold">Uploads</h2>
        <button className="transparent-button">
          <MdDownload size={20} />
          <span>Download</span>
        </button>
      </div>
      {/* header */}
      <div className="mb-10 rounded-2xl bg-t02-blue1 p-4">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
                ? "reject"
                : "";

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass}`,
                })}
              >
                <input {...getInputProps()} />
                <p>Drag & Drop or Click to select files</p>
                <button>Select Files</button>
              </div>
            );
          }}
        </Dropzone>
      </div>
      <RecentUploads />
    </>
  );
}
