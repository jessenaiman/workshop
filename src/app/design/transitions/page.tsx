
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/app/components/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

const tailwindTransitionCode = `
<div class="transition-all duration-500 ease-in-out hover:bg-primary hover:text-primary-foreground p-4 rounded-lg">
  Hover me
</div>
`;

const framerMotionCode = `
import { motion } from 'framer-motion';

const listVariants = {
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

<motion.ul variants={listVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
`;

const imageSwapCode = `
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const images = ["/path/to/image1.jpg", "/path/to/image2.jpg"];
const [index, setIndex] = useState(0);

<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={images[index]} alt="Swapping Image" width={400} height={300} />
  </motion.div>
</AnimatePresence>
<Button onClick={() => setIndex((p) => (p + 1) % images.length)}>
  Next Image
</Button>
`;

const pageTransitionCode = `
// In your layout or page component
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pathname = usePathname();

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
`;


export default function TransitionsPage() {
  const [show, setShow] = useState(true);
  const framerItems = ['Item 1', 'Item 2', 'Item 3'];
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['https://placehold.co/400x300.png', 'https://placehold.co/400x300.png'];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 font-headline">
          Page & Element Transitions
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore different techniques for animating components in and out of view.
        </p>
      </div>

      <Tabs defaultValue="tailwind" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
            <TabsTrigger value="framer">Framer Motion</TabsTrigger>
        </TabsList>

        <TabsContent value="tailwind">
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                    <CardTitle>Utility-First Transitions</CardTitle>
                    <CardDescription>
                        Use Tailwind's transition and transform classes for simple, declarative animations on hover, focus, and other states.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className="mb-6 p-8 flex items-center justify-center bg-muted rounded-lg">
                        <div className="transition-all duration-500 ease-in-out hover:bg-primary hover:text-primary-foreground p-4 rounded-lg cursor-pointer text-center">
                            Hover over me
                        </div>
                    </div>
                    <CodeBlock code={tailwindTransitionCode} />
                    </CardContent>
                </Card>
            </div>
        </TabsContent>

        <TabsContent value="framer">
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                    <CardTitle>Staggered List Animation</CardTitle>
                    <CardDescription>
                        Animate list items sequentially for a pleasing effect.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className="mb-6 p-8 bg-muted rounded-lg min-h-[200px]">
                        <Button onClick={() => setShow(!show)} className="mb-4">
                        Toggle List
                        </Button>
                        <AnimatePresence>
                        {show && (
                            <motion.ul
                            variants={{
                                visible: {
                                opacity: 1,
                                transition: { when: "beforeChildren", staggerChildren: 0.1 },
                                },
                                hidden: { opacity: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="space-y-2"
                            >
                            {framerItems.map((item) => (
                                <motion.li
                                key={item}
                                variants={{
                                    visible: { opacity: 1, y: 0 },
                                    hidden: { opacity: 0, y: 20 },
                                }}
                                className="p-2 bg-background rounded"
                                >
                                {item}
                                </motion.li>
                            ))}
                            </motion.ul>
                        )}
                        </AnimatePresence>
                    </div>
                    <CodeBlock code={framerMotionCode} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Image Cross-Fade</CardTitle>
                        <CardDescription>
                            Smoothly transition between different images.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-6 p-8 bg-muted rounded-lg flex flex-col items-center justify-center gap-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={imageIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-[400px] h-[300px] relative"
                                >
                                    <Image src={images[imageIndex]} alt="Swapping Image" layout="fill" objectFit="cover" className="rounded-md" data-ai-hint="abstract landscape" />
                                </motion.div>
                            </AnimatePresence>
                            <Button onClick={() => setImageIndex((p) => (p + 1) % images.length)}>
                                Next Image
                            </Button>
                        </div>
                        <CodeBlock code={imageSwapCode} />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Page Transitions</CardTitle>
                        <CardDescription>
                            Animate pages as they enter and exit. This is implemented at the layout level.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CodeBlock code={pageTransitionCode} />
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
