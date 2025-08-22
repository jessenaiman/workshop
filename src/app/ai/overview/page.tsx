
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { navigationItems } from "@/lib/navigation-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AiOverviewPage() {
    const aiDemos = navigationItems.find(item => item.title === "AI Demos")?.items || [];
    
    return (
        <div className="container mx-auto py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">AI & Machine Learning</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Discover the power of artificial intelligence through interactive demos and tools. 
                        Each demo showcases different AI capabilities, from natural language processing 
                        to blockchain integration.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {aiDemos.map((item) => (
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
                                        View Demo <ArrowRight className="h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
