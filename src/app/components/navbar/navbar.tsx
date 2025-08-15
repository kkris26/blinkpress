import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import Link from "next/link";
import SearchForm from "../form/search-form";
export default function Navbar() {
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
  return (
    <nav className="w-full items-center px-10  flex justify-between p-2 border-b shadow">
      <div className="w-60">
        <h1 className="text-xl">
          Blink<span className="font-bold">Press</span>
        </h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {menus.map((m, i) => (
            <NavigationMenuItem key={i} className="hover:underline ">
              <Link href={m.path} className="text-sm">
                {m.menu}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-60">
        <SearchForm />
      </div>
    </nav>
  );
}
