---
import { navigationItems } from "../data/navigation";
import { cred } from "../data/site";

// Extract sections from navigation data
const findSection = (name: string) => navigationItems.find((n) => n.name === name);
const frameworkDemos = findSection('framework-demos')?.children ?? [];
const ai = findSection('ai')?.children ?? [];
const design = findSection('design')?.children ?? [];

// Manually curated examples and key pages
const examples = [
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
const externalTools = [
  {
    name: 'omega-tools',
    displayName: 'Omega Tools',
    features: 'Web Developer Utilities',
    path: 'https://tools.omega-spiral.com/',
    icon: 'mdi:tools',
    isExternal: true,
    badge: 'External',
    badgeColor: 'badge-accent'
  }
];

// Build featured list in priority order: Frameworks → Design → AI → Examples
const featured = [
  ...externalTools,
  ...frameworkDemos,
  ...design,
  ...ai,
  ...examples,
];
---

<Layout 
  title="Developer Toolkit" 
  description="A curated collection of code samples, design patterns, and development resources to inspire and accelerate your projects."
  transition:name="home-page"
  transition:animate="fade"
>
  <!-- Hero Section (developer-focused) -->
  <SimpleHero 
    headline="Developer Toolkit" 
    description="A collection of tools, resources, and examples for modern web development."
  />
  
  <section class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <div class="badge badge-lg badge-primary mb-4 animate-bounce">Developer Toolkit</div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Code Snippets & Creative Solutions
        </h1>
        <p class="text-xl md:text-2xl text-base-content/80 mb-8 leading-relaxed">
          A curated collection of production-ready components, design patterns, and development resources to inspire your next project and save you hours of development time.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="#featured" class="btn btn-primary btn-lg">
            <Icon name="mdi:code-braces" class="mr-2" />
            Explore Components
          </a>
          <a href="/design" class="btn btn-outline btn-lg">
            <Icon name="mdi:palette" class="mr-2" />
            Design Patterns
          </a>
          <a href="https://tools.omega-spiral.com/" target="_blank" rel="noopener" class="btn btn-accent btn-lg">
            <Icon name="mdi:tools" class="mr-2" />
            Developer Tools
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Value Propositions -->
  <section class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name="mdi:lightning-bolt" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-2">Save Development Time</h3>
            <p class="text-base-content/70">Production-ready code samples that you can drop right into your projects.</p>
          </div>
        </div>
        <div class="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Icon name="mdi:lightbulb-on" class="w-8 h-8 text-secondary" />
            </div>
            <h3 class="text-xl font-bold mb-2">Creative Inspiration</h3>
            <p class="text-base-content/70">Discover innovative UI patterns and interaction ideas for your next project.</p>
          </div>
        </div>
        <div class="card bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="mdi:briefcase" class="w-8 h-8 text-accent" />
            </div>
            <h3 class="text-xl font-bold mb-2">Employer Showcase</h3>
            <p class="text-base-content/70">Demonstrating expertise in modern web technologies and best practices.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Resource Cards -->
  <section id="featured" class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">Featured Resources</h2>
        <p class="text-base-content/70 max-w-2xl mx-auto">
          Handpicked components, templates, and tools to accelerate your development workflow.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featured.map((item) => {
          const isExternal = (item as any).isExternal || false;
          const linkAttrs = isExternal 
            ? { target: '_blank', rel: 'noopener noreferrer' } 
            : {};
            
          return (
            <a 
              href={item.path} 
              class="group relative block h-full"
              {...linkAttrs}
              aria-label={`Open ${item.displayName}${isExternal ? ' (opens in new tab)' : ''}`}
            >
              <div class="card h-full bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                <div class="card-body p-6">
                  <div class="flex items-start gap-4">
                    {item.icon && (
                      <div class="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                        <Icon name={item.icon} class="w-6 h-6" />
                      </div>
                    )}
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2">
                        <h3 class="card-title text-lg font-semibold truncate">{item.displayName}</h3>
                        {isExternal && (
                          <span class="shrink-0">
                            <Icon name="mdi:open-in-new" class="w-4 h-4 opacity-70" />
                          </span>
                        )}
                      </div>
                      <p class="text-base-content/70 text-sm mt-1 line-clamp-2">{item.features}</p>
                    </div>
                  </div>
                  
                  <div class="mt-4 pt-4 border-t border-base-200 flex items-center justify-between">
                    <div class="flex gap-2">
                      {(item as any).isNew && <span class="badge badge-primary badge-sm">New</span>}
                      {(item as any).badge && (
                        <span class={`badge badge-sm ${(item as any).badgeColor ?? 'badge-secondary'}`}>
                          {(item as any).badge}
                        </span>
                      )}
                    </div>
                    <span class="btn btn-ghost btn-sm group-hover:btn-primary transition-colors">
                      {isExternal ? 'Visit Site' : 'View Details'}
                    </span>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </a>
          );
        })}
      </div>
      
      <div class="text-center mt-12">
        <a href="/portfolio" class="btn btn-outline btn-wide">
          View Full Portfolio
          <Icon name="mdi:arrow-right" class="ml-2" />
        </a>
      </div>
    </div>
  </section>

  <!-- Quick Sections -->
  <section class="py-6">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Frameworks -->
      <div class="card bg-base-100">
        <div class="card-body p-5">
          <h3 class="card-title mb-2">Frameworks</h3>
          <div class="flex flex-wrap gap-2">
            {frameworkDemos.map((f) => (
              <a href={f.path} class="badge badge-outline hover:badge-primary">{f.displayName}</a>
            ))}
          </div>
        </div>
      </div>
      <!-- Design -->
      <div class="card bg-base-100">
        <div class="card-body p-5">
          <h3 class="card-title mb-2">Design</h3>
          <div class="flex flex-wrap gap-2">
            {design.map((d) => (
              <a href={d.path} class="badge badge-outline hover:badge-primary">{d.displayName}</a>
            ))}
          </div>
        </div>
      </div>
      <!-- AI -->
      <div class="card bg-base-100">
        <div class="card-body p-5">
          <h3 class="card-title mb-2">AI</h3>
          <div class="flex flex-wrap gap-2">
            {ai.map((a) => (
              <a href={a.path} class="badge badge-outline hover:badge-primary">{a.displayName}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
