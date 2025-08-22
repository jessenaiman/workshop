import { Box } from 'lucide-react';
import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center md:hidden">
          <SidebarTrigger />
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Box className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">MagicBox</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
