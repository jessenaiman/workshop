
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { TailwindSample } from "@/components/animation/TailwindSample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TailwindPage() {
  const [triggerAll, setTriggerAll] = useState(false);
  const [settings, setSettings] = useState({
    duration: "duration-1000",
    delay: "delay-0",
    timing: "ease-in-out"
  });

  const handleTriggerAll = () => {
    setTriggerAll(true);
    setTimeout(() => setTriggerAll(false), 5000);
  };

  const animations = [
    { name: "animate-bounce", description: "Bounce animation" },
    { name: "animate-ping", description: "Ping animation" },
    { name: "animate-pulse", description: "Pulse animation" },
    { name: "animate-spin", description: "Spin animation" },
  ];

  return (
    <div className="space-y-8">
       <div className="flex justify-between items-start mb-4 gap-8">
        <Card className="bg-muted/50 w-full max-w-sm">
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
        <Button variant="outline" onClick={handleTriggerAll}>
          <PlayCircle className="w-4 h-4 mr-2" />
          Trigger All Animations
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {animations.map((anim) => (
          <TailwindSample
            key={anim.name}
            animation={anim.name}
            description={anim.description}
            duration={settings.duration}
            delay={settings.delay}
            timing={settings.timing}
            trigger={triggerAll}
          />
        ))}
      </div>
    </div>
  );
}
