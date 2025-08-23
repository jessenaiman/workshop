"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    });
  };

  return (
    <div className={cn("relative rounded-lg font-mono text-sm", className)}>
      <pre className="p-4 overflow-x-auto bg-muted/50 rounded-lg">
        <code>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-muted"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}
