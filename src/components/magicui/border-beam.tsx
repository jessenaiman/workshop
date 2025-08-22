
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  duration = 5,
}: {
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
}) {
  return (
    <div
      style={
        {
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)_*_1px)_solid_transparent] [-webkit-mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] [-webkit-mask-composite:xor] [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] [mask-composite:exclude] after:animate-border-beam after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(to_right,var(--color-from),var(--color-to),var(--color-from))] after:[background-size:200%_100%]",
        className,
      )}
    />
  );
}
