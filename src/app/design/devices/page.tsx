
import { Button } from '@/components/ui/button';
import { Smartphone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { DesignComponentCard } from '@/components/design/design-component-card';

export default function DevicesPage() {

    const iphoneCode = `<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[125px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        <div className="w-full h-full bg-background p-4 flex items-center justify-center">
            <p className="text-center">Your app content here</p>
        </div>
    </div>
</div>`;

    const androidCode = `<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-xl left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        <div className="w-full h-full bg-background p-4 flex items-center justify-center">
            <p className="text-center">Your app content here</p>
        </div>
    </div>
</div>`;

    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
                <Link href="/design" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Components
                </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-yellow-600 dark:text-yellow-300" />
                </div>
                <div>
                <h1 className="text-3xl font-bold tracking-tight">Device Mocks</h1>
                <p className="text-muted-foreground">Realistic device mockups for showcasing your applications</p>
                </div>
            </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <DesignComponentCard
                    title="iPhone 15 Pro"
                    description="Realistic iPhone 15 Pro mockup"
                    code={iphoneCode}
                >
                    <div className="w-full max-w-xs">
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[125px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                                <div className="w-full h-full bg-background p-4 flex items-center justify-center">
                                    <p className="text-center">Your app content here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DesignComponentCard>

                <DesignComponentCard
                    title="Android"
                    description="Realistic Android device mockup"
                    code={androidCode}
                >
                    <div className="w-full max-w-xs">
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-xl left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                        <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                            <div className="w-full h-full bg-background p-4 flex items-center justify-center">
                                <p className="text-center">Your app content here</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </DesignComponentCard>
            </div>
        </div>
    )
}
