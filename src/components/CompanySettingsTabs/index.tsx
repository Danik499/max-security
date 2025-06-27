"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanySettingsTabs() {
  const pathname = usePathname();

  const tabs = [
    { label: "General settings", href: "/general-settings" },
    { label: "Membership settings", href: "/settings" },
    { label: "Users assignment", href: "/settings/users" },
    { label: "Cities management", href: "/settings/cities" },
    { label: "API management", href: "/settings/api" },
    { label: "Assets management", href: "/settings/assets" },
  ];

  return (
    <div className="flex border-b border-neutral-200 overflow-scroll scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = pathname.includes(tab.href);
        return (
          <Link
            key={tab.href}
            href={`${pathname}/${tab.href}`}
            className={`px-4 py-3 text-sm font-medium ${
              isActive
                ? "text-black border-b-2 border-orange-500"
                : "text-neutral-400"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
