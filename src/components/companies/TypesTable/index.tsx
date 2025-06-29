const types = [
  {
    name: "Alerts",
  },
  {
    name: "Analytics",
  },
  {
    name: "Elastic",
  },
  {
    name: "Micro",
  },
  {
    name: "Monthly",
  },
  {
    name: "Daily",
  },
];

export default function TypesTable() {
  return (
    <div className="bg-white rounded-[8px] border border-[var(--warm-grey-100)] m-[4px]">
      <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-b-[var(--warm-grey-100)]">
        <div className="text-base">Types</div>
        <div className="text-sm underline">Select all</div>
      </div>
      {types.map((type, index) => (
        <div
          key={index}
          className="flex items-center gap-[10px] px-[16px] py-[8px] text-sm"
        >
          <input type="checkbox" />
          <span>{type.name}</span>
        </div>
      ))}
    </div>
  );
}
