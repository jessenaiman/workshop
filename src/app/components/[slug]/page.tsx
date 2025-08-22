import { notFound } from 'next/navigation';
import { components } from '@/lib/components-data';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/app/components/code-block';
import ComponentCustomizer from './component-customizer';
import { Code, Palette } from 'lucide-react';

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const component = components.find((c) => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tight">{component.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{component.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-2xl mb-4">Interactive Demo</h2>
          <Card className="w-full min-h-[400px] flex items-center justify-center p-8 bg-card-foreground/[.02]">
            <div className="w-full flex items-center justify-center">
              {component.preview}
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code"><Code className="mr-2 h-4 w-4" /> Code</TabsTrigger>
              <TabsTrigger value="customize"><Palette className="mr-2 h-4 w-4" /> AI Customizer</TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <Card>
                <CardContent className="p-0">
                  <CodeBlock code={component.code} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="customize">
                <CardContent className="p-6">
                  <ComponentCustomizer componentName={component.name} />
                </CardContent>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
