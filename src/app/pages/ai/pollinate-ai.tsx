---
import Layout from '../../layouts/Layout.astro';
import PollinationDemo from '../../components/React/PollinationDemo.tsx';
---

<Layout title="Pollinations Hooks Demo">
  <main class="p-4 md:p-8 max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">Pollinations.ai Chat</h1>
      <p class="py-2">A simple, working integration of a single React component.</p>
    </div>

    <PollinationDemo client:only="react" />

  </main>
</Layout>