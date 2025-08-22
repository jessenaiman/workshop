
import { TextAnimate } from "@/components/magicui/text-animate";
import { MagicUICardGrid } from "@/app/components/magic-ui-card-grid";

export default function MagicUIPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-8">
        <div className="text-center">
          <TextAnimate
            as="h1"
            animation={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
            }}
            className="text-4xl font-bold tracking-tight"
          >
            MagicUI Components
          </TextAnimate>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of beautiful, animated UI components built with Framer
            Motion and Tailwind CSS
          </p>
        </div>

        <MagicUICardGrid />
      </div>
    </div>
  );
}
