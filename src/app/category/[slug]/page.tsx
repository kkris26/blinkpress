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
  console.log({ news });

  return news.results as Article[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: `Latest ${slug} News & Top Stories | Blink Press`,
    description: `Stay updated with the latest ${slug} news, breaking headlines, and top stories from around the world – fast, reliable, and always up to date on Blink Press.`,
  };
}

export default async function DetailCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news: Article[] = await fetchNewsByCategory(slug);

  console.log(news);
  return (
    <div className="w-full">
      <HeadingNews>Latest in {slug}</HeadingNews>
      <NewsWrapper>
        {news.map((n, i) => (
          <CardNews key={i} news={n} />
        ))}
      </NewsWrapper>
    </div>
  );
}
