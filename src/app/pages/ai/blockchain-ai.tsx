---
import Layout from "../../layouts/Layout.astro";
import Hero from "../../components/Astro/Hero.astro";
import DemoCard from "../../components/Astro/DemoCard.astro";
import { Code } from 'astro:components';
import { Content as BlockchainContent } from "../../content/info/blockchain-ai.md";

// Import the main interactive component and its source code
import Chat from "../../components/React/Akash/Chat.tsx";
import chatSource from "../../components/React/Akash/Chat.tsx?raw";

const headline = "Blockchain AI Integration";
const subheading = "An Akash-powered chat interface demonstrating decentralized AI.";
---

<Layout title={headline} description={subheading}>

  <main class="container mx-auto px-4 py-16">

    <div class="divider my-12" id="demo">Interactive Demo</div>

    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DemoCard
          title="Decentralized AI Chat"
          description="Interact with an AI running on the Akash decentralized cloud network."
          groupName="blockchain-ai-demo"
        >
          <Chat slot="demo" client:only="react" />
          <Code slot="source" code={chatSource} lang="tsx" />
        </DemoCard>
      </div>
    </section>
    
    <article class="prose max-w-none mb-16">
      <BlockchainContent />
    </article>
  </main>
</Layout>