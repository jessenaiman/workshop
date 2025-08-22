
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PollinateAiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Pollinations.ai Chat</h1>
        <p className="text-lg text-muted-foreground mt-2">
            A simple, working integration of a single React component.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Pollinations Demo</CardTitle>
          <CardDescription>
            This is where the interactive Pollinations.ai component would be rendered.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Demo Placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
