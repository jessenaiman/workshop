
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navigationItems } from "@/lib/navigation-data"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()

  const isSubItemActive = (items: any[]) => {
    return items.some((item) => item.path === pathname || (item.items && isSubItemActive(item.items)))
  }

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
                {section.items.map((item) =>
                  item.items ? (
                    <Collapsible key={item.path} defaultOpen={isSubItemActive(item.items)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className="w-full justify-between"
                          variant="ghost"
                          tooltip={{
                            children: item.title,
                          }}
                        >
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <li key={subItem.path}>
                              <Link href={subItem.path} passHref>
                                <SidebarMenuSubButton asChild isActive={pathname === subItem.path}>
                                  <a>{subItem.title}</a>
                                </SidebarMenuSubButton>
                              </Link>
                            </li>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.path}>
                      <Link href={item.path}>
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
                  )
                )}
             </SidebarGroup>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  )
}
