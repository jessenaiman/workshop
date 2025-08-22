
'use client';
import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const MagicCard = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}`);
      containerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}`);
    };

    if (containerRef.current) {
        containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        ref={containerRef}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-lg bg-background p-px shadow-lg",
          className,
        )}
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
        {...props}
      >
        {children}
      </div>
    </MouseEnterContext.Provider>
  );
};

export const MagicCardContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMouseEntered] = useMouseEnter();

  return (
    <div
      className={cn(
        "relative h-full w-full rounded-lg bg-card p-4 transition-opacity duration-500",
        isMouseEntered ? "opacity-90" : "opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MagicCard");
  }
  return context;
}
