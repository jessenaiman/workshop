
"use client";

import { MagicUISample } from "@/components/animation/MagicUISample";
import { DockDemo } from "@/components/animation/DockDemo";
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

export default function MagicUIPage() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };
  
  const components = [
    {
      name: "Text Animate",
      description: "Staggered animation for text.",
      component: <TextAnimate key={replayKey} className="text-2xl font-bold">Animate Me</TextAnimate>,
      codeSnippet: `import { TextAnimate } from "@/components/magicui/text-animate";\n\n<TextAnimate>Animate Me</TextAnimate>`
    },
    {
      name: "Line Shadow Text",
      description: "Text with a dynamic line shadow.",
      component: <LineShadowText key={replayKey} className="text-2xl font-bold">Line Shadow</LineShadowText>,
      codeSnippet: `import { LineShadowText } from "@/components/magicui/line-shadow-text";\n\n<LineShadowText>Line Shadow</LineShadowText>`
    },
    {
      name: "Aurora Text",
      description: "Text with an aurora-like gradient.",
      component: <AuroraText className="text-2xl font-bold">Aurora Text</AuroraText>,
      codeSnippet: `import { AuroraText } from "@/components/magicui/aurora-text";\n\n<AuroraText>Aurora Text</AuroraText>`
    },
    {
      name: "Number Ticker",
      description: "Animates numbers counting up.",
      component: <NumberTicker value={1000} className="text-2xl font-bold" />,
      codeSnippet: `import { NumberTicker } from "@/components/magicui/number-ticker";\n\n<NumberTicker value={1000} />`
    },
    {
      name: "Animated Shiny Text",
      description: "Text with a shiny animation effect.",
      component: <AnimatedShinyText className="text-2xl font-bold">Shiny Text</AnimatedShinyText>,
      codeSnippet: `import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";\n\n<AnimatedShinyText>Shiny Text</AnimatedShinyText>`
    },
    {
      name: "Animated Gradient Text",
      description: "Text with a gradient animation.",
      component: <AnimatedGradientText className="text-2xl font-bold">Gradient Text</AnimatedGradientText>,
      codeSnippet: `import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";\n\n<AnimatedGradientText>Gradient Text</AnimatedGradientText>`
    },
    {
      name: "Text Reveal",
      description: "Reveals text with a sliding animation.",
      component: <div className="z-10 flex min-h-[4rem] items-center justify-center rounded-lg border bg-background p-2 w-full"><TextReveal>Magic UI</TextReveal></div>,
      codeSnippet: `import { TextReveal } from "@/components/magicui/text-reveal";\n\n<TextReveal>Magic UI</TextReveal>`
    },
    {
      name: "Hyper Text",
      description: "Text with a scrambling reveal effect.",
      component: <HyperText key={replayKey} className="text-2xl font-bold">Hyper Text</HyperText>,
      codeSnippet: `import { HyperText } from "@/components/magicui/hyper-text";\n\n<HyperText>Hyper Text</HyperText>`
    },
    {
      name: "Word Rotate",
      description: "Rotates through a list of words.",
      component: <WordRotate words={["amazing", "beautiful", "interactive"]} className="text-2xl font-bold" />,
      codeSnippet: `import { WordRotate } from "@/components/magicui/word-rotate";\n\n<WordRotate words={["amazing", "beautiful", "interactive"]} />`
    },
    {
      name: "Typing Animation",
      description: "Simulates a typing effect.",
      component: <TypingAnimation text="Typing..." className="text-2xl font-bold" />,
      codeSnippet: `import { TypingAnimation } from "@/components/magicui/typing-animation";\n\n<TypingAnimation text="Typing..." />`
    },
    {
        name: "Scroll Based Velocity",
        description: "Text velocity based on scroll speed.",
        component: (
            <ScrollVelocityContainer>
                <ScrollVelocityRow>
                    <span className="text-2xl font-bold">Scroll Me</span>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        ),
        codeSnippet: `import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity";\n\n<ScrollVelocityContainer><ScrollVelocityRow>Scroll Me</ScrollVelocityRow></ScrollVelocityContainer>`
    },
    {
      name: "Flip Text",
      description: "Text with a flipping character animation.",
      component: <FlipText key={replayKey} className="text-2xl font-bold">Flip Text</FlipText>,
      codeSnippet: `import { FlipText } from "@/components/magicui/flip-text";\n\n<FlipText>Flip Text</FlipText>`
    },
    {
      name: "Box Reveal",
      description: "Reveals content from behind a box.",
      component: <BoxReveal key={replayKey}><p className="text-2xl font-bold">Box Reveal</p></BoxReveal>,
      codeSnippet: `import { BoxReveal } from "@/components/magicui/box-reveal";\n\n<BoxReveal><p>Box Reveal</p></BoxReveal>`
    },
    {
      name: "Sparkles Text",
      description: "Text with a sparkling effect.",
      component: <SparklesText className="text-2xl font-bold">Sparkles</SparklesText>,
      codeSnippet: `import { SparklesText } from "@/components/magicui/sparkles-text";\n\n<SparklesText>Sparkles</SparklesText>`
    },
    {
      name: "Morphing Text",
      description: "Text that morphs between words.",
      component: <MorphingText texts={["Morphing", "Text", "Magic"]} className="text-2xl" />,
      codeSnippet: `import { MorphingText } from "@/components/magicui/morphing-text";\n\n<MorphingText texts={["Morphing", "Text", "Magic"]} />`
    },
    {
      name: "Spinning Text",
      description: "Text that spins in a circle.",
      component: <SpinningText className="text-2xl font-bold">Spinning Text</SpinningText>,
      codeSnippet: `import { SpinningText } from "@/components/magicui/spinning-text";\n\n<SpinningText>Spinning Text</SpinningText>`
    },
    {
      name: "Comic Text",
      description: "Text with a comic book style.",
      component: <ComicText className="text-2xl">Comic Text</ComicText>,
      codeSnippet: `import { ComicText } from "@/components/magicui/comic-text";\n\n<ComicText>Comic Text</ComicText>`
    },
  ];

  return (
    <div className="space-y-8">
       <div className="bg-muted/50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">MagicUI Components</h3>
        <p className="text-sm text-muted-foreground mb-3">
          MagicUI components are pre-built React components with advanced animations. 
          Settings are implemented at the component level via props.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {components.map((component, idx) => (
          <MagicUISample
            key={idx}
            name={component.name}
            description={component.description}
            codeSnippet={component.codeSnippet}
            onReplay={handleReplay}
          >
            {component.component}
          </MagicUISample>
        ))}
         <DockDemo />
      </div>
    </div>
  );
}
