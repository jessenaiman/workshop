import {
    Component,
    Palette,
    Smartphone,
    MousePointer,
    Type,
    Code,
    Layout,
    Box,
    Bot,
    Sparkles,
    Atom,
    Info,
    Wind,
    GitBranch,
    PlayCircle,
    Server,
    MessageSquare,
    FileCode,
    Layers
  } from "lucide-react";
  
  export const navigationItems = [
    {
      title: "Overview",
      items: [
        {
          title: "Home",
          path: "/",
          icon: <Box />,
        },
        {
          title: "About",
          path: "/about",
          icon: <Info />,
        }
      ],
    },
    {
      title: "Design Showcase",
      items: [
        {
          title: "MagicUI",
          path: "/design/magicui",
          icon: <Palette />,
          items: [
            { title: "Backgrounds", path: "/design/magicui/backgrounds" },
            { title: "Devices", path: "/design/magicui/devices" },
            { title: "Interactive", path: "/design/magicui/interactive" },
            { title: "Text", path: "/design/magicui/text" },
            { title: "Utilities", path: "/design/magicui/utilities" },
          ]
        },
        {
            title: "Three.js",
            path: "/design/three",
            icon: <Component />,
        },
        {
            title: "Animations",
            path: "/design/animation",
            icon: <PlayCircle />,
            items: [
              { title: "Animate.css", path: "/design/animation/animatecss" },
              { title: "Tailwind CSS", path: "/design/animation/tailwind" },
              { title: "MagicUI", path: "/design/animation/magicui" }
            ]
        },
        {
            title: "Effects",
            path: "/design/effects",
            icon: <Sparkles />,
        },
      ],
    },
    {
        title: "AI Demos",
        items: [
          {
            title: "AI Demos",
            path: "/ai/overview",
            icon: <Atom />,
            items: [
              { title: "Component Customizer", path: "/ai/customizer" },
              { title: "Blockchain AI", path: "/ai/blockchain-ai" },
              { title: "Flowise Chat", path: "/ai/flowise-chat" },
              { title: "Pollinate AI", path: "/ai/pollinate-ai" },
            ]
          }
        ]
    },
    {
      title: "Style Guides",
      items: [
        {
            title: "Next.js",
            path: "/styleguides/nextjs",
            icon: <FileCode />,
        },
        {
            title: "Tailwind CSS",
            path: "/styleguides/tailwind",
            icon: <Wind />,
        },
        {
            title: "Radix UI",
            path: "/styleguides/radixui",
            icon: <Layers />,
        }
      ]
    },
    {
      title: "Dashboards",
      items: [
          {
              title: "Test Dashboard",
              path: "/dashboard",
              icon: <Server />,
          }
      ]
  }
  ];
  
