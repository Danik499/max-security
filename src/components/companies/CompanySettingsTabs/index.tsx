"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanySettingsTabs() {
  const pathname = usePathname();

  const tabs = [
    { label: "General settings", href: "/general-settings" },
    { label: "Membership settings", href: "/membership-settings" },
    { label: "Users assignment", href: "/users-assignment" },
    { label: "Cities management", href: "/cities-management" },
    { label: "API management", href: "/api-management" },
    { label: "Assets management", href: "/assets-management" },
  ];

  const handleTabClick = (href: string) => {
    const currentPath = pathname.split("/");
    currentPath.pop();
    currentPath.push(href);

    const newPath = currentPath.join("/");
    return newPath;
  };

  return (
    <div className="flex border-b border-neutral-200 overflow-scroll scrollbar-hide mx-[40px] mt-[32px]">
      {tabs.map((tab) => {
        const isActive = pathname.includes(tab.href);
        return (
          <Link
            key={tab.href}
            href={handleTabClick(tab.href)}
            className={`px-4 py-3 text-base font-medium ${
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
