
'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MagicCard } from '@/components/magicui/magic-card';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Eye, Settings, Code, Expand, Play } from "lucide-react";

interface BackgroundCardProps {
    children: React.ReactNode;
    title: string;
    description: string;
    code: string;
    controls: React.ReactNode | null;
    onApply: (() => void) | null;
    onReplay?: () => void;
    isInteractive?: boolean;
}

function InteractiveMagicCard({ children, isInteractive }: { children: React.ReactNode, isInteractive: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    if (!isInteractive) {
        return <div className="w-full">{children}</div>;
    }

    return (
        <MagicCard
            className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             {isHovered ? <BorderBeam size={250} duration={12} delay={9} /> : <ShineBorder />}
            {children}
        </MagicCard>
    );
}

export function BackgroundCard({ 
    children, 
    title, 
    description, 
    code,
    controls,
    onApply,
    onReplay,
    isInteractive = true,
}: BackgroundCardProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const cardContent = (
        <Card className="bg-muted/30 h-full flex flex-col">
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
                                    <Button variant="ghost" size="icon" onClick={onApply}><Eye className="h-4 w-4"/></Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Apply to Page</p></TooltipContent>
                            </Tooltip>
                        )}
                        {controls && (
                             <Popover>
                                <PopoverTrigger asChild>
                                    <Tooltip>
                                        <TooltipTrigger asChild><Button variant="ghost" size="icon"><Settings className="h-4 w-4"/></Button></TooltipTrigger>
                                        <TooltipContent><p>Options</p></TooltipContent>
                                    </Tooltip>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 space-y-4">{controls}</PopoverContent>
                            </Popover>
                        )}
                        <Dialog>
                            <DialogTrigger asChild>
                                 <Tooltip>
                                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Code className="h-4 w-4"/></Button></TooltipTrigger>
                                    <TooltipContent><p>View Code</p></TooltipContent>
                                </Tooltip>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl !p-0">
                                <CodeEditor lang="tsx" writing={false} title={title}>{code}</CodeEditor>
                            </DialogContent>
                        </Dialog>
                         <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(true)}><Expand className="h-4 w-4"/></Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Fullscreen</p></TooltipContent>
                        </Tooltip>
                        {onReplay && (
                             <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={onReplay}><Play className="h-4 w-4"/></Button>
                                </TooltipTrigger>
                                <TooltipContent><p>Replay</p></TooltipContent>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                    {children}
                </div>
            </CardContent>
        </Card>
    );

    return (
      <>
        <InteractiveMagicCard isInteractive={isInteractive}>
            {cardContent}
        </InteractiveMagicCard>
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
      </>
    );
}

