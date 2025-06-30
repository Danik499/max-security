import { redirect } from "next/navigation";

interface PageProps {
  params: { companyId: string };
}

export default function CompanyPage({ params }: PageProps) {
  redirect(`/companies/${params.companyId}/general-settings`);
}
