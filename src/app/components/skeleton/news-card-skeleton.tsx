import { Skeleton } from "@/components/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="bg-transparent p-3 sm:p-5 flex flex-row sm:flex-col justify-between gap-4 sm:gap-6 items-center sm:items-end border border-neutral-800 rounded-lg">
      <div className="relative w-28 sm:w-full flex-shrink-0">
        <Skeleton className="aspect-4/3 w-full rounded-md" />
        <Skeleton className="absolute top-2 right-2 sm:top-3 sm:right-3 h-[20px] w-20 rounded-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-[20px] w-[90%] rounded-md" />
        <Skeleton className="h-[14px] w-[100%] rounded-md" />
        <Skeleton className="h-[14px] w-[80%] rounded-md" />
        <Skeleton className="h-[14px] w-[50%] rounded-md" />
      </div>
      <div className="hidden sm:flex justify-end w-full">
        <Skeleton className="h-[36px] w-[120px] rounded-md" />
      </div>
    </div>
  );
}
