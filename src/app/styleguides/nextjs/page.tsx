import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/app/components/code-block";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from 'next/image';

const exampleComponent = `// src/app/page.tsx
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
      <Button>Get Started</Button>
    </main>
  );
}`;

export default function NextjsStyleguidePage() {
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
                        <Image src="https://raw.githubusercontent.com/radix-ui/icons/master/packages/radix-icons/svg/gear.svg" width={30} height={30} alt="Radix UI Icon" className="invert dark:invert-0" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={10}
                        radius={60}
                    >
                        <Image src="https://raw.githubusercontent.com/framer/motion/main/www/public/images/favicon.png" width={30} height={30} alt="Framer Motion Icon" />
                    </OrbitingCircles>
                     <Image src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-y563b8rq.png" width={60} height={60} alt="Next.js Icon" className="invert dark:invert-0" />
                </div>
                <TextAnimate as="h1" animation={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }} className="text-5xl md:text-6xl font-bold my-6">
                    Next.js Style Guide
                </TextAnimate>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    The React framework for building full-stack web applications.
                </p>
            </section>

            <div className="space-y-12">
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Core Concepts</CardTitle>
                        <CardDescription>The fundamental principles of Next.js.</CardDescription>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <h4>App Router</h4>
                        <p>
                            Next.js uses a file-system based router. Pages are created by adding files to the <code>src/app</code> directory. This enables features like nested routes and layouts.
                        </p>
                        <h4>Server Components</h4>
                        <p>
                            By default, components in the App Router are React Server Components. This allows you to write UI that can be rendered and cached on the server, leading to better performance.
                        </p>
                        <h4>Client Components</h4>
                        <p>
                            You can opt into client-side rendering for interactive UI by adding the <code>'use client'</code> directive at the top of a file.
                        </p>
                    </CardContent>
                </Card>
                
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Example Page</CardTitle>
                        <CardDescription>A simple page component in Next.js.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CodeBlock code={exampleComponent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
