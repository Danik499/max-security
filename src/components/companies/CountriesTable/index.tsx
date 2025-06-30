"use client";
import Checkbox from "@/components/common/Checkbox";
import { Region, Country } from "@/types";
import { useFormContext, Controller } from "react-hook-form";

interface Props {
  data: Region[];
}

export default function CountriesTable({ data }: Props) {
  const { control, setValue, watch } = useFormContext();
  const activeCountries = watch("activeCountries") || [];

  return (
    <div className="bg-white rounded-[8px] border border-[var(--warm-grey-100)] m-[4px] flex flex-col min-w-0">
      <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-b-[var(--warm-grey-100)] flex-shrink-0">
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
      <div className="overflow-x-auto flex-1">
        <div className={`h-[400px] flex gap-4 mx-[24px] min-w-[800px]`}>
          {data?.map((region, index) => (
            <div
              key={index}
              className={`flex flex-col overflow-hidden my-[8px] min-w-[150px] flex-1 ${
                index < data.length - 1
                  ? "border-r border-[var(--warm-grey-100)]"
                  : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex py-[5px] text-sm gap-[10px] items-center flex-shrink-0">
                  <Checkbox
                    checked={region.countries.every((country) =>
                      activeCountries?.find(
                        (c: Country) => c.name === country.name
                      )
                    )}
                    onChange={(isChecked) => {
                      if (isChecked) {
                        setValue("activeCountries", [
                          ...activeCountries,
                          ...region.countries,
                        ]);
                      } else {
                        setValue(
                          "activeCountries",
                          activeCountries.filter(
                            (c: Country) =>
                              !region.countries.find((rc) => rc.name === c.name)
                          )
                        );
                      }
                    }}
                  />
                  <span className="font-semibold">{region.name}</span>
                </div>
                <div className="overflow-y-auto flex-1">
                  {region.countries.map((country, countryIndex) => (
                    <div
                      key={countryIndex}
                      className="flex items-center gap-[10px] py-[5px] text-sm"
                    >
                      <Controller
                        control={control}
                        name="activeCountries"
                        render={({ field: { value, onChange } }) => {
                          const checked = !!value.find(
                            (c: Country) => c.name === country.name
                          );

                          const handleChange = (isChecked: boolean) => {
                            if (isChecked) {
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
                            <Checkbox
                              checked={checked}
                              onChange={handleChange}
                            />
                          );
                        }}
                      />
                      <span className="font-medium text-[var(--warm-grey-700)]">
                        {country.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
