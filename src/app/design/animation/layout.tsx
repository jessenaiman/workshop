"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function AnimationLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  const tabs = [
    { href: "/design/animation/animate-css", label: "Animate.css" },
    { href: "/design/animation/tailwind", label: "Tailwind CSS" },
    { href: "/design/animation/magicui", label: "MagicUI" }
  ];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 font-headline">
          Animation Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of animations from Animate.css, Tailwind CSS, and MagicUI. 
          Click on any animation to preview it, or use the settings to customize the behavior.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 rounded-xl bg-muted p-1">
          {tabs.map((tab) => {
            const isActive = pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-background ring-primary",
                  isActive
                    ? "bg-background text-foreground shadow"
                    : "text-muted-foreground hover:bg-background/60"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
      
      <div>
        {children}
      </div>
    </div>
  );
}
