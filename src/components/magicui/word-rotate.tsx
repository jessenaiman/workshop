
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function WordRotate({
  words,
  className,
  duration = 2500,
}: {
  words: string[];
  className?: string;
  duration?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence>
        <motion.h1
          key={words[index]}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
            className,
          )}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
