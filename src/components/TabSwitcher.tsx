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
      <div className="flex justify-center mb-8 overflow-hidden w-full max-w-6xl">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {options.map((option) => (
            <button
              key={option.id}
              className={cn(
                "px-4 py-2 mx-1 rounded-md transition-colors duration-200 text-sm font-medium",
                activeTab === option.id
                  ? `text-white ${option.color}`
                  : "bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
              onClick={() => setActiveTab(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="transition-opacity duration-500 opacity-100 w-full max-w-6xl">
        {children(activeTab)}
      </div>
    </div>
  );
}
