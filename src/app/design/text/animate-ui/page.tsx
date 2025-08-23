
import { DesignComponentCard } from "@/components/design/design-component-card";

export default function AnimateUIPage() {
  const animateUiTexts = [
    { name: "Counting Number", code: `<CountingNumber />`},
    { name: "Gradient Text", code: `<GradientText />` },
    { name: "Highlight Text", code: `<HighlightText />`},
    { name: "Rolling Text", code: `<RollingText />`},
    { name: "Rotating Text", code: `<RotatingText />`},
    { name: "Shimmering Text", code: `<ShimmeringText />` },
    { name: "Sliding Number", code: `<SlidingNumber />`},
    { name: "Splitting Text", code: `<SplittingText />`},
    { name: "Typing Text", code: `<TypingText />`},
    { name: "Writing Text", code: `<WritingText />`}
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animateUiTexts.map((text) => (
            <DesignComponentCard
              key={text.name}
              title={text.name}
              description="Animate UI text effect"
              code={text.code}
            >
                <div className="min-h-[8rem] flex items-center justify-center">
                    <p className="text-xl text-muted-foreground">{text.name} Placeholder</p>
                </div>
            </DesignComponentCard>
        ))}
    </div>
  );
}
