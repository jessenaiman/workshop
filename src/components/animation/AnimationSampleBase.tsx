
"use client";

import { ReactNode } from "react";
import { PlayCircle, Code, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
      <Card className={cn("overflow-hidden group h-full flex flex-col", className)}>
        <CardHeader className="flex flex-row items-start justify-between">
            <div>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </div>
            <div className="flex gap-1">
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
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-4">
            {children}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
