"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { TailwindSample } from "@/components/animation/TailwindSample";

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
    { name: "animate-pulse-slow", description: "Slow pulse animation" },
    { name: "animate-bounce-delayed", description: "Delayed bounce" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-4">
        <Button variant="outline" onClick={handleTriggerAll}>
          <PlayCircle className="w-4 h-4 mr-2" />
          Trigger All Animations
        </Button>
      </div>

      <div className="bg-muted p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <select
              className="w-full p-2 border rounded-md"
              value={settings.duration}
              onChange={(e) => setSettings({ ...settings, duration: e.target.value })}
            >
              <option value="duration-500">0.5s</option>
              <option value="duration-700">0.7s</option>
              <option value="duration-1000">1s</option>
              <option value="duration-1500">1.5s</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Delay</label>
            <select
              className="w-full p-2 border rounded-md"
              value={settings.delay}
              onChange={(e) => setSettings({ ...settings, delay: e.target.value })}
            >
              <option value="delay-0">0s</option>
              <option value="delay-100">0.1s</option>
              <option value="delay-300">0.3s</option>
              <option value="delay-500">0.5s</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Timing</label>
            <select
              className="w-full p-2 border rounded-md"
              value={settings.timing}
              onChange={(e) => setSettings({ ...settings, timing: e.target.value })}
            >
              <option value="ease-linear">Linear</option>
              <option value="ease-in">Ease In</option>
              <option value="ease-out">Ease Out</option>
              <option value="ease-in-out">Ease In Out</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-hidden">
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
