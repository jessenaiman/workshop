
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { ANIMATIONS, COLOR_THEMES } from "@/data/animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { DesignComponentCard } from "@/components/design/design-component-card";
import { cn } from "@/lib/utils";

export default function AnimateCssPage() {
  const [triggerKey, setTriggerKey] = useState(0);
  const [settings, setSettings] = useState({
    duration: "animate__duration-1s",
    delay: "animate__delay-0s",
    iteration: "animate__repeat-1"
  });

  const handleTriggerAll = () => {
    setTriggerKey(prev => prev + 1);
  };

  const animationControls = (
    <>
        <div>
            <Label htmlFor="duration">Duration</Label>
            <Select value={settings.duration} onValueChange={(value) => setSettings({ ...settings, duration: value })}>
                <SelectTrigger id="duration" className="w-full">
                <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="animate__duration-0.5s">0.5s</SelectItem>
                <SelectItem value="animate__duration-1s">1s</SelectItem>
                <SelectItem value="animate__duration-2s">2s</SelectItem>
                <SelectItem value="animate__duration-3s">3s</SelectItem>
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
                <SelectItem value="animate__delay-0s">0s</SelectItem>
                <SelectItem value="animate__delay-1s">1s</SelectItem>
                <SelectItem value="animate__delay-2s">2s</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <div>
            <Label htmlFor="iteration">Iteration</Label>
            <Select value={settings.iteration} onValueChange={(value) => setSettings({ ...settings, iteration: value })}>
                <SelectTrigger id="iteration" className="w-full">
                <SelectValue placeholder="Select iteration" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="animate__repeat-1">1</SelectItem>
                <SelectItem value="animate__repeat-2">2</SelectItem>
                <SelectItem value="animate__repeat-3">3</SelectItem>
                <SelectItem value="animate__repeat-infinite">Infinite</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </>
  );

  return (
    <div className="space-y-8">
      <NeonGradientCard className="mb-4">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                <CardTitle>Animation Settings</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {animationControls}
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

      {Object.entries(ANIMATIONS).map(([category, animations]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {animations.map((animation) => {
                const randomTheme = COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];
                const code = `<div className="animate__animated animate__${animation} ${settings.duration} ${settings.delay} ${settings.iteration}"></div>`;
                
                const [key, setKey] = useState(0);
                const [isAnimating, setIsAnimating] = useState(false);
                
                const handlePlay = () => {
                    setIsAnimating(true);
                    setKey(prev => prev + 1);
                };

                React.useEffect(() => {
                    if (triggerKey > 0) handlePlay();
                // eslint-disable-next-line react-hooks/exhaustive-deps
                }, [triggerKey]);

                return (
                    <DesignComponentCard
                        key={animation}
                        title={animation}
                        description="Animate.css"
                        code={code}
                        onPlay={handlePlay}
                        isPlaying={isAnimating}
                        onStop={() => setIsAnimating(false)}
                    >
                        <div
                            key={key}
                            className={cn(
                                "w-16 h-16 rounded-lg bg-gradient-to-r flex items-center justify-center text-center p-1",
                                randomTheme,
                                isAnimating && `animate__animated animate__${animation} ${settings.duration} ${settings.delay} ${settings.iteration}`
                            )}
                            onAnimationEnd={() => setIsAnimating(false)}
                        >
                            <p className="text-xs text-white/50">{animation}</p>
                        </div>
                    </DesignComponentCard>
                );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
