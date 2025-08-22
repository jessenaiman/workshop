
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BlockchainAiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Blockchain AI Integration</h1>
        <p className="text-lg text-muted-foreground mt-2">
            An Akash-powered chat interface demonstrating decentralized AI.
        </p>
      </div>

      <section className="mb-16">
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Decentralized AI Chat</CardTitle>
                <CardDescription>
                    Interact with an AI running on the Akash decentralized cloud network.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Chat interface placeholder</p>
                </div>
            </CardContent>
        </Card>
      </section>
      
      <article className="prose dark:prose-invert max-w-3xl mx-auto">
        <h2>About Blockchain AI</h2>
        <p>
            This demonstration showcases the potential of combining artificial intelligence with decentralized infrastructure like the Akash Network. By running AI models on a decentralized cloud, we can achieve greater censorship resistance, reduce reliance on single providers, and potentially lower costs.
        </p>
        <p>
            The chat interface above would typically connect to a backend service that routes requests to an AI model hosted on the Akash Network. This ensures that the AI's computational workload is distributed across a peer-to-peer network of providers.
        </p>
      </article>
    </div>
  );
}
