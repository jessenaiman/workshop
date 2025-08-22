import type { ReactNode } from 'react';

export interface ComponentData {
  name: string;
  description: string;
  slug: string;
  preview: ReactNode;
  code: string;
}

export const components: ComponentData[] = [
  {
    name: 'Shine Card',
    description: 'A card that emits a shimmering light effect on hover.',
    slug: 'shine-card',
    preview: (
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 group">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
          Shine Card
        </p>
        <div
          className="pointer-events-none absolute inset-[-100%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>
    ),
    code: `<div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
  <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
    Shine Card
  </p>
  <div
    className="pointer-events-none absolute inset-[-100%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    style={{
      backgroundImage:
        'radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 50%)',
      backgroundSize: '100% 100%',
    }}
  />
</div>`,
  },
  {
    name: 'Animated Border Button',
    description: 'A button with a sleek, animated border effect on hover.',
    slug: 'animated-border-button',
    preview: (
      <button className="relative overflow-hidden rounded-lg p-[1px] group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:opacity-75" />
        <div className="relative rounded-lg bg-background px-8 py-4 text-lg text-foreground">
          Click Me
        </div>
      </button>
    ),
    code: `<button className="relative overflow-hidden rounded-lg p-[1px]">
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
  <div className="relative rounded-lg bg-background px-8 py-4 text-lg text-foreground">
    Click Me
  </div>
</button>`,
  },
  {
    name: 'Dock Menu',
    description: 'A macOS-style dock menu with interactive icon scaling.',
    slug: 'dock-menu',
    preview: (
      <div className="flex h-16 items-end gap-2 rounded-lg bg-muted/50 p-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-10 w-10 rounded-full bg-primary transition-transform duration-200 hover:scale-150 hover:-translate-y-2" />
        ))}
      </div>
    ),
    code: `<div className="flex h-16 items-end gap-2 rounded-lg bg-muted/50 p-4">
  {[...Array(4)].map((_, i) => (
    <div key={i} className="h-10 w-10 rounded-full bg-primary transition-transform duration-200 hover:scale-150 hover:-translate-y-2" />
  ))}
</div>`,
  },
];
