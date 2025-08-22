import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  PlayCircle,
  Layers,
  Sparkles,
  Box,
  Smartphone,
  MousePointer,
  Type,
  Code,
} from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";

const features = [
  {
    Icon: PlayCircle,
    name: "Animations",
    description: "Explore a library of animations from Animate.css, Tailwind, and MagicUI.",
    href: "/design/animation",
    cta: "View Animations",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Layers,
    name: "Backgrounds",
    description: "Stunning backgrounds and visual effects to enhance your UI.",
    href: "/design/backgrounds",
    cta: "View Backgrounds",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Sparkles,
    name: "Effects",
    description: "Captivating visual effects to make your components pop.",
    href: "/design/effects",
    cta: "View Effects",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: Box,
    name: "Three.js",
    description: "Interactive 3D graphics and animations with Three.js.",
    href: "/design/three",
    cta: "View Demos",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Smartphone,
    name: "Device Mocks",
    description: "Realistic device mockups for showcasing your applications.",
    href: "/design/devices",
    cta: "View Mocks",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: MousePointer,
    name: "Interactive",
    description: "Engaging UI components that respond to user interactions.",
    href: "/design/interactive",
    cta: "View Elements",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: Type,
    name: "Text",
    description: "Beautiful typography and text animations to make your content stand out.",
    href: "/design/text",
    cta: "View Text Effects",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Code,
    name: "Utilities",
    description: "Helpful components for common UI patterns and interactions.",
    href: "/design/utilities",
    cta: "View Utilities",
    background: <div className="absolute -right-20 -top-20 opacity-20 transition-all duration-300 group-hover:scale-110" />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-4",
  },
];

export default function DesignPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tight">Design Library</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A curated collection of UI components, effects, and animations.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature, idx) => (
          <BlurFade key={feature.name} delay={0.1 * idx}>
            <Link href={feature.href}>
                <BentoCard {...feature} />
            </Link>
          </BlurFade>
        ))}
      </BentoGrid>
    </div>
  );
}
