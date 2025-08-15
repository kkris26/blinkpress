import { Skeleton } from "@/components/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <Skeleton className="h-[20px] w-[80px] rounded-full" />
      <Skeleton className="h-[24px] w-[90%] rounded-md" />
      <Skeleton className="h-[24px] w-[70%] rounded-md" />
      <Skeleton className="h-[16px] w-full rounded-md" />
      <Skeleton className="h-[16px] w-[80%] rounded-md" />
      <Skeleton className="h-[14px] w-[50%] rounded-md" />
      <Skeleton className="h-[36px] w-[120px] rounded-md" />
    </div>
  );
}
