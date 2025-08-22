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
    Droplets,
    AppWindow,
    Wind,
    GitBranch,
    PlayCircle,
    Server,
    MessageSquare,
    Atom,
    Info
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
                title: "Component Customizer",
                path: "/ai/customizer",
                icon: <Bot />,
            },
            {
              title: "AI Overview",
              path: "/ai/overview",
              icon: <Atom />,
            },
            {
              title: "Blockchain AI",
              path: "/ai/blockchain-ai",
              icon: <GitBranch />,
            },
            {
              title: "Flowise Chat",
              path: "/ai/flowise-chat",
              icon: <MessageSquare />,
            },
            {
              title: "Pollinate AI",
              path: "/ai/pollinate-ai",
              icon: <Sparkles />,
            },
        ]
    },
    {
      title: "Style Guides",
      items: [
        {
            title: "Tailwind CSS",
            path: "/styleguides/tailwind",
            icon: <Wind />,
        },
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
  