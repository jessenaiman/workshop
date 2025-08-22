
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { MagicCard } from '@/components/magicui/magic-card';
import { CoolMode } from '@/components/magicui/cool-mode';
import { MousePointer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CodeModal } from '@/components/ui/CodeModal';

export default function InteractivePage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-6">
                    <Link href="/design" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Design
                    </Link>
                </Button>
                
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <MousePointer className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold">Interactive Elements</h1>
                    <p className="text-muted-foreground">Engaging UI components that respond to user interactions</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-8">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle>Pulsating Button</CardTitle>
                        <CardDescription>Button with a gentle pulsing animation</CardDescription>
                    </div>
                    <CodeModal
                        title="Pulsating Button"
                        code={`<PulsatingButton>Click Me</PulsatingButton>`}
                        language="tsx"
                        iconOnly
                    />
                </CardHeader>
                <CardContent className="flex justify-center p-8">
                    <PulsatingButton>Click Me</PulsatingButton>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle>Magic Card</CardTitle>
                        <CardDescription>Card with magical hover effects</CardDescription>
                    </div>
                    <CodeModal
                        title="Magic Card"
                        code={`<MagicCard>...</MagicCard>`}
                        language="tsx"
                        iconOnly
                    />
                </CardHeader>
                <CardContent className="flex justify-center p-8">
                    <MagicCard className="w-64 h-48 flex items-center justify-center">
                        <p className="text-center p-4">Hover over me</p>
                    </MagicCard>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle>Cool Mode</CardTitle>
                        <CardDescription>Interactive cool mode effect</CardDescription>
                    </div>
                    <CodeModal
                        title="Cool Mode"
                        code={`<CoolMode><Button>Click and drag me</Button></CoolMode>`}
                        language="tsx"
                        iconOnly
                    />
                </CardHeader>
                <CardContent className="flex justify-center p-8">
                    <CoolMode>
                        <Button>Click and drag me</Button>
                    </CoolMode>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}
