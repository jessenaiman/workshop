
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { navigationItems } from "@/lib/navigation-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DesignPage() {
  const designItems = navigationItems.find(item => item.title === "Design Showcase")?.items || [];
  
  return (
    <div className="container mx-auto py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Design System
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl">
                Explore our collection of design patterns, components, and styles.
            </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {designItems.map((item) => (
                 <Link href={item.path} key={item.path} className="group">
                    <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                        <CardHeader>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    {item.icon}
                                </div>
                                <CardTitle className="font-headline text-2xl group-hover:text-primary">
                                    {item.title}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm text-primary transition-all duration-300 group-hover:gap-2">
                                View components <ArrowRight className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
