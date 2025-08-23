
"use client";

import { DesignComponentCard } from "@/components/design/design-component-card";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { useState } from "react";
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

export default function MagicUIPage() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };
  
  const components = [
    { name: "Text Animate", component: <TextAnimate key={replayKey} className="text-lg font-bold">Animate Me</TextAnimate>, codeSnippet: `<TextAnimate>Animate Me</TextAnimate>` },
    { name: "Line Shadow Text", component: <LineShadowText key={replayKey} className="text-lg font-bold">Line Shadow</LineShadowText>, codeSnippet: `<LineShadowText>Line Shadow</LineShadowText>` },
    { name: "Aurora Text", component: <AuroraText className="text-lg font-bold">Aurora Text</AuroraText>, codeSnippet: `<AuroraText>Aurora Text</AuroraText>` },
    { name: "Number Ticker", component: <NumberTicker value={1000} className="text-lg font-bold" />, codeSnippet: `<NumberTicker value={1000} />` },
    { name: "Animated Shiny Text", component: <AnimatedShinyText className="text-lg font-bold">Shiny Text</AnimatedShinyText>, codeSnippet: `<AnimatedShinyText>Shiny Text</AnimatedShinyText>` },
    { name: "Animated Gradient Text", component: <AnimatedGradientText className="text-lg font-bold">Gradient Text</AnimatedGradientText>, codeSnippet: `<AnimatedGradientText>Gradient Text</AnimatedGradientText>` },
    { name: "Text Reveal", component: <div className="z-10 flex text-lg items-center justify-center rounded-lg border bg-background p-2 w-full"><TextReveal>Magic UI</TextReveal></div>, codeSnippet: `<TextReveal>Magic UI</TextReveal>` },
    { name: "Hyper Text", component: <HyperText key={replayKey} className="text-lg font-bold">Hyper Text</HyperText>, codeSnippet: `<HyperText>Hyper Text</HyperText>` },
    { name: "Word Rotate", component: <WordRotate words={["amazing", "beautiful", "interactive"]} className="text-lg font-bold" />, codeSnippet: `<WordRotate words={["amazing", "beautiful", "interactive"]} />` },
    { name: "Typing Animation", component: <TypingAnimation text="Typing..." className="text-lg font-bold" />, codeSnippet: `<TypingAnimation text="Typing..." />` },
    { name: "Flip Text", component: <FlipText key={replayKey} className="text-lg font-bold">Flip Text</FlipText>, codeSnippet: `<FlipText>Flip Text</FlipText>` },
    { name: "Box Reveal", component: <BoxReveal key={replayKey}><p className="text-lg font-bold">Box Reveal</p></BoxReveal>, codeSnippet: `<BoxReveal><p>Box Reveal</p></BoxReveal>` },
    { name: "Sparkles Text", component: <SparklesText className="text-lg font-bold">Sparkles</SparklesText>, codeSnippet: `<SparklesText>Sparkles</SparklesText>` },
    { name: "Morphing Text", component: <MorphingText texts={["Morphing", "Text", "Magic"]} className="text-lg" />, codeSnippet: `<MorphingText texts={["Morphing", "Text", "Magic"]} />` },
    { name: "Spinning Text", component: <SpinningText className="text-lg font-bold">Spinning</SpinningText>, codeSnippet: `<SpinningText>Spinning Text</SpinningText>` },
    { name: "Comic Text", component: <ComicText className="text-lg">Comic Text</ComicText>, codeSnippet: `<ComicText>Comic Text</ComicText>` },
    { name: "Scroll Based Velocity", component: ( <ScrollVelocityContainer><ScrollVelocityRow><span className="text-lg font-bold mx-2">Scroll Me</span></ScrollVelocityRow></ScrollVelocityContainer> ), codeSnippet: `<ScrollVelocityContainer>...</ScrollVelocityContainer>` },
  ];

  return (
    <div className="space-y-8">
       <NeonGradientCard className="mb-4">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-center">MagicUI Components</h3>
            <p className="text-sm text-muted-foreground text-center">
              MagicUI components are pre-built React components with advanced animations. 
              Settings are implemented at the component level via props.
            </p>
          </div>
        </NeonGradientCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {components.map((c, idx) => (
          <DesignComponentCard
            key={idx}
            title={c.name}
            description="MagicUI text effect"
            code={c.codeSnippet}
            onReplay={handleReplay}
            className="aspect-square"
          >
            {c.component}
          </DesignComponentCard>
        ))}
      </div>
    </div>
  );
}
