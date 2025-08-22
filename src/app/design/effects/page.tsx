"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TabSwitcher from "@/components/TabSwitcher";

import { Confetti } from '@/components/magicui/confetti';
import { MagicCard } from '@/components/magicui/magic-card';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Particles } from '@/components/magicui/particles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function EffectsPage() {
  const tabOptions = [
    { id: "tailwind", label: "Tailwind CSS", color: "bg-teal-500" },
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" }
  ];

  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tailwind":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-hidden">
            {tailwindEffects.map((effect, index) => (
              <div 
                key={effect.name} 
                className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-48 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mb-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 ${effect.className} group-hover:scale-105 transition-transform duration-300`}
                />
                <p className="text-sm font-medium truncate w-full">{effect.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3 line-clamp-2">{effect.description}</p>
                <Sparkles className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-300 rounded-lg transition-all duration-500"></div>
              </div>
            ))}
          </div>
        );
      case "magicui":
        return (
          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Confetti */}
            <Card>
              <CardHeader>
                <CardTitle>Confetti</CardTitle>
                <CardDescription>Celebratory confetti animation</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <Confetti className="absolute inset-0 w-full h-full" />
                  <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Confetti celebration effect</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Magic Card */}
            <Card>
              <CardHeader>
                <CardTitle>Magic Card</CardTitle>
                <CardDescription>Interactive gradient card</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                  <MagicCard
                    className="p-4 rounded-lg border bg-background cursor-pointer"
                    gradientColor={cn("dark:from-purple-500 dark:to-indigo-500", "from-purple-300 to-indigo-300")}
                  >
                    <p className="text-center">Hover for gradient effect</p>
                  </MagicCard>
                </div>
              </CardContent>
            </Card>

            {/* Neon Gradient Card */}
            <Card>
              <CardHeader>
                <CardTitle>Neon Gradient Card</CardTitle>
                <CardDescription>Eye-catching neon gradient border</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                  <NeonGradientCard className="p-4 rounded-lg border bg-background cursor-pointer">
                    <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-semibold">Hover for neon gradient</p>
                  </NeonGradientCard>
                </div>
              </CardContent>
            </Card>

            {/* Particles */}
            <Card>
              <CardHeader>
                <CardTitle>Particles</CardTitle>
                <CardDescription>Interactive particle animation</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <Particles className="absolute inset-0 w-full h-full" />
                  <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Particle animation effect</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  const tailwindEffects = [
    { name: "Shadow", className: "shadow-lg", description: "Add depth with shadow effects." },
    { name: "Blur", className: "blur-sm", description: "Apply blur for subtle focus." },
    { name: "Grayscale", className: "grayscale", description: "Convert to grayscale for vintage look." },
    { name: "Sepia", className: "sepia", description: "Apply sepia tone for nostalgic feel." },
    { name: "Brightness", className: "brightness-125", description: "Increase brightness for vividness." },
    { name: "Contrast", className: "contrast-125", description: "Enhance contrast for sharper images." },
    { name: "Drop Shadow", className: "drop-shadow-md", description: "Add a floating effect with drop shadow." },
    { name: "Invert", className: "invert", description: "Invert colors for unique visual style." }
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
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
            <Layout className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Visual Effects</h1>
            <p className="text-muted-foreground">Enhance UI with captivating visual effects</p>
          </div>
        </div>
      </div>
      
      <TabSwitcher options={tabOptions} defaultTab="magicui">
        {renderContent}
      </TabSwitcher>
    </div>
  );
}
