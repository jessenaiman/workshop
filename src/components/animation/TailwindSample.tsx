
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Code, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";

type TailwindSampleProps = {
  animation: string;
  description: string;
  duration: string;
  delay: string;
  timing: string;
  triggerKey?: number;
};

export function TailwindSample({
  animation,
  description,
  duration,
  delay,
  timing,
  triggerKey = 0
}: TailwindSampleProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = () => {
    setKey(prev => prev + 1);
    setIsAnimating(true);
  };
  
  useEffect(() => {
    if (triggerKey > 0) {
      handlePlay();
    }
  }, [triggerKey]);

  useEffect(() => {
    const timer = setTimeout(handlePlay, Math.random() * 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (!animation.includes('spin') && !animation.includes('pulse') && !animation.includes('ping')) {
       setIsAnimating(false);
    }
  };

  const code = `
<div className="
  ${animation} 
  ${duration} 
  ${delay} 
  ${timing}
">
  <!-- Your content here -->
</div>
  `;

  const content = (
    <div
      key={key}
      className={cn(
        "w-16 h-16 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500",
        isAnimating && `${animation} ${duration} ${delay} ${timing}`
      )}
      onAnimationEnd={handleAnimationEnd}
    />
  );

  return (
    <>
    <Card className="flex flex-col aspect-square justify-between overflow-hidden">
        <div className="p-4 flex justify-between items-start">
            <div>
                <p className="font-bold text-sm">{animation.replace('animate-', '')}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
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
        </div>
        <div className="flex-1 flex items-center justify-center p-6 bg-background/50">
            {content}
        </div>
      </Card>
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
