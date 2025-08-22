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
  const [trigger, setTrigger] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Use external trigger or local trigger
  const isTriggered = externalTrigger || trigger;

  // When external trigger changes, start animation
  useEffect(() => {
    if (externalTrigger) {
      setAnimating(true);
    } else {
      // When external trigger is turned off, stop animating
      setAnimating(false);
    }
  }, [externalTrigger]);

  const handleAnimationEnd = () => {
    setTrigger(false);
    setAnimating(false);
  };

  const code = `
<div className="animate__animated animate__${animation} ${duration} ${delay} ${iteration}">
  <!-- Your content here -->
</div>
  `;

  return (
    <AnimationSampleBase
      title={animation}
      code={code}
      language="html"
      onPlay={() => setTrigger(true)}
      codeTitle={`Animate.css - ${animation}`}
    >
      <div
        className={cn(
          "w-16 h-16 mb-3 rounded-lg bg-gradient-to-r",
          colorTheme,
          (isTriggered || animating) && [
            "animate__animated",
            `animate__${animation}`
          ],
          (isTriggered || animating) && duration,
          (isTriggered || animating) && delay,
          (isTriggered || animating) && iteration
        )}
        onAnimationEnd={handleAnimationEnd}
      />
    </AnimationSampleBase>
  );
}
