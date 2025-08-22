
import { TextSample } from "../components/text-sample";

export default function AnimateUIPage() {
  const animateUiTexts = [
    "Counting Number", "Gradient Text", "Highlight Text", "Rolling Text", "Rotating Text", "Shimmering Text", "Sliding Number", "Splitting Text", "Typing Text", "Writing Text"
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animateUiTexts.map((name) => (
            <TextSample key={name} name={name}>
                <p className="text-xl text-muted-foreground">{name} Placeholder</p>
            </TextSample>
        ))}
    </div>
  );
}
