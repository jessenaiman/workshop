
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play, Code, Expand, MoreVertical } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { MagicCard } from "../magicui/magic-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type AnimateCssSampleProps = {
  animation: string;
  colorTheme: string;
  duration: string;
  delay: string;
  iteration: string;
  triggerKey?: number;
};

export function AnimateCssSample({
  animation,
  colorTheme,
  duration,
  delay,
  iteration,
  triggerKey = 0
}: AnimateCssSampleProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();
  
  const handlePlay = () => {
    setIsAnimating(true);
    setKey(prev => prev + 1);
  };

  useEffect(() => {
    if (triggerKey > 0) {
      handlePlay();
    }
  }, [triggerKey]);

  useEffect(() => {
    const timer = setTimeout(handlePlay, Math.random() * 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const code = `
<div 
  className="
    animate__animated 
    animate__${animation} 
    ${duration} 
    ${delay} 
    ${iteration}"
>
  <!-- Your content here -->
</div>
  `;

  const content = (
    <div
      key={key}
      className={cn(
        "w-16 h-16 rounded-lg bg-gradient-to-r flex items-center justify-center text-center p-1",
        colorTheme,
        isAnimating && `animate__animated animate__${animation} ${duration} ${delay} ${iteration}`
      )}
      onAnimationEnd={handleAnimationEnd}
    >
        <p className="text-xs text-white/50">{animation}</p>
    </div>
  );

  const controls = (
     <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePlay}>
            <Play className="h-4 w-4" />
        </Button>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8"><Code className="h-4 w-4"/></Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl !p-0 bg-transparent border-none">
                <CodeEditor lang="tsx" writing={false} title={animation}>{code.trim()}</CodeEditor>
            </DialogContent>
        </Dialog>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFullscreen(true)}>
            <Expand className="h-4 w-4"/>
        </Button>
    </div>
  )

  return (
    <>
      <MagicCard className="group flex flex-col aspect-square justify-between overflow-hidden cursor-pointer">
        <div className="p-4 flex justify-between items-center">
            <div>
                <p className="font-bold text-sm">{animation}</p>
                <p className="text-xs text-muted-foreground">Animate.css</p>
            </div>
            {isMobile ? (
                 <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4"/></Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-1">{controls}</PopoverContent>
                </Popover>
            ) : (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {controls}
                </div>
            )}
        </div>
        <div className="flex-1 flex items-center justify-center p-6 bg-background/50">
            {content}
        </div>
      </MagicCard>
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <div className="relative size-full max-w-lg max-h-lg flex items-center justify-center">
                {content}
                <Button variant="outline" size="icon" className="absolute top-4 right-4 z-10" onClick={() => setIsFullscreen(false)}>
                    <Expand className="h-4 w-4 rotate-45" />
                </Button>
            </div>
        </div>
    )}
    </>
  );
}
