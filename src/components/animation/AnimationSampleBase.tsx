
"use client";

import { ReactNode } from "react";
import { PlayCircle } from "lucide-react";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { Button } from "@/components/ui/button";

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
  codeTitle,
}: AnimationSampleBaseProps) {
  return (
    <div
      className={cn(
        "border rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-40 relative overflow-hidden group",
        className
      )}
    >
      {children}
      <h3 className="text-sm font-semibold mb-1 truncate w-full">{title}</h3>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
          {description}
        </p>
      )}
      <div className="flex gap-2 mt-auto">
        <Button variant="ghost" size="icon" onClick={onPlay} className="h-8 w-8">
            <PlayCircle className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
                <Code className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl !p-0">
                <CodeEditor 
                    lang={language}
                    title={codeTitle || title}
                    className="!w-full !h-auto max-h-[80vh] min-h-[400px]"
                    copyButton
                    writing={false}
                    cursor={false}
                >
                    {code.trim()}
                </CodeEditor>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-500"></div>
    </div>
  );
}
