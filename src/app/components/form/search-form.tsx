"use client";

import fetchNews from "@/app/search/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const q: string | null = searchParams.get("q");
  const [query, setQuery] = useState<string | null>(q);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?page=1&q=${query}`);
    }
  };

  useEffect(() => {
    if (path === "/search") {
      return;
    }
    setQuery("");
  }, [path]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        required
        type="text"
        id="search"
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Article"
        className="text-xs sm:text-sm p-2"
      />
      <Button
        type="submit"
        className="cursor-pointer"
        variant="outline"
        size="icon"
      >
        <Search />
      </Button>
    </form>
  );
}
