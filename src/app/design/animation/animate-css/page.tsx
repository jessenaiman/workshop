
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { ANIMATIONS, COLOR_THEMES } from "@/data/animation";
import { AnimateCssSample } from "@/components/animation/AnimateCssSample";
import "animate.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

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
                <SelectTrigger id="duration">
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
                <SelectTrigger id="delay">
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
                <SelectTrigger id="iteration">
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
      <div className="flex justify-between items-start mb-4 gap-8">
        <NeonGradientCard>
          <div className="p-4">
            <Card className="bg-transparent border-none w-full max-w-sm">
                <CardHeader>
                <CardTitle>Animation Settings</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {animationControls}
                </div>
                </CardContent>
            </Card>
          </div>
        </NeonGradientCard>
        <Button variant="outline" onClick={handleTriggerAll}>
          <PlayCircle className="w-4 h-4 mr-2" />
          Trigger All Animations
        </Button>
      </div>

      {Object.entries(ANIMATIONS).map(([category, animations]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {animations.map((animation, index) => (
              <AnimateCssSample
                key={animation}
                animation={animation}
                colorTheme={COLOR_THEMES[index % COLOR_THEMES.length]}
                duration={settings.duration}
                delay={settings.delay}
                iteration={settings.iteration}
                triggerKey={triggerKey}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
