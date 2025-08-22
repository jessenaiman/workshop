
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { BorderBeam } from '@/components/magicui/border-beam';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { Meteors } from '@/components/magicui/meteors';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Layout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BackgroundsPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
                <Link href="/design/magicui" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Components
                </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <Layout className="w-5 h-5 text-green-600 dark:text-green-300" />
                </div>
                <div>
                <h1 className="text-3xl font-bold">Backgrounds & Effects</h1>
                <p className="text-muted-foreground">Stunning visual effects and background patterns</p>
                </div>
            </div>
            </div>

            <div className="grid gap-8">
            {/* Animated Grid Pattern */}
            <Card>
                <CardHeader>
                <CardTitle>Animated Grid Pattern</CardTitle>
                <CardDescription>Dynamic grid pattern animation</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                    <AnimatedGridPattern 
                    className="absolute inset-0 w-full h-full"
                    />
                    <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Hover over the grid</p>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Border Beam */}
            <Card>
                <CardHeader>
                <CardTitle>Border Beam</CardTitle>
                <CardDescription>Animated border effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8">
                    <div className="relative w-full max-w-md p-8 rounded-lg bg-background border">
                    <BorderBeam className="z-0" />
                    <div className="relative z-10">
                        <p className="text-center">Content with animated border</p>
                    </div>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Dot Pattern */}
            <Card>
                <CardHeader>
                <CardTitle>Dot Pattern</CardTitle>
                <CardDescription>Decorative dot pattern background</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                    <DotPattern className="absolute inset-0 w-full h-full [--dot-bg:theme(colors.background)] [--dot-color:theme(colors.muted-foreground)]" />
                    <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Dot pattern background</p>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Meteors */}
            <Card>
                <CardHeader>
                <CardTitle>Meteors</CardTitle>
                <CardDescription>Falling meteor animation effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                    <Meteors number={20} />
                    <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Meteor shower effect</p>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Retro Grid */}
            <Card>
                <CardHeader>
                <CardTitle>Retro Grid</CardTitle>
                <CardDescription>Retro-style grid background</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="relative flex justify-center p-8 h-64 overflow-hidden rounded-lg bg-background">
                    <RetroGrid className="absolute inset-0 w-full h-full" />
                    <div className="relative z-10 flex items-center justify-center">
                    <p className="text-center font-medium">Retro grid background</p>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Shine Border */}
            <Card>
                <CardHeader>
                <CardTitle>Shine Border</CardTitle>
                <CardDescription>Shining border effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <ShineBorder
                    className="p-4 rounded-lg border bg-background"
                    color={["#06b6d4", "#3b82f6", "#8b5cf6"]}
                    >
                    <p className="text-center">Content with shine border</p>
                    </ShineBorder>
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}
