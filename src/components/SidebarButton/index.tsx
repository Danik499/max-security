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
      className={`flex px-[14px] py-[12px] gap-[6px] items-center ${
        isActive
          ? "border border-[#FFFFFF14] rounded-lg grey-bg text-white"
          : "text-gray-400"
      }`}
    >
      {icon && icon()}
      {label}
    </button>
  );
}
