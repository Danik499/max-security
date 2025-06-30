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
import { toast, ToastContainer } from "react-toastify";
import Loader from "@/components/common/Loader";
import { useParams } from "next/navigation";

type MembershipSettingsForm = {
  activeCountries: Country[];
  activeTypes: { name: string }[];
};

export default function MembershipPlanForm() {
  const params = useParams();
  const companyId = params.companyId as string;

  const { data, isLoading: countriesLoading } = useGetCountriesQuery();
  const { data: company, isLoading: companyLoading } =
    useGetCompanyByIdQuery(companyId);
  const [saveMembershipPlan, { isSuccess, isLoading: isSaving }] =
    useSaveMembershipPlanMutation();

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

  useEffect(() => {
    if (isSuccess) {
      toast.success("Settings saved successfully!", {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }, [isSuccess]);

  const onSubmit = (data: MembershipSettingsForm) => {
    console.log("Form submitted with data:", data);
    saveMembershipPlan({
      companyId: companyId,
      activeCountries: data.activeCountries,
    });
  };

  if (countriesLoading || companyLoading) {
    return <Loader />;
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4 mt-6 ">
        <div className="flex items-center justify-between">
          <div className="text-[28px] font-bold">Plans</div>
          <div>
            <Button
              disabled={isSaving}
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
      <ToastContainer />
    </FormProvider>
  );
}
