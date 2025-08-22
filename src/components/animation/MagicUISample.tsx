
import { AnimationSampleBase } from "@/components/animation/AnimationSampleBase";

type MagicUISampleProps = {
  name: string;
  description: string;
  children: React.ReactNode;
  codeSnippet: string;
  onReplay: () => void;
};

export function MagicUISample({
  name,
  description,
  children,
  codeSnippet,
  onReplay,
}: MagicUISampleProps) {

  // MagicUI components often have their own internal triggers (e.g., on-view, on-hover),
  // so the play button can be used for re-triggering if the component supports it.
  const handlePlay = () => {
    onReplay();
  };

  return (
    <AnimationSampleBase
      title={name}
      description={description}
      code={codeSnippet}
      language="tsx"
      onPlay={handlePlay}
      codeTitle={`MagicUI - ${name}`}
      className="h-auto min-h-[14rem] justify-between"
    >
      <div className="flex items-center justify-center p-4 min-h-[8rem] w-full">
         {children}
      </div>
    </AnimationSampleBase>
  );
}
