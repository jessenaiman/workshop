"use client";

import * as React from "react"
import Link from "next/link"
import { Sparkles, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
            MagicBox
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-10">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="/design"
            className="transition-colors hover:text-foreground/80"
          >
            Design
          </Link>
          <Link
            href="/ai"
            className="transition-colors hover:text-foreground/80"
          >
            AI
          </Link>
          <Link
            href="/components"
            className="transition-colors hover:text-foreground/80"
          >
            Components
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <AnimatedThemeToggler />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
                MagicBox
              </span>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/design"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Design
              </Link>
              <Link
                href="/ai"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                AI
              </Link>
              <Link
                href="/components"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Components
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
