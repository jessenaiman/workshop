
import { Button } from '@/components/ui/button';
import { Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Terminal } from '@/components/magicui/terminal';
import { FileTree, Tree, Folder, File } from '@/components/magicui/file-tree';
import { DesignComponentCard } from '@/components/design/design-component-card';

export default function UtilitiesPage() {
    const utilities = [
      {
        name: "Terminal",
        description: "Animated terminal component for displaying commands.",
        component: (
            <Terminal>
                <p>$ npm install magicui</p>
                <p>Installing MagicUI...</p>
                <p>$ npm run dev</p>
                <p>Starting development server...</p>
            </Terminal>
        ),
        code: `<Terminal>
  <p>$ npm install magicui</p>
  <p>Installing MagicUI...</p>
  <p>$ npm run dev</p>
  <p>Starting development server...</p>
</Terminal>`
      },
      {
        name: "File Tree",
        description: "A component to display file system structures.",
        component: (
          <FileTree className="w-full">
            <Tree initialSelectedId="file-1.2.1" initialExpandedItems={["folder-1", "folder-1.2"]}>
              <Folder value="folder-1" element="src">
                <Folder value="folder-1.1" element="app">
                  <File value="file-1.1.1">page.tsx</File>
                </Folder>
                <Folder value="folder-1.2" element="components">
                   <File value="file-1.2.1">button.tsx</File>
                </Folder>
              </Folder>
               <File value="file-2">package.json</File>
            </Tree>
          </FileTree>
        ),
        code: `<FileTree>
  <Tree initialSelectedId="file-1.2.1" initialExpandedItems={["folder-1", "folder-1.2"]}>
    <Folder value="folder-1" element="src">
      <Folder value="folder-1.1" element="app">
        <File value="file-1.1.1">page.tsx</File>
      </Folder>
      <Folder value="folder-1.2" element="components">
          <File value="file-1.2.1">button.tsx</File>
      </Folder>
    </Folder>
      <File value="file-2">package.json</File>
  </Tree>
</FileTree>`
      }
    ];

    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-6">
                    <Link href="/design" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Components
                    </Link>
                </Button>
            
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <Code className="w-5 h-5 text-red-600 dark:text-red-300" />
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold">Utility Components</h1>
                    <p className="text-muted-foreground">Helpful components for common UI patterns and interactions</p>
                    </div>
                </div>
            </div>
    
            <div className="grid md:grid-cols-2 gap-8">
                {utilities.map(item => (
                    <DesignComponentCard
                        key={item.name}
                        title={item.name}
                        description={item.description}
                        code={item.code}
                    >
                          <div className="p-4 rounded-lg bg-background min-h-[16rem] flex items-center justify-center">
                            {item.component}
                          </div>
                    </DesignComponentCard>
                ))}
            </div>
      </div>
    )
}
