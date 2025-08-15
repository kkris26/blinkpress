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
import Logo from "../logo/logo";
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
    <nav className=" w-full bg-neutral-950/80 fixed top-0 left-0 z-2 backdrop-blur-sm items-center flex justify-center p-2 border-b shadow">
      <div className="max-w-7xl w-full flex justify-between items-center px-5">
        <div className="w-60">
          <Logo />
        </div>
        <NavigationMenu className="sm:block hidden">
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
      </div>
    </nav>
  );
}
