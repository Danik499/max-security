import Checkbox from "@/components/common/Checkbox";
import { useFormContext, Controller } from "react-hook-form";

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
  const { control, setValue } = useFormContext();

  return (
    <div className="bg-white rounded-[8px] border border-[var(--warm-grey-100)] m-[4px]">
      <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-b-[var(--warm-grey-100)]">
        <div className="text-base">Types</div>
        <div
          className="text-sm underline cursor-pointer"
          onClick={() => {
            setValue("activeTypes", types);
          }}
        >
          Select all
        </div>
      </div>
      <div className="flex flex-col overflow-hidden border-r border-[var(--warm-grey-100)] min-w-[150px] flex-1">
        <div className="overflow-y-auto h-[400px] pt-1">
          {types.map((type, index) => (
            <div
              key={index}
              className="flex items-center gap-[10px] px-[16px] py-[5px] text-sm"
            >
              <Controller
                control={control}
                name="activeTypes"
                render={({ field: { value, onChange } }) => {
                  const checked = !!value.find(
                    (t: typeof type) => t.name === type.name
                  );

                  const handleChange = (isChecked: boolean) => {
                    if (isChecked) {
                      onChange([...value, type]);
                    } else {
                      onChange(
                        value.filter((t: typeof type) => t.name !== type.name)
                      );
                    }
                  };

                  return <Checkbox checked={checked} onChange={handleChange} />;
                }}
              />
              <span className="font-medium text-[var(--warm-grey-700)]">
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
