"use client";

import { ReactNode } from "react";
import { PlayCircle } from "lucide-react";
import { CodeModal } from "@/components/ui/CodeModal";
import { cn } from "@/lib/utils";

interface AnimationSampleBaseProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
  language: string;
  onPlay: () => void;
  className?: string;
  codeTitle?: string;
}

export function AnimationSampleBase({
  title,
  description,
  children,
  code,
  language,
  onPlay,
  className,
  codeTitle
}: AnimationSampleBaseProps) {
  return (
    <div className={cn("border rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-40 relative overflow-hidden group", className)}>
      {children}
      <h3 className="text-sm font-semibold mb-1 truncate w-full">{title}</h3>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{description}</p>
      )}
      <div className="flex gap-2 mt-auto">
        <PlayCircle
          className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
          onClick={onPlay}
        />
        <CodeModal 
          title={codeTitle || title} 
          code={code} 
          language={language} 
          iconOnly 
        />
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-500"></div>
    </div>
  );
}
