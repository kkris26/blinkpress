import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  interface Menu {
    path: string;
    menu: string;
  }
  const menus: Menu[] = [
    { menu: "Home", path: "/" },
    { menu: "Food", path: "/food" },
    { menu: "Arts", path: "/arts" },
    { menu: "fashion", path: "/fashion" },
    { menu: "Health", path: "/health" },
  ];
  return (
    <nav className="w-full items-center px-10  flex justify-between p-2 border-b shadow">
      <div className="w-60">
        <h1 className="text-xl">Blink<span className="font-bold">Press</span></h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {menus.map((m, i) => (
            <NavigationMenuItem key={i} className="hover:underline ">
              <NavigationMenuLink className="hover:bg-transparent">
                <Link href={m.path}>{m.menu}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-60 items-center gap-2">
        <Input type="text" placeholder="Search Article" />
        <Button
          type="submit"
          className="cursor-pointer"
          variant="outline"
          size="icon"
        >
          <Search />
        </Button>
      </div>
    </nav>
  );
}
