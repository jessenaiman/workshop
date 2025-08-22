import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { components } from '@/lib/components-data';
import { BlurFade } from '@/components/magicui/blur-fade';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          MagicBox Component Library
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our collection of interactive MagicUI components. Click on any component to see it in action and get the code.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((component, i) => (
          <BlurFade key={component.slug} delay={i * 0.15}>
            <Link href={`/components/${component.slug}`} className="group">
              <Card className="h-full flex flex-col hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-center items-center p-6 bg-card-foreground/5 rounded-b-lg">
                  <div className="w-full h-48 flex items-center justify-center">
                    {component.preview}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
