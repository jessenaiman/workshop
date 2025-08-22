import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

const exampleComponent = `<!-- Example using Tailwind CSS -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg 
               hover:bg-blue-600 transition-colors
               dark:bg-sky-500 dark:hover:bg-sky-600">
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
            </section>

            <div className="space-y-12">
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Core Concepts</CardTitle>
                        <CardDescription>The fundamental principles of Tailwind CSS.</CardDescription>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <h4>Utility-First</h4>
                        <p>
                            Instead of writing custom CSS, you use pre-existing classes directly in your HTML. This makes it fast and easy to build custom designs without leaving your markup.
                        </p>
                        <h4>Responsive Design</h4>
                        <p>
                            Use responsive utility variants to build adaptive user interfaces. Prefixes like <code>md:</code> and <code>lg:</code> allow you to apply styles at specific breakpoints.
                        </p>
                        <h4>Hover, Focus, and Other States</h4>
                        <p>
                            Style elements on hover, focus, and other states by prefixing utilities with the state name, like <code>hover:bg-blue-600</code>.
                        </p>
                    </CardContent>
                </Card>
                
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Example Component</CardTitle>
                        <CardDescription>A simple button styled with Tailwind CSS.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CodeBlock code={exampleComponent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
