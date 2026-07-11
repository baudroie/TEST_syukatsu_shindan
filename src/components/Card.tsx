import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`voxel-panel bg-white ${className}`}
      {...props}
    />
  );
}
