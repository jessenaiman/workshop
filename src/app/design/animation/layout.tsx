import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AnimationLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  const tabs = [
    { href: "/design/animation/animate-css", label: "Animate.css", value: "animate-css" },
    { href: "/design/animation/tailwind", label: "Tailwind CSS", value: "tailwind" },
    { href: "/design/animation/magicui", label: "MagicUI", value: "magicui" },
    { href: "/design/animation/three", label: "Three.js", value: "three" }
  ];

  const activeTab = tabs.find(tab => pathname.includes(tab.value))?.value || "animate-css";

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 font-headline">
          Animation Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of animations from Animate.css, Tailwind CSS, MagicUI, and interactive 3D demos with Three.js.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Tabs value={activeTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4">
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
