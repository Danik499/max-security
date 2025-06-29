"use client";

import { useGetCompaniesQuery } from "@/lib/features/companies";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

export default function CompaniesList() {
  const router = useRouter();

  const { data, isLoading } = useGetCompaniesQuery();

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((company) => (
          <div
            key={company.id}
            onClick={() =>
              router.push(`/companies/${company.id}/general-settings`)
            }
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{company.name}</h2>
            <p className="text-gray-600">Details about {company.name}...</p>
          </div>
        ))}
      </div>
    </>
  );
}
