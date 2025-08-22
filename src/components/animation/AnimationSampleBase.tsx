"use client";

import { ReactNode } from "react";
import { PlayCircle, Code, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AnimationSampleBaseProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
  language: string;
  onPlay: () => void;
  className?: string;
  codeTitle?: string;
  controls?: ReactNode | null;
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
  controls,
}: AnimationSampleBaseProps) {
  return (
    <TooltipProvider>
    <div
      className={cn(
        "border rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-auto relative overflow-hidden group",
        className
      )}
    >
      <div className="flex w-full items-start gap-4">
        <div className="flex-shrink-0">
         {children}
        </div>
        <div className="flex-1 text-left">
            <h3 className="text-md font-semibold mb-1 truncate w-full">{title}</h3>
            {description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                {description}
                </p>
            )}
        </div>
      </div>
      
      <div className="flex gap-1 mt-auto absolute top-2 right-2">
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onPlay} className="h-8 w-8">
                    <PlayCircle className="w-4 h-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent><p>Play Animation</p></TooltipContent>
        </Tooltip>
        
        <Dialog>
          <DialogTrigger asChild>
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Code className="w-4 h-4" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>View Code</p></TooltipContent>
            </Tooltip>
          </DialogTrigger>
          <DialogContent className="max-w-3xl !p-0 bg-transparent border-none">
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

        {controls && (
            <Popover>
                <PopoverTrigger asChild>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Settings className="w-4 h-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent><p>Options</p></TooltipContent>
                    </Tooltip>
                </PopoverTrigger>
                <PopoverContent className="w-64 space-y-4">{controls}</PopoverContent>
            </Popover>
        )}
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-500 pointer-events-none"></div>
    </div>
    </TooltipProvider>
  );
}
