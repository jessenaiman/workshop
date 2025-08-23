
"use client";

import { MagicUISample } from "@/components/animation/MagicUISample";
import { DockDemo } from "@/components/animation/DockDemo";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function MagicUIPage() {
  return (
    <div className="space-y-8">
       <NeonGradientCard className="mb-4">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-center">MagicUI Components</h3>
            <p className="text-sm text-muted-foreground text-center">
              MagicUI components are pre-built React components with advanced animations. 
              Settings are implemented at the component level via props.
            </p>
          </div>
        </NeonGradientCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <MagicUISample />
         <DockDemo />
      </div>
    </div>
  );
}
