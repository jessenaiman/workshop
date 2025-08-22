
"use client";

import { useState } from "react";
import { Paintbrush, Code, Play, Settings, SlidersHorizontal, Eye } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TabSwitcher from "@/components/TabSwitcher";
import { MagicCard } from '@/components/magicui/magic-card';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { BorderBeam } from '@/components/magicui/border-beam';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { Meteors } from '@/components/magicui/meteors';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/animate-ui/radix/dialog";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { useBackground } from "@/context/BackgroundContext";

function InteractiveMagicCard({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MagicCard
            className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             {isHovered ? <BorderBeam size={250} duration={12} delay={9} /> : <ShineBorder />}
            {children}
        </MagicCard>
    );
}


export default function BackgroundsPage() {
  const [animatedGridProps, setAnimatedGridProps] = useState({ maxOpacity: 0.5, duration: 15 });
  const [meteorsProps, setMeteorsProps] = useState({ number: 20, minDuration: 4, maxDuration: 12 });
  const [retroGridProps, setRetroGridProps] = useState({ cellSize: 60 });
  const [replayKey, setReplayKey] = useState(0);
  const { setBackgroundComponent } = useBackground();


  const tabOptions = [
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" },
    { id: "tailwind", label: "Tailwind CSS", color: "bg-teal-500" },
    { id: "animateui", label: "Animate UI", color: "bg-blue-500" },
  ];

  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tailwind":
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tailwindBackgrounds.map((bg, index) => (
                <Card 
                    key={bg.name} 
                    className="p-6 text-center h-48 relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105 bg-muted/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div
                    className={`w-full h-24 mb-3 rounded bg-gradient-to-r ${bg.className} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <CardTitle className="text-sm font-medium truncate w-full">{bg.name}</CardTitle>
                    <CardDescription className="text-xs mt-1 line-clamp-2">{bg.description}</CardDescription>
                </Card>
                ))}
            </div>
        );
      case "magicui":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InteractiveMagicCard>
                <Card className="bg-muted/30">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>Animated Grid Pattern</CardTitle>
                                <CardDescription>Dynamic grid pattern animation</CardDescription>
                            </div>
                            <div className="flex gap-2">
                                <Popover>
                                    <PopoverTrigger asChild><Button variant="ghost" size="icon"><Settings className="h-4 w-4"/></Button></PopoverTrigger>
                                    <PopoverContent className="w-64 space-y-4">
                                        <div className="space-y-2">
                                            <Label>Max Opacity: {animatedGridProps.maxOpacity.toFixed(1)}</Label>
                                            <Slider value={[animatedGridProps.maxOpacity]} onValueChange={(v) => setAnimatedGridProps({...animatedGridProps, maxOpacity: v[0]})} min={0.1} max={1} step={0.1} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Duration: {animatedGridProps.duration}s</Label>
                                            <Slider value={[animatedGridProps.duration]} onValueChange={(v) => setAnimatedGridProps({...animatedGridProps, duration: v[0]})} min={1} max={20} step={1} />
                                        </div>
                                        <Button variant="outline" size="sm" onClick={() => setBackgroundComponent(() => <AnimatedGridPattern {...animatedGridProps} className="absolute inset-0 size-full" />)}>
                                            <Eye className="mr-2 h-4 w-4" /> Apply to Page
                                        </Button>
                                    </PopoverContent>
                                </Popover>
                                <Dialog>
                                    <DialogTrigger asChild><Button variant="ghost" size="icon"><Code className="h-4 w-4"/></Button></DialogTrigger>
                                    <DialogContent className="max-w-3xl !p-0"><CodeEditor lang="tsx" writing={false} title="Animated Grid Pattern">{`<AnimatedGridPattern maxOpacity={${animatedGridProps.maxOpacity}} duration={${animatedGridProps.duration}} />`}</CodeEditor></DialogContent>
                                </Dialog>
                                <Button variant="ghost" size="icon" onClick={() => setReplayKey(p => p+1)}><Play className="h-4 w-4"/></Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <AnimatedGridPattern 
                            key={`grid-${replayKey}`}
                            className="absolute inset-0 w-full h-full"
                            {...animatedGridProps}
                        />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Hover over the grid</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card className="bg-muted/30">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>Dot Pattern</CardTitle>
                                <CardDescription>Decorative dot pattern background</CardDescription>
                            </div>
                             <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => setBackgroundComponent(() => <DotPattern className={cn("[--dot-bg:theme(colors.background)] [--dot-color:hsl(var(--muted-foreground))]")} />)}>
                                    <Eye className="mr-2 h-4 w-4" /> Apply to Page
                                </Button>
                                <Dialog>
                                    <DialogTrigger asChild><Button variant="ghost" size="icon"><Code className="h-4 w-4"/></Button></DialogTrigger>
                                    <DialogContent className="max-w-3xl !p-0"><CodeEditor lang="tsx" writing={false} title="Dot Pattern">{`<DotPattern />`}</CodeEditor></DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <DotPattern className={cn(
                            "[--dot-bg:theme(colors.background)] [--dot-color:hsl(var(--muted-foreground))]"
                        )} />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Dot pattern background</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card className="bg-muted/30">
                    <CardHeader>
                         <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>Meteors</CardTitle>
                                <CardDescription>Falling meteor animation effect</CardDescription>
                            </div>
                            <div className="flex gap-2">
                                <Popover>
                                    <PopoverTrigger asChild><Button variant="ghost" size="icon"><Settings className="h-4 w-4"/></Button></PopoverTrigger>
                                    <PopoverContent className="w-64 space-y-4">
                                        <div className="space-y-2">
                                            <Label>Number of Meteors: {meteorsProps.number}</Label>
                                            <Slider value={[meteorsProps.number]} onValueChange={(v) => setMeteorsProps({...meteorsProps, number: v[0]})} min={5} max={50} step={1} />
                                        </div>
                                         <Button variant="outline" size="sm" onClick={() => setBackgroundComponent(() => <Meteors {...meteorsProps} />)}>
                                            <Eye className="mr-2 h-4 w-4" /> Apply to Page
                                        </Button>
                                    </PopoverContent>
                                </Popover>
                                 <Dialog>
                                    <DialogTrigger asChild><Button variant="ghost" size="icon"><Code className="h-4 w-4"/></Button></DialogTrigger>
                                    <DialogContent className="max-w-3xl !p-0"><CodeEditor lang="tsx" writing={false} title="Meteors">{`<Meteors number={${meteorsProps.number}} />`}</CodeEditor></DialogContent>
                                </Dialog>
                                <Button variant="ghost" size="icon" onClick={() => setReplayKey(p => p+1)}><Play className="h-4 w-4"/></Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <Meteors key={`meteors-${replayKey}`} {...meteorsProps} />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Meteor shower effect</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card className="bg-muted/30">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle>Retro Grid</CardTitle>
                                    <CardDescription>Retro-style grid background</CardDescription>
                                </div>
                                <div className="flex gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild><Button variant="ghost" size="icon"><Settings className="h-4 w-4"/></Button></PopoverTrigger>
                                        <PopoverContent className="w-64 space-y-4">
                                            <div className="space-y-2">
                                                <Label>Cell Size: {retroGridProps.cellSize}</Label>
                                                <Slider value={[retroGridProps.cellSize]} onValueChange={(v) => setRetroGridProps({cellSize: v[0]})} min={20} max={100} step={5} />
                                            </div>
                                             <Button variant="outline" size="sm" onClick={() => setBackgroundComponent(() => <RetroGrid {...retroGridProps} className="absolute inset-0 size-full" />)}>
                                                <Eye className="mr-2 h-4 w-4" /> Apply to Page
                                            </Button>
                                        </PopoverContent>
                                    </Popover>
                                     <Dialog>
                                        <DialogTrigger asChild><Button variant="ghost" size="icon"><Code className="h-4 w-4"/></Button></DialogTrigger>
                                        <DialogContent className="max-w-3xl !p-0"><CodeEditor lang="tsx" writing={false} title="Retro Grid">{`<RetroGrid cellSize={${retroGridProps.cellSize}} />`}</CodeEditor></DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <RetroGrid className="absolute inset-0 w-full h-full" {...retroGridProps} />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Retro grid background</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>
          </div>
        );
      case "animateui":
        const animateUiBackgrounds = [
            { name: "Bubble Background", description: "Floating bubble effect." },
            { name: "Fireworks Background", description: "Exploding fireworks animation." },
            { name: "Gradient Background", description: "Animated gradient." },
            { name: "Hexagon Background", description: "Tiling hexagon pattern." },
            { name: "Hole Background", description: "Expanding hole effect." },
            { name: "Stars Background", description: "Twinkling starfield." },
        ];
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {animateUiBackgrounds.map(bg => (
                    <InteractiveMagicCard key={bg.name}>
                        <Card className="bg-muted/30">
                            <CardHeader>
                                <CardTitle>{bg.name}</CardTitle>
                                <CardDescription>{bg.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative flex justify-center items-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                                    <p className="text-muted-foreground">Preview coming soon</p>
                                </div>
                            </CardContent>
                        </Card>
                    </InteractiveMagicCard>
                ))}
            </div>
        );
      default:
        return null;
    }
  };

  const tailwindBackgrounds = [
    { name: "Linear Gradient", className: "from-blue-400 to-purple-500", description: "Smooth linear gradient transition." },
    { name: "Radial Gradient", className: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 to-blue-500", description: "Radial gradient for focal points." },
    { name: "Conic Gradient", className: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-yellow-400 via-red-500 to-blue-500", description: "Conic gradient for unique effects." },
    { name: "Repeating Linear", className: "bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-stops))] from-gray-200 to-gray-400", description: "Repeating pattern for texture." }
  ];

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/design" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Design
          </Link>
        </Button>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
            <Layout className="w-5 h-5 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Backgrounds & Effects</h1>
            <p className="text-muted-foreground">Stunning visual effects and background patterns</p>
          </div>
        </div>
      </div>
      
      <TabSwitcher options={tabOptions} defaultTab="magicui">
        {renderContent}
      </TabSwitcher>
    </div>
  );
}
