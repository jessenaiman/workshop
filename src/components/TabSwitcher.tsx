
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TabOption = {
  id: string;
  label: string;
  color: string;
};

type TabSwitcherProps = {
  options: TabOption[];
  defaultTab?: string;
  children: (activeTab: string) => React.ReactNode;
};

export default function TabSwitcher({
  options,
  defaultTab,
  children
}: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || options[0]?.id || '');

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 rounded-xl bg-muted p-1">
          {options.map((option) => {
            const isActive = activeTab === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={cn(
                  "w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-background ring-primary",
                  isActive
                    ? "bg-background text-foreground shadow"
                    : "text-muted-foreground hover:bg-background/60"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="transition-opacity duration-500 opacity-100 w-full max-w-6xl">
        {children(activeTab)}
      </div>
    </div>
  );
}
