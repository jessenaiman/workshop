
"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TabSwitcher from "@/components/TabSwitcher";
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { Meteors } from '@/components/magicui/meteors';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { cn } from '@/lib/utils';
import { Slider } from "@/components/ui/slider";
import { useBackground } from "@/context/BackgroundContext";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/bubble";
import { FireworksBackground } from "@/components/animate-ui/backgrounds/fireworks";
import { GradientBackground } from "@/components/animate-ui/backgrounds/gradient";
import { HexagonBackground } from "@/components/animate-ui/backgrounds/hexagon";
import { HoleBackground } from "@/components/animate-ui/backgrounds/hole";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import { BackgroundCard } from "@/components/design/background-card";

export default function BackgroundsPage() {
  const [animatedGridProps, setAnimatedGridProps] = useState({ maxOpacity: 0.5, duration: 15 });
  const [meteorsProps, setMeteorsProps] = useState({ number: 20 });
  const [retroGridProps, setRetroGridProps] = useState({ cellSize: 60 });
  const [replayKey, setReplayKey] = useState(0);
  const { setBackgroundComponent } = useBackground();

  const tabOptions = [
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" },
    { id: "tailwind", label: "Tailwind CSS", color: "bg-teal-500" },
    { id: "animateui", label: "Animate UI", color: "bg-blue-500" },
  ];

  const magicUiComponents = [
    {
      name: "Animated Grid Pattern",
      description: "Dynamic grid pattern animation",
      component: <AnimatedGridPattern key={`grid-${replayKey}`} className="absolute inset-0 size-full" {...animatedGridProps} />,
      code: `<AnimatedGridPattern maxOpacity={${animatedGridProps.maxOpacity}} duration={${animatedGridProps.duration}} />`,
      controls: (
        <>
          <div className="space-y-2">
            <p className="text-sm font-medium">Max Opacity: {animatedGridProps.maxOpacity.toFixed(1)}</p>
            <Slider value={[animatedGridProps.maxOpacity]} onValueChange={(v) => setAnimatedGridProps({ ...animatedGridProps, maxOpacity: v[0] })} min={0.1} max={1} step={0.1} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Duration: {animatedGridProps.duration}s</p>
            <Slider value={[animatedGridProps.duration]} onValueChange={(v) => setAnimatedGridProps({ ...animatedGridProps, duration: v[0] })} min={1} max={30} step={1} />
          </div>
        </>
      ),
      onApply: () => setBackgroundComponent(() => <AnimatedGridPattern {...animatedGridProps} className="absolute inset-0 size-full" />),
      onReplay: () => setReplayKey(p => p + 1)
    },
    {
      name: "Dot Pattern",
      description: "Decorative dot pattern background",
      component: <DotPattern className={cn("[--dot-bg:theme(colors.background)] [--dot-color:hsl(var(--muted-foreground))]")} />,
      code: `<DotPattern />`,
      controls: null,
      onApply: () => setBackgroundComponent(() => <DotPattern className={cn("absolute inset-0 size-full [--dot-bg:theme(colors.background)] [--dot-color:hsl(var(--muted-foreground))]")} />),
    },
    {
      name: "Meteors",
      description: "Falling meteor animation effect",
      component: <Meteors key={`meteors-${replayKey}`} {...meteorsProps} />,
      code: `<Meteors number={${meteorsProps.number}} />`,
      controls: (
        <div className="space-y-2">
          <p className="text-sm font-medium">Number of Meteors: {meteorsProps.number}</p>
          <Slider value={[meteorsProps.number]} onValueChange={(v) => setMeteorsProps({ ...meteorsProps, number: v[0] })} min={5} max={50} step={1} />
        </div>
      ),
      onApply: () => setBackgroundComponent(() => <Meteors {...meteorsProps} />),
      onReplay: () => setReplayKey(p => p + 1)
    },
    {
      name: "Retro Grid",
      description: "Retro-style grid background",
      component: <RetroGrid className="absolute inset-0 size-full" {...retroGridProps} />,
      code: `<RetroGrid cellSize={${retroGridProps.cellSize}} />`,
      controls: (
        <div className="space-y-2">
          <p className="text-sm font-medium">Cell Size: {retroGridProps.cellSize}</p>
          <Slider value={[retroGridProps.cellSize]} onValueChange={(v) => setRetroGridProps({ cellSize: v[0] })} min={20} max={100} step={5} />
        </div>
      ),
      onApply: () => setBackgroundComponent(() => <RetroGrid {...retroGridProps} className="absolute inset-0 size-full" />),
    },
  ];

  const animateUiBackgrounds = [
    { name: "Bubble Background", description: "Floating bubble effect.", component: <BubbleBackground className="absolute inset-0 size-full" />, code: "<BubbleBackground />", onApply: () => setBackgroundComponent(() => <BubbleBackground className="absolute inset-0 size-full" />) },
    { name: "Fireworks Background", description: "Exploding fireworks animation.", component: <FireworksBackground className="absolute inset-0 size-full" />, code: "<FireworksBackground />", onApply: () => setBackgroundComponent(() => <FireworksBackground className="absolute inset-0 size-full" />) },
    { name: "Gradient Background", description: "Animated gradient.", component: <GradientBackground className="absolute inset-0 size-full" />, code: "<GradientBackground />", onApply: () => setBackgroundComponent(() => <GradientBackground className="absolute inset-0 size-full" />) },
    { name: "Hexagon Background", description: "Tiling hexagon pattern.", component: <HexagonBackground className="absolute inset-0 size-full" />, code: "<HexagonBackground />", onApply: () => setBackgroundComponent(() => <HexagonBackground className="absolute inset-0 size-full" />) },
    { name: "Hole Background", description: "Expanding hole effect.", component: <HoleBackground className="absolute inset-0 size-full" />, code: "<HoleBackground />", onApply: () => setBackgroundComponent(() => <HoleBackground className="absolute inset-0 size-full" />) },
    { name: "Stars Background", description: "Twinkling starfield.", component: <StarsBackground className="absolute inset-0 size-full" />, code: "<StarsBackground />", onApply: () => setBackgroundComponent(() => <StarsBackground className="absolute inset-0 size-full" />) },
  ];

  const tailwindBackgrounds = [
    { name: "Linear Gradient", className: "from-blue-400 to-purple-500", description: "Smooth linear gradient transition.", code: 'className="bg-gradient-to-r from-blue-400 to-purple-500"' },
    { name: "Radial Gradient", className: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 to-blue-500", description: "Radial gradient for focal points.", code: 'className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 to-blue-500"' },
    { name: "Conic Gradient", className: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-yellow-400 via-red-500 to-blue-500", description: "Conic gradient for unique effects.", code: 'className="bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-yellow-400 via-red-500 to-blue-500"' },
    { name: "Repeating Linear", className: "bg-[repeating-linear-gradient(45deg,theme(colors.muted/80)_0,theme(colors.muted/80)_10px,transparent_10px,transparent_20px)]", description: "Repeating pattern for texture.", code: 'className="bg-[repeating-linear-gradient(45deg,...)]"' }
  ];


  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tailwind":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tailwindBackgrounds.map((bg) => (
              <BackgroundCard
                key={bg.name}
                title={bg.name}
                description={bg.description}
                code={bg.code}
                controls={null}
                onApply={null}
                isInteractive={false}
              >
                <div className={cn("w-full h-full rounded bg-gradient-to-r", bg.className)} />
              </BackgroundCard>
            ))}
          </div>
        );
      case "magicui":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {magicUiComponents.map((item) => (
              <BackgroundCard
                key={item.name}
                title={item.name}
                description={item.description}
                code={item.code}
                controls={item.controls}
                onApply={item.onApply}
                onReplay={item.onReplay}
              >
                {item.component}
                <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium text-muted-foreground/50">{item.name}</p>
                </div>
              </BackgroundCard>
            ))}
          </div>
        );
      case "animateui":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animateUiBackgrounds.map(bg => (
              <BackgroundCard
                key={bg.name}
                title={bg.name}
                description={bg.description}
                code={bg.code}
                onApply={bg.onApply}
                controls={null}
              >
                {bg.component}
              </BackgroundCard>
            ))}
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/design" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Design
          </Link>
        </Button>
      </div>
      
      <TabSwitcher options={tabOptions} defaultTab="magicui">
        {renderContent}
      </TabSwitcher>
    </div>
  );
}
