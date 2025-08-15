import CardNews from "@/app/components/card/news-card";
import HeadingNews from "@/app/components/heading/news-title";
import NewsWrapper from "@/app/components/wrapper/news-wrapper";
import { Article } from "@/types/global";

const fetchNewsByCategory = async (category: string) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.API_KEY}`;
  const res = await fetch(url, {
    cache: "force-cache",
  });
  const news = await res.json();

  return news.results as Article[];
};

export default async function DetailCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news: Article[] = await fetchNewsByCategory(slug);

  return (
    <div className="w-full p-10">
      <HeadingNews>Category {slug}</HeadingNews>
      <NewsWrapper>
        {news.map((n, i) => (
          <CardNews key={i} news={n} />
        ))}
      </NewsWrapper>
    </div>
  );
}
