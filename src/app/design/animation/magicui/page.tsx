"use client";

import { MagicUISample } from "@/components/animation/MagicUISample";
import { DockDemo } from "@/components/animation/DockDemo";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextReveal } from "@/components/magicui/text-reveal";
import { AnimatedList, AnimatedListItem } from "@/components/magicui/animated-list";
import { RippleButton } from "@/components/magicui/ripple-button";

export default function MagicUIPage() {

  const components = [
    {
      name: "Blur Fade",
      description: "A component that fades in with a blur effect.",
      component: <BlurFade delay={0.25} inView><p className="font-medium p-2 bg-primary/10 rounded-md">Content</p></BlurFade>,
      codeSnippet: `import { BlurFade } from "@/components/magicui/blur-fade";\n\n<BlurFade delay={0.25}><p>Content</p></BlurFade>`
    },
    {
      name: "Text Reveal",
      description: "Reveals text with a sliding animation.",
      component: <div className="z-10 flex min-h-[4rem] items-center justify-center rounded-lg border bg-background p-2"><TextReveal text="Magic UI" /></div>,
      codeSnippet: `import { TextReveal } from "@/components/magicui/text-reveal";\n\n<TextReveal text="Hello World" />`
    },
    {
      name: "Animated List",
      description: "A list with staggered animations for its items.",
      component: (
        <AnimatedList>
          <AnimatedListItem>Item 1</AnimatedListItem>
          <AnimatedListItem>Item 2</AnimatedListItem>
          <AnimatedListItem>Item 3</AnimatedListItem>
        </AnimatedList>
      ),
      codeSnippet: `import { AnimatedList, AnimatedListItem } from "@/components/magicui/animated-list";\n\n<AnimatedList>\n  <AnimatedListItem>Item 1</AnimatedListItem>\n  ...\n</AnimatedList>`
    },
    {
        name: "Ripple Button",
        description: "Button with a ripple effect on click.",
        component: <RippleButton>Click Me</RippleButton>,
        codeSnippet: `import { RippleButton } from "@/components/magicui/ripple-button";\n\n<RippleButton>Click Me</RippleButton>`
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
          >
            {component.component}
          </MagicUISample>
        ))}
         <DockDemo />
      </div>
    </div>
  );
}
