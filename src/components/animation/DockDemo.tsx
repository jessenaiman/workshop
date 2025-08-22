"use client";

import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const codeSnippet = `import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";

export function DockDemo() {
  return (
    <div className="flex justify-center w-full">
      <Dock direction="middle">
        <DockIcon>
          <HomeIcon className="size-4" />
        </DockIcon>
        <DockIcon>
          <SettingsIcon className="size-4" />
        </DockIcon>
        <DockIcon>
          <MailIcon className="size-4" />
        </DockIcon>
      </Dock>
    </div>
  );
}`;

export function DockDemo() {
  // The dock component doesn't have a triggerable animation, so we'll use an empty function
  const handlePlay = () => {
    // No action needed for dock component
    console.log("Dock component doesn't have a triggerable animation");
  };

  return (
    <AnimationSampleBase
      title="MacOS Dock"
      description="An implementation of the MacOS dock using react + tailwindcss + framer motion"
      code={codeSnippet}
      language="tsx"
      onPlay={handlePlay}
      codeTitle="MagicUI - Dock"
    >
      <div className="flex justify-center w-full pt-8">
        <Dock direction="middle">
          <DockIcon>
            <HomeIcon className="size-4" />
          </DockIcon>
          <DockIcon>
            <SettingsIcon className="size-4" />
          </DockIcon>
          <DockIcon>
            <MailIcon className="size-4" />
          </DockIcon>
        </Dock>
      </div>
    </AnimationSampleBase>
  );
}
