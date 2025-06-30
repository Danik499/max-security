"use client";

import { useRouter } from "next/navigation";

interface Props {
  icon: () => React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
}

export default function SidebarButton({ icon, label, isActive, href }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className={`flex text-sm px-[14px] py-[12px] gap-[6px] items-center cursor-pointer ${
        isActive
          ? "border border-[var(--grey-300)] rounded-lg text-white bg-[var(--grey-100)]"
          : "text-gray-400 border border-transparent rounded-lg hover:border-[var(--grey-300)]"
      }`}
    >
      {icon && icon()}
      {label}
    </button>
  );
}
