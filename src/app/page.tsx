import { Article } from "@/types/global";
import CardNews from "./components/card/news-card";
import NewsWrapper from "./components/wrapper/news-wrapper";
import HeadingNews from "./components/heading/news-title";


const fetchNews = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.API_KEY}`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  const news = await res.json();
  return news.results as Article[];
};
export default async function Home() {
  const news: Article[] = await fetchNews();

  return (
    <>
      <div className="w-full p-10">
        <HeadingNews>News App</HeadingNews>
        <NewsWrapper>
          {news.map((n, i) => (
            <CardNews key={i} news={n} />
          ))}
        </NewsWrapper>
      </div>
    </>
  );
}
