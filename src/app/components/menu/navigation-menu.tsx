"use client";

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
  { menu: "Arts", path: "/category/arts" },
  { menu: "Health", path: "/category/health" },
  { menu: "Business", path: "/category/business" },
  { menu: "Politics", path: "/category/politics" },
  { menu: "Technology", path: "/category/technology" },
  { menu: "Food", path: "/category/food" },
  { menu: "World", path: "/category/world" },
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
