
'use client';

import { TextAnimate } from "@/components/magicui/text-animate";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { HyperText } from "@/components/magicui/hyper-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { FlipText } from "@/components/magicui/flip-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ComicText } from "@/components/magicui/comic-text";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity";
import { useState } from "react";
import { TextSample } from "../components/text-sample";

export default function MagicUIPage() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };
  
  const components = [
    {
      name: "Text Animate",
      component: <TextAnimate key={replayKey} className="text-2xl font-bold">Animate Me</TextAnimate>,
    },
    {
      name: "Line Shadow Text",
      component: <LineShadowText key={replayKey} className="text-2xl font-bold">Line Shadow</LineShadowText>,
    },
    {
      name: "Aurora Text",
      component: <AuroraText className="text-2xl font-bold">Aurora Text</AuroraText>,
    },
    {
      name: "Number Ticker",
      component: <NumberTicker value={1000} className="text-2xl font-bold" />,
    },
    {
      name: "Animated Shiny Text",
      component: <AnimatedShinyText className="text-2xl font-bold">Shiny Text</AnimatedShinyText>,
    },
    {
      name: "Animated Gradient Text",
      component: <AnimatedGradientText className="text-2xl font-bold">Gradient Text</AnimatedGradientText>,
    },
    {
      name: "Text Reveal",
      component: <div className="z-10 flex min-h-[4rem] items-center justify-center rounded-lg border bg-background p-2 w-full"><TextReveal>Magic UI</TextReveal></div>,
    },
    {
      name: "Hyper Text",
      component: <HyperText key={replayKey} className="text-2xl font-bold">Hyper Text</HyperText>,
    },
    {
      name: "Word Rotate",
      component: <WordRotate words={["amazing", "beautiful", "interactive"]} className="text-2xl font-bold" />,
    },
    {
      name: "Typing Animation",
      component: <TypingAnimation text="Typing..." className="text-2xl font-bold" />,
    },
    {
        name: "Scroll Based Velocity",
        component: (
            <ScrollVelocityContainer className="min-h-[8rem]">
                <ScrollVelocityRow>
                    <span className="text-2xl font-bold">Scroll Me</span>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        ),
    },
    {
      name: "Flip Text",
      component: <FlipText key={replayKey} className="text-2xl font-bold">Flip Text</FlipText>,
    },
    {
      name: "Box Reveal",
      component: <BoxReveal key={replayKey}><p className="text-2xl font-bold">Box Reveal</p></BoxReveal>,
    },
    {
      name: "Sparkles Text",
      component: <SparklesText className="text-2xl font-bold">Sparkles</SparklesText>,
    },
    {
      name: "Morphing Text",
      component: <MorphingText texts={["Morphing", "Text", "Magic"]} className="text-2xl" />,
    },
    {
      name: "Spinning Text",
      component: <SpinningText className="text-2xl font-bold">Spinning Text</SpinningText>,
    },
    {
      name: "Comic Text",
      component: <ComicText className="text-2xl">Comic Text</ComicText>,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((c) => (
        <TextSample key={c.name} name={c.name} onReplay={handleReplay}>
            {c.component}
        </TextSample>
      ))}
    </div>
  );
}
