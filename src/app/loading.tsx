import { Skeleton } from "@/components/ui/skeleton";
import { NewsCardSkeleton } from "./components/skeleton/news-card-skeleton";

export default function LoadingNews({ type }: { type?: string }) {
  return (
    <div className="w-full">
      {type !== "search" && <Skeleton className="h-6 sm:h-8 w-35" />}
      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(12)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
