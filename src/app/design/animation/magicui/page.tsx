"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { MagicUISample } from "@/components/animation/MagicUISample";
import { DockDemo } from "@/components/animation/DockDemo";

export default function MagicUIPage() {
  const [triggerAll, setTriggerAll] = useState(false);

  const handleTriggerAll = () => {
    setTriggerAll(true);
    setTimeout(() => setTriggerAll(false), 5000);
  };

  const components = [
    {
      name: "Blur Fade",
      description: "A component that fades in with a blur effect.",
      className: "animate-fade-in-up",
      codeSnippet: `import { BlurFade } from "@/components/magicui/blur-fade";\n\nexport function MyComponent() {\n  return (\n    <BlurFade delay={0.25}>\n      <p>Content that fades in with blur</p>\n    </BlurFade>\n  );\n}`
    },
    {
      name: "Text Reveal",
      description: "Reveals text with a sliding animation.",
      className: "animate-text-reveal",
      codeSnippet: `import { TextReveal } from "@/components/magicui/text-reveal";\n\nexport function MyComponent() {\n  return (\n    <TextReveal text="Hello World" />\n  );\n}`
    },
    {
      name: "Animated List",
      description: "A list with staggered animations.",
      className: "animate-staggered-fade-in",
      codeSnippet: `import { AnimatedList } from "@/components/magicui/animated-list";\n\nexport function MyComponent() {\n  const items = ["Item 1", "Item 2", "Item 3"];\n  \n  return (\n    <AnimatedList items={items} />\n  );\n}`
    },
    {
      name: "Ripple Button",
      description: "Button with ripple effect on click.",
      className: "animate-ripple",
      codeSnippet: `import { RippleButton } from "@/components/magicui/ripple-button";\n\nexport function MyComponent() {\n  return (\n    <RippleButton>Ripple Effect</RippleButton>\n  );\n}`
    },
    {
      name: "MacOS Dock",
      description: "An implementation of the MacOS dock using react + tailwindcss + framer motion",
      className: "",
      codeSnippet: `import { Dock, DockIcon } from "@/components/magicui/dock";\nimport { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";\n\nexport function DockDemo() {\n  return (\n    <div className=\"flex justify-center w-full\">\n      <Dock direction=\"middle\">\n        <DockIcon>\n          <HomeIcon className=\"size-4\" />\n        </DockIcon>\n        <DockIcon>\n          <SettingsIcon className=\"size-4\" />\n        </DockIcon>\n        <DockIcon>\n          <MailIcon className=\"size-4\" />\n        </DockIcon>\n      </Dock>\n    </div>\n  );\n}`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-4">
        <Button variant="outline" onClick={handleTriggerAll}>
          <PlayCircle className="w-4 h-4 mr-2" />
          Trigger All Animations
        </Button>
      </div>

      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">MagicUI Components</h3>
        <p className="text-sm text-muted-foreground mb-3">
          MagicUI components are pre-built React components with advanced animations. 
          Settings are implemented at the component level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Common Props</h4>
            <ul className="text-sm space-y-1">
              <li>• duration: Animation duration</li>
              <li>• delay: Animation delay</li>
              <li>• direction: Animation direction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Usage</h4>
            <p className="text-sm text-muted-foreground">
              Import components directly and customize via props.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-hidden">
        {components.map((component) => (
          component.name === "MacOS Dock" ? (
            <DockDemo key={component.name} />
          ) : (
            <MagicUISample
              key={component.name}
              name={component.name}
              description={component.description}
              className={component.className}
              codeSnippet={component.codeSnippet}
              trigger={triggerAll}
            />
          )
        ))}
      </div>
    </div>
  );
}