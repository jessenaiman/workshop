
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function EffectsPage() {
  return (
    <div className="container mx-auto py-12">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-300" />
            </div>
            <div>
            <h1 className="text-3xl font-bold">Transitions & Effects</h1>
            <p className="text-muted-foreground">Demonstration of various CSS transitions, transforms, and animations.</p>
            </div>
        </div>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Transitions</CardTitle>
            <CardDescription>Hover over the elements to see the transition effects.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              <div className="p-4 bg-primary text-primary-content rounded-lg transition-all duration-300 hover:bg-secondary hover:scale-105 hover:shadow-lg">
                <h3 className="font-bold">All</h3>
                <p className="text-xs">transition-all</p>
              </div>
              <div className="p-4 bg-primary text-primary-content rounded-lg transition-colors duration-300 hover:bg-accent">
                <h3 className="font-bold">Colors</h3>
                <p className="text-xs">transition-colors</p>
              </div>
              <div className="p-4 bg-primary text-primary-content rounded-lg transition-opacity duration-300 hover:opacity-25">
                <h3 className="font-bold">Opacity</h3>
                <p className="text-xs">transition-opacity</p>
              </div>
              <div className="p-4 bg-primary text-primary-content rounded-lg transition-shadow duration-300 hover:shadow-2xl">
                <h3 className="font-bold">Shadow</h3>
                <p className="text-xs">transition-shadow</p>
              </div>
              <div className="p-4 bg-primary text-primary-content rounded-lg transition-transform duration-300 hover:rotate-12">
                <h3 className="font-bold">Transform</h3>
                <p className="text-xs">transition-transform</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Transforms</CardTitle>
              <CardDescription>See how elements can be manipulated in 2D space.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="transition-transform transform hover:scale-125">Scale</Button>
                <Button variant="outline" className="transition-transform transform hover:rotate-45">Rotate</Button>
                <Button variant="outline" className="transition-transform transform hover:translate-x-4 hover:-translate-y-2">Translate</Button>
                <Button variant="outline" className="transition-transform transform hover:skew-x-12">Skew</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animations</CardTitle>
              <CardDescription>Continuous and eye-catching preset animations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center animate-spin">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full"></div>
                  </div>
                  <p className="mt-2 text-sm font-semibold">Spin</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-12 w-12 bg-primary"></span>
                  </span>
                  <p className="mt-2 text-sm font-semibold">Ping</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-muted animate-pulse"></div>
                  <p className="mt-2 text-sm font-semibold">Pulse</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center animate-bounce">
                    <Sparkles className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">Bounce</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
