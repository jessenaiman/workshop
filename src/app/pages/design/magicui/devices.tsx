---
import Layout from '../../../layouts/Layout.astro';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

// Device Components
import Android from '../../../components/magicui/android';
import Iphone15Pro from '../../../components/magicui/iphone-15-pro';

// Icons
import { Smartphone, ArrowLeft } from 'lucide-react';
---

<Layout 
  title="Device Mocks | MagicUI"
  description="Device mockup components from MagicUI"
>
  <div class="container mx-auto py-12">
    <div class="mb-8">
      <Button variant="ghost" asChild className="mb-6">
        <a href="/styleguides/magicui" class="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Components
        </a>
      </Button>
      
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-yellow-600 dark:text-yellow-300" />
        </div>
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Device Mocks</h1>
          <p class="text-muted-foreground">Realistic device mockups for showcasing your applications</p>
        </div>
      </div>
    </div>

    <div class="grid gap-8">
      <!-- iPhone 15 Pro -->
      <Card>
        <CardHeader>
          <CardTitle>iPhone 15 Pro</CardTitle>
          <CardDescription>Realistic iPhone 15 Pro mockup</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <div class="w-full max-w-xs">
              <Iphone15Pro>
                <div class="w-full h-full bg-background p-4 flex items-center justify-center">
                  <p class="text-center">Your app content here</p>
                </div>
              </Iphone15Pro>
            </div>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<Iphone15Pro>
  <div class="w-full h-full bg-background p-4 flex items-center justify-center">
    <p>Your app content here</p>
  </div>
</Iphone15Pro>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Android -->
      <Card>
        <CardHeader>
          <CardTitle>Android</CardTitle>
          <CardDescription>Realistic Android device mockup</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div class="flex justify-center p-8">
            <div class="w-full max-w-xs">
              <Android>
                <div class="w-full h-full bg-background p-4 flex items-center justify-center">
                  <p class="text-center">Your app content here</p>
                </div>
              </Android>
            </div>
          </div>
          <div class="bg-muted p-4 rounded-lg">
            <pre class="text-sm">
{`<Android>
  <div class="w-full h-full bg-background p-4 flex items-center justify-center">
    <p>Your app content here</p>
  </div>
</Android>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <!-- Device Mock Usage Example -->
      <Card>
        <CardHeader>
          <CardTitle>Usage Example</CardTitle>
          <CardDescription>How to use device mocks in your projects</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div class="space-y-4">
            <h3 class="font-medium">Basic Usage</h3>
            <div class="bg-muted p-4 rounded-lg">
              <pre class="text-sm">
{`// Import the device component
import { Iphone15Pro } from 'path/to/magicui/iphone-15-pro';

// Use it in your component
<Iphone15Pro className="w-64">
  <div className="w-full h-full bg-background p-4">
    {/* Your app content */}
  </div>
</Iphone15Pro>`}
              </pre>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-medium">With Custom Content</h3>
            <div class="bg-muted p-4 rounded-lg">
              <pre class="text-sm">
{`<Iphone15Pro 
  className="w-80"
  style={{
    '--device-color': '#1e1e1e', // Dark color
    '--screen-background': '#ffffff',
  }}
>
  <div className="w-full h-full flex flex-col">
    <header className="p-4 border-b">
      <h3 className="font-semibold">My App</h3>
    </header>
    <main className="flex-1 p-4">
      <p>Your app content goes here</p>
    </main>
    <footer className="p-4 border-t">
      <p className="text-sm text-muted-foreground">Swipe up to continue</p>
    </footer>
  </div>

</Iphone15Pro>`}
              </pre>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-medium">Available Props</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2">Prop</th>
                    <th class="text-left p-2">Type</th>
                    <th class="text-left p-2">Default</th>
                    <th class="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2 font-mono">className</td>
                    <td class="p-2">string</td>
                    <td class="p-2">''</td>
                    <td class="p-2">Additional CSS classes</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 font-mono">style</td>
                    <td class="p-2">CSSProperties</td>
                    <td class="p-2">{}</td>
                    <td class="p-2">Custom styles including CSS variables</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 font-mono">children</td>
                    <td class="p-2">ReactNode</td>
                    <td class="p-2">-</td>
                    <td class="p-2">Content to display in the device screen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</Layout>
