'use server';

import { customizeComponent, CustomizeComponentOutput } from '@/ai/flows/customize-component';
import { z } from 'zod';

interface FormState extends Partial<CustomizeComponentOutput> {
  error?: string;
}

const CustomizeSchema = z.object({
  componentName: z.string().min(1, 'Component name is required.'),
  criteria: z.string().min(5, 'Customization criteria must be at least 5 characters long.'),
});

export async function handleCustomizeComponent(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = CustomizeSchema.safeParse({
    componentName: formData.get('componentName'),
    criteria: formData.get('criteria'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.criteria?.[0] || 'Invalid input.',
    };
  }

  try {
    const result = await customizeComponent({
      componentName: validatedFields.data.componentName,
      criteria: validatedFields.data.criteria,
    });
    return {
      codeSnippet: result.codeSnippet,
      explanation: result.explanation,
    };
  } catch (error) {
    console.error('Error in AI customization flow:', error);
    return {
      error: 'Failed to generate customization. Please try again.',
    };
  }
}
