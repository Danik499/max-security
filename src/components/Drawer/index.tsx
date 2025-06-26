"use client";

import { useEffect, useState } from "react";
import SidebarButton from "../SidebarButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CompaniesIcon from "@/assets/companies.svg";
import Max from "@/assets/max.svg";
import ItsAToughWorld from "@/assets/its-a-tough-world.svg";
import Logout from "@/assets/logout.svg";
import User from "@/assets/user.svg";
import Avatar from "../Avatar";

const navItems = [
  { name: "Companies", href: "/companies", icon: CompaniesIcon },
  { name: "Reports", href: "/reports" },
  { name: "Membership", href: "/membership" },
  { name: "Media", href: "/media" },
  { name: "Cities", href: "/cities" },
];

interface Props {
  children: React.ReactNode;
}

export default function ResponsiveDrawer({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sidebarBase =
    "flex bg-black text-white md:static md:translate-x-0 transition-transform ease-in-out duration-200 z-40 w-[300px] inset-y-0 left-0";

  const sidebarMobile = isOpen
    ? "translate-x-0 fixed"
    : "-translate-x-full fixed";

  const sidebarClasses = `${sidebarBase} ${
    isMounted ? sidebarMobile : "fixed -translate-x-full"
  } md:transform-none`;

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${sidebarClasses} h-screen overflow-y-auto pb-[32px] pt-[14px] px-[24px]`}
      >
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex gap-3 items-center border-b-1 border-b-[#FFFFFF30] pb-4">
              <Image src={Max} alt="max" />
              <Image src={ItsAToughWorld} alt="It's a tough world" />
            </div>
            <nav className="mt-8 flex gap-[6px] flex-col">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <SidebarButton
                    key={item.name}
                    isActive={isActive}
                    label={item.name}
                    href={item.href}
                    icon={
                      item.icon
                        ? () => <Image src={item.icon} alt="companies icon" />
                        : () => (
                            <div className="w-4 h-4 rounded-xl bg-[#FFFFFF80]" />
                          )
                    }
                  />
                );
              })}
            </nav>
          </div>
          <div className="border-t-1 border-[#FFFFFF30]">
            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center gap-3">
                <Avatar image={() => <Image src={User} alt="user" />} />
              </div>
              <div>
                <div className="text-sm text-gray-400">Hello,</div>
                <div className="text-white font-medium">Johnny Appleseed</div>
              </div>
            </div>
            <button className="w-full flex items-center gap-2 justify-start grey-bg grey-border text-grey rounded-[8px] px-4 py-3 text-sm font-medium">
              <Image src={Logout} alt="logout" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="p-4 bg-gray-100 shadow md:hidden">
          <button
            className="text-gray-800"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
