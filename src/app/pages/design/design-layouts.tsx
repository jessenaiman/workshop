---
import Layout from "../../layouts/Layout.astro";
import CodeSample from "../../components/Astro/CodeSample.astro";

// Page metadata
const title = "Responsive Layouts | Design System";
const description = "Explore responsive layout patterns built with Tailwind CSS and daisyUI, including flexbox, grid, and more.";

// Navigation items for the page
const navItems = [
  { id: 'flexbox', label: 'Flexbox' },
  { id: 'grid', label: 'Grid' },
  { id: 'split', label: 'Split Screen' },
  { id: 'centered', label: 'Centered' },
];

// Code examples
const flexCode = `<div class="flex flex-wrap gap-4">
  <div class="flex-1 min-w-[200px] h-32">Item 1</div>
  <div class="flex-1 min-w-[200px] h-32">Item 2</div>
  <div class="flex-1 min-w-[200px] h-32">Item 3</div>
  <div class="flex-1 min-w-[200px] h-32">Item 4</div>
</div>`;

const gridCode = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Repeat for each card -->
  <div class="bg-base-100 rounded-lg p-4">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</div>`;

const splitCode = `<div class="flex flex-col lg:flex-row">
  <!-- Left Panel -->
  <div class="w-full lg:w-1/2 p-8">
    <h3>Left Panel</h3>
    <p>Panel content</p>
    <button class="btn btn-primary mt-4">Learn More</button>
  </div>
  
  <!-- Right Panel -->
  <div class="w-full lg:w-1/2 p-8">
    <h3>Right Panel</h3>
    <p>Panel content</p>
    <div class="form-control mt-4">
      <input type="email" placeholder="Email" class="input input-bordered" />
      <button class="btn btn-accent mt-2">Subscribe</button>
    </div>
  </div>
</div>`;

const centeredCode = `<div class="max-w-3xl mx-auto p-8">
  <h2>Article Title</h2>
  <p>Your content goes here...</p>
  
  <div class="flex gap-4 mt-8">
    <button class="btn btn-primary">Primary Action</button>
    <button class="btn btn-ghost">Secondary Action</button>
  </div>
</div>`;
---

<Layout 
  title={title} 
  description={description}
  maxWidth="container"
  variant="documentation"
>
  <!-- Sticky Navigation Tabs -->
  <div slot="header" class="sticky top-0 z-40 bg-base-100/80 backdrop-blur-sm border-b border-base-300/50">
    <div class="tabs tabs-boxed justify-center p-2 bg-base-200/50">
      {navItems.map(item => (
        <a 
          href={`#${item.id}`} 
          class="tab tab-lg tab-bordered tab-active:tab-active transition-all duration-200"
          data-smooth-scroll
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>

  <!-- Page Content -->
  <div class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <header class="text-center mb-16 py-12 bg-gradient-to-br from-base-200 to-base-300 rounded-box p-8">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Responsive Layouts</h1>
      <p class="text-xl text-base-content/80 max-w-3xl mx-auto">
        Explore different responsive layout patterns built with Tailwind CSS and daisyUI. 
        Resize your browser or rotate your device to see them in action.
      </p>
    </header>

    <!-- =================================================================== -->
    <!-- Section 1: Flexbox Layout                                            -->
    <!-- =================================================================== -->
    <section id="flexbox" class="mb-20 scroll-mt-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">1. Flexbox Layout</h2>
        <div class="badge badge-lg badge-primary">Recommended</div>
      </div>
      <p class="text-lg text-base-content/70 mb-8">
        Flexbox is a powerful layout model that allows you to design flexible and responsive layouts with ease.
      </p>

      <!-- Flexbox Demo -->
      <div class="mockup-window border border-base-300 mb-8">
        <div class="bg-base-200 p-6">
          <div class="flex flex-wrap gap-4">
            {[1, 2, 3, 4].map(i => (
              <div class="flex-1 min-w-[200px] h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                <span class="text-lg font-medium">Item {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <!-- Code Sample -->
      <CodeSample 
        title="Flexbox Layout Example"
        code={flexCode}
        lang="html"
        showLineNumbers={true}
        githubUrl="https://github.com/yourusername/ultimate-portfolio/blob/main/src/pages/design/design-layouts.astro"
        fileName="design-layouts.astro"
      >
        {flexCode}
      </CodeSample>
    </section>

    <!-- =================================================================== -->
    <!-- Section 2: CSS Grid - Responsive Card Grid                          -->
    <!-- =================================================================== -->
    <section id="grid" class="mb-20 scroll-mt-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">2. CSS Grid Layout</h2>
        <div class="badge badge-lg badge-secondary">Modern</div>
      </div>
      <p class="text-lg text-base-content/70 mb-8">
        CSS Grid provides a two-dimensional layout system, making it perfect for complex responsive designs.
      </p>

      <!-- Grid Demo -->
      <div class="mockup-window border border-base-300 mb-8">
        <div class="bg-base-200 p-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div class="bg-base-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-bold mb-2">Card {i}</h3>
                <p class="text-sm text-base-content/70">Grid item content goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <!-- Code Sample -->
      <CodeSample 
        title="CSS Grid Layout Example"
        code={gridCode}
        lang="html"
        showLineNumbers={true}
        githubUrl="https://github.com/yourusername/ultimate-portfolio/blob/main/src/pages/design/design-layouts.astro"
        fileName="design-layouts.astro"
      >
        {gridCode}
      </CodeSample>
    </section>

    <!-- =================================================================== -->
    <!-- Section 3: Split Screen Layout                                      -->
    <!-- =================================================================== -->
    <section id="split" class="mb-20 scroll-mt-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">3. Split Screen</h2>
        <div class="badge badge-lg badge-accent">Responsive</div>
      </div>
      <p class="text-lg text-base-content/70 mb-8">
        A responsive split-screen layout that stacks on mobile and splits on larger screens.
      </p>

      <!-- Split Screen Demo -->
      <div class="mockup-window border border-base-300 mb-8">
        <div class="flex flex-col lg:flex-row min-h-[400px] bg-base-200">
          <!-- Left Panel -->
          <div class="w-full lg:w-1/2 p-8 bg-primary/5">
            <h3 class="text-2xl font-bold mb-4">Left Panel</h3>
            <p class="mb-6">This panel takes up half the width on large screens and full width on mobile.</p>
            <button class="btn btn-primary">Learn More</button>
          </div>
          
          <!-- Right Panel -->
          <div class="w-full lg:w-1/2 p-8 bg-base-100 border-t lg:border-t-0 lg:border-l border-base-300">
            <h3 class="text-2xl font-bold mb-4">Right Panel</h3>
            <p class="mb-6">This panel sits next to the left panel on large screens and stacks below on mobile.</p>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email Address</span>
              </label>
              <input type="email" placeholder="you@example.com" class="input input-bordered w-full" />
              <button class="btn btn-accent mt-4 w-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Sample -->
      <CodeSample 
        title="Split Screen Layout Example"
        code={splitCode}
        lang="html"
        showLineNumbers={true}
        githubUrl="https://github.com/yourusername/ultimate-portfolio/blob/main/src/pages/design/design-layouts.astro"
        fileName="design-layouts.astro"
      >
        {splitCode}
      </CodeSample>
    </section>

    <!-- =================================================================== -->
    <!-- Section 4: Centered Content Layout                                  -->
    <!-- =================================================================== -->
    <section id="centered" class="mb-20 scroll-mt-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">4. Centered Content</h2>
        <div class="badge badge-lg badge-info">Reading Mode</div>
      </div>
      <p class="text-lg text-base-content/70 mb-8">
        A centered content layout with optimal line length for readability.
      </p>

      <!-- Centered Content Demo -->
      <div class="mockup-window border border-base-300 mb-8">
        <div class="bg-base-100 p-8 md:p-12">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Article Title</h2>
            <div class="prose prose-lg max-w-none">
              <p>This is a centered content layout that works well for blog posts and articles. The content is constrained to a readable line length while the container remains responsive.</p>
              <p>On larger screens, the content will be centered with a max-width, while on mobile devices it will use the full width with appropriate padding.</p>
            </div>
            <div class="flex gap-4 mt-8">
              <button class="btn btn-primary">Read More</button>
              <button class="btn btn-ghost">Save for Later</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Sample -->
      <CodeSample 
        title="Centered Content Layout Example"
        code={centeredCode}
        lang="html"
        showLineNumbers={true}
        githubUrl="https://github.com/yourusername/ultimate-portfolio/blob/main/src/pages/design/design-layouts.astro"
        fileName="design-layouts.astro"
      >
        {centeredCode}
      </CodeSample>
    </section>
  </div>
</Layout>
