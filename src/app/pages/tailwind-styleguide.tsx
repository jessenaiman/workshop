---
import Layout from '../../layouts/Layout.astro';
import { getEntry, render } from 'astro:content';

// Get the TailwindCSS markdown content
const tailwindContent = await getEntry('info', 'tailwind-styleguide');

// Handle case where content doesn't exist
if (!tailwindContent) {
  throw new Error('Tailwind content not found. Please ensure src/content/info/tailwind-styleguide.mdx exists.');
}

// Render the markdown content
const { Content } = await render(tailwindContent);

// Example Tailwind component
const exampleComponent = `<!-- Example using Tailwind CSS -->
<button class="btn btn-primary">
  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  Click me
</button>`;
---

<Layout title="TailwindCSS Showcase | Ultimate Astro Template">
  <main class="container mx-auto px-4 py-12 max-w-7xl">
    <!-- Hero Section -->
    <section class="text-center mb-20">
      <div class="flex justify-center mb-6">
        <div class="bg-gradient-to-r from-primary to-secondary p-1 rounded-full">
          <div class="bg-base-100 px-4 py-2 rounded-full text-sm font-medium">
            Framework Showcase
          </div>
        </div>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        <span class="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
          TailwindCSS
        </span>
      </h1>
      <p class="text-xl text-base-content/80 max-w-3xl mx-auto mb-8">
        {tailwindContent.data.description}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          href="https://tailwindcss.com/docs/installation" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Get Started with Tailwind
        </a>
        <a 
          href="https://github.com/tailwindlabs/tailwindcss" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-outline"
        >
          View on GitHub
        </a>
      </div>
    </section>

    <!-- Markdown Content -->
    <section class="mb-20">
      <div class="prose prose-lg max-w-none">
        <Content />
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="mb-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Interactive Playground</h2>
        <p class="text-lg text-base-content/80 max-w-3xl mx-auto">
          Try out Tailwind's utility classes in real-time. Edit the code below to see instant results.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold">Editor</h3>
            <button id="reset-code" class="btn btn-sm btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </button>
          </div>
          <div class="mockup-code h-96 overflow-auto bg-base-300">
            <pre><code id="editable-code" class="language-html" contenteditable="true"><button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Click me
</button></code></pre>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center h-96 border-2 border-dashed border-base-300 rounded-lg p-4 bg-base-200 overflow-auto">
            <div id="preview" class="w-full">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-base-200 rounded-lg p-6 mb-12">
        <h3 class="text-xl font-semibold mb-4">Quick Reference</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-base-100 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Colors</h4>
            <div class="flex flex-wrap gap-1">
              <span class="badge bg-blue-500 border-0">blue-500</span>
              <span class="badge bg-red-500 border-0">red-500</span>
              <span class="badge bg-green-500 border-0">green-500</span>
            </div>
          </div>
          <div class="bg-base-100 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Spacing</h4>
            <div class="flex flex-col gap-1">
              <code class="text-xs">p-2</code>
              <code class="text-xs">m-4</code>
              <code class="text-xs">space-x-4</code>
            </div>
          </div>
          <div class="bg-base-100 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Effects</h4>
            <div class="flex flex-col gap-1">
              <code class="text-xs">hover:bg-*</code>
              <code class="text-xs">shadow-lg</code>
              <code class="text-xs">rounded-full</code>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <a 
          href="https://tailwindcss.com/docs/utility-first" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Learn More About Utility-First
        </a>
      </div>
    </section>
    
    <!-- Code Example -->
    <section class="mb-20">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold">Example Component</h2>
      </div>
      <div class="mockup-code bg-base-200 rounded-lg">
        <Code lang="html" code={exampleComponent} />
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center mb-20">
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to use TailwindCSS in your project?</h2>
        <p class="text-lg text-base-content/80 mb-8">
          Get started with TailwindCSS today and experience the power of utility-first CSS. It's fast, flexible, and designed to be customized to your needs.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="https://tailwindcss.com/docs/installation" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-primary btn-lg"
          >
            Get Started with Tailwind
          </a>
          <a 
            href="https://play.tailwindcss.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-outline btn-lg"
          >
            Try Tailwind Play
          </a>
        </div>
      </div>
    </section>
  </main>
  </main>
  
  <script is:inline>
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      const editableCode = document.getElementById('editable-code');
      const preview = document.getElementById('preview');
      const resetButton = document.getElementById('reset-code');

      // Check if all required elements exist
      if (!editableCode || !preview || !resetButton) {
        console.error('Required elements not found');
        return;
      }
      
      // Initial code template
      const initialCode = `<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Click me
</button>`;
      
      // Update preview when code changes
      const updatePreview = () => {
        try {
          // Sanitize and update the preview
          if (editableCode.textContent) {
            // Basic XSS protection - only allow safe HTML
            preview.innerHTML = DOMPurify?.sanitize(editableCode.textContent) || '';
          }
        } catch (error) {
          console.error('Error updating preview:', error);
          preview.innerHTML = '<p class="text-error">Error in code</p>';
        }
      };
      
      // Set up event listeners
      editableCode.addEventListener('input', updatePreview);
      
      // Reset code to initial state
      resetButton.addEventListener('click', () => {
        editableCode.textContent = initialCode;
        updatePreview();
        // Re-apply syntax highlighting after reset
        if (window.Prism && editableCode instanceof HTMLElement) {
          window.Prism.highlightElement(editableCode);
        }
      });
      
      // Initialize with default code
      if (editableCode) {
        editableCode.textContent = initialCode;
        updatePreview();
        
        // Add syntax highlighting
        if (window.Prism) {
          window.Prism.highlightElement(editableCode);
        }
      }
    });
  </script>
</Layout>