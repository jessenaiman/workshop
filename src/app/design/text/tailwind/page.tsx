
import { TextSample } from "../components/text-sample";

export default function TailwindPage() {
    const textEffects = [
        {
          name: "Font Style: Italic",
          component: <p className="italic text-xl">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
          name: "Font Weight: Bold",
          component: <p className="font-bold text-xl">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
          name: "Text Decoration: Underline",
          component: <p className="underline text-xl">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
          name: "Text Decoration: Line Through",
          component: <p className="line-through text-xl">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
          name: "Text Transform: Uppercase",
          component: <p className="uppercase text-xl">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
          name: "Text Overflow: Truncate",
          component: <p className="truncate text-xl w-64">The quick brown fox jumps over the lazy dog.</p>,
        },
        {
            name: "Text Align: Center",
            component: <p className="text-center text-xl">Centered text.</p>,
        },
        {
            name: "Hover Effect: Color Change",
            component: <p className="text-xl transition-colors duration-300 hover:text-primary">Hover over me.</p>
        }
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {textEffects.map((effect) => (
            <TextSample key={effect.name} name={effect.name}>
                {effect.component}
            </TextSample>
        ))}
    </div>
  );
}
