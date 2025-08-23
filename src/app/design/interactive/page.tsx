
'use client';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { MagicCard } from '@/components/magicui/magic-card';
import { CoolMode } from '@/components/magicui/cool-mode';
import { MousePointer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DesignComponentCard } from '@/components/design/design-component-card';

export default function InteractivePage() {
    const interactives = [
        {
            name: "Pulsating Button",
            description: "Button with a gentle pulsing animation",
            component: <PulsatingButton>Click Me</PulsatingButton>,
            code: `<PulsatingButton>Click Me</PulsatingButton>`
        },
        {
            name: "Magic Card",
            description: "Card with magical hover effects",
            component: (
                <MagicCard className="w-64 h-48 flex items-center justify-center">
                    <p className="text-center p-4">Hover over me</p>
                </MagicCard>
            ),
            code: `<MagicCard>...</MagicCard>`
        },
        {
            name: "Cool Mode",
            description: "Interactive cool mode effect",
            component: <CoolMode><Button>Click and drag me</Button></CoolMode>,
            code: `<CoolMode><Button>Click and drag me</Button></CoolMode>`
        }
    ];

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

            <div className="grid md:grid-cols-2 gap-8">
                {interactives.map((item) => (
                    <DesignComponentCard
                        key={item.name}
                        title={item.name}
                        description={item.description}
                        code={item.code}
                    >
                         <div className="flex justify-center items-center p-8 min-h-[16rem]">
                            {item.component}
                        </div>
                    </DesignComponentCard>
                ))}
            </div>
        </div>
    )
}
