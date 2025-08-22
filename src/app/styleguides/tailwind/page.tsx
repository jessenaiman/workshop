import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/app/components/code-block";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const exampleComponent = `<!-- Example using Tailwind CSS -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg 
               hover:bg-blue-600 transition-colors
               dark:bg-sky-500 dark:hover:bg-sky-600">
  Click me
</button>`;

const detailedExample = `<!-- Example using Tailwind CSS -->
<button class="btn btn-primary">
  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  Click me
</button>`;

export default function TailwindStyleguidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="relative text-center mb-20 p-8 rounded-2xl overflow-hidden">
                <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-background">
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={20}
                        radius={60}
                    >
                         <Image src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-y563b8rq.png" width={30} height={30} alt="Next.js Icon" className="invert dark:invert-0" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={10}
                        radius={60}
                    >
                        <Image src="https://raw.githubusercontent.com/framer/motion/main/www/public/images/favicon.png" width={30} height={30} alt="Framer Motion Icon" />
                    </OrbitingCircles>
                    <Image src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" width={80} height={80} alt="Tailwind CSS Icon" />
                </div>
                <TextAnimate as="h1" animation={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }} className="text-5xl md:text-6xl font-bold my-6">
                    Tailwind CSS
                </TextAnimate>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A utility-first CSS framework for rapid UI development.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Button asChild>
                        <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">
                            Official Documentation
                        </a>
                    </Button>
                </div>
            </section>

            <div className="space-y-12">
                <Card className="relative overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-2xl">What is Tailwind CSS?</CardTitle>
                        <CardDescription>
                            A modern utility-first CSS framework that provides low-level utility classes for building custom designs without leaving your HTML.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Tailwind CSS enables developers to style elements directly in markup using pre-defined classes, eliminating the need for custom CSS in many cases. It offers incredible flexibility with responsive design prefixes, a customizable configuration, and a vast ecosystem of plugins.
                        </p>
                        <p>
                            Unlike traditional frameworks like Bootstrap, Tailwind doesn’t provide pre-designed components. Instead, it gives you the building blocks to create your own unique designs rapidly.
                        </p>
                    </CardContent>
                    <BorderBeam />
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Basic Example</CardTitle>
                        <CardDescription>Here&apos;s a simple button styled with Tailwind CSS:</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CodeBlock code={exampleComponent} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Detailed Example with Icon</CardTitle>
                        <CardDescription>A more complex button with an icon:</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CodeBlock code={detailedExample} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Utility-First Approach</strong>: Build complex designs with simple utility classes directly in your markup.</li>
                            <li><strong>Responsive Design</strong>: Built-in responsive prefixes (sm:, md:, lg:, etc.) make mobile-first design effortless.</li>
                            <li><strong>Customization</strong>: Tailwind.config.js allows deep customization of colors, spacing, typography, and more.</li>
                            <li><strong>Performance</strong>: PurgeCSS integration removes unused styles for incredibly small production builds.</li>
                            <li><strong>Ecosystem</strong>: Extensive library of plugins and integrations for forms, typography, animations, and more.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Usage in this Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Tailwind CSS is fully integrated into this project with:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Custom theme colors, typography, and spacing defined in tailwind.config.js</li>
                            <li>Dark mode support with the class strategy</li>
                            <li>Integration with modern component libraries for consistent styling</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
