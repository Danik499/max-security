"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/assets/arrow-left.svg";

interface Props {
  backHref?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ backHref, breadcrumbs }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <div className="flex items-center w-full bg-[var(--grey200)] h-[64px] px-[40px]">
      <button onClick={handleBack} className="p-1">
        <Image src={ArrowLeft} alt="arrow left" className="w-[30px] h-[30px]" />
      </button>

      {breadcrumbs?.map((crumb, idx) => (
        <span key={idx} className="flex items-center">
          {idx > 0 && <span className="mx-1 text-gray-400">/</span>}
          {crumb.href ? (
            <a href={crumb.href} className="hover:underline text-gray-600">
              {crumb.label}
            </a>
          ) : (
            <span className="font-semibold text-black">{crumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
