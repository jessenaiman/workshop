
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function UtilitiesPage() {
    return (
        <div className="container mx-auto py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/design/magicui" className="flex items-center gap-2">
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
          {/* Terminal */}
          <Card>
            <CardHeader>
              <CardTitle>Terminal</CardTitle>
              <CardDescription>Terminal emulator component</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    <div className="bg-black rounded-lg p-4 font-mono text-sm text-white">
                        <div className="flex items-center gap-2 text-green-400">
                            <span>$</span>
                            <span>npm install magicui</span>
                        </div>
                        <div className="mt-2 text-gray-400">Installing MagicUI...</div>
                        
                        <div className="mt-4 flex items-center gap-2 text-green-400">
                            <span>$</span>
                            <span>npm run dev</span>
                        </div>
                        <div className="mt-2 text-gray-400">Starting development server...</div>
                    </div>
                </div>
              </div>  
            </CardContent>
          </Card>
        </div>
      </div>
    )
}
