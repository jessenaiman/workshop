
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DesignComponentCard } from "@/components/design/design-component-card";

type AnimateCssSampleProps = {
  animation: string;
  colorTheme: string;
  duration: string;
  delay: string;
  iteration: string;
  triggerKey?: number;
};

export function AnimateCssSample({
  animation,
  colorTheme,
  duration,
  delay,
  iteration,
  triggerKey = 0
}: AnimateCssSampleProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [key, setKey] = useState(0);
  
  const handlePlay = () => {
    setIsAnimating(true);
    setKey(prev => prev + 1);
  };

  const handleStop = () => {
    setIsAnimating(false);
  }

  useEffect(() => {
    if (triggerKey > 0) {
      handlePlay();
    }
  }, [triggerKey]);

  useEffect(() => {
    // Auto-play once on mount
    handlePlay();
  }, []);

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
    <DesignComponentCard
      title={animation}
      description={`Animate.css - ${animation}`}
      code={code}
      onPlay={handlePlay}
      onStop={handleStop}
      isPlaying={isAnimating}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-sm text-muted-foreground mb-2">{animation}</p>
        <div
            key={key}
            className={cn(
            "w-16 h-16 rounded-lg bg-gradient-to-r",
            colorTheme,
            isAnimating && `animate__animated animate__${animation} ${duration} ${delay} ${iteration}`
            )}
            onAnimationEnd={handleAnimationEnd}
        />
      </div>
    </DesignComponentCard>
  );
}
