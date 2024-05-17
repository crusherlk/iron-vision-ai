import ResourceCard from "./resourceCard";

export default function ResourceStats() {
  return (
    <div className="grid grid-cols-3 gap-11">
      {/* Resources By Usage */}
      <div className="col-span-2 flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Resources By Usage</h3>
        <div className="h-full rounded-2xl bg-t02-blue1 p-5">
          <p>resource chart</p>
        </div>
      </div>
      {/* Environmental Protection */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.5rem] leading-10">Available Resources</h3>
        <div className="flex flex-col gap-2 rounded-2xl bg-t02-blue1 p-5">
          {/* resource cards */}
          {Array.from({ length: 4 }, (_, i) => (
            <ResourceCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
