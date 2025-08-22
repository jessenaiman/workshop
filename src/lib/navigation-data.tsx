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
      title: "Design",
      path: "/design",
      icon: <Layout className="w-4 h-4" />,
      items: [
        { title: "Animations", path: "/design/animation", icon: <PlayCircle /> },
        { title: "Backgrounds", path: "/design/backgrounds", icon: <Layers /> },
        { title: "Effects", path: "/design/effects", icon: <Sparkles /> },
        { title: "Three.js", path: "/design/three", icon: <Box /> },
        { title: "Devices", path: "/design/devices", icon: <Smartphone /> },
        { title: "Interactive", path: "/design/interactive", icon: <MousePointer /> },
        { title: "Text", path: "/design/text", icon: <Type /> },
        { title: "Utilities", path: "/design/utilities", icon: <Code /> },
      ]
    },
    {
        title: "AI Demos",
        items: [
          { title: "AI Overview", path: "/ai/overview", icon: <Atom /> },
          { title: "Component Customizer", path: "/ai/customizer", icon: <Sparkles /> },
          { title: "Blockchain AI", path: "/ai/blockchain-ai", icon: <GitBranch /> },
          { title: "Flowise Chat", path: "/ai/flowise-chat", icon: <MessageSquare /> },
          { title: "Pollinate AI", path: "/ai/pollinate-ai", icon: <Bot /> },
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
