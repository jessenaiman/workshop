
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FlowiseChatPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Chat with AI</h1>
            <p className="text-lg text-muted-foreground">
                Interact with our AI assistant powered by Flowise.
            </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Ask me anything and I'll do my best to help you out!</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="min-h-[500px] rounded-lg border bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Flowise Chatbot Placeholder</p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
