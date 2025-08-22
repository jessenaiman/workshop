"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from 'framer-motion'; // Update import for framer-motion to fix TypeScript error
import { ChevronRight } from "lucide-react"

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
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { CoolMode } from "@/components/magicui/cool-mode"
import { BlurFade } from "@/components/magicui/blur-fade"

export function AppSidebar() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})

  const isSubItemActive = (items: Array<{ path: string; items?: Array<any> }>): boolean => {
    return items.some((item) => item.path === pathname || (item.items && isSubItemActive(item.items)))
  }

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors duration-200" />
          <AnimatedGradientText 
            className="text-2xl font-semibold group-data-[collapsible=icon]:hidden"
            speed={1.2}
            colorFrom="#1fb6ff"
            colorTo="#7c3aed"
          >
            Showcase
          </AnimatedGradientText>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((section, sectionIdx) => (
            <BlurFade key={section.title} delay={sectionIdx * 0.02} duration={0.25} inView>
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                  {section.title}
                </SidebarGroupLabel>
                {section.items.map((item: any) =>
                  'items' in item ? (
                    <Collapsible 
                      key={item.path}
                      defaultOpen={isSubItemActive(item.items)}
                      onOpenChange={(open: boolean) => setOpenItems(prev => ({ ...prev, [item.path]: open }))}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className="group w-full justify-between hover:bg-sidebar-accent/60 dark:hover:bg-sidebar-accent/40 transition-all duration-300"
                          variant="ghost"
                        >
                          <div className="grid grid-cols-[20px,1fr] items-center gap-3 text-left w-full">
                            <CoolMode options={{ particleCount: 6, speedHorz: 2, speedUp: 4 }}>
                              <div className="[grid-column:1] h-5 w-5 flex items-center justify-center">
                                <span className="text-indigo-500 dark:text-indigo-400 transition-all duration-200 group-hover:text-purple-500 group-hover:scale-110 focus-visible:text-purple-500 focus-visible:scale-110">
                                  {item.icon}
                                </span>
                              </div>
                            </CoolMode>
                            <span
                              className="[grid-column:2] text-sm font-medium transition-colors duration-200 group-hover:text-purple-500 dark:group-hover:text-purple-400 focus-visible:text-purple-500 dark:focus-visible:text-purple-400"
                            >
                              {item.title}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: openItems[item.path] ? 90 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronRight className="h-4 w-4 shrink-0 text-sidebar-foreground/70 dark:text-sidebar-foreground/60" />
                          </motion.div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden">
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            <SidebarMenuSub>
                              {item.items.map((subItem: any, index: number) => (
                                <motion.li 
                                  key={subItem.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.04 }}
                                >
                                  <Link href={subItem.path} passHref>
                                    <SidebarMenuSubButton 
                                      isActive={pathname === subItem.path} 
                                      className="group relative overflow-hidden hover:bg-sidebar-accent/40 dark:hover:bg-sidebar-accent/25 transition-all duration-200"
                                    >
                                      <div className="grid grid-cols-[20px,1fr] items-center gap-3 text-left w-full">
                                        {/* Sub-item icon if present */}
                                        {subItem.icon ? (
                                          <CoolMode options={{ particleCount: 4, speedHorz: 1.5, speedUp: 3 }}>
                                            <div className="[grid-column:1] h-5 w-5 flex items-center justify-center">
                                              <span className="text-muted-foreground transition-all duration-200 group-hover:text-indigo-500 group-hover:scale-105 focus-visible:text-indigo-500 focus-visible:scale-105">
                                                {subItem.icon}
                                              </span>
                                            </div>
                                          </CoolMode>
                                        ) : (
                                          <span className="[grid-column:1]" />
                                        )}
                                        <span
                                          className="[grid-column:2] text-[13px] font-normal transition-colors duration-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 focus-visible:text-indigo-500 dark:focus-visible:text-indigo-400"
                                        >
                                          {subItem.title}
                                        </span>
                                      </div>
                                    </SidebarMenuSubButton>
                                  </Link>
                                </motion.li>
                              ))}
                            </SidebarMenuSub>
                          </motion.div>
                        </AnimatePresence>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.path}>
                      <Link href={item.path} className="w-full">
                        <SidebarMenuButton
                          isActive={pathname === item.path}
                          className="group w-full justify-start hover:bg-sidebar-accent/60 dark:hover:bg-sidebar-accent/40 transition-all duration-300"
                        >
                          <div className="grid grid-cols-[20px,1fr] items-center gap-3 text-left w-full">
                            <CoolMode options={{ particleCount: 6, speedHorz: 2, speedUp: 4 }}>
                              <div className="[grid-column:1] h-5 w-5 flex items-center justify-center">
                                <span className="text-blue-500 dark:text-blue-400 transition-all duration-200 group-hover:text-purple-500 group-hover:scale-110 focus-visible:text-purple-500 focus-visible:scale-110">
                                  {item.icon}
                                </span>
                              </div>
                            </CoolMode>
                            <span
                              className="[grid-column:2] text-sm font-medium transition-colors duration-200 group-hover:text-purple-500 dark:group-hover:text-purple-400 focus-visible:text-purple-500 dark:focus-visible:text-purple-400"
                            >
                              {item.title}
                            </span>
                          </div>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarGroup>
            </BlurFade>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  )
}
