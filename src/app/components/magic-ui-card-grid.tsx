import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Command, Globe, Workflow, Terminal, Book, FileText } from "lucide-react";

const features = [
  {
    Icon: FileText,
    name: "Text Effects",
    description: "Beautiful typography and text animations to make your content stand out.",
    href: "/styleguides/magicui/text",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Command,
    name: "Interactive Elements",
    description: "Engaging UI components that respond to user interactions.",
    href: "/styleguides/magicui/interactive",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Globe,
    name: "Backgrounds & Effects",
    description: "Stunning backgrounds and visual effects to enhance your UI.",
    href: "/styleguides/magicui/backgrounds",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: Workflow,
    name: "Device Mocks",
    description: "Realistic device mockups for showcasing your applications.",
    href: "/styleguides/magicui/devices",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Terminal,
    name: "Utility Components",
    description: "Helpful components for common UI patterns and interactions.",
    href: "/styleguides/magicui/utilities",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Book,
    name: "Full Examples",
    description: "Explore full page examples built with Magic UI.",
    href: "/styleguides/magicui/examples",
    cta: "Learn more",
    background: <img alt="placeholder" className="absolute -right-20 -top-20 opacity-60" src="/placeholder.svg" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
];

export function MagicUICardGrid() {
  return (
    <BentoGrid className="lg:grid-rows-2"> 
      {features.map((feature, idx) => (
        <BlurFade key={feature.name} delay={0.25 * idx}>
          <BentoCard {...feature} />
        </BlurFade>
      ))}
    </BentoGrid>
  );
}
