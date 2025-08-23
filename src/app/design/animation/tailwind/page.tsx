
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { TailwindSample } from "@/components/animation/TailwindSample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

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
            <Card className="bg-transparent border-none">
                <CardHeader>
                <CardTitle>Animation Settings</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Select value={settings.duration} onValueChange={(value) => setSettings({ ...settings, duration: value })}>
                            <SelectTrigger id="duration">
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
                            <SelectTrigger id="delay">
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
                            <SelectTrigger id="timing">
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
            <div className="flex justify-center">
                <Button variant="outline" onClick={handleTriggerAll}>
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Trigger All Animations
                </Button>
            </div>
          </div>
        </NeonGradientCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {animations.map((anim) => (
          <TailwindSample
            key={anim.name}
            animation={anim.name}
            description={anim.description}
            duration={settings.duration}
            delay={settings.delay}
            timing={settings.timing}
            triggerKey={triggerKey}
          />
        ))}
      </div>
    </div>
  );
}
