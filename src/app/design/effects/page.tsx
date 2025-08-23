
"use client";

import { Button } from '@/components/ui/button';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Confetti } from '@/components/magicui/confetti';
import { MagicCard } from '@/components/magicui/magic-card';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Particles } from '@/components/magicui/particles';
import { DesignComponentCard } from '@/components/design/design-component-card';

export default function EffectsPage() {
  const effects = [
    {
      name: "Confetti",
      description: "Celebratory confetti animation",
      component: <Confetti className="absolute inset-0 w-full h-full" />,
      code: `<Confetti />`
    },
    {
      name: "Magic Card",
      description: "Interactive gradient card",
      component: (
        <MagicCard className="w-64 h-32 flex items-center justify-center">
          <p className="text-center">Hover for gradient effect</p>
        </MagicCard>
      ),
      code: `<MagicCard>...</MagicCard>`
    },
    {
      name: "Neon Gradient Card",
      description: "Eye-catching neon gradient border",
      component: (
        <NeonGradientCard className="w-64 h-32 flex items-center justify-center">
          <p className="text-center">Hover me</p>
        </NeonGradientCard>
      ),
      code: `<NeonGradientCard>...</NeonGradientCard>`
    },
    {
      name: "Particles",
      description: "Interactive particle animation",
      component: <Particles className="absolute inset-0 w-full h-full" />,
      code: `<Particles />`
    }
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
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
            <Layout className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Visual Effects</h1>
            <p className="text-muted-foreground">Enhance UI with captivating visual effects</p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {effects.map((effect) => (
            <DesignComponentCard
              key={effect.name}
              title={effect.name}
              description={effect.description}
              code={effect.code}
            >
              <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                {effect.component}
              </div>
            </DesignComponentCard>
        ))}
      </div>
    </div>
  );
}
