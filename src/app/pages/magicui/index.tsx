---
// Import Astro components
import Layout from '../../../layouts/Layout.astro';
// Import React component
import { MagicUICardGrid } from '../../../components/magicui/MagicUICardGrid';
import { TextAnimate } from "../../../components/magicui/text-animate.tsx";

---

<div class="container mx-auto py-12">

<Layout 
  title="MagicUI Components | Ultimate Astro Template"
  description="Explore the collection of beautiful, interactive UI components built with MagicUI, React, and Tailwind CSS"
>
  <div class="container mx-auto py-12">
    <div class="space-y-8">
      <div class="text-center">
        <TextAnimate
          client:load
          as="h1"
          animation="blurInUp"
          className="text-4xl font-bold tracking-tight"
        >
          MagicUI Components
        </TextAnimate>
        <p class="mt-4 text-lg text-muted-foreground">
          A collection of beautiful, animated UI components built with Framer Motion and Tailwind CSS
        </p>
      </div>

      <MagicUICardGrid client:load />
    </div>
  </div>
</Layout>
