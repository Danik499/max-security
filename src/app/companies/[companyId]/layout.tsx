import CompanySettingsTabs from "@/components/companies/CompanySettingsTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1">
      <CompanySettingsTabs />
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
