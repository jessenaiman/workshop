
import { DesignComponentCard } from "@/components/design/design-component-card";

export default function TailwindPage() {
    const textEffects = [
        {
          name: "Font Style: Italic",
          component: <p className="italic text-xl">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="italic">...</p>`
        },
        {
          name: "Font Weight: Bold",
          component: <p className="font-bold text-xl">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="font-bold">...</p>`
        },
        {
          name: "Text Decoration: Underline",
          component: <p className="underline text-xl">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="underline">...</p>`
        },
        {
          name: "Text Decoration: Line Through",
          component: <p className="line-through text-xl">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="line-through">...</p>`
        },
        {
          name: "Text Transform: Uppercase",
          component: <p className="uppercase text-xl">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="uppercase">...</p>`
        },
        {
          name: "Text Overflow: Truncate",
          component: <p className="truncate text-xl w-64">The quick brown fox jumps over the lazy dog.</p>,
          code: `<p className="truncate w-64">...</p>`
        },
        {
            name: "Text Align: Center",
            component: <p className="text-center text-xl">Centered text.</p>,
            code: `<p className="text-center">...</p>`
        },
        {
            name: "Hover Effect: Color Change",
            component: <p className="text-xl transition-colors duration-300 hover:text-primary">Hover over me.</p>,
            code: `<p className="transition-colors hover:text-primary">...</p>`
        }
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {textEffects.map((effect) => (
            <DesignComponentCard
                key={effect.name}
                title={effect.name}
                description="Tailwind CSS text utility"
                code={effect.code}
            >
                <div className="min-h-[8rem] flex items-center justify-center p-6">
                    {effect.component}
                </div>
            </DesignComponentCard>
        ))}
    </div>
  );
}
