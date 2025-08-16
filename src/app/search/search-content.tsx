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

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query: string | null = searchParams.get("q");
  const page: string | null = searchParams.get("page");
  const [news, setNews] = useState<NewsSearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        if (!query) return;
        const data = await fetchNews(query, page);
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
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
      {isLoading ? (
        <LoadingNews type="search" />
      ) : (
        <>
          <NewsWrapper>
            {news.length > 0 &&
              news.map((n, i) => <SearchNewsCard key={i} news={n} />)}
          </NewsWrapper>
          <div className="flex gap-0 sm:gap-2 items-center mt-5 sm:mt-8 justify-center">
            <Button
              className="cursor-pointer text-sm"
              disabled={Number(page) === 1}
              onClick={() =>
                router.push(`?page=${Number(page) - 1}&q=${query}`)
              }
              variant="link"
              size={"sm"}
            >
              Prev
            </Button>
            <p className="text-sm">{page}</p>
            <Button
              className="cursor-pointer text-sm"
              disabled={Number(page) >= 100}
              onClick={() =>
                router.push(`?page=${Number(page) + 1}&q=${query}`)
              }
              variant="link"
              size={"sm"}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchContent;
