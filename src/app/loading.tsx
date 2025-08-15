import { NewsCardSkeleton } from "./components/skeleton/news-card-skeleton";

export default function Loading() {
  return (
    <div className="w-full p-10">
      <h1 className="text-3xl">News App</h1>
      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
