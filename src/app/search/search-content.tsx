"use client";
import { useRouter, useSearchParams } from "next/navigation";
import fetchNews from "./action";
import { useEffect, useState } from "react";
import { NewsSearch } from "@/types/global";
import HeadingNews from "../components/heading/news-title";
import NewsWrapper from "../components/wrapper/news-wrapper";
import SearchNewsCard from "../components/card/search-news-card";
import { Button } from "@/components/ui/button";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query: string | null = searchParams.get("q");
  const page: string | null = searchParams.get("page");
  const [news, setNews] = useState<NewsSearch[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      const data = await fetchNews(query, page);
      setNews(data);
    };
    getData();
  }, [query, page]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <HeadingNews className="text-sm">
          Showing news results for &apos;{query}&apos;
        </HeadingNews>
        <div className="flex gap-0 sm:gap-2 items-center">
          <Button
            className="cursor-pointer text-sm"
            disabled={Number(page) === 1}
            onClick={() => router.push(`?page=${Number(page) - 1}&q=${query}`)}
            variant="link"
            size={"sm"}
          >
            Prev
          </Button>
          <p className="text-sm">{page}</p>
          <Button
            className="cursor-pointer text-sm"
            disabled={Number(page) >= 100}
            onClick={() => router.push(`?page=${Number(page) + 1}&q=${query}`)}
            variant="link"
            size={"sm"}
          >
            Next
          </Button>
        </div>
      </div>

      <NewsWrapper>
        {news.length > 0 &&
          news.map((n, i) => <SearchNewsCard key={i} news={n} />)}
      </NewsWrapper>
    </div>
  );
}

export default SearchContent;
