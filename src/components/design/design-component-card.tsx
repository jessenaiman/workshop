
'use client';

import { ReactNode, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, Settings, Code, Expand, Play, Square, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface DesignComponentCardProps {
    children: React.ReactNode;
    title: string;
    description: string;
    code: string;
    controls?: ReactNode | null;
    onApply?: (() => void) | null;
    onReplay?: (() => void) | null;
    onPlay?: (() => void) | null;
    onStop?: (() => void) | null;
    isPlaying?: boolean;
    className?: string;
}

export function DesignComponentCard({ 
    children, 
    title, 
    description, 
    code,
    controls,
    onApply,
    onReplay,
    onPlay,
    onStop,
    isPlaying,
    className,
}: DesignComponentCardProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const cardContent = (
        <Card className={cn("bg-muted/30 h-full flex flex-col", className)}>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                        {onApply && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={onApply} className="h-8 w-8"><Eye className="h-4 w-4"/></Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Apply to Page</p></TooltipContent>
                            </Tooltip>
                        )}
                        {controls && (
                             <Popover>
                                <PopoverTrigger asChild>
                                    <Tooltip>
                                        <TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8"><Settings className="h-4 w-4"/></Button></TooltipTrigger>
                                        <TooltipContent><p>Options</p></TooltipContent>
                                    </Tooltip>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 space-y-4">{controls}</PopoverContent>
                            </Popover>
                        )}
                        <Dialog>
                            <DialogTrigger asChild>
                                 <Tooltip>
                                    <TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8"><Code className="h-4 w-4"/></Button></TooltipTrigger>
                                    <TooltipContent><p>View Code</p></TooltipContent>
                                </Tooltip>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl !p-0 bg-transparent border-none">
                                <CodeEditor lang="tsx" writing={false} title={title}>{code.trim()}</CodeEditor>
                            </DialogContent>
                        </Dialog>
                         <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(true)} className="h-8 w-8"><Expand className="h-4 w-4"/></Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Fullscreen</p></TooltipContent>
                        </Tooltip>
                        {onReplay && (
                             <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={onReplay} className="h-8 w-8"><RefreshCcw className="h-4 w-4"/></Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Replay</p></TooltipContent>
                            </Tooltip>
                        )}
                         {(onPlay || onStop) && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={isPlaying ? onStop : onPlay} className="h-8 w-8">
                                        {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent><p>{isPlaying ? "Stop" : "Play"} Animation</p></TooltipContent>
                            </Tooltip>
                         )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
                <div className="relative flex justify-center p-8 h-full min-h-64 w-full overflow-hidden rounded-lg bg-background">
                    {children}
                </div>
            </CardContent>
        </Card>
    );

    return (
      <TooltipProvider>
        {cardContent}
        {isFullscreen && (
            <div className="fixed inset-0 z-[100] bg-background">
                <div className="relative size-full">
                    {children}
                    <Button variant="outline" size="icon" className="absolute top-4 right-4 z-10" onClick={() => setIsFullscreen(false)}>
                        <Expand className="h-4 w-4 rotate-45" />
                    </Button>
                </div>
            </div>
        )}
      </TooltipProvider>
    );
}
