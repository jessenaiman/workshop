
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";

export default function RadixUIStyleguidePage() {
    const [sliderValue, setSliderValue] = useState(30);

    return (
        <div className="container mx-auto px-4 py-12">
            <section className="relative text-center mb-20 p-8 rounded-2xl overflow-hidden">
                <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-background">
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={20}
                        radius={60}
                    >
                         <Image src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-y563b8rq.png" width={30} height={30} alt="Next.js Icon" className="invert dark:invert-0" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={10}
                        radius={60}
                    >
                        <Image src="https://raw.githubusercontent.com/framer/motion/main/www/public/images/favicon.png" width={30} height={30} alt="Framer Motion Icon" />
                    </OrbitingCircles>
                    <Image src="https://raw.githubusercontent.com/radix-ui/icons/master/packages/radix-icons/svg/gear.svg" width={60} height={60} alt="Radix UI Icon" className="invert dark:invert-0" />
                </div>
                <TextAnimate as="h1" animation={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }} className="text-5xl md:text-6xl font-bold my-6">
                    Radix UI
                </TextAnimate>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Unstyled, accessible components for building high‑quality design systems.
                </p>
            </section>

            <div className="space-y-12">
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Interactive Dropdown Menu</CardTitle>
                        <CardDescription>
                            Showcasing Radix DropdownMenu with Framer Motion animations.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center p-12">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Open Menu</Button>
                            </DropdownMenuTrigger>
                            <AnimatePresence>
                                <DropdownMenuContent asChild>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </motion.div>
                                </DropdownMenuContent>
                            </AnimatePresence>
                        </DropdownMenu>
                    </CardContent>
                </Card>
                
                <Card className="relative overflow-hidden">
                    <BorderBeam />
                    <CardHeader>
                        <CardTitle>Animated Slider</CardTitle>
                        <CardDescription>
                            A Radix Slider component with real-time value display and motion.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-12 space-y-6">
                         <motion.div 
                            className="text-4xl font-bold font-mono text-primary"
                            key={sliderValue}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                         >
                            {sliderValue}
                         </motion.div>
                        <Slider
                            defaultValue={[30]}
                            max={100}
                            step={1}
                            onValueChange={(value) => setSliderValue(value[0])}
                            className="w-[60%]"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
