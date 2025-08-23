
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/app/components/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

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

export default function TransitionsPage() {
  const [show, setShow] = useState(true);
  const framerItems = ['Item 1', 'Item 2', 'Item 3'];

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

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 font-headline">Tailwind CSS Transitions</h2>
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
                    <div className="transition-all duration-500 w-0 h-1 bg-primary-foreground group-hover:w-full"></div>
                </div>
              </div>
              <CodeBlock code={tailwindTransitionCode} />
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 font-headline">Framer Motion</h2>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Animations with Framer Motion</CardTitle>
              <CardDescription>
                Leverage the power of Framer Motion for complex, sequenced, and physics-based animations.
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
        </section>
      </div>
    </div>
  );
}
