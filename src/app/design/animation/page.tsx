"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AnimationPage() {
  const pathname = usePathname();
  
  const tabs = [
    { href: "/design/animation/animate-css", label: "Animate.css", color: "bg-blue-500" },
    { href: "/design/animation/tailwind", label: "Tailwind CSS", color: "bg-teal-500" },
    { href: "/design/animation/magicui", label: "MagicUI", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Animation Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of animations from Animate.css, Tailwind CSS, and MagicUI. 
            Click on any animation to preview it, or use the settings to customize the behavior.
          </p>
        </div>

        <div className="flex space-x-1 rounded-xl bg-muted p-1 mb-8">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-muted-foreground",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  isActive
                    ? "bg-white text-foreground shadow"
                    : "text-muted-foreground hover:bg-white/[0.12] hover:text-foreground"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}