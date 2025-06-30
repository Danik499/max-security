"use client";
import Button from "@/components/common/Button";
import { FormProvider, useForm } from "react-hook-form";
import CountriesTable from "../CountriesTable";
import TypesTable from "../TypesTable";
import { useGetCountriesQuery } from "@/lib/features/countries";
import {
  useGetCompanyByIdQuery,
  useSaveMembershipPlanMutation,
} from "@/lib/features/companies";
import { Country } from "@/types";
import { useEffect } from "react";

type MembershipSettingsForm = {
  activeCountries: Country[];
  activeTypes: { name: string }[];
};

export default function MembershipPlanForm() {
  const { data, isLoading } = useGetCountriesQuery();
  const { data: company } = useGetCompanyByIdQuery("mock-company-id");
  const [saveMembershipPlan] = useSaveMembershipPlanMutation();

  const methods = useForm<MembershipSettingsForm>({
    defaultValues: {
      activeCountries: [],
      activeTypes: [],
    },
  });

  useEffect(() => {
    if (company) {
      methods.reset({
        activeCountries: company.activeCountries || [],
        activeTypes: [],
      });
    }
  }, [company, methods]);

  const onSubmit = (data: MembershipSettingsForm) => {
    console.log("Form submitted with data:", data);
    saveMembershipPlan({
      companyId: "mock-company-id",
      activeCountries: data.activeCountries,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4 mt-6 ">
        <div className="flex items-center justify-between">
          <div className="text-[28px] font-bold">Plans</div>
          <div>
            <Button
              title="Save membership plan"
              onClick={methods.handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>

      <div className="mb-[32px] bg-[var(--warm-grey-50)] rounded-[12px] mt-[24px] flex">
        <div className="flex-1 min-w-0">
          <CountriesTable data={data || []} />
        </div>
        <div className="flex-shrink-0 w-[218px]">
          <TypesTable />
        </div>
      </div>
    </FormProvider>
  );
}
