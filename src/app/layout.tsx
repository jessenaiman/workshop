import type { Metadata } from 'next';
import '../app/globals.css';
import { Header } from '@/app/components/header';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/app/components/app-sidebar';
import { Footer } from '@/app/components/footer';
import { ThemeProviderWrapper } from "@/lib/theme-provider"
import { BackgroundProvider, BackgroundRenderer } from '@/context/BackgroundContext';

export const metadata: Metadata = {
  title: 'MagicBox',
  description: 'A modern educational website for web developers and designers, serving as a comprehensive MagicUI component library.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 light">
        <ThemeProviderWrapper>
          <BackgroundProvider>
            <SidebarProvider>
              <Sidebar className="border-r border-sidebar-border transition-colors duration-300 bg-sidebar-background">
                <AppSidebar />
              </Sidebar>
              <SidebarInset className="bg-background transition-colors duration-300">
                <div className="relative flex flex-col min-h-screen">
                  <BackgroundRenderer />
                  <Header />
                  <main className="flex-1 bg-transparent text-foreground transition-colors duration-300 z-10">
                    {children}
                  </main>
                  <Footer />
                </div>
                <Toaster />
              </SidebarInset>
            </SidebarProvider>
          </BackgroundProvider>
        </ThemeProviderWrapper>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/lil-gui@0.19" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
