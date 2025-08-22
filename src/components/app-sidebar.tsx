
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useSidebar } from "@/hooks/use-sidebar"
import { navigationItems } from "@/lib/navigation-data"

import {
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
          <h1 className="text-xl font-semibold group-data-[collapsible=icon]:hidden">
            Showcase
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((section) => (
             <SidebarGroup key={section.title}>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                    {section.items.map((item) => (
                        <SidebarMenuItem key={item.path}>
                            <Link href={item.path} legacyBehavior passHref>
                            <SidebarMenuButton
                                isActive={pathname === item.path}
                                tooltip={{
                                children: item.title,
                                }}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarGroupContent>
             </SidebarGroup>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  )
}
