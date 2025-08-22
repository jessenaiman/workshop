"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { ANIMATIONS, COLOR_THEMES } from "@/data/animation";
import { AnimateCssSample } from "@/components/animation/AnimateCssSample";
import "animate.css";

export default function AnimateCssPage() {
  const [triggerAll, setTriggerAll] = useState(false);
  const [settings, setSettings] = useState({
    duration: "animate__duration-1s",
    delay: "animate__delay-0s",
    iteration: "animate__repeat-1"
  });

  const handleTriggerAll = () => {
    setTriggerAll(true);
    setTimeout(() => setTriggerAll(false), 5000);
  };

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
              <option value="animate__duration-0.5s">0.5s</option>
              <option value="animate__duration-1s">1s</option>
              <option value="animate__duration-2s">2s</option>
              <option value="animate__duration-3s">3s</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Delay</label>
            <select
              className="w-full p-2 border rounded-md"
              value={settings.delay}
              onChange={(e) => setSettings({ ...settings, delay: e.target.value })}
            >
              <option value="animate__delay-0s">0s</option>
              <option value="animate__delay-1s">1s</option>
              <option value="animate__delay-2s">2s</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Iteration</label>
            <select
              className="w-full p-2 border rounded-md"
              value={settings.iteration}
              onChange={(e) => setSettings({ ...settings, iteration: e.target.value })}
            >
              <option value="animate__repeat-1">1</option>
              <option value="animate__repeat-2">2</option>
              <option value="animate__repeat-3">3</option>
              <option value="animate__repeat-infinite">Infinite</option>
            </select>
          </div>
        </div>
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
                trigger={triggerAll}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}