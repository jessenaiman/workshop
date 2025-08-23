
import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DesignComponentCard } from "@/components/design/design-component-card";

const codeSnippet = `import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, SettingsIcon, MailIcon } from "lucide-react";

export function DockDemo() {
  return (
    <div className="relative flex justify-center items-center h-full w-full">
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
  return (
    <DesignComponentCard
      title="MacOS Dock"
      description="A macOS-style dock with hover magnification."
      code={codeSnippet}
    >
      <div className="relative flex justify-center items-center w-full h-full pt-4 min-h-[8rem]">
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
    </DesignComponentCard>
  );
}
