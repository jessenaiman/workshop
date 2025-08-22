import * as React from "react";
import Link from "next/link";

// Import navigation data
import { navigationItems } from "../data/navigation";

// Extract sections from navigation data
const findSection = (name: string) => navigationItems.find((n) => n.name === name);
const frameworkDemos = findSection('framework-demos')?.children ?? [];
const ai = findSection('ai')?.children ?? [];
const design = findSection('design')?.children ?? [];

// Manually curated examples and key pages
interface Workshop {
  name: string;
  displayName: string;
  features: string;
  path: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
  isExternal?: boolean;
}

const examples: Workshop[] = [
  { name: 'portfolio', displayName: 'Portfolio', features: 'Projects & Case Studies', path: '/portfolio', icon: 'mdi:briefcase' },
  { name: 'resume', displayName: 'Resume', features: 'Experience & Skills', path: '/resume', icon: 'mdi:file-document' },
  { name: 'test-dashboard', displayName: 'Dashboard', features: 'UI + Data Demo', path: '/test-dashboard', icon: 'mdi:view-dashboard' },
  { name: 'live-code', displayName: 'Live Code', features: 'Interactive Coding', path: '/live-code', icon: 'mdi:code-brackets' },
  { name: 'styleguide', displayName: 'Site Stack', features: 'Tech Stack Docs', path: '/styleguide', icon: 'mdi:layers' },
  { name: 'daisyui-styleguide', displayName: 'daisyUI Guide', features: 'Theme & Components', path: '/daisyui-styleguide', icon: 'mdi:palette' },
  { name: 'tailwind-styleguide', displayName: 'Tailwind Guide', features: 'Utilities & Layout', path: '/tailwind-styleguide', icon: 'mdi:tailwind' },
  { name: 'astrojs-styleguide', displayName: 'Astro Guide', features: 'Astro Patterns', path: '/astrojs-styleguide', icon: 'mdi:asterisk' },
];

// External tools and resources
const externalTools: Workshop[] = [
  {
    name: 'omega-tools',
    displayName: 'Omega Tools',
    features: 'Web Developer Utilities',
    path: 'https://tools.omega-spiral.com/',
    icon: 'mdi:tools',
    badge: 'External',
    badgeColor: 'badge-accent',
    isExternal: true,
  }
];

// Build featured list in priority order: Frameworks → Design → AI → Examples
const featured: Workshop[] = [
  ...externalTools,
  ...frameworkDemos,
  ...design,
  ...ai,
  ...examples,
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Developer Toolkit</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of tools, resources, and examples for modern web development.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated collection of code samples, design patterns, and development resources to inspire and accelerate your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className="block group"
              >
                <div className="h-full border rounded-lg p-6 transition-all hover:shadow-lg hover:border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        <div className="w-6 h-6" style={{ backgroundImage: `url(https://api.iconify.design/${item.icon}.svg)` }} />
                      </div>
                      <h3 className="text-xl font-semibold">{item.displayName}</h3>
                    </div>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${item.badgeColor || 'bg-blue-100 text-blue-800'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{item.features}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
