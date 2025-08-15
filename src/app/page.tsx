import { Article } from "@/types/global";
import CardNews from "./components/card/news-card";

const fetchNews = async () => {
  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=JcuMkFcYodSb6GmvKSHhAtcrwtGxa3Of",
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

  console.log(news);
  return (
    <>
      <div className="w-full p-10">
        <h1 className="text-3xl">News App</h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {news.map((n, i) => (
            <CardNews key={i} news={n} />
          ))}
        </div>
      </div>
    </>
  );
}
