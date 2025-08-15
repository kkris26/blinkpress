import { Skeleton } from "@/components/ui/skeleton";
import { NewsCardSkeleton } from "./components/skeleton/news-card-skeleton";

export default function LoadingNews() {
  return (
    <div className="w-full">
      <Skeleton className="h-8 w-32"/>
      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
