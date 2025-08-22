---
import Layout from '../../../layouts/Layout.astro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

// Interactive Components
import { InteractiveHoverButton } from '../../../components/magicui/interactive-hover-button';
import { PulsatingButton } from '../../../components/magicui/pulsating-button';
import { MagicCard } from '../../../components/magicui/magic-card';
import { ScratchToReveal } from '../../../components/magicui/scratch-to-reveal';
import { CoolMode } from '../../../components/magicui/cool-mode';
import { AnimatedThemeToggler } from '../../../components/magicui/animated-theme-toggler';

// Icons
import { MousePointer, ArrowLeft } from 'lucide-react';
---

<Layout 
  title="Interactive Components | MagicUI"
  description="Engaging interactive UI components from MagicUI"
>
  <div class="container mx-auto py-12">
    <div class="mb-8">
      <Button variant="ghost" asChild className="mb-6">
        <a href="/styleguides/magicui" class="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Components
        </a>
      </Button>
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
          <MousePointer className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <h1 class="text-3xl font-bold">Interactive Elements</h1>
          <p class="text-muted-foreground">Engaging UI components that respond to user interactions</p>
        </div>
      </div>
    </div>

    <div class="grid gap-8">
      <!-- Interactive Hover Button -->
      <Card>
        <CardHeader>
          <CardTitle>Interactive Hover Button</CardTitle>
          <CardDescription>Button with interactive hover effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <InteractiveHoverButton>Hover Over Me</InteractiveHoverButton>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<InteractiveHoverButton>Hover Over Me</InteractiveHoverButton>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Pulsating Button -->
      <Card>
        <CardHeader>
          <CardTitle>Pulsating Button</CardTitle>
          <CardDescription>Button with a gentle pulsing animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <PulsatingButton>Click Me</PulsatingButton>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<PulsatingButton>Click Me</PulsatingButton>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Magic Card -->
      <Card>
        <CardHeader>
          <CardTitle>Magic Card</CardTitle>
          <CardDescription>Card with magical hover effects</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <MagicCard className="w-64 h-48 flex items-center justify-center">
              <p class="text-center p-4">Hover over me</p>
            </MagicCard>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<MagicCard className="w-64 h-48 flex items-center justify-center">
  <p>Hover over me</p>
</MagicCard>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Scratch to Reveal -->
      <Card>
        <CardHeader>
          <CardTitle>Scratch to Reveal</CardTitle>
          <CardDescription>Reveal content by scratching</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <div class="w-full max-w-md h-48 bg-muted rounded-lg flex items-center justify-center">
              <ScratchToReveal 
                width={400} 
                height={192}
                className="w-full h-full"
              >
                <div class="w-full h-full bg-primary/10 flex items-center justify-center">
                  <p class="text-center p-4">You found me!</p>
                </div>
              </ScratchToReveal>
            </div>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<ScratchToReveal 
  width={400} 
  height={192}
  className="w-full h-full"
>
  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
    <p>You found me!</p>
  </div>
</ScratchToReveal>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Cool Mode -->
      <Card>
        <CardHeader>
          <CardTitle>Cool Mode</CardTitle>
          <CardDescription>Interactive cool mode effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <CoolMode>
              <div class="p-6 bg-muted rounded-lg text-center">
                <p>Click and drag to see the effect</p>
              </div>
            </CoolMode>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<CoolMode className="w-full max-w-md">
  <div className="p-6 bg-muted rounded-lg text-center">
    <p>Click and drag to see the effect</p>
  </div>
</CoolMode>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Animated Theme Toggler -->
      <Card>
        <CardHeader>
          <CardTitle>Animated Theme Toggler</CardTitle>
          <CardDescription>Theme switcher with animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <AnimatedThemeToggler />
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<AnimatedThemeToggler />`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</Layout>
