
import { Box } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Box className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by MagicBox. The source code is available on GitHub.
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
            © {new Date().getFullYear()} MagicBox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
