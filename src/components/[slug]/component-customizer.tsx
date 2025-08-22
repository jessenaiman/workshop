'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { handleCustomizeComponent } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { CodeBlock } from '@/app/components/code-block';
import { Wand2, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ComponentCustomizerProps = {
  componentName: string;
};

const initialState = {
  codeSnippet: '',
  explanation: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Generate Customization
    </Button>
  );
}

export default function ComponentCustomizer({ componentName }: ComponentCustomizerProps) {
  const [state, formAction] = useFormState(handleCustomizeComponent, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-headline text-lg font-medium">AI Component Customizer</h3>
        <p className="text-sm text-muted-foreground">
          Describe how you want to change the component, and our AI will generate a new version for you.
        </p>
      </div>

      <form action={formAction} className="space-y-4">
        <input type="hidden" name="componentName" value={componentName} />
        <Textarea
          name="criteria"
          placeholder={`e.g., "Make the button background blue and add a pulsing animation on hover"`}
          className="min-h-[100px]"
          required
        />
        <SubmitButton />
      </form>

      {state.codeSnippet && (
        <div className="space-y-4 pt-4 border-t">
          <h3 className="font-headline text-lg font-medium">AI Generated Result</h3>
           <Card>
            <CardHeader>
                <CardTitle>Explanation</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{state.explanation}</p>
            </CardContent>
           </Card>
           <CodeBlock code={state.codeSnippet} />
        </div>
      )}
    </div>
  );
}
