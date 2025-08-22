
import React from "react";
import { cn } from "@/lib/utils";

export function ShineBorder({
  children,
  className,
  color = ["#A07CFE", "#FE8A71", "#FED7AA"],
}: {
  children: React.ReactNode;
  className?: string;
  color?: string[];
}) {
  return (
    <div
      className={cn(
        "relative w-fit overflow-hidden rounded-lg border",
        className,
      )}
    >
      <div
        className={cn(
          "animate-shine absolute top-0 -left-full h-full w-[200%] bg-white",
          `[background:linear-gradient(110deg,transparent,45%,${color[0]},55%,transparent)] [background-size:250%_100%]`
        )}
      />
      {children}
    </div>
  );
}
