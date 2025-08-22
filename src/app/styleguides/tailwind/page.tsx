
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

const exampleComponent = `<!-- Example using Tailwind CSS -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Click me
</button>`;

export default function TailwindStyleguidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                    TailwindCSS
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
                </p>
            </section>

            <section className="mb-20">
                <Card>
                    <CardHeader>
                        <CardTitle>Core Concepts</CardTitle>
                        <CardDescription>The fundamental principles of Tailwind CSS.</CardDescription>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <h4>Utility-First</h4>
                        <p>
                            Instead of writing custom CSS to style your components, you use pre-existing classes directly in your HTML. This makes it fast and easy to build custom designs without leaving your markup.
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
            </section>
            
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-8">Example Component</h2>
                <CodeBlock code={exampleComponent} />
            </section>
        </div>
    );
}
