// Types for navigation items
export interface NavigationItem {
  name: string;
  displayName: string;
  features: string;
  path: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
  isNew?: boolean;
  children?: NavigationItem[];
}

// Main navigation data structure
export const navigationItems: NavigationItem[] = [
  { 
    name: 'home', 
    displayName: 'Home', 
    features: 'Main Page', 
    path: '/',
    icon: 'lucide:home',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  },
  { 
    name: 'about', 
    displayName: 'About', 
    features: 'About Me', 
    path: '/about',
    icon: 'lucide:user',
    badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  },
  { 
    name: 'portfolio', 
    displayName: 'Portfolio', 
    features: 'My Work', 
    path: '/portfolio',
    icon: 'lucide:briefcase',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    children: [
      { 
        name: 'portfolio-cover', 
        displayName: 'Portfolio Cover', 
        features: 'Portfolio Introduction', 
        path: '/portfolio/cover',
        icon: 'lucide:file-text',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      },
      { 
        name: 'portfolio-main', 
        displayName: 'Portfolio', 
        features: 'Main Portfolio', 
        path: '/portfolio',
        icon: 'lucide:layout-grid',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      },
      { 
        name: 'resume', 
        displayName: 'Resume', 
        features: 'Professional Experience', 
        path: '/portfolio/resume',
        icon: 'lucide:file-text',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      },
      { 
        name: 'traditional', 
        displayName: 'Traditional', 
        features: 'Traditional Portfolio', 
        path: '/portfolio/traditional',
        icon: 'lucide:palette',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      }
    ]
  },
  {
    name: 'ai',
    displayName: 'AI & ML',
    features: 'AI Solutions',
    path: '/ai',
    icon: 'lucide:bot',
    badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    children: [
      { 
        name: 'ai-overview',
        displayName: 'AI Overview',
        features: 'AI Capabilities',
        path: '/ai/overview',
        icon: 'lucide:layout-dashboard',
        badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      },
      { 
        name: 'blockchain-ai', 
        displayName: 'Blockchain AI', 
        features: 'AI on Blockchain', 
        path: '/ai/blockchain-ai',
        icon: 'lucide:link',
        badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      },
      { 
        name: 'chat', 
        displayName: 'AI Chat', 
        features: 'Chat with AI', 
        path: '/ai/flowise-chat',
        icon: 'lucide:message-square',
        badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      },
      { 
        name: 'pollinate-ai', 
        displayName: 'Pollinate AI', 
        features: 'AI Content Generation', 
        path: '/ai/pollinate-ai',
        icon: 'lucide:flower',
        badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      }
    ]
  },
  {
    name: 'design',
    displayName: 'Design',
    features: 'Design System',
    path: '/design',
    icon: 'lucide:palette',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    children: [
      { 
        name: 'animation', 
        displayName: 'Animations', 
        features: 'Motion Design', 
        path: '/design/animation',
        icon: 'lucide:play-circle',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'layouts', 
        displayName: 'Layouts', 
        features: 'Page Layouts', 
        path: '/design/design-layouts',
        icon: 'lucide:layout',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'effects', 
        displayName: 'Effects', 
        features: 'Visual Effects', 
        path: '/design/effects',
        icon: 'lucide:sparkles',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'gradient-demo', 
        displayName: 'Gradients', 
        features: 'Gradient Effects', 
        path: '/design/gradient-demo',
        icon: 'lucide:droplets',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'mobile', 
        displayName: 'Mobile', 
        features: 'Mobile Design', 
        path: '/design/mobile',
        icon: 'lucide:smartphone',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'three-js', 
        displayName: 'Three.js', 
        features: '3D Graphics', 
        path: '/design/three',
        icon: 'lucide:box',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      },
      { 
        name: 'transitions', 
        displayName: 'Transitions', 
        features: 'Page Transitions', 
        path: '/design/transitions',
        icon: 'lucide:arrow-right-left',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      }
    ]
  },
  {
    name: 'frameworks',
    displayName: 'Frameworks',
    features: 'Framework Demos',
    path: '/frameworks',
    icon: 'lucide:code',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
    children: [
      { 
        name: 'react', 
        displayName: 'React', 
        features: 'UI Library', 
        path: '/frameworks/react-framework',
        icon: 'lucide:atom',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
      },
      { 
        name: 'vue', 
        displayName: 'Vue', 
        features: 'Vue 3 Demo',
        path: '/frameworks/vue-framework',
        icon: 'lucide:code-2',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
      },
      { 
        name: 'svelte', 
        displayName: 'Svelte', 
        features: 'Compiler as Framework', 
        path: '/frameworks/svelte-framework',
        icon: 'lucide:zap',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
      },
      { 
        name: 'solid', 
        displayName: 'SolidJS', 
        features: 'Reactive UI Library', 
        path: '/frameworks/solid-framework',
        icon: 'lucide:component',
        badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      },
      {
        name: 'styleguides-magicui',
        displayName: 'MagicUI',
        features: 'MagicUI Components',
        path: '/styleguides/magicui',
        icon: 'lucide:wand-2',
        badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      }
    ]
  },
  {
    name: 'styleguides',
    displayName: 'Style Guides',
    features: 'Design System Documentation',
    path: '/styleguides',
    icon: 'lucide:book-open',
    badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
    children: [
      { 
        name: 'astro', 
        displayName: 'Astro', 
        features: 'Astro Documentation', 
        path: '/styleguides/astrojs-styleguide',
        icon: 'lucide:rocket',
        badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
      },
      { 
        name: 'tailwind', 
        displayName: 'Tailwind CSS', 
        features: 'Utility-First CSS', 
        path: '/styleguides/tailwind-styleguide',
        icon: 'lucide:wind',
        badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
      },
      { 
        name: 'shadcn', 
        displayName: 'shadcn/ui', 
        features: 'UI Components', 
        path: '/styleguides/shadcn-styleguide',
        icon: 'lucide:package',
        badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
      },
      { 
        name: 'magicui', 
        displayName: 'Magic UI', 
        features: 'Animated Components', 
        path: '/styleguides/magicui',
        icon: 'lucide:wand-sparkles',
        badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
        isNew: true,
        children: [
          {
            name: 'backgrounds',
            displayName: 'Backgrounds',
            features: 'Animated Components',
            path: '/styleguides/backgrounds',
            icon: 'lucide:wand-sparkles',
            badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            isNew: true
          },
          {
            name: 'devices',
            displayName: 'Devices',
            features: 'Device Mockups',
            path: '/styleguides/devices',
            icon: 'lucide:wand-sparkles',
            badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            isNew: true
          },
          {
            name: 'interactive',
            displayName: 'Interactive',
            features: 'Interactive Components',
            path: '/styleguides/interactive',
            icon: 'lucide:wand-sparkles',
            badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            isNew: true
          },
          {
            name: 'text',
            displayName: 'Text',
            features: 'Text Effects',
            path: '/styleguides/text',
            icon: 'lucide:wand-sparkles',
            badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            isNew: true
          },
          {
            name: 'utilities',
            displayName: 'Utilities',
            features: 'Utility Components',
            path: '/styleguides/utilities',
            icon: 'lucide:wand-sparkles',
            badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
            isNew: true
          }
        ]
      }
    ]
  }
];