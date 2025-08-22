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
      ],
    },
    {
        title: "AI Demos",
        items: [
            {
                title: "Component Customizer",
                path: "/ai/customizer",
                icon: <Bot />,
            }
        ]
    }
  ];
  