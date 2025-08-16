"use client";
import { Suspense } from "react";

import LoadingNews from "../loading";
import SearchContent from "./search-content";


export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingNews type="search" />}>
      <SearchContent />
    </Suspense>
  );
}
