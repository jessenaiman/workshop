---
import Layout from '../../../layouts/Layout.astro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

// Background Components
import { AnimatedGridPattern } from '../../../components/magicui/animated-grid-pattern';
import { BorderBeam } from '../../../components/magicui/border-beam';
import { DotPattern } from '../../../components/magicui/dot-pattern';
import { FlickeringGrid } from '../../../components/magicui/flickering-grid';
import { Meteors } from '../../../components/magicui/meteors';
import { Particles } from '../../../components/magicui/particles';
import { RetroGrid } from '../../../components/magicui/retro-grid';
import { ShineBorder } from '../../../components/magicui/shine-border';
import { WarpBackground } from '../../../components/magicui/warp-background';

// Icons
import { Layout, ArrowLeft } from 'lucide-react';
---

<Layout 
  title="Backgrounds & Effects | MagicUI"
  description="Stunning backgrounds and visual effects from MagicUI"
>
  <div class="container mx-auto py-12">
    <div class="mb-8">
      <Button variant="ghost" asChild className="mb-6">
        <a href="/styleguides/magicui" class="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Components
        </a>
      </Button>
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
          <Layout className="w-5 h-5 text-green-600 dark:text-green-300" />
        </div>
        <div>
          <h1 class="text-3xl font-bold">Backgrounds & Effects</h1>
          <p class="text-muted-foreground">Stunning visual effects and background patterns</p>
        </div>
      </div>
    </div>

    <div class="grid gap-8">
      <!-- Animated Grid Pattern -->
      <Card>
        <CardHeader>
          <CardTitle>Animated Grid Pattern</CardTitle>
          <CardDescription>Dynamic grid pattern animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <AnimatedGridPattern 
              className="absolute inset-0 w-full h-full"
              gridWidth={30}
              gridHeight={30}
            />
            <div class="relative z-10 flex items-center justify-center">
              <p class="text-center font-medium">Hover over the grid</p>
            </div>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<div class="relative h-64 overflow-hidden rounded-lg bg-background">
  <AnimatedGridPattern 
    className="absolute inset-0 w-full h-full"
    gridWidth={30}
    gridHeight={30}
  />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Border Beam -->
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
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative p-8 rounded-lg bg-background border">
  <BorderBeam className="z-0" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Dot Pattern -->
      <Card>
        <CardHeader>
          <CardTitle>Dot Pattern</CardTitle>
          <CardDescription>Decorative dot pattern background</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <DotPattern className="absolute inset-0 w-full h-full [--dot-bg:rgb(0,0,0,0.05)] [--dot-color:rgb(0,0,0,0.3)] dark:[--dot-bg:rgb(255,255,255,0.05)] dark:[--dot-color:rgb(255,255,255,0.1)]" />
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-center font-medium">Dot pattern background</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <DotPattern 
    className="absolute inset-0 w-full h-full"
    style={{
      '--dot-bg': 'rgb(0,0,0,0.05)',
      '--dot-color': 'rgb(0,0,0,0.3)',
    }}
  />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Flickering Grid -->
      <Card>
        <CardHeader>
          <CardTitle>Flickering Grid</CardTitle>
          <CardDescription>Grid with flickering animation effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <FlickeringGrid className="absolute inset-0 w-full h-full" />
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-center font-medium">Flickering grid effect</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <FlickeringGrid className="absolute inset-0 w-full h-full" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Meteors -->
      <Card>
        <CardHeader>
          <CardTitle>Meteors</CardTitle>
          <CardDescription>Falling meteor animation effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <Meteors className="absolute inset-0 w-full h-full" />
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-center font-medium">Meteor shower effect</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <Meteors className="absolute inset-0 w-full h-full" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Particles -->
      <Card>
        <CardHeader>
          <CardTitle>Particles</CardTitle>
          <CardDescription>Interactive particle animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <Particles className="absolute inset-0 w-full h-full" />
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-center font-medium">Interactive particles</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <Particles className="absolute inset-0 w-full h-full" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Retro Grid -->
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
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <RetroGrid className="absolute inset-0 w-full h-full" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Shine Border -->
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
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<ShineBorder
  className="p-4 rounded-lg border bg-background"
  color={["#06b6d4", "#3b82f6", "#8b5cf6"]}
>
  <p>Content with shine border</p>
</ShineBorder>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Warp Background -->
      <Card>
        <CardHeader>
          <CardTitle>Warp Background</CardTitle>
          <CardDescription>Warp speed background effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
            <WarpBackground className="absolute inset-0 w-full h-full" />
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-center font-medium">Warp speed effect</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
{`<div className="relative h-64 overflow-hidden rounded-lg bg-background">
  <WarpBackground className="absolute inset-0 w-full h-full" />
  <div className="relative z-10">
    <!-- Your content here -->
  </div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</Layout>
