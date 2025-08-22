
"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingAnimation({ text, className, delay = 0 }: TypingAnimationProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      delay: delay,
      duration: text.length * 0.1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count, text, delay]);

  return (
    <motion.span className={cn("inline", className)}>
      {displayText}
    </motion.span>
  );
}
