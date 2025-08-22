
"use client";

import { useState, useEffect } from "react";
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";
import { cn } from "@/lib/utils";

type TailwindSampleProps = {
  animation: string;
  description: string;
  duration: string;
  delay: string;
  timing: string;
  trigger?: boolean;
};

export function TailwindSample({
  animation,
  description,
  duration,
  delay,
  timing,
  trigger: externalTrigger = false
}: TailwindSampleProps) {
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
    <AnimationSampleBase
      title={animation.replace('animate-', '')}
      description={description}
      code={code}
      language="html"
      onPlay={handlePlay}
      codeTitle={`Tailwind - ${animation}`}
    >
      <div className="w-full h-24 flex items-center justify-center">
        <div
            className={cn(
            "w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500",
            isAnimating && `${animation} ${duration} ${delay} ${timing}`
            )}
            onAnimationEnd={handleAnimationEnd}
        />
      </div>
    </AnimationSampleBase>
  );
}
