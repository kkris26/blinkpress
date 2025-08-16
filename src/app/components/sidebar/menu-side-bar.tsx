"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import MenuNav from "../menu/navigation-menu";

export default function MenuSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <MenuIcon className="sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="w-70">
        <SheetHeader>
          <SheetTitle className="text-2xl">Category</SheetTitle>
          <MenuNav setIsOpen={setIsOpen} className="mt-4" />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
