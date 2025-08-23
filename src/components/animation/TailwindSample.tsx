
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DesignComponentCard } from "@/components/design/design-component-card";

type TailwindSampleProps = {
  animation: string;
  description: string;
  duration: string;
  delay: string;
  timing: string;
  triggerKey?: number;
};

export function TailwindSample({
  animation,
  description,
  duration,
  delay,
  timing,
  triggerKey = 0
}: TailwindSampleProps) {
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


  const handleAnimationEnd = () => {
    // For infinite animations like spin/pulse, we don't want to remove the class
    if (!animation.includes('spin') && !animation.includes('pulse') && !animation.includes('ping')) {
       setIsAnimating(false);
    }
  };

  const code = `
<div className="
  ${animation} 
  ${duration} 
  ${delay} 
  ${timing}
">
  <!-- Your content here -->
</div>
  `;

  return (
    <DesignComponentCard
      title={animation.replace('animate-', '')}
      description={description}
      code={code}
      onPlay={handlePlay}
      onStop={handleStop}
      isPlaying={isAnimating}
    >
      <div className="w-full h-24 flex items-center justify-center">
        <div
            key={key}
            className={cn(
            "w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500",
            isAnimating && `${animation} ${duration} ${delay} ${timing}`
            )}
            onAnimationEnd={handleAnimationEnd}
        />
      </div>
    </DesignComponentCard>
  );
}
