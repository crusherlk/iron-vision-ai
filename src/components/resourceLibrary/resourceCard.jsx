export default function ResourceCard() {
  return (
    <div className="flex gap-2.5 rounded-lg bg-white p-2.5">
      <div className="size-10 bg-green-400"></div>
      <div className="flex flex-col gap-1">
        <p className="font-medium leading-[1.125rem] text-[#333]">
          Example Resource
        </p>
        <p className="text-[0.75rem] leading-4 text-[#8F8F8F]">
          Spotify, Singapore - 2 Days ago
        </p>
      </div>
    </div>
  );
}
