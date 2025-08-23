
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
import { DesignComponentCard } from "@/components/design/design-component-card";
import { Input } from "@/components/ui/input";

export default function MagicUIPage() {
  const [replayKey, setReplayKey] = useState(0);
  const [customText, setCustomText] = useState("Magic UI");

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };
  
  const components = [
    {
      name: "Text Animate",
      component: (text: string) => <TextAnimate key={replayKey} className="text-2xl font-bold">{text}</TextAnimate>,
      code: `<TextAnimate className="text-2xl font-bold">Your Text</TextAnimate>`,
    },
    {
      name: "Line Shadow Text",
      component: (text: string) => <LineShadowText key={replayKey} className="text-2xl font-bold">{text}</LineShadowText>,
      code: `<LineShadowText className="text-2xl font-bold">Your Text</LineShadowText>`,
    },
    {
      name: "Aurora Text",
      component: (text: string) => <AuroraText className="text-2xl font-bold">{text}</AuroraText>,
      code: `<AuroraText className="text-2xl font-bold">Your Text</AuroraText>`,
    },
    {
      name: "Number Ticker",
      component: () => <NumberTicker value={1000} className="text-2xl font-bold" />,
      code: `<NumberTicker value={1000} className="text-2xl font-bold" />`,
    },
    {
      name: "Animated Shiny Text",
      component: (text: string) => <AnimatedShinyText className="text-2xl font-bold">{text}</AnimatedShinyText>,
      code: `<AnimatedShinyText className="text-2xl font-bold">Your Text</AnimatedShinyText>`,
    },
    {
      name: "Animated Gradient Text",
      component: (text: string) => <AnimatedGradientText className="text-2xl font-bold">{text}</AnimatedGradientText>,
      code: `<AnimatedGradientText className="text-2xl font-bold">Your Text</AnimatedGradientText>`,
    },
    {
      name: "Text Reveal",
      component: (text: string) => <div className="z-10 flex min-h-[4rem] items-center justify-center rounded-lg border bg-background p-2 w-full"><TextReveal>{text}</TextReveal></div>,
      code: `<TextReveal>Your Text</TextReveal>`,
    },
    {
      name: "Hyper Text",
      component: (text: string) => <HyperText key={replayKey} className="text-2xl font-bold">{text}</HyperText>,
      code: `<HyperText className="text-2xl font-bold">Your Text</HyperText>`,
    },
    {
      name: "Word Rotate",
      component: () => <WordRotate words={["amazing", "beautiful", "interactive"]} className="text-2xl font-bold" />,
      code: `<WordRotate words={["amazing", "beautiful", "interactive"]} className="text-2xl font-bold" />`,
    },
    {
      name: "Typing Animation",
      component: (text: string) => <TypingAnimation text={text} className="text-2xl font-bold" />,
      code: `<TypingAnimation text="Your Text" className="text-2xl font-bold" />`,
    },
    {
        name: "Scroll Based Velocity",
        component: (text: string) => (
            <ScrollVelocityContainer className="min-h-[8rem]">
                <ScrollVelocityRow>
                    <span className="text-2xl font-bold">{text}</span>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        ),
        code: `<ScrollVelocityContainer>...</ScrollVelocityContainer>`,
    },
    {
      name: "Flip Text",
      component: (text: string) => <FlipText key={replayKey} className="text-2xl font-bold">{text}</FlipText>,
      code: `<FlipText className="text-2xl font-bold">Your Text</FlipText>`,
    },
    {
      name: "Box Reveal",
      component: (text: string) => <BoxReveal key={replayKey}><p className="text-2xl font-bold">{text}</p></BoxReveal>,
      code: `<BoxReveal><p className="text-2xl font-bold">Your Text</p></BoxReveal>`,
    },
    {
      name: "Sparkles Text",
      component: (text: string) => <SparklesText className="text-2xl font-bold">{text}</SparklesText>,
      code: `<SparklesText className="text-2xl font-bold">Your Text</SparklesText>`,
    },
    {
      name: "Morphing Text",
      component: () => <MorphingText texts={["Morphing", "Text", "Magic"]} className="text-2xl" />,
      code: `<MorphingText texts={["Morphing", "Text", "Magic"]} className="text-2xl" />`,
    },
    {
      name: "Spinning Text",
      component: (text: string) => <SpinningText className="text-2xl font-bold">{text}</SpinningText>,
      code: `<SpinningText className="text-2xl font-bold">Your Text</SpinningText>`,
    },
    {
      name: "Comic Text",
      component: (text: string) => <ComicText className="text-2xl">{text}</ComicText>,
      code: `<ComicText className="text-2xl">Your Text</ComicText>`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((c) => (
        <DesignComponentCard 
            key={c.name} 
            title={c.name}
            description="MagicUI text effect"
            code={c.code}
            onReplay={c.name !== 'Number Ticker' && c.name !== 'Word Rotate' && c.name !== 'Morphing Text' ? handleReplay : undefined}
            controls={c.name !== 'Number Ticker' && c.name !== 'Word Rotate' && c.name !== 'Morphing Text' ? (
                <div>
                    <label className="text-sm font-medium">Visible Text</label>
                    <Input value={customText} onChange={(e) => setCustomText(e.target.value)} />
                </div>
            ) : null}
        >
             <div className="min-h-[8rem] flex items-center justify-center p-6">
                {c.component(customText)}
            </div>
        </DesignComponentCard>
      ))}
    </div>
  );
}
