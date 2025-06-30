import CompaniesList from "@/components/companies/CompaniesList";

export default function CompaniesPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 px-[40px]">
        <CompaniesList />
      </div>
    </div>
  );
}
