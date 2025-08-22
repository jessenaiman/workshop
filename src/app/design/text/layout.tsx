'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Type } from "lucide-react";

export default function TextLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  const tabs = [
    { href: "/design/text/magicui", label: "MagicUI", value: "magicui" },
    { href: "/design/text/tailwind", label: "Tailwind CSS", value: "tailwind" },
    { href: "/design/text/animate-ui", label: "Animate UI", value: "animate-ui" },
  ];

  const activeTab = tabs.find(tab => pathname.includes(tab.value))?.value || "magicui";

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <Type className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              Text Effects
            </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore a collection of beautiful typography and text animations to make your content stand out.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Tabs value={activeTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
                {tabs.map((tab) => (
                    <Link href={tab.href} key={tab.href} className="w-full">
                        <TabsTrigger value={tab.value} className="w-full">{tab.label}</TabsTrigger>
                    </Link>
                ))}
            </TabsList>
        </Tabs>
      </div>
      
      <div>
        {children}
      </div>
    </div>
  );
}
