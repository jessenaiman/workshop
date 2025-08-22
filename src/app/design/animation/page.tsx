
'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ANIMATIONS, COLOR_THEMES } from '@/app/data/animation';
import { PlayCircle } from 'lucide-react';

export default function AnimationPage() {
  const [animation, setAnimation] = useState('bounce');
  const [colorTheme, setColorTheme] = useState(COLOR_THEMES[0]);
  const [key, setKey] = useState(0);

  const triggerAnimation = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-12">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
            <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-300" />
            </div>
            <div>
            <h1 className="text-3xl font-bold">Animations</h1>
            <p className="text-muted-foreground">Explore various animation styles</p>
            </div>
        </div>

      <Card>
        <CardHeader>
          <CardTitle>Animation Playground</CardTitle>
          <CardDescription>Select an animation and color theme to see it in action.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Animation Style</label>
                <Select value={animation} onValueChange={setAnimation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select animation" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ANIMATIONS).map(([group, list]) => (
                      <div key={group}>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">{group}</div>
                        {list.map(anim => (
                          <SelectItem key={anim} value={anim}>{anim}</SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Color Theme</label>
                <Select value={colorTheme} onValueChange={setColorTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLOR_THEMES.map(theme => (
                      <SelectItem key={theme} value={theme}>
                        <div className={`w-full h-6 rounded-md bg-gradient-to-r ${theme}`} />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={triggerAnimation}>Trigger Animation</Button>
            </div>

            <div className="flex items-center justify-center min-h-[200px] bg-muted/50 rounded-lg p-8">
              <div
                key={key}
                className={`w-32 h-32 rounded-lg bg-gradient-to-br ${colorTheme} flex items-center justify-center animate__animated animate__${animation}`}
              >
                <span className="text-white font-bold text-lg">Animate</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
