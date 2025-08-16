"use client";
import { useRouter, useSearchParams } from "next/navigation";
import fetchNews from "./action";
import { useEffect, useState } from "react";
import { NewsSearch } from "@/types/global";
import HeadingNews from "../components/heading/news-title";
import NewsWrapper from "../components/wrapper/news-wrapper";
import SearchNewsCard from "../components/card/search-news-card";
import { Button } from "@/components/ui/button";
import LoadingNews from "../loading";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query: string | null = searchParams.get("q");
  const page: string | null = searchParams.get("page");
  const [news, setNews] = useState<NewsSearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async (query: string | null, page: string | null) => {
    try {
      setIsLoading(true);
      const news = await fetchNews(query, page);
      setNews(news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getData(query, page);
    }
  }, [query, page]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <HeadingNews >Showing news results for "{query}"</HeadingNews>
        <div className="flex gap-2 items-center">
          <Button
            className="cursor-pointer"
            disabled={Number(page) === 1 || isLoading}
            onClick={() => router.push(`?page=${Number(page) - 1}&q=${query}`)}
            variant="link"
          >
            Prev
          </Button>
          <p>{page}</p>
          <Button
            className="cursor-pointer"
            disabled={Number(page) >= 100 || isLoading}
            onClick={() => router.push(`?page=${Number(page) + 1}&q=${query}`)}
            variant="link"
          >
            Next
          </Button>
        </div>
      </div>
      {isLoading ? (
        <LoadingNews type="search" />
      ) : (
        <NewsWrapper>
          {news.length > 0 &&
            news.map((n, i) => <SearchNewsCard key={i} news={n} />)}
        </NewsWrapper>
      )}
    </div>
  );
}
