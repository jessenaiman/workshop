
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CodeModal } from '@/components/ui/CodeModal';
import { Terminal } from '@/components/magicui/terminal';

export default function UtilitiesPage() {
    return (
        <div className="container mx-auto py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/design" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Components
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
              <Code className="w-5 h-5 text-red-600 dark:text-red-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Utility Components</h1>
              <p className="text-muted-foreground">Helpful components for common UI patterns and interactions</p>
            </div>
          </div>
        </div>
    
        <div className="grid gap-8">
          <Card>
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <CardTitle>Terminal</CardTitle>
                <CardDescription>Animated terminal component for displaying commands.</CardDescription>
              </div>
              <CodeModal 
                title="Terminal"
                code={`<Terminal>
  <span>$ npm install magicui</span>
  <span>...</span>
</Terminal>`}
                language="tsx"
                iconOnly
              />
            </CardHeader>
            <CardContent>
              <Terminal className="w-full">
                <p>$ npm install magicui</p>
                <p>Installing MagicUI...</p>
                <p>$ npm run dev</p>
                <p>Starting development server...</p>
              </Terminal>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}
