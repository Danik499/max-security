"use client";
import Button from "@/components/Button";
import { useGetCountriesQuery } from "@/lib/features/countries";

export default function MembershipSettingsPage() {
  const { data } = useGetCountriesQuery();
  console.log(data);
  return (
    <div className="flex-1 flex flex-col px-[40px]">
      <div className="flex flex-col gap-4 mt-6 ">
        <div className="flex items-center justify-between">
          <div className="text-[28px] font-bold">Plans</div>
          <div>
            <Button title="Save membership plan" onClick={() => {}} />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col mb-[32px] bg-[var(--warm-grey-50)] rounded-[12px]"
        style={{ height: "500px" }}
      >
        <div className="bg-white rounded-[8px] border border-[var(--warm-grey-100)] m-[4px]">
          <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-b-[var(--warm-gray-100)]">
            <div className="text-base">Regions</div>
            <div className="text-sm underline">Select all</div>
          </div>
        </div>
      </div>

      <div className="h-[500px] grid grid-cols-5 gap-4">
        <div>asdasds</div>
        {["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"].map((header, index) => (
          <div
            key={index}
            className="flex flex-col border rounded overflow-hidden"
          >
            <div className="bg-gray-100 p-2 font-semibold border-b text-center">
              {header}
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-2 space-y-1">
                {Array.from({ length: 50 }).map((_, i) => (
                  <p key={i}>Row {i + 1}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
