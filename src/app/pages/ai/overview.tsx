---
import Layout from '../../layouts/Layout.astro';
import { Icon } from 'astro-icon/components';

const pageTitle = 'AI & Machine Learning Overview';
const pageDescription = 'Explore the AI and machine learning capabilities and demos available on this site.';
---

<Layout title={pageTitle} description={pageDescription}>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">AI & Machine Learning</h1>
      <p class="text-lg text-gray-300 mb-8">
        Discover the power of artificial intelligence through interactive demos and tools. 
        Each demo showcases different AI capabilities, from natural language processing 
        to blockchain integration.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mt-12">
        <!-- Chat GPT Card -->
        <a 
          href="/ai/flowise-chat" 
          class="card bg-base-200 hover:bg-base-300 transition-colors duration-300"
        >
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-primary/10 rounded-lg mr-4">
                <Icon name="mdi:chat" class="text-primary text-2xl" />
              </div>
              <h2 class="card-title text-xl">Chat GPT</h2>
            </div>
            <p>Experience conversational AI with our advanced chat interface powered by Flowise.</p>
            <div class="card-actions justify-end mt-4">
              <button class="btn btn-primary btn-sm">Try Now</button>
            </div>
          </div>
        </a>

        <!-- Pollinate AI Card -->
        <a 
          href="/pollinate-ai" 
          class="card bg-base-200 hover:bg-base-300 transition-colors duration-300"
        >
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-secondary/10 rounded-lg mr-4">
                <Icon name="mdi:flower" class="text-secondary text-2xl" />
              </div>
              <h2 class="card-title text-xl">Pollinate AI</h2>
            </div>
            <p>Generate creative content and explore AI-powered text generation capabilities.</p>
            <div class="card-actions justify-end mt-4">
              <button class="btn btn-secondary btn-sm">Explore</button>
            </div>
          </div>
        </a>

        <!-- Blockchain AI Card -->
        <a 
          href="/blockchain-ai" 
          class="card bg-base-200 hover:bg-base-300 transition-colors duration-300"
        >
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-accent/10 rounded-lg mr-4">
                <Icon name="mdi:link-variant" class="text-accent text-2xl" />
              </div>
              <h2 class="card-title text-xl">Blockchain AI</h2>
            </div>
            <p>Discover how AI and blockchain technology can work together in innovative ways.</p>
            <div class="card-actions justify-end mt-4">
              <button class="btn btn-accent btn-sm">Learn More</button>
            </div>
          </div>
        </a>

        <!-- Coming Soon Card -->
        <div class="card bg-base-200 opacity-75">
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="p-3 bg-neutral/10 rounded-lg mr-4">
                <Icon name="mdi:robot" class="text-neutral text-2xl" />
              </div>
              <h2 class="card-title text-xl">More Coming Soon</h2>
            </div>
            <p>Stay tuned for more AI-powered tools and demos in development.</p>
            <div class="badge badge-outline mt-4">Coming Soon</div>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-base-300 rounded-lg p-8">
        <h2 class="text-2xl font-bold mb-4">About Our AI Tools</h2>
        <p class="mb-4">
          These demos showcase the latest advancements in artificial intelligence and machine learning. 
          Each tool is designed to be interactive and educational, allowing you to experience 
          AI capabilities firsthand.
        </p>
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="flex items-start">
            <Icon name="mdi:shield-check" class="text-success text-2xl mr-3 mt-1 shrink-0" />
            <div>
              <h3 class="font-semibold">Privacy Focused</h3>
              <p class="text-sm text-gray-400">Your data remains secure and private</p>
            </div>
          </div>
          <div class="flex items-start">
            <Icon name="mdi:open-source-initiative" class="text-info text-2xl mr-3 mt-1 shrink-0" />
            <div>
              <h3 class="font-semibold">Open Source</h3>
              <p class="text-sm text-gray-400">Built with transparent, community-driven technologies</p>
            </div>
          </div>
          <div class="flex items-start">
            <Icon name="mdi:lightbulb" class="text-warning text-2xl mr-3 mt-1 shrink-0" />
            <div>
              <h3 class="font-semibold">Educational</h3>
              <p class="text-sm text-gray-400">Learn about AI through hands-on experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>