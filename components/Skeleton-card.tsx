import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
