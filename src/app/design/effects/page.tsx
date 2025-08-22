
"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TabSwitcher from "@/components/TabSwitcher";

import { Confetti } from '@/components/magicui/confetti';
import { MagicCard } from '@/components/magicui/magic-card';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Particles } from '@/components/magicui/particles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeModal } from "@/components/ui/CodeModal";

export default function EffectsPage() {
  const tabOptions = [
    { id: "magicui", label: "MagicUI", color: "bg-purple-500" }
  ];

  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "magicui":
        return (
          <div className="grid gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Confetti</CardTitle>
                  <CardDescription>Celebratory confetti animation</CardDescription>
                </div>
                <CodeModal
                  title="Confetti"
                  code={`<Confetti />`}
                  language="tsx"
                  iconOnly
                />
              </CardHeader>
              <CardContent>
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <Confetti className="absolute inset-0 w-full h-full" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Magic Card</CardTitle>
                  <CardDescription>Interactive gradient card</CardDescription>
                </div>
                <CodeModal
                  title="Magic Card"
                  code={`<MagicCard>...</MagicCard>`}
                  language="tsx"
                  iconOnly
                />
              </CardHeader>
              <CardContent className="flex justify-center p-8">
                <MagicCard className="w-64 h-32 flex items-center justify-center">
                  <p className="text-center">Hover for gradient effect</p>
                </MagicCard>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Neon Gradient Card</CardTitle>
                  <CardDescription>Eye-catching neon gradient border</CardDescription>
                </div>
                <CodeModal
                  title="Neon Gradient Card"
                  code={`<NeonGradientCard>...</NeonGradientCard>`}
                  language="tsx"
                  iconOnly
                />
              </CardHeader>
              <CardContent className="flex justify-center p-8">
                <NeonGradientCard className="w-64 h-32 flex items-center justify-center">
                  <p className="text-center">Hover me</p>
                </NeonGradientCard>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Particles</CardTitle>
                  <CardDescription>Interactive particle animation</CardDescription>
                </div>
                <CodeModal
                  title="Particles"
                  code={`<Particles />`}
                  language="tsx"
                  iconOnly
                />
              </CardHeader>
              <CardContent>
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                  <Particles className="absolute inset-0 w-full h-full" />
                </div>
              </CardContent>
            </Card>
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
