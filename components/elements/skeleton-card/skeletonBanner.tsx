import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBanner() {
  return (
    <div className="flex flex-col p-10 gap-4 w-full">
      <Skeleton className="h-[250px] w-1/2 rounded-xl bg-gray-100" />
      <Skeleton className="h-[50px] w-1/2 rounded-xl bg-gray-100" />
      <Skeleton className="h-[50px] w-1/2 rounded-xl bg-gray-100" />
    </div>
  );
}
