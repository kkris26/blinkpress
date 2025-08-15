"use server";

import { NewsSearch } from "@/types/global";

const fetchNews = async (query: string | null, page: string | null) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&q=${query}&api-key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const results = await res.json();
  return results.response.docs as NewsSearch[];
};

export default fetchNews;
