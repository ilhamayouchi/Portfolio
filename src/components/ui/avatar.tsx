import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
}
export function AvatarImage({
  className,
  alt = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} className={cn("h-full w-full object-cover", className)} {...props} />;
}
export function AvatarFallback({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}
