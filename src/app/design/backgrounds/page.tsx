"use client";

import { useState } from "react";
import { Paintbrush } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TabSwitcher from "@/components/TabSwitcher";

import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { BorderBeam } from '@/components/magicui/border-beam';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { Meteors } from '@/components/magicui/meteors';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function BackgroundsPage() {
  const tabOptions = [
    { id: "tailwind", label: "Tailwind CSS", color: "bg-teal-500" },
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" }
  ];

  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tailwind":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-hidden">
            {tailwindBackgrounds.map((bg, index) => (
              <div 
                key={bg.name} 
                className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-48 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-full h-24 mb-3 rounded bg-gradient-to-r ${bg.className} group-hover:scale-105 transition-transform duration-300`}
                />
                <p className="text-sm font-medium truncate w-full">{bg.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3 line-clamp-2">{bg.description}</p>
                <Paintbrush className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-300 rounded-lg transition-all duration-500"></div>
              </div>
            ))}
          </div>
        );
      case "magicui":
        return (
          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Animated Grid Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>Animated Grid Pattern</CardTitle>
                <CardDescription>Dynamic grid pattern animation</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
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

            {/* Border Beam */}
            <Card>
              <CardHeader>
                <CardTitle>Border Beam</CardTitle>
                <CardDescription>Animated border effect</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8">
                  <div className="relative w-full max-w-md p-8 rounded-lg bg-background border">
                    <BorderBeam className="z-0" />
                    <div className="relative z-10">
                      <p className="text-center">Content with animated border</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dot Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>Dot Pattern</CardTitle>
                <CardDescription>Decorative dot pattern background</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
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

            {/* Meteors */}
            <Card>
              <CardHeader>
                <CardTitle>Meteors</CardTitle>
                <CardDescription>Falling meteor animation effect</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <Meteors number={20} />
                  <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Meteor shower effect</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retro Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Retro Grid</CardTitle>
                <CardDescription>Retro-style grid background</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <RetroGrid className="absolute inset-0 w-full h-full" />
                  <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Retro grid background</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shine Border */}
            <Card>
              <CardHeader>
                <CardTitle>Shine Border</CardTitle>
                <CardDescription>Shining border effect</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                  <ShineBorder
                    className="p-4 rounded-lg border bg-background"
                    color={["#06b6d4", "#3b82f6", "#8b5cf6"]}
                  >
                    <p className="text-center">Content with shine border</p>
                  </ShineBorder>
                </div>
              </CardContent>
            </Card>
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

  const magicUIBackgrounds = [
    { name: "Warp Background", className: "bg-warp-background", description: "Dynamic warp effect for backgrounds." },
    { name: "Flickering Grid", className: "bg-flickering-grid", description: "Grid pattern with flicker animation." },
    { name: "Animated Grid", className: "bg-animated-grid", description: "Smoothly animated grid pattern." },
    { name: "Retro Grid", className: "bg-retro-grid", description: "Retro-style grid for nostalgic design." }
  ];

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/design/magicui" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Components
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
