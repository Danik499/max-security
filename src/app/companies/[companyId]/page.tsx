import CompanySettingsTabs from "@/components/CompanySettingsTabs";
import PageHeader from "@/components/PageHeader";

interface Props {
  params: Promise<{
    companyId: string;
  }>;
}

export default async function CompanyPage(props: Props) {
  const params = await props.params;

  return (
    <div>
      <PageHeader breadcrumbs={[{ label: "Companies", href: "/companies" }]} />
      <div className="flex flex-col gap-4 mt-6 px-[40px]">
        <CompanySettingsTabs />

        <h1 className="text-2xl font-bold mb-4">
          Company Details {params.companyId}
        </h1>
        <p className="text-gray-600">
          This is a placeholder for company details.
        </p>
      </div>
    </div>
  );
}
