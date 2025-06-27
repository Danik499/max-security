import CompaniesList from "@/components/CompaniesList";
import PageHeader from "@/components/PageHeader";

export default function CompaniesPage() {
  return (
    <div>
      <PageHeader />
      <div className="flex flex-col gap-4 mt-8 px-[40px]">
        <CompaniesList />
      </div>
    </div>
  );
}
