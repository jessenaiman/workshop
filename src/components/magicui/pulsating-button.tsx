
import { cn } from "@/lib/utils";

export function PulsatingButton({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "relative rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-500",
        // Base background
        "bg-primary",
        // Pulsating animation
        "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-primary before:opacity-40 before:transition-transform before:duration-500 before:ease-in-out before:hover:scale-150",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
