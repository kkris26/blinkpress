"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Menu {
  path: string;
  menu: string;
}
const menus: Menu[] = [
  { menu: "Home", path: "/" },
  { menu: "Food", path: "/category/food" },
  { menu: "Arts", path: "/category/arts" },
  { menu: "Fashion", path: "/category/fashion" },
  { menu: "Health", path: "/category/health" },
];

export default function MenuNav({
  className,
  setIsOpen,
}: {
  className?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-4 sm:gap-8 flex sm:flex-row flex-col items-start">
        {menus.map((m, i) => (
          <NavigationMenuItem
            key={i}
            className="hover:underline "
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            <Link href={m.path} className="text-lg font-light sm:text-sm">
              {m.menu}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
