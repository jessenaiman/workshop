"use client";

import { useState, useEffect } from "react";
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";
import { cn } from "@/lib/utils";

type AnimateCssSampleProps = {
  animation: string;
  colorTheme: string;
  duration: string;
  delay: string;
  iteration: string;
  trigger?: boolean;
};

export function AnimateCssSample({
  animation,
  colorTheme,
  duration,
  delay,
  iteration,
  trigger: externalTrigger = false
}: AnimateCssSampleProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePlay = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (externalTrigger) {
      setIsAnimating(true);
    }
  }, [externalTrigger]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const code = `
<div 
  className="
    animate__animated 
    animate__${animation} 
    ${duration} 
    ${delay} 
    ${iteration}"
>
  <!-- Your content here -->
</div>
  `;

  return (
    <AnimationSampleBase
      title={animation}
      code={code}
      language="html"
      onPlay={handlePlay}
      codeTitle={`Animate.css - ${animation}`}
    >
      <div
        className={cn(
          "w-16 h-16 mb-3 rounded-lg bg-gradient-to-r",
          colorTheme,
          isAnimating && `animate__animated animate__${animation} ${duration} ${delay} ${iteration}`
        )}
        onAnimationEnd={handleAnimationEnd}
      />
    </AnimationSampleBase>
  );
}
