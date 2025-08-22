import ComponentCustomizer from "@/app/components/[slug]/component-customizer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function AICustomizerPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl font-bold tracking-tight">AI Component Customizer</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Customize any component with the power of AI
                </p>
            </div>
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Customize a Component</CardTitle>
                        <CardDescription>
                            Select a component and describe the changes you want to see.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ComponentCustomizer componentName="All Components" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
