
"use client";

import { useState } from "react";
import { Paintbrush } from "lucide-react";
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
  const tabOptions = [
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" },
    { id: "tailwind", label: "Tailwind CSS", color: "bg-teal-500" }
  ];

  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tailwind":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tailwindBackgrounds.map((bg, index) => (
              <Card 
                key={bg.name} 
                className="p-6 text-center h-48 relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
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
                <Card>
                    <CardHeader>
                        <CardTitle>Animated Grid Pattern</CardTitle>
                        <CardDescription>Dynamic grid pattern animation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <AnimatedGridPattern 
                            className="absolute inset-0 w-full h-full"
                        />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Hover over the grid</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card>
                    <CardHeader>
                        <CardTitle>Dot Pattern</CardTitle>
                        <CardDescription>Decorative dot pattern background</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <DotPattern className={cn(
                            "[--dot-bg:theme(colors.background)] [--dot-color:theme(colors.muted-foreground)]"
                        )} />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Dot pattern background</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card>
                    <CardHeader>
                        <CardTitle>Meteors</CardTitle>
                        <CardDescription>Falling meteor animation effect</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <Meteors number={20} />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Meteor shower effect</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>

            <InteractiveMagicCard>
                <Card>
                    <CardHeader>
                        <CardTitle>Retro Grid</CardTitle>
                        <CardDescription>Retro-style grid background</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                        <RetroGrid className="absolute inset-0 w-full h-full" />
                        <div className="relative z-10 flex items-center justify-center">
                            <p className="text-center font-medium">Retro grid background</p>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </InteractiveMagicCard>
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
