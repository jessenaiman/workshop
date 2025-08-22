import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

const exampleComponent = `// src/app/page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
    </main>
  );
}`;

export default function NextjsStyleguidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                    Next.js
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    The React framework for building full-stack web applications.
                </p>
            </section>

            <section className="mb-20">
                <Card>
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
            </section>
            
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-8">Example Page</h2>
                <CodeBlock code={exampleComponent} />
            </section>
        </div>
    );
}
