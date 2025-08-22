---
import Layout from '../../../layouts/Layout.astro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

// Text Components
import { AnimatedGradientText } from '../../../components/magicui/animated-gradient-text';
import { AnimatedShinyText } from '../../../components/magicui/animated-shiny-text';
import { AuroraText } from '../../../components/magicui/aurora-text';
import { HyperText } from '../../../components/magicui/hyper-text';
import { TextAnimate } from '../../../components/magicui/text-animate';
import { TextReveal } from '../../../components/magicui/text-reveal';
import { TypingAnimation } from '../../../components/magicui/typing-animation';
import { WordRotate } from '../../../components/magicui/word-rotate';

// Icons
import { Type, ArrowLeft } from 'lucide-react';
---

<Layout 
  title="Text Effects | MagicUI"
  description="Beautiful text effects and typography components from MagicUI"
>
  <div class="container mx-auto py-12">
    <div class="mb-8">
      <Button variant="ghost" asChild className="mb-6">
        <a href="/styleguides/magicui" class="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Components
        </a>
      </Button>
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
          <Type className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        </div>
        <div>
          <h1 class="text-3xl font-bold">Text Effects</h1>
          <p class="text-muted-foreground">Beautiful typography and text animations</p>
        </div>
      </div>
    </div>

    <div class="grid gap-8">
      <!-- Animated Gradient Text -->
      <Card>
        <CardHeader>
          <CardTitle>Animated Gradient Text</CardTitle>
          <CardDescription>Text with a smooth gradient animation effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <AnimatedGradientText className="text-3xl font-bold">
              Hover over me to see the effect
            </AnimatedGradientText>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<AnimatedGradientText className="text-3xl font-bold">
  Hover over me to see the effect
</AnimatedGradientText>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Animated Shiny Text -->
      <Card>
        <CardHeader>
          <CardTitle>Animated Shiny Text</CardTitle>
          <CardDescription>Text with a shiny animation effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <AnimatedShinyText className="text-3xl font-bold">
              Shiny Effect Text
            </AnimatedShinyText>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<AnimatedShinyText className="text-3xl font-bold">
  Shiny Effect Text
</AnimatedShinyText>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Aurora Text -->
      <Card>
        <CardHeader>
          <CardTitle>Aurora Text</CardTitle>
          <CardDescription>Text with aurora borealis effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <AuroraText className="text-3xl font-bold">
              Aurora Effect Text
            </AuroraText>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<AuroraText className="text-3xl font-bold">
  Aurora Effect Text
</AuroraText>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Hyper Text -->
      <Card>
        <CardHeader>
          <CardTitle>Hyper Text</CardTitle>
          <CardDescription>Text with hyperlink-style animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <HyperText className="text-3xl font-bold">
              Hover Over This Text
            </HyperText>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<HyperText className="text-3xl font-bold">
  Hover Over This Text
</HyperText>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Text Animate -->
      <Card>
        <CardHeader>
          <CardTitle>Text Animate</CardTitle>
          <CardDescription>Animated text with various effects</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <TextAnimate className="text-3xl font-bold">
              Animate Me
            </TextAnimate>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<TextAnimate className="text-3xl font-bold">
  Animate Me
</TextAnimate>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Text Reveal -->
      <Card>
        <CardHeader>
          <CardTitle>Text Reveal</CardTitle>
          <CardDescription>Text that reveals on scroll</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <TextReveal className="text-3xl font-bold">
              Scroll to reveal this text
            </TextReveal>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<TextReveal className="text-3xl font-bold">
  Scroll to reveal this text
</TextReveal>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Typing Animation -->
      <Card>
        <CardHeader>
          <CardTitle>Typing Animation</CardTitle>
          <CardDescription>Simulated typing effect</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <div class="text-2xl font-bold">
              <TypingAnimation>Hello, welcome to MagicUI!</TypingAnimation>
            </div>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
              {`<TypingAnimation>
  Hello, welcome to MagicUI!
</TypingAnimation>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Word Rotate -->
      <Card>
        <CardHeader>
          <CardTitle>Word Rotate</CardTitle>
          <CardDescription>Rotating words animation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <WordRotate 
              className="text-3xl font-bold" 
              words={['amazing', 'beautiful', 'interactive', 'magical']} 
            />
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<WordRotate 
  class="text-3xl font-bold" 
  words={['amazing', 'beautiful', 'interactive', 'magical']} 
/>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</Layout>
