
import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";
import { Dock, DockIcon } from "@/components/magicui/dock";

const codeSnippet = `import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";

export function DockDemo() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Dock>
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
  const handlePlay = () => {
    // Dock is interactive on hover, no programmatic trigger needed.
  };

  return (
    <AnimationSampleBase
      title="MacOS Dock"
      description="A macOS-style dock with hover magnification."
      code={codeSnippet}
      language="tsx"
      onPlay={handlePlay}
      codeTitle="MagicUI - Dock"
    >
      <div className="flex justify-center items-center w-full h-full pt-4">
        <Dock>
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
