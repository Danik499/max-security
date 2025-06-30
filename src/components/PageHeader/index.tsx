"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ArrowLeft from "@/assets/arrow-left.svg";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils";
import { tabs } from "@/components/companies/CompanySettingsTabs";

type BreadcrumbItem = {
  href: string;
  label: string;
  active: boolean;
};

export default function PageHeader() {
  const router = useRouter();

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems: BreadcrumbItem[] = [];

  const tabHrefs = tabs.map((tab) => tab.href.substring(1));

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = capitalizeFirstLetter(segment.replace(/-/g, " "));

    if (tabHrefs.includes(segment)) {
      return;
    }

    const isCompanyId =
      index > 0 &&
      pathSegments[index - 1] === "companies" &&
      /^\d+$/.test(segment);

    const finalHref = isCompanyId ? href + tabs[0].href : href;

    const pathWithoutTabs =
      "/" + pathSegments.filter((seg) => !tabHrefs.includes(seg)).join("/");
    const active = href === pathWithoutTabs;

    breadcrumbItems.push({ href: finalHref, label, active });
  });

  return (
    <div className="flex items-center w-full bg-[var(--warm-grey-50)] h-[64px] px-[34px]">
      <button onClick={router.back} className="p-1">
        <Image src={ArrowLeft} alt="arrow left" className="w-[20px] h-[20px]" />
      </button>
      <ol className="flex">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {item.active ? (
              <span className="text-sm">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-[var(--warm-grey-500)] hover:text-gray-700 text-sm"
              >
                {item.label}
              </Link>
            )}
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
