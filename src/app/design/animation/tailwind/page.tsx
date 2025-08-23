
"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { DesignComponentCard } from "@/components/design/design-component-card";
import { cn } from "@/lib/utils";

export default function TailwindPage() {
  const [triggerKey, setTriggerKey] = useState(0);
  const [settings, setSettings] = useState({
    duration: "duration-1000",
    delay: "delay-0",
    timing: "ease-in-out"
  });

  const handleTriggerAll = () => {
    setTriggerKey(prev => prev + 1);
  };

  const animations = [
    { name: "animate-bounce", description: "Bounces up and down." },
    { name: "animate-ping", description: "Scales up with a fade." },
    { name: "animate-pulse", description: "Gently fades in and out." },
    { name: "animate-spin", description: "Spins indefinitely." },
  ];

  return (
    <div className="space-y-8">
       <NeonGradientCard className="mb-4">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                <CardTitle>Animation Settings</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Select value={settings.duration} onValueChange={(value) => setSettings({ ...settings, duration: value })}>
                            <SelectTrigger id="duration" className="w-full">
                            <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="duration-500">0.5s</SelectItem>
                            <SelectItem value="duration-700">0.7s</SelectItem>
                            <SelectItem value="duration-1000">1s</SelectItem>
                            <SelectItem value="duration-1500">1.5s</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="delay">Delay</Label>
                        <Select value={settings.delay} onValueChange={(value) => setSettings({ ...settings, delay: value })}>
                            <SelectTrigger id="delay" className="w-full">
                            <SelectValue placeholder="Select delay" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="delay-0">0s</SelectItem>
                            <SelectItem value="delay-100">0.1s</SelectItem>
                            <SelectItem value="delay-300">0.3s</SelectItem>
                            <SelectItem value="delay-500">0.5s</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="timing">Timing Function</Label>
                        <Select value={settings.timing} onValueChange={(value) => setSettings({ ...settings, timing: value })}>
                            <SelectTrigger id="timing" className="w-full">
                            <SelectValue placeholder="Select timing" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="ease-linear">Linear</SelectItem>
                            <SelectItem value="ease-in">Ease In</SelectItem>
                            <SelectItem value="ease-out">Ease Out</SelectItem>
                            <SelectItem value="ease-in-out">Ease In Out</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                </CardContent>
            </Card>
            <div className="flex items-center justify-center md:justify-end">
                <Button variant="outline" onClick={handleTriggerAll}>
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Trigger All Animations
                </Button>
            </div>
          </div>
        </NeonGradientCard>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {animations.map((anim) => {
            const code = `<div className="${anim.name} ${settings.duration} ${settings.delay} ${settings.timing}"></div>`;
            const [key, setKey] = useState(0);
            const [isAnimating, setIsAnimating] = useState(false);

            const handlePlay = () => {
                setKey(prev => prev + 1);
                setIsAnimating(true);
            };

            React.useEffect(() => {
                if(triggerKey > 0) handlePlay();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [triggerKey]);
            
            return (
                <DesignComponentCard
                    key={anim.name}
                    title={anim.name.replace('animate-', '')}
                    description={anim.description}
                    code={code}
                    onPlay={handlePlay}
                    isPlaying={isAnimating}
                    onStop={() => setIsAnimating(false)}
                >
                    <div
                        key={key}
                        className={cn(
                            "w-16 h-16 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500",
                            isAnimating && `${anim.name} ${settings.duration} ${settings.delay} ${settings.timing}`
                        )}
                        onAnimationEnd={() => {
                            if (!anim.name.includes('spin') && !anim.name.includes('pulse') && !anim.name.includes('ping')) {
                                setIsAnimating(false);
                            }
                        }}
                    />
                </DesignComponentCard>
            )
        })}
      </div>
    </div>
  );
}
