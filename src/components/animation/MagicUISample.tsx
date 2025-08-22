"use client";

import { useState } from "react";
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";
import { cn } from "@/lib/utils";

type MagicUISampleProps = {
  name: string;
  description: string;
  className: string;
  codeSnippet: string;
  trigger?: boolean;
};

export function MagicUISample({
  name,
  description,
  className,
  codeSnippet,
  trigger: externalTrigger = false
}: MagicUISampleProps) {
  const [trigger, setTrigger] = useState(false);

  // Use external trigger or local trigger
  const isTriggered = externalTrigger || trigger;

  return (
    <AnimationSampleBase
      title={name}
      description={description}
      code={codeSnippet}
      language="tsx"
      onPlay={() => setTrigger(true)}
      codeTitle={`MagicUI - ${name}`}
    >
      <div
        className={cn(
          "w-16 h-16 mb-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500",
          isTriggered && className
        )}
        onAnimationEnd={() => setTrigger(false)}
      ></div>
    </AnimationSampleBase>
  );
}
