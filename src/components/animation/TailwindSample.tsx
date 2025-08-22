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
  const [trigger, setTrigger] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Use external trigger or local trigger
  const isTriggered = externalTrigger || trigger;

  // When external trigger changes, start animation
  useEffect(() => {
    if (externalTrigger) {
      setAnimating(true);
    }
  }, [externalTrigger]);

  const handleAnimationEnd = () => {
    setTrigger(false);
    setAnimating(false);
  };

  const code = `
<div className="${animation} ${duration} ${delay} ${timing}">
  <!-- Your content here -->
</div>
  `;

  return (
    <AnimationSampleBase
      title={animation}
      description={description}
      code={code}
      language="html"
      onPlay={() => setTrigger(true)}
      codeTitle={`Tailwind - ${animation}`}
    >
      <div
        className={cn(
          "w-16 h-16 mb-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500",
          (isTriggered || animating) && animation,
          (isTriggered || animating) && duration,
          (isTriggered || animating) && delay,
          (isTriggered || animating) && timing
        )}
        onAnimationEnd={handleAnimationEnd}
      />
    </AnimationSampleBase>
  );
}
