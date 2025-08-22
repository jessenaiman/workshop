
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { WordRotate } from '@/components/magicui/word-rotate';
import { Type, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TextPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
                <Link href="/design/magicui" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Components
                </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <Type className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                <h1 className="text-3xl font-bold">Text Effects</h1>
                <p className="text-muted-foreground">Beautiful typography and text animations</p>
                </div>
            </div>
            </div>

            <div className="grid gap-8">
            {/* Animated Gradient Text */}
            <Card>
                <CardHeader>
                <CardTitle>Animated Gradient Text</CardTitle>
                <CardDescription>Text with a smooth gradient animation effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <AnimatedGradientText className="text-3xl font-bold">
                    Hover over me to see the effect
                    </AnimatedGradientText>
                </div>
                </CardContent>
            </Card>

            {/* Animated Shiny Text */}
            <Card>
                <CardHeader>
                <CardTitle>Animated Shiny Text</CardTitle>
                <CardDescription>Text with a shiny animation effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <AnimatedShinyText className="text-3xl font-bold">
                    Shiny Effect Text
                    </AnimatedShinyText>
                </div>
                </CardContent>
            </Card>

            {/* Text Animate */}
            <Card>
                <CardHeader>
                <CardTitle>Text Animate</CardTitle>
                <CardDescription>Animated text with various effects</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <TextAnimate className="text-3xl font-bold"
                     animation={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                    >
                    Animate Me
                    </TextAnimate>
                </div>
                </CardContent>
            </Card>
            
            {/* Typing Animation */}
            <Card>
                <CardHeader>
                <CardTitle>Typing Animation</CardTitle>
                <CardDescription>Simulated typing effect</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <div className="text-2xl font-bold">
                    <TypingAnimation text="Hello, welcome to MagicUI!" />
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Word Rotate */}
            <Card>
                <CardHeader>
                <CardTitle>Word Rotate</CardTitle>
                <CardDescription>Rotating words animation</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                <div className="flex justify-center p-8">
                    <WordRotate 
                    className="text-3xl font-bold" 
                    words={['amazing', 'beautiful', 'interactive', 'magical']} 
                    />
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

    