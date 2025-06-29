"use client";
import { Region, Country } from "@/types";
import { useFormContext, Controller } from "react-hook-form";

interface Props {
  data: Region[];
}

export default function CountriesTable({ data }: Props) {
  const { control, setValue, getValues } = useFormContext();

  return (
    <div className="bg-white rounded-[8px] border border-[var(--warm-grey-100)] m-[4px]">
      <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-b-[var(--warm-grey-100)]">
        <div className="text-base">Regions</div>
        <div
          className="text-sm underline cursor-pointer"
          onClick={() => {
            const allCountries = data?.flatMap((region) => region.countries);
            if (allCountries) {
              setValue("activeCountries", allCountries);
            }
          }}
        >
          Select all
        </div>
      </div>
      <div className={`h-[500px] grid grid-cols-5 gap-4 mx-[24px]`}>
        {data?.map((region, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden border-r border-[var(--warm-grey-100)] my-[8px]"
          >
            <div className="overflow-y-auto">
              <div className="flex px-[16px] py-[8px] text-sm gap-[10px] items-center">
                <input
                  type="checkbox"
                  onChange={(state) => {
                    const isChecked = state.target.checked;
                    if (isChecked) {
                      setValue("activeCountries", [
                        ...getValues("activeCountries"),
                        ...region.countries,
                      ]);
                    } else {
                      setValue(
                        "activeCountries",
                        getValues("activeCountries").filter(
                          (c: Country) =>
                            !region.countries.find((rc) => rc.name === c.name)
                        )
                      );
                    }
                  }}
                />
                <span className="font-semibold">{region.name}</span>
              </div>
              {region.countries.map((country, countryIndex) => (
                <div
                  key={countryIndex}
                  className="flex items-center gap-[10px] px-[16px] py-[8px] text-sm"
                >
                  <Controller
                    control={control}
                    name="activeCountries"
                    render={({ field: { value, onChange } }) => {
                      const checked = !!value.find(
                        (c: Country) => c.name === country.name
                      );

                      const handleChange = (
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (e.target.checked) {
                          onChange([...value, country]);
                        } else {
                          onChange(
                            value.filter(
                              (c: Country) => c.name !== country.name
                            )
                          );
                        }
                      };

                      return (
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleChange}
                        />
                      );
                    }}
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
