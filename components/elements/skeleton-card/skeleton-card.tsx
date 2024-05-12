import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-[250px] rounded-xl bg-gray-100" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-200" />
        <Skeleton className="h-4 w-[200px] bg-gray-200" />
      </div>
      <Skeleton className={className} />
    </div>
  );
}
